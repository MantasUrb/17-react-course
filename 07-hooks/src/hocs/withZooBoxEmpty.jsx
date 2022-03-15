const withZooBoxEmpty = (Component) => (props) =>
    !props.zooList.length
        ? <div className='bigbox'><h3 style={{color:'blue'}}>Error - No Animals in this ZOO!</h3></div>
        : <Component {...props}/>

export default withZooBoxEmpty;