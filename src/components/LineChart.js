import React from "react";
import { Chart, Line } from "react-chartjs-2";

const LineChart = (props) => {
  const lab = props.hourlyData.map((data) => data.dt);
  const temperature = props.hourlyData.map((data) => data.temp);

  const data = {
    labels: lab,
    datasets: [
      {
        label: "Temperature",
        data: temperature,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
