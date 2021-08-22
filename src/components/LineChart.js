import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const lab = props.hourlyData.map((data) => data.dt);
  const temperature = props.hourlyData.map((data) => data.temp);
  const humidity = props.hourlyData.map((data) => data.humidity);

  const data = {
    labels: lab,
    datasets: [
      {
        label: "Temperature",
        data: temperature,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Humidity",
        data: humidity,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
        },
        {
          type: "linear",
          display: true,
          position: "right",
          gridLines: {
            display: false,
            drawOnArea: false,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
