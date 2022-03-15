import './App.css';
// import Message from './components/Message';
// import Effect from './components/Effect';
// import Countdown from './components/Countdown';
// import Users from './components/Users';
// import Posts from './components/Posts';
// import Gallery from './components/Gallery';
import ZooBox from './components/Zoobox';
import withZooBoxError from './hocs/withZooBoxError';
import withZooBoxEmpty from './hocs/withZooBoxEmpty';

// INITIATE DIFFERENT DATA
// const zooList = [{id:30, name:'penguin'}, {id: 38, name:'snake'}];
const zooList = [];
// const zooList = null;

// const ZooBox2 = withZooBoxEmpty(ZooBox);
// const ZooBox3 = withZooBoxError(ZooBox2);

const ZooBoxFinal = withZooBoxError(withZooBoxEmpty(ZooBox));
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Countdown/> */}
        {/* <Effect vardas1={"Michael"} vardas2={"Jessy"}/> */}
        {/* <Message/> */}
        {/* <Users/> */}
        {/* <Posts/> */}
        {/* <Gallery/>  */}
        <ZooBoxFinal zooList={zooList}/>
      </header>
    </div>
  );
}

export default App;