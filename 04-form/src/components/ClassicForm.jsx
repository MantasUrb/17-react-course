import { Component } from "react";

class ClassicForm extends Component {
  constructor() {
    super();
    this.state = {
      textAreaInput: "",
      color: "white",
      fontSize: "15px",
    };
  }

  textAreaInputChange = (event) => {
    this.setState({ textAreaInput: event.target.value }); // <--- copying the text
    if (this.state.textAreaInput === "") { // <--- checking if textarea is clear and resetting the style
      this.setState({
        color: "white",
        fontSize: "15px",
      });
    }
  };

  changeCopyStyle = () => {
    this.setState({
      color: "green",
      fontSize: "35px",
    });
  };

  render() {
    return (
      <div className="form-box">
        <div
          onChange={this.resetStyle}
          className="text-copy"
          style={{
            color: this.state.color,
            fontSize: this.state.fontSize,
          }}
        >
          {this.state.textAreaInput}
        </div>
        <textarea
          type="text"
          value={this.state.textAreaInput}
          onChange={this.textAreaInputChange}
        ></textarea>
        <button
          className="my-button"
          type="submit"
          onClick={this.changeCopyStyle}
        >
          CHANGE DAMN STYLE!
        </button>
      </div>
    );
  }
}

export default ClassicForm;
