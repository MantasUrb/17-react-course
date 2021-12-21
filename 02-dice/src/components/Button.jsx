import {Component} from 'react';

class Button extends Component {

    buttonTriggered = () => {
        this.props.handleClick()
    }
    render() {
        return (          
        <div className='box'>
            <button className='myButton' onClick={this.buttonTriggered}> 
                ROLL THE DICE!
            </button>
        </div>)
    }
}

export default Button;