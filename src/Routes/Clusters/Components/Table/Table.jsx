import React from "react";
import testData from "../../testData.json";
import "./table.css";
function Table({ dataa }) {
  const logEnd = React.useRef(null);

  const scrollToBottom = () => {
     logEnd.current?.scrollIntoView({ behavior: "smooth",block: "end", inline: "nearest" });
  };
  React.useEffect(() => {
    scrollToBottom();
  }, [dataa]);

  return (
    <div className='table-comp'>
      {dataa.map((item) => {
        const { percentage, time } = item;

        return (
          <div className='tabme-comp-log' ref={logEnd}>
            <Time>
              This is The Time{" "}
              <span style={{ fontWeight: "bold" }}>{time}</span> 🔵{" "}
            </Time>
            <Percentage>
              The percentege is{" "}
              <span style={{ fontWeight: "bold" }}>{percentage}%</span>
            </Percentage>
          </div>
        );
      })}
    </div>
  );
}
//Dmmy Time ${time} 🔵 ThPesentage is ${percentage}

function Time({ children }) {
  return <span>{children}</span>;
}

function Percentage({ children }) {
  return <div>{children}</div>;
}

export default Table;
