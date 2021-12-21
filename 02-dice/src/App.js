import './App.css';
import {Component} from 'react';
import Box from './components/Box';
import Button from './components/Button';

import {bigNumber} from './shared/styles';
import {getRandomInt} from './functions';

class App extends Component {

  constructor() {
    super();
    // this.rollDice = this.rollDice.bind(this); <-- bind not needed if arrow function is used in the callback function(line number: 33!)
    this.state = { 
      random: 0 
    };
  }

  rollDice() {
    let rand = getRandomInt(6);
    this.setState({random: rand});
  }
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Box
            number={this.state.random} 
            numberStyle={bigNumber}>
          </Box>
          <Button
            handleClick={() => this.rollDice()}>
          </Button>
        </header>
    </div>
    );
  }
}

export default App;