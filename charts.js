var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://corona.lmao.ninja/v2/historical/kenya?lastdays=30", requestOptions)
  .then(response => response.json())
  .then((data) => {
  var cases = Object.entries(data.timeline.cases).map(([k,v])=>[Date.parse(k),v]);

  var options = {
  chart: {
    type: 'line',
    dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          }
  },

  stroke: {
          curve: 'smooth'
        },
  dataLabels: {
          enabled: true,
        },
  grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#15a3df', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
          },
        },
  series: [{
    name: 'cases',
    data: cases
  }],
  xaxis: {
      type: 'datetime',
      labels: {
        style: {
          fontSize: '10px'
        }
      }
  },

  title: {
            text: 'Cases in the last 30 days',
            style: {
              fontSize: '14',
              fontFamily: 'barlow',
              color: '#0a1c4f'
            }

          },
}

var chart = new ApexCharts(document.querySelector("#ke-cases-chart"), options);

chart.render();

var deaths = Object.entries(data.timeline.deaths).map(([k,v])=>[Date.parse(k),v]);

  var options = {
  chart: {
    type: 'line',
    dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          }
  },
  colors: ['#febf41'],
  stroke: {
          curve: 'smooth'
        },
  dataLabels: {
          enabled: true,
        },
  grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#febf41', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
          },
        },
  series: [{
    name: 'deaths',
    data: deaths
  }],
  xaxis: {
      type: 'datetime',
      labels: {
        style: {
          fontSize: '10px'
        }
      }
  },

  title: {
            text: 'Deaths in the last 30 days',
            style: {
              fontSize: '14',
              fontFamily: 'barlow',
              color: '#0a1c4f'
            }

          },
}

var chart = new ApexCharts(document.querySelector("#ke-deaths-chart"), options);

chart.render();

 var recoveries = Object.entries(data.timeline.recovered).map(([k,v])=>[Date.parse(k),v]);

  var options = {
  chart: {
    type: 'line',
    dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          }
  },

  stroke: {
          curve: 'smooth'
        },
  dataLabels: {
          enabled: true,
        },
  grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#15a3df', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
          },
        },
  series: [{
    name: 'recoveries',
    data: recoveries
  }],
  xaxis: {
      type: 'datetime',
      labels: {
        style: {
          fontSize: '10px'
        }
      }
  },

  title: {
            text: 'Recoveries in the last 30 days',
            style: {
              fontSize: '14',
              fontFamily: 'barlow',
              color: '#0a1c4f'
            }

          },
}

var chart = new ApexCharts(document.querySelector("#ke-recoveries-chart"), options);

chart.render();

  })
  .catch(error => console.log('error', error));
