import React, { useState, useEffect, useRef } from "react";

const Effect = ({vardas1, vardas2}) => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [color, setColor] = useState("orange");

  const alreadyMounted = useRef(false);
  const runOnce = useRef(0); // means no mount and no count
  const runColor = useRef(0);

  const ticTac = () => {
    console.log("TIC-TAC");
    setDate(new Date());
  };

  useEffect(() => { //<-- works on each and every change
    console.log("Effect Works on ANY change ALWAYS");
  });

  useEffect(() => { //<-- works only after state "date" changes
    console.log("Effect Works on DATE change");
    if (runColor.current) {
        runColor.current = 0;
        setColor("orange")
    } else {
        runColor.current = 1;
        setColor("red")
    }
  }, [date]);
  
  useEffect(() => { //<-- works only after state "count" changes
    console.log("Effect Works on COUNT change");
  }, [count]);

  useEffect(() => { //<-- works only after either one of the states changes
    console.log("Effect Works on DATE or COUNT change");
  }, [date, count]);

  useEffect(() => { //<-- works only on COUNT change/click but NOT on FIRST MOUNT/RENDER/REFRESH phase
      if (alreadyMounted.current) {//<--second and other times
        console.log("ONLY COUNT");
      } else { // <--first time on render
        alreadyMounted.current = true;
      }
  }, [count]);

  useEffect(() => { //<-- works only on COUNT change/click FOR ONE TIME ONLY but NOT on FIRST MOUNT/RENDER/REFRESH phase
    if (runOnce.current === 0) { // mounting
      runOnce.current = 1;
    } else if (runOnce.current === 1) { // first and ONLY time
        console.log("ONLY COUNT RUN 1");
        runOnce.current = 2;
    }
}, [count]);

  // componentDidMount working imitation
  useEffect(() => {
    console.log("MOUNT");
    const timerID = setInterval(() => ticTac(), 10000);
    return () => clearInterval(timerID); // <-- componentWillUnmount imitation
  }, []);

  return (
    <div className="box">
      <div>{vardas1} {vardas2}</div>
      <p>Date : {date.toLocaleTimeString()}</p>
      <p style={{color: color}}>Counter : {count}</p>
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