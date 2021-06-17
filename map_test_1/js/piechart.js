var options = {
    series: [91.1, 8.9],
    chart: {
    type: 'pie',
    width: '50%'
  }, title: {text: 'Percentage of Small Fires v/s Large Fires'},
  labels: ['Small Fires', 'Large Fires',],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  
};

  var piechart = new ApexCharts(document.querySelector("#piechart"), options);
  piechart.render();