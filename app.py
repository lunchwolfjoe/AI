import streamlit as st
import yaml
from pathlib import Path
import os

# Set page config
st.set_page_config(
    page_title="AI Transformation Training Curriculum",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
<style>
    .main {
        padding: 2rem;
    }
    .stButton>button {
        width: 100%;
    }
    .module-card {
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #f0f2f6;
        margin-bottom: 1rem;
    }
    .image-container {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
    }
    .image-container img {
        max-width: 100%;
        height: auto;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
</style>
""", unsafe_allow_html=True)

# Sidebar navigation
st.sidebar.title("AI Transformation Training")
st.sidebar.markdown("---")

# Load module content
def load_module_content(module_path):
    with open(module_path, 'r', encoding='utf-8') as file:
        return file.read()

# Display image function
def display_image(image_path, caption=None):
    st.markdown('<div class="image-container">', unsafe_allow_html=True)
    st.image(image_path, caption=caption, use_column_width=True)
    st.markdown('</div>', unsafe_allow_html=True)

# Main content
st.title("AI Transformation Training Curriculum")
st.markdown("""
Welcome to the AI Transformation Training Curriculum. This comprehensive program is designed to equip senior leaders with the knowledge and skills needed to drive AI transformation in their organizations.
""")

# Module selection
module = st.sidebar.radio(
    "Select Module",
    ["Overview", "Module 1: Foundation of Enterprise AI", "Module 2: AI Transformation Strategy", 
     "Module 3: Workforce Evolution", "Module 4: AI Systems and Architecture", 
     "Module 5: Risk and Governance", "Evaluation Framework"]
)

# Display selected module content
if module == "Overview":
    st.markdown(load_module_content("ai_transformation_training_curriculum.md"))
    display_image("images/ai_market_growth.png", "AI Market Growth Trends")
elif module == "Module 1: Foundation of Enterprise AI":
    st.markdown(load_module_content("module_1_foundation_of_enterprise_ai.md"))
    display_image("images/ai_industry_adoption.png", "AI Industry Adoption Trends")
elif module == "Module 2: AI Transformation Strategy":
    st.markdown(load_module_content("module_2_ai_transformation_strategy.md"))
    display_image("images/ai_kpi_dashboard.png", "AI Transformation KPIs")
elif module == "Module 3: Workforce Evolution":
    st.markdown(load_module_content("module_3_workforce_evolution.md"))
elif module == "Module 4: AI Systems and Architecture":
    st.markdown(load_module_content("module_4_ai_systems_and_architecture.md"))
elif module == "Module 5: Risk and Governance":
    st.markdown(load_module_content("module_5_risk_and_governance.md"))
elif module == "Evaluation Framework":
    st.markdown(load_module_content("training_evaluation_framework.md"))

# Footer
st.markdown("---")
st.markdown("© 2024 AI Transformation Training Program") 