import React, { useState, useEffect } from "react";

const Countdown = () => {

    const [firstCounter, setFirstCounter] = useState(10);
    const [secondCounter, setSecondCounter] = useState(10);
    const [thirdCounter, setThirdCounter] = useState(10);
    const [click, setClick] = useState(false);

    function handleClick () {
        if (thirdCounter === 0) {
            setClick(false)
            setFirstCounter(10)
            setSecondCounter(10)
            setThirdCounter(10)
        } else {
            setClick(true)
        }
    }

    useEffect(() => {
        if (click === true && firstCounter > 0) {
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
            <button 
                className="my-button" 
                onClick={handleClick}
            >START COUNDOWN
            </button>
        </>
    )
}

export default Countdown;