let ctx_linear = document.getElementById("linear_chart").getContext("2d");
var linearChart = new Chart(ctx_linear, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        backgroundColor: "#FFFFFF",
        borderColor: "#E087EE",
        borderCapStyle: "round",
        borderWidth: 2.27,
        pointRadius: 0,
        data: [60, 20, 20, 0],
      },
      {
        backgroundColor: "#FFFFFF",
        borderColor: "#1780FF",
        borderCapStyle: "round",
        borderWidth: 2.27,
        pointRadius: 0,
        data: [60, 40, 20, 20],
      },
    ],
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
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
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },

          ticks: {
            fontColor: "#808191",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13.6239,
            padding: 10,
          },
        },
      ],
    },
  },
});

let ctx_bar = document.getElementById("bar_chart").getContext("2d");
var barChart = new Chart(ctx_bar, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["Vlad", "Lev", "Sergey B.", "Philipp","Sergei K."],
    datasets: [
      {
        label: "HTML",
        backgroundColor: "#E087EE",
        barPercentage: 0.1,
        barThickness: 30,
        data: [80, 25, 40, 20, 85],
      },
      {
        label: "CSS",
        backgroundColor: "#1780FF",
        barPercentage: 0.1,
        barThickness: 30,
        data: [95, 20, 50, 35, 75],
      },
    ],
  },

  // Configuration options go here
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },

          ticks: {
            min: 0,
            max: 100,
            stepSize: 20,
            fontColor: "#808191",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13.6239,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },

          ticks: {
            fontColor: "#808191",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13.6239,
            padding: 10,
          },
        },
      ],
    },
  },
});
