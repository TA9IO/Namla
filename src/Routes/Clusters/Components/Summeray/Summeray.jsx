import React, { Children } from "react";
import "./summeray.css";
function Summeray({ dataa }) {
  const dymmyData = dataa.reduce((a, b) => {
    return (a + b.percentage) / 10;
  }, 0);

  {/**just some dummy data */}
  return (

    <div className='summeray-comp'>
      <TextualSummeray
        percentage={dymmyData.toFixed(2)}
        title={"Memory Usage"}></TextualSummeray>
      <TextualSummeray
        percentage={dymmyData.toFixed() * 7}
        title={"CPU Usage"}></TextualSummeray>
      <TextualSummeray percentage={"80"} title={"Edge Conected"}>
        <span style={{ fontSize: "15px" }}>(Static exaple)</span>
      </TextualSummeray>
      <TextualSummerayNumber percentage={"125"} title={"Total Devices"}>
        {" "}
        <span style={{ fontSize: "15px" }}>
          (data will be passed from the devices section or from an API)
        </span>
      </TextualSummerayNumber>
    </div>
  );
}

function TextualSummeray({ children, percentage, title }) {
  return (
    <div style={{ width: "50%", marginBottom:'30px'}}>
      <div className='num' style={{ fontWeight: "bolder", fontSize: "30px" }}>
        {percentage ? `${percentage}%` : "--"}
      </div>
      <div className='title' style={{ fontWeight: "600" }}>
        {title ? title : "--------------"}
      </div>
      {children}
    </div>
  );
}
function TextualSummerayNumber({ children, percentage, title }) {
  return (
    <div style={{ width: "50%" }}>
      <div className='num' style={{ fontWeight: "bolder", fontSize: "30px" }}>
        {percentage ? `${percentage}` : "--"}
      </div>
      <div className='title' style={{ fontWeight: "600" }}>
        {title ? title : "--------------"}
      </div>
      {children}
    </div>
  );
}

export default Summeray;
