import React, { useState } from "react";
import "./Clusters.css";
import { Graph, Table, Summeray } from "./Components/";
import testData from "./testData.json";
import ChartStreaming from "chartjs-plugin-streaming";

// import useFetch from "../../Hooks/useFetch/useFetch";

function Clusters() {
  /* Setting the initial state of the dataa. */
  const [dataa, setDataa] = useState(testData);

  /* Setting the initial state of the graphData. */
  const [graphData, setGraphData] = React.useState({
    /* Mapping the dataa array and returning the time property. */
    labels: dataa.map((time) => time.time),
    datasets: [
      {
        /* The data that is being passed to the graph. */
        label: "just for test",
        data: dataa.map((data) => data.percentage),
        backgroundColor: "rgb(184 188 23 / 75%)",
        borderColor: "black",
/* A nested route. */
        borderWidth: 1,
        tension: 0.4,
        fill: true,
        cubicInterpolationMode: "monotone",
      },
    ],
  });

  {
    /**simulating an API */
  }
  React.useEffect(() => {
    const interval = setInterval(() => {
      setDataa((state) => {
        if (state.length >= 100) {
          /* Removing the first element of the array and adding a new element to the end of the array. */
          return [
            state.shift(),
            ...state,
            /* Creating a new object with a random percentage and the current time. */
            {
              percentage: Math.floor(Math.random() * 40 + 60),
              time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            },
          ];
        } else {
          return [
            // state.shift(),
            ...state,
            {
              percentage: Math.floor(Math.random() * 40 + 60),
              time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            },
          ];
        }
      });

      {
        /**Updating The GraphData */
      }

      setGraphData({
        labels: dataa.map((time) => time.time),
        datasets: [
          {
            label: "just for test",
            data: dataa.map((data) => data.percentage),
            backgroundColor: "rgb(184 188 23 / 75%)",
            borderColor: "black",
            tension: 0.4,
            fill: true,

            cubicInterpolationMode: "monotone",
          },
        ],
      });

      // console.log(dataa);
      // console.log(graphData);

/* The time interval that is being passed to the setInterval function. */
    }, 3000);

/* A cleanup function that is being called when the component is unmounted. */
    return () => {
      clearInterval(interval);
    };
  }, [dataa]);

  return (
    <div className='clusters'>
      <div className='graph'>
        <Graph graphData={graphData} data={dataa}></Graph>
      </div>
      <div className='table-summeray__container'>
        <div className='table'>
          <Table dataa={dataa}></Table>
        </div>
        <div className='summeray'>
          <Summeray dataa={dataa}></Summeray>
        </div>
      </div>
    </div>
  );
}

export default Clusters;
