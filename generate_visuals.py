import matplotlib.pyplot as plt
import numpy as np
import os

# Ensure images directory exists
os.makedirs('images', exist_ok=True)

# 1. Global AI Market Growth Chart
years = np.arange(2020, 2031)
market = [40, 55, 75, 100, 130, 170, 196, 230, 270, 320, 380]
plt.figure(figsize=(8, 5))
plt.plot(years, market, marker='o', color='#1f77b4')
plt.title('Global AI Market Growth Projections (2020–2030)')
plt.xlabel('Year')
plt.ylabel('Market Size (Billion USD)')
plt.grid(True)
plt.tight_layout()
plt.savefig('images/ai_market_growth.png')
plt.close()

# 2. Industry Adoption Bar Chart
industries = ['Healthcare', 'Finance', 'Manufacturing', 'Retail']
adoption = [45, 38, 35, 32]
plt.figure(figsize=(7, 5))
plt.bar(industries, adoption, color=['#2ca02c', '#ff7f0e', '#1f77b4', '#d62728'])
plt.title('AI Adoption Rates by Industry (2023)')
plt.ylabel('Adoption Rate (%)')
plt.ylim(0, 50)
plt.tight_layout()
plt.savefig('images/ai_industry_adoption.png')
plt.close()

# 3. KPI Dashboard Mockup
kpis = ['Cost Savings', 'Revenue Impact', 'Productivity', 'Customer Sat.']
values = [35, 22, 45, 28]
plt.figure(figsize=(8, 5))
plt.bar(kpis, values, color='#9467bd')
plt.title('Sample AI KPI Dashboard')
plt.ylabel('Improvement (%)')
plt.ylim(0, 50)
plt.tight_layout()
plt.savefig('images/ai_kpi_dashboard.png')
plt.close() 