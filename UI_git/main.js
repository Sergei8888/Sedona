let ctx_linear = document.getElementById('linear-chart').getContext('2d');
var chart = new Chart(ctx_linear, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
            backgroundColor: '#FFFFFF',
            borderColor: '#E087EE',
            borderCapStyle: "round",
            borderWidth: 2.27,
            pointRadius: 0,
            data: [60, 20, 20, 0]
        },
        {
            backgroundColor: '#FFFFFF',
            borderColor: '#1780FF',
            borderCapStyle: "round",
            borderWidth: 2.27,
            pointRadius: 0,
            data: [60, 40, 20, 20]
        }
    
    ]

    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },

                ticks: {
                    min: 0,
                    max: 60,
                    stepSize: 20,
                    fontColor: "#808191",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13.6239,
                    padding: 10,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },

                ticks: {
                    fontColor: "#808191",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13.6239,
                    padding: 10,
                }
            }]
        }
    }
});


