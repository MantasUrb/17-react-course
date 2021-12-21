import { Component } from 'react';

import BoxDigit from './BoxDigit';
import ColorButton from './ColorButton';
import ColorHolder from './ColorHolder';

import { normalStyle } from '../shared/styles';

class ClasicBox extends Component {
    constructor() {
      super();
      this.state = {
        clock: new Date(),
        color: "white",
      };
      console.log("CONSTRUCT <-- ClasisBox" );
      // this.doClick = this.doClick.bind(this); // <--- pririsam funcija
    }
  
    componentDidMount() {
      console.log("MOUNT");
      this.timerID = setInterval(() => this.ticTac(), 100000);
    }
  
    componentWillUnmount() {
      console.log("UN-MOUNT");
      clearInterval(this.timerID);
    }
  
    ticTac() {
      console.log("TIC-TAC");
      this.setState({ clock: new Date() });
    }

    doClick3 = (color) => {
        this.setState({color});
    };
  
    render() {
      console.log("RENDER <-- ClasicBox");
      return (
        <div className="box" style={{ borderColor: this.state.color }}>
          <BoxDigit
            boxStyle={normalStyle}
            number={this.state.clock.toLocaleTimeString()}
          />
          <button className="myButton" onClick={() => this.doClick3('red')}>
          {this.props.button1Title}
          </button>
          <ColorButton actionMethod={this.doClick3} title={this.props.button2Title}></ColorButton>
          <ColorHolder showColor={this.state.clock.getSeconds()%2}/>
        </div>
      )
    }
  }

export default ClasicBox;



    // doClick() {
    //   console.log('Hello, Button Was Pressed!', this)
    //   this.setState({color: 'red '})
    // }
  
    // doClick = () => {
    //   // console.log('Hello, Button Was Pressed!', this)
    //   if (this.state.color === "red") {
    //     this.setState({ color: "white" });
    //   } else {
    //     this.setState({ color: "red" });
    //   }
    // };
    // doClick2 = () => {
    //   // console.log('Hello, Button Was Pressed!', this)
    //   if (this.state.color === "yellow") {
    //     this.setState({ color: "orange" });
    //   } else {
    //     this.setState({ color: "yellow" });
    //   }
    // };