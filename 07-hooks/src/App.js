import './App.css';

import ZooBox from './hocs/withZooBoxCompose';
// import withZooBoxError from './hocs/withZooBoxError';
// import withZooBoxEmpty from './hocs/withZooBoxEmpty';
// import withZooBoxList from './hocs/withZooBoxList';

// import Message from './components/Message';
// import Effect from './components/Effect';
// import Countdown from './components/Countdown';
// import Users from './components/Users';
// import Posts from './components/Posts';
// import Gallery from './components/Gallery';


// INITIATE DIFFERENT DATA
// const zooList = [{id:30, name:'penguin'}, {id: 38, name:'snake'}];
// const zooList = [];
const zooList = null;

//ONE WAY
// const ZooBox2 = withZooBoxEmpty(ZooBox);
// const ZooBox3 = withZooBoxError(ZooBox2);

//SECOND WAY
// const ZooBoxFinal = withZooBoxError(withZooBoxEmpty(ZooBox));

//THIRD WAY WITH RECOMPOSE
 
function App() {  //<----- MAIN COMPONENT
  return (
    <div className="App">
      <header className="App-header">
        {/* <Countdown/> */}
        {/* <Effect vardas1={"Michael"} vardas2={"Jessy"}/> */}
        {/* <Message/> */}
        {/* <Users/> */}
        {/* <Posts/> */}
        {/* <Gallery/>  */}
        <ZooBox zooList={zooList}/>
      </header>
    </div>
  );
}

export default App;