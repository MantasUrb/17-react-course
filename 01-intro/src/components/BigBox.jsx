import { Component } from 'react';

class BigBox extends Component {
    constructor() {
      super();
      this.state = {
        color: "orange",
      };
    }
    
    render() {
      return (
        <div className="box text" style={{ borderColor: this.state.color }}>
            {this.props.children}
        </div>
      )
    }
  }

export default BigBox;