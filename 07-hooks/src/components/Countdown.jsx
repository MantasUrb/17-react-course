import React, { useState, useEffect, useRef } from "react";

const Countdown = () => {

    const [firstCounter, setFirstCounter] = useState(10);
    const [secondCounter, setSecondCounter] = useState(10);
    const [thirdCounter, setThirdCounter] = useState(10);
    
    const alreadyPressed = useRef(false);

    useEffect(() => {
        if (firstCounter > 0) {
            setTimeout(() => setFirstCounter(firstCounter - 1), 100)
        };
    })

    useEffect(() => {
        if (firstCounter === 0 && secondCounter > 0) {
            setTimeout(() => setSecondCounter (secondCounter - 1), 200)
        };
    })

    useEffect (() => {
        if (secondCounter === 0 && thirdCounter > 0) {
            setTimeout (() => setThirdCounter (thirdCounter -1), 400)
        };
    })

    return (
        <>
            <div className="box">{firstCounter}</div>
            <div className="box">{secondCounter}</div>
            <div className="box">{thirdCounter}</div>
            <button className="my-button">START COUNTING</button>
        </>
    )
}

export default Countdown;