import { Component } from 'react';

// import { normalStyle } from '../shared/styles';

class ClassicForm extends Component {
    constructor() {
      super();
      this.state = {
        color: "white",
        textInput: "",
        textAreaInput: "",
        selectInput: "444",
      };
    }

    textInputChange = (event) => {
      console.log(event.target.value);
      this.setState({textInput: event.target.value})
    }

    textAreaInputChange = (event) => {
      console.log(event.target.value);
      this.setState({textAreaInput: event.target.value})
    }

    selectInputChange = (event) => {
      console.log(event.target.value);
      this.setState({selectInput: event.target.value})
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log("SUBMIT")
    };
  
    render() {
      return (
        <div className="form-box" style={{ borderColor: this.state.color }}>

            <input 
                type="text" 
                value={this.state.textInput} 
                readOnly />

              <input 
                type="text" 
                value={this.state.textInput} 
                onChange={this.textInputChange} />

              <textarea 
                value={this.state.textAreaInput} 
                onChange={this.textAreaInputChange} >
              </textarea>

              <select 
                value={this.state.selectInput} 
                onChange={this.selectInputChange}>
                  <option value="101">101</option>
                  <option value="DuŠimtaiPenki">DuŠimtaiPenki</option>
                  <option value="444">444</option>
                  <option value="2x5">2x5</option>
              </select>

              <input type="file" />

              <button className="myButton" type="submit" onClick={this.submitForm}>OTHER</button>

        </div>
      )
    }
  }

export default ClassicForm;