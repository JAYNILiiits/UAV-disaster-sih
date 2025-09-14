import plotly.express as px
import plotly.graph_objects as go
import pandas as pd

# Create the dataset
data = {
    'Technology': ['YOLO CV', 'LiDAR+Vision', 'Deep RL', 'Thermal Img', 'ArduPilot FC'],
    'Performance': [94.2, 89.0, 87.3, 78.3, 99.0],
    'Latency_ms': [28, 35, 45, 40, 15],
    'Type': ['Computer Vision', 'Sensor Fusion', 'AI Navigation', 'Sensor Tech', 'Flight Control']
}

df = pd.DataFrame(data)

# Create scatter plot
fig = go.Figure()

# Add scatter points with custom colors
colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F', '#D2BA4C']

for i, (tech, perf, lat, tech_type) in enumerate(zip(df['Technology'], df['Performance'], df['Latency_ms'], df['Type'])):
    fig.add_trace(go.Scatter(
        x=[lat],
        y=[perf],
        mode='markers',
        marker=dict(
            size=15,
            color=colors[i],
            line=dict(width=2, color='white')
        ),
        name=tech,
        hovertemplate='<b>%{fullData.name}</b><br>' +
                     'Latency: %{x}ms<br>' +
                     'Performance: %{y}%<br>' +
                     '<extra></extra>'
    ))

# Add target lines
fig.add_hline(y=95, line_dash="dash", line_color="gray", 
              annotation_text="Target: 95%", annotation_position="bottom right")
fig.add_vline(x=50, line_dash="dash", line_color="gray",
              annotation_text="Max: 50ms", annotation_position="top left")

fig.update_layout(
    title="AI Tech Performance vs Latency",
    xaxis_title="Latency (ms)",
    yaxis_title="Performance (%)",
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5)
)

fig.update_traces(cliponaxis=False)

fig.update_xaxes(range=[10, 55])
fig.update_yaxes(range=[75, 102])

fig.write_image("ai_drone_tech_performance.png")