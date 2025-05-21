# Enterprise AI Training Platform

An interactive training platform for enterprise AI concepts with personalized AI coaching.

## Features

- **Interactive Learning Experience**: Case studies, reflections, and decision points with AI feedback
- **AI Coach**: Ask questions and get personalized guidance on enterprise AI topics
- **Progress Tracking**: Visual indicators of your learning journey
- **Personalized Feedback**: AI-powered responses to your reflections and activities
- **Self-Paced Learning**: Navigate content at your own speed with intuitive navigation

## Local Setup

1. Clone this repository
2. Install dependencies with `pip install -r requirements.txt`
3. Run the app with `streamlit run app.py`

## Streamlit Cloud Deployment

This app is deployed on Streamlit Cloud and can be accessed at: [Enterprise AI Training Platform](https://enterprise-ai-training.streamlit.app/)

## Content Structure

The platform contains interactive modules covering:

1. Foundation of Enterprise AI
2. Prompt Engineering Fundamentals
3. Advanced Prompting & Agent Design

Each module includes case studies, interactive exercises, and assessments to test your knowledge.

## Technologies Used

- Streamlit for the web interface
- OpenAI API for AI coaching (optional)
- Python for backend logic

## Environment Variables

For local AI coach functionality, create a `.env` file with:

```
OPENAI_API_KEY=your_api_key_here
```

If no API key is provided, the app will use pre-written responses. 