import pandas as pd
import plotly.graph_objects as go
import json

# Load the data
data = {
    "response_time_comparisons": [
        {"scenario": "Urban Areas", "traditional_ems_time": 12, "drone_delivery_time": 8, "time_savings": 4, "percentage_improvement": 33, "study_location": "Canada"},
        {"scenario": "Rural Areas", "traditional_ems_time": 25, "drone_delivery_time": 9, "time_savings": 16, "percentage_improvement": 64, "study_location": "Sweden"},
        {"scenario": "Disaster-Affected Areas", "traditional_ems_time": 45, "drone_delivery_time": 10, "time_savings": 35, "percentage_improvement": 78, "study_location": "Nepal simulation"},
        {"scenario": "Remote Mountain Areas", "traditional_ems_time": 120, "drone_delivery_time": 10, "time_savings": 110, "percentage_improvement": 92, "study_location": "Himachal Pradesh"},
        {"scenario": "Average Case", "traditional_ems_time": 19.5, "drone_delivery_time": 8.5, "time_savings": 11, "percentage_improvement": 56, "study_location": "Germany study"}
    ],
    "targets": [{"metric": "Target Improvement", "percentage": 20, "description": "Minimum 20% reduction in response time"}]
}

# Convert to DataFrame
df = pd.DataFrame(data["response_time_comparisons"])

# Create better scenario names within 15 char limit
scenario_mapping = {
    'Urban Areas': 'Urban',
    'Rural Areas': 'Rural', 
    'Disaster-Affected Areas': 'Disaster',
    'Remote Mountain Areas': 'Mountain',
    'Average Case': 'Average'
}
df['scenario_short'] = df['scenario'].map(scenario_mapping)

# Calculate 20% improvement target (80% of EMS time)
df['target_20_percent'] = df['traditional_ems_time'] * 0.8

# Primary colors as specified
colors = ['#DB4545', '#1FB8CD', '#2E8B57']

# Create the figure with grouped bars
fig = go.Figure()

# Add traditional EMS times
fig.add_trace(go.Bar(
    name='EMS',
    x=df['scenario_short'],
    y=df['traditional_ems_time'],
    marker_color='#DB4545',
    hovertemplate='<b>%{x}</b><br>EMS Time: %{y} min<br>Location: %{customdata}<br><extra></extra>',
    customdata=df['study_location'],
    cliponaxis=False
))

# Add drone delivery times  
fig.add_trace(go.Bar(
    name='Drone',
    x=df['scenario_short'],
    y=df['drone_delivery_time'],
    marker_color='#1FB8CD',
    hovertemplate='<b>%{x}</b><br>Drone Time: %{y} min<br>Improvement: %{customdata}%<br><extra></extra>',
    customdata=df['percentage_improvement'],
    cliponaxis=False
))

# Add 20% improvement target line (80% of EMS time for each scenario)
fig.add_trace(go.Scatter(
    x=df['scenario_short'],
    y=df['target_20_percent'],
    mode='markers+lines',
    name='20% Target',
    line=dict(color='#2E8B57', dash='dash', width=2),
    marker=dict(color='#2E8B57', size=8),
    hovertemplate='<b>%{x}</b><br>20% Target: %{y:.1f} min<br>80% of EMS time<br><extra></extra>',
    cliponaxis=False
))

# Update layout
fig.update_layout(
    title='Drone vs EMS Medical Response Times',
    xaxis_title='Scenario',
    yaxis_title='Time (min)',
    barmode='group',
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5),
    showlegend=True
)

# Update axes
fig.update_yaxes(title='Time (min)')
fig.update_xaxes(title='Scenario')

# Save the chart
fig.write_image('drone_response_times.png')
fig.show()