import streamlit as st
import pandas as pd
import plotly.express as px
import random
from PIL import Image
import yaml
import os
import openai
from dotenv import load_dotenv
import time
import json
import uuid

# Load environment variables
load_dotenv()

# Set up OpenAI API - fallback to a demo mode if not available
try:
    openai.api_key = os.getenv("OPENAI_API_KEY")
    OPENAI_AVAILABLE = openai.api_key is not None and openai.api_key != ""
except:
    OPENAI_AVAILABLE = False

# Set page configuration
st.set_page_config(
    page_title="Enterprise AI Training",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for better styling
st.markdown("""
<style>
    .main {
        padding: 1.5rem 2rem;
    }
    h1, h2, h3, h4 {
        margin-top: 1rem;
    }
    h1 {
        color: #2c3e50;
    }
    h2 {
        color: #34495e;
        border-bottom: 1px solid #eee;
        padding-bottom: 0.5rem;
    }
    h3 {
        color: #16a085;
    }
    h4 {
        color: #2980b9;
    }
    blockquote {
        background: #f9f9f9;
        border-left: 10px solid #ccc;
        margin: 1.5em 10px;
        padding: 0.5em 10px;
    }
    .case-study {
        background-color: #f0f8ff;
        border-left: 5px solid #4682b4;
        padding: 1.5rem;
        margin: 1.5rem 0;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    }
    .exercise {
        background-color: #f0fff0;
        border-left: 5px solid #228b22;
        padding: 1.5rem;
        margin: 1.5rem 0;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    }
    .activity {
        background-color: #fff0f5;
        border-left: 5px solid #db7093;
        padding: 1.5rem;
        margin: 1.5rem 0;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    }
    .highlight {
        background-color: #fffacd;
        padding: 0.2em 0.4em;
        border-radius: 3px;
    }
    .quiz-container {
        background-color: #fff8e1;
        border-radius: 10px;
        padding: 25px;
        margin: 25px 0;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .correct-answer {
        color: green;
        font-weight: bold;
    }
    .incorrect-answer {
        color: red;
        font-weight: bold;
    }
    .stButton>button {
        width: 100%;
        border-radius: 20px;
        font-weight: 500;
        transition: all 0.3s ease;
    }
    .primary-btn {
        background-color: #3498db;
        color: white;
    }
    .card {
        border-radius: 10px;
        border: 1px solid #e0e0e0;
        padding: 20px;
        margin-bottom: 20px;
        transition: transform 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    }
    .ai-response {
        background-color: #f0f7fb;
        border-left: 5px solid #3498db;
        padding: 15px;
        border-radius: 5px;
        margin: 15px 0;
        position: relative;
    }
    .ai-response:before {
        content: "AI Coach";
        position: absolute;
        top: -10px;
        left: 10px;
        background: #3498db;
        color: white;
        padding: 0 10px;
        border-radius: 10px;
        font-size: 12px;
    }
    .progress-container {
        margin: 20px 0;
    }
    .reflection-box {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 5px;
        padding: 15px;
        margin: 15px 0;
    }
    .interactive-element {
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .interactive-element:hover {
        transform: scale(1.02);
    }
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
    }
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 200px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -100px;
        opacity: 0;
        transition: opacity 0.3s;
    }
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
</style>
""", unsafe_allow_html=True)

# Initialize session state
if 'current_section' not in st.session_state:
    st.session_state.current_section = 0
if 'current_subsection' not in st.session_state:
    st.session_state.current_subsection = 0
if 'quiz_submitted' not in st.session_state:
    st.session_state.quiz_submitted = False
if 'quiz_results' not in st.session_state:
    st.session_state.quiz_results = {}
if 'user_answers' not in st.session_state:
    st.session_state.user_answers = {}
if 'user_progress' not in st.session_state:
    st.session_state.user_progress = 0
if 'reflections' not in st.session_state:
    st.session_state.reflections = {}
if 'activities_completed' not in st.session_state:
    st.session_state.activities_completed = set()
if 'user_name' not in st.session_state:
    st.session_state.user_name = ""
if 'user_role' not in st.session_state:
    st.session_state.user_role = ""
if 'chat_history' not in st.session_state:
    st.session_state.chat_history = []
if 'show_tooltips' not in st.session_state:
    st.session_state.show_tooltips = True
if 'session_id' not in st.session_state:
    st.session_state.session_id = str(uuid.uuid4())

# Helper function for AI responses
def get_ai_response(prompt, system_prompt="You are an AI coach helping with enterprise AI training. Be concise, supportive and insightful."):
    if not OPENAI_AVAILABLE:
        # If OpenAI not available, provide canned responses
        responses = [
            "That's an interesting perspective! Consider how this approach might impact cross-functional teams.",
            "Good thinking. Have you also considered the implications for data governance?",
            "I like how you're approaching this. Consider also the change management aspects.",
            "That's a solid starting point. How might you scale this approach enterprise-wide?",
            "Excellent insight. You might also want to think about how different stakeholders would view this.",
            "You're on the right track. What specific KPIs would you use to measure success?"
        ]
        time.sleep(1.5)  # Simulated delay
        return random.choice(responses)
    
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            max_tokens=250,
            temperature=0.7
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        st.error(f"Error with AI response: {e}")
        return "I'm unable to provide feedback at the moment. Please try again later."

# Interactive activity creator
def create_interactive_activity(title, description, activity_type="reflection", activity_id=None):
    if activity_id is None:
        activity_id = f"activity_{len(st.session_state.activities_completed)}"
    
    completed = activity_id in st.session_state.activities_completed
    
    st.markdown(f"<div class='activity'><h4>{title}</h4>{description}</div>", unsafe_allow_html=True)
    
    if activity_type == "reflection":
        user_input = st.text_area("Your thoughts:", 
                                  key=f"reflection_{activity_id}",
                                  disabled=completed)
        
        col1, col2 = st.columns([1, 1])
        with col1:
            if not completed and st.button("Save & Get Feedback", key=f"btn_{activity_id}"):
                if user_input.strip():
                    ai_feedback = get_ai_response(f"The user has shared this reflection on {title}: '{user_input}'. Provide constructive feedback.")
                    st.session_state.reflections[activity_id] = {
                        "input": user_input,
                        "feedback": ai_feedback
                    }
                    st.session_state.activities_completed.add(activity_id)
                    st.rerun()
        
        if activity_id in st.session_state.reflections:
            st.markdown("<div class='ai-response'>" + st.session_state.reflections[activity_id]["feedback"] + "</div>", unsafe_allow_html=True)
    
    elif activity_type == "multiple_choice":
        options = ["Strategy first, then implementation", 
                  "Start with pilot projects", 
                  "Focus on data infrastructure first", 
                  "Invest in talent development"]
        
        choice = st.radio("Choose your approach:", options, key=f"mc_{activity_id}", disabled=completed)
        
        col1, col2 = st.columns([1, 1])
        with col1:
            if not completed and st.button("Submit Choice", key=f"btn_{activity_id}"):
                ai_feedback = get_ai_response(f"The user has selected '{choice}' for the activity: '{title}'. Provide personalized feedback on this choice, considering the pros and cons.")
                st.session_state.reflections[activity_id] = {
                    "input": choice,
                    "feedback": ai_feedback
                }
                st.session_state.activities_completed.add(activity_id)
                st.rerun()
        
        if activity_id in st.session_state.reflections:
            st.markdown("<div class='ai-response'>" + st.session_state.reflections[activity_id]["feedback"] + "</div>", unsafe_allow_html=True)
    
    elif activity_type == "case_analysis":
        aspects = ["Key challenges", "Strategic approach", "Expected outcomes"]
        user_inputs = {}
        
        # Fixed: Only collect inputs without modifying session state directly
        for aspect in aspects:
            aspect_key = f"{activity_id}_{aspect.replace(' ', '_').lower()}"
            user_input = st.text_area(f"{aspect}:", key=aspect_key, disabled=completed)
            user_inputs[aspect] = user_input
        
        col1, col2 = st.columns([1, 1])
        with col1:
            if not completed and st.button("Analyze Case", key=f"btn_{activity_id}"):
                # Process all inputs at once after collecting them
                all_inputs = "\n".join([f"{aspect}: {user_inputs[aspect]}" for aspect in aspects])
                
                if "".join(user_inputs.values()).strip():
                    ai_feedback = get_ai_response(f"The user has analyzed a case study about '{title}' with these insights: {all_inputs}. Provide comprehensive feedback on their analysis.")
                    st.session_state.reflections[activity_id] = {
                        "input": all_inputs,
                        "feedback": ai_feedback
                    }
                    st.session_state.activities_completed.add(activity_id)
                    st.rerun()
        
        if activity_id in st.session_state.reflections:
            st.markdown("<div class='ai-response'>" + st.session_state.reflections[activity_id]["feedback"] + "</div>", unsafe_allow_html=True)

# Define the quiz questions with more context and explanations
quiz_questions = [
    {
        "question": "What is the primary difference between consumer-focused AI and enterprise AI?",
        "options": [
            "Consumer AI is more advanced than enterprise AI",
            "Enterprise AI has stricter requirements for scalability, security, and governance",
            "Enterprise AI is always custom-built while consumer AI is off-the-shelf",
            "Consumer AI uses more data than enterprise AI"
        ],
        "correct": 1,
        "explanation": "Enterprise AI must meet stringent business requirements like scalability to handle massive operations, security for sensitive data, seamless integration with existing systems, customization for industry-specific needs, and governance frameworks for accountability."
    },
    {
        "question": "Which of the following best describes the 'democratization of innovation' in the context of enterprise AI?",
        "options": [
            "All employees get equal votes on which AI projects to implement",
            "AI technology is becoming cheaper for everyone to purchase",
            "Non-technical leaders can now build and deploy sophisticated AI applications with minimal technical expertise",
            "AI is mainly used in democratic countries"
        ],
        "correct": 2,
        "explanation": "The democratization of innovation refers to how AI tools now allow non-technical business leaders to create and deploy AI solutions without deep technical expertise. This shifts power from technical specialists to domain experts and enables faster innovation cycles."
    },
    {
        "question": "According to the module, how did Maersk's approach to AI transformation yield business results?",
        "options": [
            "By replacing all human workers with AI systems",
            "By developing entirely new data-driven services beyond their traditional shipping business",
            "By outsourcing all AI development to third-party vendors",
            "By focusing exclusively on cost-cutting applications"
        ],
        "correct": 1,
        "explanation": "Maersk not only improved operational efficiency with predictive maintenance and route optimization but also created entirely new data-driven services that now represent a growing revenue stream beyond their traditional shipping business."
    },
    {
        "question": "What mindset shift does the module emphasize regarding AI implementation in organizations?",
        "options": [
            "From employee-first to technology-first thinking",
            "From project to platform thinking",
            "From customer focus to operational focus",
            "From global to local implementation"
        ],
        "correct": 1,
        "explanation": "The mindset shift from project to platform thinking is crucial - treating AI not as isolated projects but as comprehensive capabilities embedded throughout the organization. This approach, exemplified by Microsoft under Satya Nadella, integrates AI capabilities across all operations rather than creating isolated departments."
    },
    {
        "question": "What is the foundation layer of the enterprise AI stack according to the module?",
        "options": [
            "The model layer",
            "The interface layer",
            "The data layer",
            "The control layer"
        ],
        "correct": 2,
        "explanation": "The data layer forms the foundation of any effective AI implementation. Organizations must make strategic decisions about data sources, quality, governance, integration, and security before other layers can be effectively built."
    }
]

# Load module content
def load_module_content():
    try:
        with open('module_1_foundation_of_enterprise_ai.md', 'r') as f:
            content = f.read()
            # Remove duration/time references
            content = content.replace("**Duration:** 2 hours", "")
            # Remove group discussion references
            content = content.replace("Group Discussion", "Self-Reflection")
            content = content.replace("group discussion", "self-reflection")
            content = content.replace("participants will share", "you'll reflect on")
            content = content.replace("collaborative dialogue", "thoughtful reflection")
            content = content.replace("participants", "you")
            content = content.replace("executives will", "you will")
            content = content.replace("Maximum 15 participants per session", "Self-paced individual learning")
            content = content.replace("Group presentation", "Personal synthesis")
            return content
    except Exception as e:
        st.error(f"Error loading module content: {e}")
        return None

# Enhanced subsection parsing for more granular navigation
def parse_markdown_sections(content):
    if not content:
        return []
    
    sections = []
    lines = content.split('\n')
    current_section = {"title": "", "content": [], "subsections": []}
    current_subsection = None
    
    for line in lines:
        if line.startswith('## '):
            if current_section["title"]:
                if current_subsection:
                    current_section["subsections"].append(current_subsection)
                sections.append(current_section)
            current_section = {"title": line[3:], "content": [], "subsections": []}
            current_subsection = None
        
        elif line.startswith('### '):
            if current_subsection:
                current_section["subsections"].append(current_subsection)
            
            current_subsection = {
                "title": line[4:],
                "content": []
            }
        
        elif current_subsection is not None:
            current_subsection["content"].append(line)
        
        elif current_section["title"]:
            current_section["content"].append(line)
    
    # Add the last subsection and section
    if current_subsection:
        current_section["subsections"].append(current_subsection)
    
    if current_section["title"]:
        sections.append(current_section)
    
    return sections

# Enhanced navigation functions for subsections
def next_section():
    if st.session_state.current_section < len(sections) - 1:
        st.session_state.current_section += 1
        st.session_state.current_subsection = 0
        st.session_state.quiz_submitted = False
        st.session_state.user_progress += 5

def prev_section():
    if st.session_state.current_section > 0:
        st.session_state.current_section -= 1
        st.session_state.current_subsection = 0
        st.session_state.quiz_submitted = False

def next_subsection():
    current = sections[st.session_state.current_section]
    if st.session_state.current_subsection < len(current["subsections"]) - 1:
        st.session_state.current_subsection += 1
        st.session_state.user_progress += 2
    else:
        next_section()

def prev_subsection():
    if st.session_state.current_subsection > 0:
        st.session_state.current_subsection -= 1
    else:
        if st.session_state.current_section > 0:
            st.session_state.current_section -= 1
            st.session_state.current_subsection = len(sections[st.session_state.current_section]["subsections"]) - 1

def go_to_section(idx, sub_idx=0):
    st.session_state.current_section = idx
    st.session_state.current_subsection = sub_idx
    st.session_state.quiz_submitted = False

# Enhanced quiz handler with detailed feedback
def submit_quiz():
    st.session_state.quiz_submitted = True
    correct_count = 0
    for i, q in enumerate(quiz_questions):
        answer_key = f"quiz_{i}"
        if answer_key in st.session_state and st.session_state[answer_key] == q["correct"]:
            correct_count += 1
            st.session_state.quiz_results[i] = True
        else:
            st.session_state.quiz_results[i] = False
    
    # Update progress based on quiz performance
    st.session_state.user_progress += correct_count * 4
    st.session_state.score = correct_count
    return correct_count

def reset_quiz():
    st.session_state.quiz_submitted = False
    st.session_state.quiz_results = {}
    st.session_state.user_answers = {}

# Render examples with visual elements
def render_example(title, content, example_type="case_study"):
    if example_type == "case_study":
        st.markdown(f"<div class='case-study'><h4>{title}</h4>{content}</div>", unsafe_allow_html=True)
    else:
        st.markdown(f"<div class='exercise'><h4>{title}</h4>{content}</div>", unsafe_allow_html=True)

# Load and parse content
content = load_module_content()
if content:
    # Extract title from first line
    title = content.split('\n')[0].replace('# ', '')
    sections = parse_markdown_sections(content)
else:
    st.error("Failed to load module content.")
    st.stop()

# User onboarding
def show_welcome_screen():
    st.title("Welcome to Enterprise AI Training")
    
    col1, col2 = st.columns([2, 1])
    
    with col1:
        st.markdown("""
        <div class="card">
            <h2>Interactive Learning Experience</h2>
            <p>This platform offers an engaging way to learn about Enterprise AI with:</p>
            <ul>
                <li>Interactive case studies and exercises</li>
                <li>AI coach feedback on your reflections</li>
                <li>Personalized learning path</li>
                <li>Progress tracking</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)
        
        st.markdown("""
        <div class="card">
            <h2>How to Get Started</h2>
            <p>To make the most of this platform:</p>
            <ol>
                <li>Enter your name and role</li>
                <li>Navigate through sections at your own pace</li>
                <li>Complete interactive activities to get AI feedback</li>
                <li>Take the assessment when you're ready</li>
            </ol>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="card">
            <h2>Your Profile</h2>
        </div>
        """, unsafe_allow_html=True)
        
        st.text_input("Your Name", key="user_name_input")
        st.selectbox("Your Role", 
                    ["", "Executive", "Manager", "Business Analyst", "Technology Leader", "Data Scientist", "Other"],
                    key="user_role_input")
        
        if st.button("Start Learning"):
            if st.session_state.user_name_input and st.session_state.user_role_input:
                st.session_state.user_name = st.session_state.user_name_input
                st.session_state.user_role = st.session_state.user_role_input
                st.session_state.show_welcome = False
                st.rerun()
            else:
                st.warning("Please enter your name and role to continue")

# Progress tracking
def show_progress():
    # Calculate progress based on sections visited, activities completed, and quiz performance
    total_progress = min(100, st.session_state.user_progress)
    
    st.sidebar.markdown("### Your Progress")
    st.sidebar.progress(total_progress / 100)
    st.sidebar.caption(f"{total_progress}% Complete")
    
    # Add badges based on achievements
    if len(st.session_state.activities_completed) >= 3:
        st.sidebar.markdown("🏆 **Active Learner**")
    if total_progress >= 50:
        st.sidebar.markdown("🌟 **Halfway Hero**")
    if 'score' in st.session_state and st.session_state.score >= 4:
        st.sidebar.markdown("🎓 **Quiz Master**")

# AI Coach feature
def show_ai_coach():
    st.sidebar.markdown("---")
    st.sidebar.markdown("### AI Coach")
    
    query = st.sidebar.text_area("Ask anything about Enterprise AI:", key="ai_coach_query")
    
    if st.sidebar.button("Get Guidance"):
        if query:
            with st.spinner("AI Coach is thinking..."):
                response = get_ai_response(
                    f"The user asked: {query}. Provide a helpful, concise response relevant to enterprise AI implementation.",
                    "You are an AI coach specializing in enterprise AI strategy. Keep responses under 150 words."
                )
                
                st.session_state.chat_history.append({"query": query, "response": response})
                st.rerun()
    
    # Show chat history
    if st.session_state.chat_history:
        st.sidebar.markdown("#### Previous Questions")
        for i, exchange in enumerate(st.session_state.chat_history[-3:]):  # Show last 3 exchanges
            with st.sidebar.expander(f"Q: {exchange['query'][:30]}..." if len(exchange['query']) > 30 else f"Q: {exchange['query']}"):
                st.markdown(f"**You:** {exchange['query']}")
                st.markdown(f"**AI Coach:** {exchange['response']}")

# Sidebar navigation with enhanced UI
st.sidebar.title("Module Navigation")

# Show progress tracking in sidebar
show_progress()

# Section navigation
for i, section in enumerate(sections):
    if st.sidebar.button(f"📘 {section['title']}", key=f"nav_{i}"):
        go_to_section(i)
    
    # Show subsections with indentation if this is the current section
    if i == st.session_state.current_section:
        for j, subsection in enumerate(section.get("subsections", [])):
            if st.sidebar.button(f"   ↪ {subsection['title']}", key=f"subnav_{i}_{j}"):
                go_to_section(i, j)

st.sidebar.divider()
if st.sidebar.button("📝 Take Assessment"):
    go_to_section(len(sections))

# Show AI coach in sidebar
show_ai_coach()

# Main content area with welcome screen or content
if 'show_welcome' not in st.session_state:
    st.session_state.show_welcome = True if not st.session_state.user_name else False

if st.session_state.show_welcome:
    show_welcome_screen()
elif st.session_state.current_section < len(sections):
    current = sections[st.session_state.current_section]
    
    # Display title and section header
    st.title(title)
    st.header(current["title"])
    
    # Show progress indicator
    col1, col2, col3 = st.columns([1, 2, 1])
    with col2:
        section_progress = (st.session_state.current_section / len(sections)) * 100
        st.progress(section_progress / 100)
        st.caption(f"Section {st.session_state.current_section + 1} of {len(sections)}")
    
    # If this section has subsections, display current subsection
    if current.get("subsections"):
        current_subsection = current["subsections"][st.session_state.current_subsection]
        
        st.subheader(current_subsection["title"])
        
        content_text = "\n".join(current_subsection["content"])
        
        # Add interactive elements based on subsection type
        if "Case Study" in current_subsection["title"]:
            st.markdown(f"<div class='case-study'>{content_text}</div>", unsafe_allow_html=True)
            
            # Add interactive case analysis if this is a case study
            create_interactive_activity(
                f"Analyze: {current_subsection['title']}",
                "Apply what you've learned to analyze this case study. Consider the business context, challenges, and outcomes.",
                activity_type="case_analysis",
                activity_id=f"case_{st.session_state.current_section}_{st.session_state.current_subsection}"
            )
            
        elif "Exercise" in current_subsection["title"] or "Interactive" in current_subsection["title"]:
            st.markdown(f"<div class='exercise'>{content_text}</div>", unsafe_allow_html=True)
            
            # Add interactive reflection for exercises
            create_interactive_activity(
                f"Reflect: {current_subsection['title']}",
                "Share your thoughts on how this applies to your organization.",
                activity_type="reflection",
                activity_id=f"exercise_{st.session_state.current_section}_{st.session_state.current_subsection}"
            )
            
        else:
            # Regular content - check if it's a good place for choice-based activity
            st.markdown(content_text)
            
            # Add interactive elements to engagement points
            if "inflection point" in current_subsection["title"].lower() or "competitive" in current_subsection["title"].lower():
                create_interactive_activity(
                    f"Decision Point: {current_subsection['title']}",
                    "How would you approach implementing AI in your organization based on this section?",
                    activity_type="multiple_choice",
                    activity_id=f"decision_{st.session_state.current_section}_{st.session_state.current_subsection}"
                )
    else:
        # Display section content without subsections
        for item in current["content"]:
            st.markdown(item)
    
    # Navigation buttons with tracking
    col1, col2, col3 = st.columns([1, 1, 1])
    
    with col1:
        if st.session_state.current_subsection > 0 or st.session_state.current_section > 0:
            st.button("← Previous", on_click=prev_subsection, key="prev_sub_btn")
    
    with col3:
        if current.get("subsections") and st.session_state.current_subsection < len(current["subsections"]) - 1:
            st.button("Next →", on_click=next_subsection, key="next_sub_btn")
        elif st.session_state.current_section < len(sections) - 1:
            st.button("Next Section →", on_click=next_section, key="next_btn")
else:
    # Enhanced quiz display with detailed feedback
    st.title("Module Assessment")
    
    # Show progress bar for quiz
    col1, col2, col3 = st.columns([1, 2, 1])
    with col2:
        st.progress(1.0)  # 100% progress when at assessment
        st.caption("Final Assessment")
    
    st.markdown("""
    <div class="card">
        <h2>Test Your Knowledge</h2>
        <p>Complete this assessment to test your understanding of Enterprise AI concepts covered in this module.</p>
        <p>You'll receive detailed feedback on each question after submission.</p>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown("<div class='quiz-container'>", unsafe_allow_html=True)
    
    for i, question in enumerate(quiz_questions):
        st.subheader(f"Question {i+1}")
        st.markdown(f"**{question['question']}**")
        
        # If quiz is submitted, show results with explanations
        answer_key = f"quiz_{i}"
        
        if st.session_state.quiz_submitted:
            selected = st.session_state.get(answer_key, -1)
            for j, option in enumerate(question["options"]):
                if j == question["correct"]:
                    st.markdown(f"<div class='correct-answer'>✓ {option}</div>", unsafe_allow_html=True)
                elif j == selected and j != question["correct"]:
                    st.markdown(f"<div class='incorrect-answer'>✗ {option}</div>", unsafe_allow_html=True)
                else:
                    st.markdown(f"- {option}")
            
            # Show explanation
            st.markdown(f"<div class='ai-response'>{question['explanation']}</div>", unsafe_allow_html=True)
        else:
            st.radio(
                "Select your answer:",
                options=question["options"],
                key=answer_key
            )
        
        st.markdown("<hr>", unsafe_allow_html=True)
    
    st.markdown("</div>", unsafe_allow_html=True)
    
    # Quiz submission with enhanced feedback
    if not st.session_state.quiz_submitted:
        if st.button("Submit Assessment", key="submit_quiz_btn"):
            score = submit_quiz()
            if score > 3:
                st.balloons()
    else:
        score = st.session_state.score
        
        # Visual score representation
        st.progress(score/len(quiz_questions))
        
        col1, col2 = st.columns([1, 2])
        with col1:
            st.metric("Your Score", f"{score}/{len(quiz_questions)}", f"{score/len(quiz_questions)*100:.0f}%")
        
        with col2:
            if score == len(quiz_questions):
                st.success("### 🏆 Congratulations! You've mastered this module!")
            elif score >= len(quiz_questions) * 0.7:
                st.success("### 🌟 Good job! You've demonstrated solid understanding of the material.")
            else:
                st.warning("### 📚 Review recommended. Consider revisiting key concepts.")
        
        # Personalized feedback based on score
        feedback = get_ai_response(
            f"The user scored {score} out of {len(quiz_questions)} on the Enterprise AI assessment. Provide brief, encouraging feedback highlighting areas they might want to focus on for improvement.",
            "You are an AI coach providing feedback on quiz results. Be supportive but specific about areas for improvement."
        )
        
        st.markdown(f"<div class='ai-response'>{feedback}</div>", unsafe_allow_html=True)
        
        col1, col2 = st.columns([1, 1])
        with col1:
            st.button("Retake Assessment", on_click=reset_quiz)
        
        with col2:
            if st.button("Back to Module Content"):
                go_to_section(0) 