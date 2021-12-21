import { Component } from 'react';
import MagicButton from './MagicButton';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

class TwoButtonBox extends Component {
    constructor() {
      super();
      this.state = {
        color1: 'red',
        color2: 'red'
      };
      console.log("CONSTRUCT <-- TwoButtonBox" );
      // this.doClick = this.doClick.bind(this); // <--- pririsam funcija
    }

    changeColor1 = () => {
        if ('red' === this.state.color1) {
            this.setState({color1: 'orange'});
        } else {
            this.setState({color1: 'red'});
        }
    };
  
    changeColor2 = () => {
        if ('red' === this.state.color2) {
            this.setState({color2: 'orange'});
        } else {
            this.setState({color2: 'red'});
        }
    };

    render() {
      return (
        <div className="box" style={{borderColor: this.state.color}}>
          <MagicButton 
            action={this.changeColor1}
            color={this.state.color2} 
            bname={'ONE'}>
        </MagicButton>
        <MagicButton 
            action={this.changeColor2}
            color={this.state.color1} 
            bname={'TEN'}>
        </MagicButton>
        <Button color="secondary">MATERIAL UI</Button>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        </div>
      )
    }
  }

export default TwoButtonBox;