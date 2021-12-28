import React, { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const ticTac = () => {
    console.log("TIC-TAC");
    setDate(new Date());
  };

  useEffect(() => {
    //<-- works on each and every change
    console.log("Effect Works on ANY change");
  });

  useEffect(() => {
    //<-- works only after state "date" changes
    console.log("Effect Works from DATE");
  }, [date]);

  useEffect(() => {
    //<-- works only after state "count" changes
    console.log("Effect Works from COUNT");
  }, [count]);

  // componentDidMount working imitation
  useEffect(() => {
    console.log("MOUNT");
    const timerID = setInterval(() => ticTac(), 5000);
  }, []);

  return (
    <div className="box">
      <p>Date : {date.toLocaleTimeString()}</p>
      <p>Counter : {count}</p>
      <button
        className="my-button"
        onClick={() => {
          setCount((counter) => counter + 1);
        }}
      >
        PRESS ADDS +1
      </button>
    </div>
  );
};

export default Effect;
