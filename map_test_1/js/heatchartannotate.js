var xValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var yValues = ['2', '3', '4', '5', '6', '7', '8', '9'];

var zValues = [
  [10.00, , 1.00, , 1.00, 20.00, 5.00, , ],
  [ , , , , , 10.00, 25.00, , ],
  [20.00, , 35.00, , 20.00, , , , ],
  [ , , , , 30.00, 30.00, 30.00, , 0],
  [10.00, , , , , , , , 0],
  [ , , 10.00, , , , , , ],
  [1.00, , 1.00, , 1.00, 15.00, 5.00, , 0.00],
  []
];

var colorscaleValue = [
  [0, '#3D9970'],
  [1, '#001f3f']
];

var data = [{
  x: xValues,
  y: yValues,
  z: zValues,
  type: 'heatmap',
  colorscale: colorscaleValue,
  showscale: false
}];

var layout = {
  title: 'Average Frequencies of Fire Occurences',
  annotations: [],
  xaxis: {
    ticks: '', dtick: 1, title: {text: 'X spatial coordinate within forest map 1 to 9', standoff: 5},
    side: 'top'
  },
  yaxis: {
    ticks: '', dtick: 1, autorange: 'reversed', title: 'Y spatial coordinate within forest map 1 to 9',
    ticksuffix: ' ',
    width: 700,
    height: 700,
    autosize: false
  }
};

for ( var i = 0; i < yValues.length; i++ ) {
  for ( var j = 0; j < xValues.length; j++ ) {
    var currentValue = zValues[i][j];
    if (currentValue != 0.0) {
      var textColor = 'white';
    }else{
      var textColor = 'black';
    }
    var result = {
      xref: 'x1',
      yref: 'y1',
      x: xValues[j],
      y: yValues[i],
      text: zValues[i][j],
      font: {
        family: 'Arial',
        size: 12,
        color: 'rgb(50, 171, 96)'
      },
      showarrow: false,
      font: {
        color: textColor
      }
    };
    layout.annotations.push(result);
  }
}

Plotly.newPlot('heatchartannotate', data, layout);