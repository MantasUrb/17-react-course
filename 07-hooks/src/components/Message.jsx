import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState({
    text: "Sunny",
    id: "planet",
  });
  const [count, setCount] = useState(["A"]);

  // const MsgState = useState("");
  // const message = MsgState[0];
  // const setMessage = MsgState[1];

  return (
    <div className="box">
      <p>Counter: {count.length}</p>
      <input
        type="text"
        value={message.text}
        onChange={(event) => {
          // setMessage({text: event.target.value}); // VISISKAI NETEISINGA

          // setCount(count + 1); //Nevisiskai teisinga
          // console.log(count);

          // setCount(countIsNow => countIsNow + 1);

          console.log(count);

          setMessage((stateNow) => {
            return { ...stateNow, text: event.target.value };
          });

          //   setMessage((stateNow) => {
          //     return Object.assign({}, stateNow, { text: event.target.value });
          //   });

          setCount(stateNow => {
            return [...stateNow, "A"]
          });

          //   setCount((countIsNow) => {
          //     const rez = countIsNow + 1;
          //     console.log(rez);
          //     return rez;
          //   });
        }}
      />
      <h4>
        Hello {message.text} {message.id}
      </h4>
    </div>
  );
};

export default Message;
