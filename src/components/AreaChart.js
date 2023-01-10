import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const AreaChart = ({ data }) => {
  const chartData = {
    labels: data.slice(1).map((item) => item[0]), // Fill this with dates from the data
    datasets: [
      {
        fill: true,
        label: "Open Price",
        data: data.slice(1).map((item) => item[1]), // Fill this with open prices from the data
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const chartOption = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Open Price Chart",
      },
    },
  };

  //   chartData.labels = );
  //   chartData.datasets[0].data = data.map((item) => item[1]);

  return (
    <>
      <Line data={chartData} options={chartOption} />
      {/* <button onClick={() => setFill(!fill)}>Toggle Fill</button> */}
    </>
  );
};

export default AreaChart;
