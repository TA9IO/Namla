


import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import "./graph.css";
import { Chart as ChartJS } from "chart.js/auto";
// import ChartStreaming from "chartjs-plugin-streaming";

function Graph({ graphData, data }) {
  // console.log(graphData.datasets[0].data);
  const first = React.useRef(Line)
  //  first.current.addEventListener("scroll", scroll);
  // console.log(first.current.chartArea);
  return (
    // resourses
    //===================================================================
    // chartjs.org/docs/
    // https://www.npmjs.com/package/react-chartjs-2
    // this amazing youtube channel : https://www.youtube.com/c/ChartJS-tutorials
    // StackOverflow (not so good but helpfull 
    //===================================================================
    <Bar
      data={graphData}
      ref={first}
      options={{
        // in case  you like to see some cool transitions
        transitions: {
          // hide: {
          //   animations: {
          //     x: {
          //       to: 0,
          //     },
          //     y: {
          //       to: 0,
          //     },
          //   },
          // },
        },
        responsive: true,
        
        plugins: {
          title: {
            display: true,
            text: "Clusters Health",
          },
        },

        scales: {
          // xAxes: [
          //   {
          //     type: "realtime",
          //     realtime: {},
          //   },
          // ],
          x: {
            display: true,

            title: {
              display: true,

              text: "TIME",
              color: "#000",
              font: {
                family: "Heebo",
                size: 15,
                weight: "bold",
                lineHeight: 1.2,
              },
            },
          },
          y: {
            min: 0,
            max: 100,
            stepSize: 20,
            display: true,
            ticks: {
              stepSize: 20,
              callback: (value, index, values) => {
                return `${value}%`;
              },
            },
            title: {
              display: true,
              text: "PERCENTAGE",
              color: "#000",
              font: {
                family: "Heebo",
                size: 15,
                weight: "bold",
                lineHeight: 1.2,
              },
            },
          },
        },

        min: 0,
        max: 100,
        // ticks: {
        //   // forces step size to be 50 units
        //   stepSize: 20,
        // },
      }}
    />
  );
}

export default Graph;
