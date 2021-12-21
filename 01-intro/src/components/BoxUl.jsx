import { Component } from 'react';

import Li from './Li';
import { letters } from '../shared/uldata';
// import { digits } from '../shared/uldata';
import { v4 as uuidv4 } from 'uuid';

class BoxUl extends Component {
    constructor() {
      super();
      this.state = {
        color: "green",
      };
      console.log("CONSTRUCT <-- ClasisBox" );
      // this.doClick = this.doClick.bind(this); // <--- pririsam funcija
    }
  
    render() {
      console.log("RENDER <-- ClasicBox");
      return (
        <ul className="box" style={{ borderColor: this.state.color }}>
          {/* {
            digits.map((digit) => <Li key={digit.id} li={digit.d}></Li>)
          } */}
          {
            letters.map((letter) => <Li key={uuidv4()} li={letter.d}></Li>)
          }
        </ul>
      )
    }
  }

export default BoxUl;