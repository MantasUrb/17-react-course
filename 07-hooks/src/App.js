import './App.css'
// import Message from './components/Message'
// import Effect from './components/Effect'
// import Countdown from './components/Countdown'
import Users from './components/Users'
import Posts from './components/Posts'

import API from './shared/jsonplaceholder'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Countdown/> */}
        {/* <Effect vardas1={"Michael"} vardas2={"Jessy"}/> */}
        {/* <Message/> */}
        <Users/>
        <Posts/>
      </header>
    </div>
  );
}

export default App;