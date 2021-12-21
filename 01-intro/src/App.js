import './App.css';
// import ClasicBox from './components/ClasicBox';
// import ClassicForm from './components/ClassicForm';
import VolumeSlider from './components/VolumeSlider';
// import BoxUniversal from './components/BoxUniversal';
// import TwoButtonBox from './components/TwoButtonBox';
import InsideBigBoxLietuva from './components/InsideBigBoxLietuva';
import InsideBigBoxEstija from './components/InsideBigBoxEstija';
import BoxUl from './components/BoxUl';
import  { normalStyle, fancyStyle} from './shared/styles';
// import { getRandomInt } from './functions';

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

function App() {
  // <------------- komponentas
  return (
    <div className="App">
      <header className="App-header">
        <BoxUl color={"red"} number={3} boxStyle={normalStyle} />
        {/* <BoxUniversal
          color={"white"}
          number={getRandomInt(10)}
          boxStyle={fancyStyle}
        /> */}
        {/* <ClasicBox button1Title={'MAKE RED'} button2Title={'MAKE GREEN'} />
        <TwoButtonBox/> */}
        <VolumeSlider/>
        <InsideBigBoxLietuva/>
        <InsideBigBoxEstija/>
        

      </header>
    </div>
  );
}

export default App;