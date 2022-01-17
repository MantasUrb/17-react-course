import { useState, useEffect } from "react";

function BallAndBasket(props) {
  const randomCoordinatesX = () => Math.floor(Math.random() * 96.5) + "%";
  const randomCoordinatesY = () => Math.floor(Math.random() * 94) + "%";

  const [basketTop, setBasketTop] = useState(randomCoordinatesY);
  const [basketLeft, setBasketLeft] = useState(randomCoordinatesX);
  const [score, setScore] = useState(0);

  const changeBasketTop = () => {
    setBasketTop(randomCoordinatesY);
  };

  const changeBasketLeft = () => {
    setBasketLeft(randomCoordinatesX);
  };

  const add = (countIsNow) => {
    const res = countIsNow + 1;
    return res;
  };

  function alertWhenScore() {
    const basket = document.getElementsByClassName("basket");
    const ball = document.getElementsByClassName("ball");

    let basketX = basket[0].offsetLeft;
    let basketY = basket[0].offsetTop;
    let ballX = ball[0].offsetLeft;
    let ballY = ball[0].offsetTop;

    if (
      (ballX === basketX + 10 || ballX === basketX + 20) &&
      (ballY === basketY + 15 || ballY === basketY + 21)
    ) {
      alert("SCORE !!! SCORE !!! SCORE !!!");
      changeBasketTop();
      changeBasketLeft();
      setScore(add);
    }
  }

  useEffect(() => {
    alertWhenScore();
  });

  return (
    <>
      <span className="score">{score}</span>
      <div
        className="ball"
        style={{
          bottom: props.bottomvalue + "%",
          left: Math.abs(props.leftvalue) + "%",
        }}
      ></div>
      <div
        className="basket"
        style={{
          top: basketTop,
          left: basketLeft,
        }}
      ></div>
    </>
  );
}

export default BallAndBasket;