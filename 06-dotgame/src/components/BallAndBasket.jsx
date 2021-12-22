import { Component } from 'react';

class BallAndBasket extends Component {

    randomCoordinatesX = () => Math.floor(Math.random() * 96.5) + "%";
    randomCoordinatesY = () => Math.floor(Math.random() * 94) + "%";

    constructor() {
        super();
        this.state = {
            basketTop: this.randomCoordinatesY(),
            basketLeft: this.randomCoordinatesX(),
        }
    }

    alertWhenScore () {
        const basket = document.getElementsByClassName("basket");
        const ball = document.getElementsByClassName("ball");

        let basketX = basket[0].offsetLeft;
        let basketY = basket[0].offsetTop;
        let ballX = ball[0].offsetLeft;
        let ballY = ball[0].offsetTop;

        if (((ballX === basketX + 10 || ballX === basketX + 20) && 
            (ballY === basketY + 15 || ballY === basketY + 21))) {
            return (
                alert("SCORE !!! SCORE !!! SCORE !!!"),
                this.setState({
                    basketTop: this.randomCoordinatesY(),
                    basketLeft: this.randomCoordinatesX(),
                })
            )
        }
    }

    componentDidUpdate () {
        this.alertWhenScore();
    }

    render() {
        return (
            <>
            <div 
                className="ball"
                style={{
                    bottom: this.props.bottomvalue + "%",
                    left: Math.abs(this.props.leftvalue) + "%"
                }}
            >
            </div>
            <div 
                className="basket"
                style={{
                    top: this.state.basketTop,
                    left: this.state.basketLeft,
                }}
            >
            </div>
            </>
        )
    }
}

export default BallAndBasket ;