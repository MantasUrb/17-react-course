import './App.css';
// import Message from './components/Message'
// import Effect from './components/Effect'
import Countdown from './components/Countdown'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countdown/>
        {/* <Effect vardas1={"Michael"} vardas2={"Jessy"}/> */}
        {/* <Message/> */}
      </header>
    </div>
  );
}

export default App;