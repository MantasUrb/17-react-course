// function withZooBoxError (Component) {
//     return function (props) {
//         return !props.zooList
//         ? <div className='bigbox'><h3 style={{color:'red'}}>Error - No zooList</h3></div>
//         : <Component {...props}/>
//     }
// }

const withZooBoxError = (Component) => (props) =>
    !props.zooList
        ? <div className='bigbox'><h3 style={{color:'red'}}>Error - No zooList</h3></div>
        : <Component {...props}/>

export default withZooBoxError;