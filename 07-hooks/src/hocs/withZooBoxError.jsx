import ErrorComponent from '../components/ErrorComponent'


//LONG WAY
// function withZooBoxError (Component) {
//     return function (props) {
//         return !props.zooList
//         ? <div className='bigbox'><h3 style={{color:'red'}}>Error - No zooList</h3></div>
//         : <Component {...props}/>
//     }
// }

//SHORT WAY
const withZooBoxError = (Component) => (props) =>
    !props.zooList
        ? <ErrorComponent/>
        : <Component {...props}/>

export default withZooBoxError;