import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
 
class VolumeSlider extends Component {
  constructor() {
    super()
    this.state = {
      volumeLeft: 0,
      volumeRight: 0,
    }
  }
 
  handleOnChangeLeft = (value) => {
    console.log('current', value);
    this.setState({
      volumeLeft: value
    })
  }
 
  handleOnChangeRight = (value) => {
    console.log();
    this.setState({
        
      volumeRight: value
    })
  }

  onChangeComplete = (value) => {
      console.log('end', value);
  }


  render() {
    return (
        <div className='box line'>
            <div className='slider-box'>
                <span>LEFT</span>
                <Slider
                    value={this.state.volumeLeft}
                    orientation="vertical"
                    onChange={this.handleOnChangeLeft}
                    onChangeComplete = {this.onChangeComplete}
                    max={10}
                    labels={{ 0: 'Low', 5: 'Medium', 10: 'High'}}
                /> 
            </div>
            <div className='slider-box'>
                <span>RIGHT</span>
                <Slider
                    value={this.state.volumeRight}
                    orientation="vertical"
                    onChange={this.handleOnChangeRight}
                    labels={{ 0: '0', 25: '25', 50: '50', 75: '75', 100: '100'}}
                />
            </div>
        </div>
    )
  }
}

export default VolumeSlider;