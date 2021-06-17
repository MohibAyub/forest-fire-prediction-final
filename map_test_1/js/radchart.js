data = [{
  type: 'scatterpolar',
  r: [40, 50, 10, 20, 40],
  theta: ['RH', 'Temperature', 'Rain', 'Wind', 'RH'],
  fill: 'toself'
}]

layout = {
  title: 'Influential Map of Natural Features',
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 50]
    }
  },
  showlegend: false
}

Plotly.newPlot("radchart", data, layout)