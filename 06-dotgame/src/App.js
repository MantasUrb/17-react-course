import './App.css';
import { Slider } from '@mui/material';
import { Component } from 'react';
import BallAndBasket from "./components/BallAndBasket"

class App extends Component {
  constructor() {
    super();
    this.state = {
        sliderHorzValue: 50,
        sliderVertValue: 50,
    }
}

handleChangeHorizontal = value => {
    this.setState({
        sliderHorzValue: value.target.value,
    })
}

handleChangeVertical = value => {
    this.setState({
        sliderVertValue: value.target.value,
    })
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-container">
          <BallAndBasket
              leftvalue={-this.state.sliderHorzValue}
              bottomvalue={this.state.sliderVertValue}
          />
        </div>
        <div className="slider-horizontal">
          <Slider 
            min={1}
            max={99}
            defaultValue={50}
            onChange={this.handleChangeHorizontal}
          />
        </div>
        <div className="slider-vertical">
          <Slider 
            min={-1}
            max={96}
            defaultValue={50} 
            orientation="vertical"
            onChange={this.handleChangeVertical}
          />
        </div>
      </header>
    </div>
    );
  }
}

export default App;