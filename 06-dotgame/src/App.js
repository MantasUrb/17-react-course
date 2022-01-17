import './App.css';
import { Slider } from '@mui/material';
import { useState } from 'react';
import BallAndBasket from "./components/BallAndBasket"

function App () {

  const [sliderHorzValue, setHorzValue] = useState(50);
  const [sliderVertValue, setVertValue] = useState(50);

  const handleChangeHorizontal = value => {
    setHorzValue(value.target.value);
  }

  const handleChangeVertical = value => {
    setVertValue(value.target.value);
  }

    return (
          <div className="App">
            <header className="App-header">
              <div className="main-container">
                <BallAndBasket
                    leftvalue={-sliderHorzValue}
                    bottomvalue={sliderVertValue}
                />
              </div>
              <div className="slider-horizontal">
                <Slider 
                  min={1}
                  max={99}
                  defaultValue={50}
                  onChange={handleChangeHorizontal}
                />
              </div>
              <div className="slider-vertical">
                <Slider 
                  min={-1}
                  max={96}
                  defaultValue={50} 
                  orientation="vertical"
                  onChange={handleChangeVertical}
                />
              </div>
            </header>
          </div>
          );
}

export default App;