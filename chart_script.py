import plotly.graph_objects as go
import pandas as pd

# Create comprehensive drone data with ranges and specific examples
categories = ['Consumer Drones', 'Commercial Drones', 'Heavy Lift Drones']
payload_min = [0.5, 5, 25]
payload_max = [2, 25, 50]  # Using 50kg as upper bound for heavy lift for visualization
flight_min = [15, 18, 18]
flight_max = [30, 68, 30]

# Specific drone examples with their exact specs
examples_data = [
    {'name': 'DJI Mini 4 Pro', 'category': 'Consumer Drones', 'payload': 1.2, 'flight_time': 25},
    {'name': 'T-DRONES M1200', 'category': 'Commercial Drones', 'payload': 5, 'flight_time': 30},
    {'name': 'Freefly Alta X', 'category': 'Commercial Drones', 'payload': 15, 'flight_time': 35},
    {'name': 'JOUAV CW-80E', 'category': 'Commercial Drones', 'payload': 20, 'flight_time': 50},
    {'name': 'DJI FlyCart 30', 'category': 'Heavy Lift Drones', 'payload': 30, 'flight_time': 28},
    {'name': 'GRIFF Aviation', 'category': 'Heavy Lift Drones', 'payload': 45, 'flight_time': 20}
]

examples_df = pd.DataFrame(examples_data)

# Create figure
fig = go.Figure()

# Define colors
colors = ['#1FB8CD', '#DB4545', '#2E8B57']
suitability_info = ['Limited', 'Excellent', 'Good but expensive']
cost_info = ['$200-2k', '$5k-50k', '$50k+']
apps_info = ['Small meds', 'Med supplies', 'Large equipment']

# Add payload range bars
for i, category in enumerate(categories):
    # Add horizontal bar showing payload range
    fig.add_trace(go.Scatter(
        x=[payload_min[i], payload_max[i]],
        y=[i, i],
        mode='lines',
        line=dict(color=colors[i], width=8),
        name=category.replace(' Drones', ''),
        showlegend=True,
        hovertemplate=f"<b>{category}</b><br>" +
                     f"Payload Range: {payload_min[i]}-{payload_max[i]} kg<br>" +
                     f"Flight Time: {flight_min[i]}-{flight_max[i]} min<br>" +
                     f"Med Suitability: {suitability_info[i]}<br>" +
                     f"Cost: {cost_info[i]}<br>" +
                     f"Apps: {apps_info[i]}<extra></extra>"
    ))
    
    # Add range end markers
    fig.add_trace(go.Scatter(
        x=[payload_min[i], payload_max[i]],
        y=[i, i],
        mode='markers',
        marker=dict(size=12, color=colors[i], symbol='circle'),
        showlegend=False,
        hoverinfo='skip'
    ))

# Add specific drone examples
for idx, row in examples_df.iterrows():
    cat_idx = categories.index(row['category'])
    fig.add_trace(go.Scatter(
        x=[row['payload']],
        y=[cat_idx + 0.15],  # Slightly offset above the range line
        mode='markers+text',
        marker=dict(size=14, color=colors[cat_idx], symbol='diamond'),
        text=[row['name']],
        textposition='top center',
        textfont=dict(size=10),
        showlegend=False,
        hovertemplate=f"<b>{row['name']}</b><br>" +
                     f"Payload: {row['payload']} kg<br>" +
                     f"Flight Time: {row['flight_time']} min<br>" +
                     f"Category: {row['category']}<extra></extra>"
    ))

# Update layout
fig.update_layout(
    title="Drone Payload Capacity for Medical Supply",
    xaxis_title="Payload Cap (kg)",
    yaxis=dict(
        tickmode='array',
        tickvals=[0, 1, 2],
        ticktext=['Consumer', 'Commercial', 'Heavy Lift']
    ),
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5),
    height=500
)

# Update axes
fig.update_xaxes(range=[-2, 52])
fig.update_yaxes(range=[-0.5, 2.5])

# Update traces
fig.update_traces(cliponaxis=False)

# Save the chart
fig.write_image("drone_payload_comparison.png")