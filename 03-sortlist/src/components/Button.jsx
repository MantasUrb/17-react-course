const Button = props => {
        const action = props.action
        return (          
            <button className='myButton' onClick={() => props.sort(action)}> 
                {props.name}
            </button>
        )
    }

export default Button;