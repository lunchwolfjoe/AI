# AI Transformation Training Curriculum

A comprehensive training platform for senior leaders to understand and implement AI transformation in their organizations.

## Project Structure
```
.
├── app.py                  # Main Streamlit application
├── requirements.txt        # Python dependencies
├── ai_transformation_training_curriculum.md
├── module_1_foundation_of_enterprise_ai.md
├── module_2_ai_transformation_strategy.md
├── module_3_workforce_evolution.md
├── module_4_ai_systems_and_architecture.md
├── module_5_risk_and_governance.md
└── training_evaluation_framework.md
```

## Local Development

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
streamlit run app.py
```

## Deployment Options

### Option 1: Streamlit Community Cloud
1. Create a GitHub repository
2. Push all files to the repository
3. Go to [Streamlit Community Cloud](https://streamlit.io/cloud)
4. Click "New app" and connect your GitHub repository
5. Select the main file (app.py) and branch
6. Click "Deploy"

### Option 2: Self-hosted
1. Set up a server with Python 3.8+
2. Install dependencies: `pip install -r requirements.txt`
3. Run with: `streamlit run app.py --server.port=8501`
4. Configure a reverse proxy (e.g., Nginx) if needed

## Features
- Interactive module navigation
- Comprehensive curriculum content
- Evaluation framework
- Responsive design
- Markdown support

## License
© 2024 AI Transformation Training Program 