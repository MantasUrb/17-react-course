import "./App.css";
import { Component } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// function BoxOne () { // <------------- komponentas
//   return (
//     <div className="box">1</div>
//     );
// }

// const BoxTwo = () => { // <------------- komponentas
//   return (
//     <div className="box">2</div>
//   );
// }

// const BoxThree = () => { // <------------- komponentas
//   return (
//     <div className="box">3</div>
//   );
// }

// const BoxRandom = () => { // <------------- komponentas
//   return (
//     <div className="box">
//       <span style={fancyStyle}>
//         {getRandomInt(10)}
//       </span>
//     </div>
//   );
// }

const fancyStyle = {
  fontSize: "300%",
  color: "yellow",
};

const normalStyle = {
  fontSize: "100%",
  color: "white",
};

const BoxDigit = (props) => {
  // <------------- komponentas
  return <span style={props.boxStyle}>{props.number}</span>;
};

const BoxUniversal = (props) => {
  // <------------- komponentas
  return (
    <div className="box" style={{ borderColor: props.color }}>
      <BoxDigit number={props.number} boxStyle={props.boxStyle} />
    </div>
  );
};

class ClasicBox extends Component {
  constructor() {
    super();
    this.state = {
      clock: new Date(),
      color: "white",
    };
    console.log("CONSTRUCT");
    // this.doClick = this.doClick.bind(this); // <--- pririsam funcija
  }

  componentDidMount() {
    console.log("MOUNT");
    this.timerID = setInterval(() => this.ticTac(), 1000);
  }

  componentWillUnmount() {
    console.log("UN-MOUNT");
    clearInterval(this.timerID);
  }

  ticTac() {
    console.log("TIC-TAC");
    this.setState({ clock: new Date() });
  }

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

  doClick3 = (color) => {
      this.setState({color});
  };

  render() {
    console.log("RENDER");
    return (
      <div className="box" style={{ borderColor: this.state.color }}>
        <BoxDigit
          boxStyle={normalStyle}
          number={this.state.clock.toLocaleTimeString()}
        />
        <button className="myButton" onClick={() => this.doClick3('red')}>
          MAKE RED
        </button>
        <button className="myButton" onClick={() => this.doClick3('green')}>
          MAKE GREEN
        </button>
        <button className="myButton" onClick={() => this.doClick3('white')}>
          MAKE WHITE
        </button>
      </div>
    )
  }
}

function App() {
  // <------------- komponentas
  return (
    <div className="App">
      <header className="App-header">
        <BoxUniversal color={"red"} number={3} boxStyle={normalStyle} />
        <BoxUniversal
          color={"white"}
          number={getRandomInt(10)}
          boxStyle={fancyStyle}
        />
        <ClasicBox color={"orange"} />
      </header>
    </div>
  );
}

export default App;