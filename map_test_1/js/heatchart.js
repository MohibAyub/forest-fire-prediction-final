var data = [
  {
    x: [1,2,3,4,5,6,7,8,9],
    y: [-1,-2,-3,-4,-5,-6,-7,-8,-9],
    z: [[], [43, 110, , , , , , , , ], [160, 0, 200, 120, , 92, 170, 160, ], [140, 110, 63, 140, 85, 140, 110, 260, 300], 
    [250, 120, 17, 100, 0, 130, 84, 46 , 110], [ , , 0, 130, 110, 75, 220, 130, 380], [ , , , , , , , 520, ], [ , , , , , , , , 41], []],
    type: 'heatmap'
  }
];
var layout = {
  title: "Fire Intensity: Burnt Area of the Forest",
  xaxis: {title: 'X spatial coordinate within forest map 1 to 9', dtick: 1},
  yaxis: {title: 'Y spatial coordinate within forest map 1 to 9', dtick: 1}, 
}

Plotly.newPlot('heatchart', data, layout);