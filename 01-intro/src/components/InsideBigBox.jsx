import { Component } from 'react';
import BigBox from "./BigBox";

class InsideBigBox extends Component {
    constructor() {
      super();
      this.state = {
      };
    }
    
    render() {
      return (
        <BigBox>
            <div className='box-title'>
              {this.props.title}
            </div>
            <div className='box-text'>
              {this.props.text}
            </div>
        </BigBox>
        )
    }
}

export default InsideBigBox;