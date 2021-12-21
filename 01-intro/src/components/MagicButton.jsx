import { Component } from 'react';

class MagicButton extends Component {
    constructor() {
      super();
    //   this.state = {
    //     color: 'orange',
    //   };
      console.log("CONSTRUCT <-- MagicButton" );
      // this.doClick = this.doClick.bind(this); // <--- pririsam funcija
    }

    // changeColor = () => {
    //     if ('orange' === this.state.color) {
    //         this.setState({color: 'blue'});
    //     } else {
    //         this.setState({color: 'orange'});
    //     }
    // };

    changeColor = () => {
        this.props.action()
    }
  
    render() {
      return (
        <button 
            className='myButton' 
            style={{backgroundColor: this.props.color}}
            onClick={this.changeColor}>
            {this.props.bname}
        </button>
      )
    }
  }

export default MagicButton;