import { Component } from 'react';

class BallAndBasket extends Component {
    constructor() {
        super();
        this.state = {
            basketTop: Math.floor(Math.random() * 94) + "%",
            basketLeft: Math.floor(Math.random() * 96.5) + "%",
        }
    }

    newRandomBasketCoordinates = number => {
        this.setState({
            basketTop: Math.floor(Math.random() * 100),
            basketLeft: Math.floor(Math.random() * 100),
        })
    }

    getCoorditesOfBasket = basket => {
        let rect = basket.getBoundingClientRect()
        let docEl = document.documentElement
        let rectTop = rect.top + window.pageYOffset - docEl.clientTop
        let rectLeft = rect.left + window.pageXOffset - docEl.clientLeft
        console.log(rectTop, rectLeft);
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