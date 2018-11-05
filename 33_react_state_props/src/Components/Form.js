import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    img: "",
    category: "Beyonce"
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="form-div">
        <h1>Add a card!</h1>
        <form onSubmit={e => this.props.submitHandler(e, this.state)}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.changeHandler}
            name="name"
          />
          <input
            type="text"
            placeholder="image source"
            value={this.state.image}
            onChange={this.changeHandler}
            name="img"
          />
        <select onChange={this.changeHandler} name="category">
            <option value="Beyonce">Beyonce</option>
            <option value="Jay-Z">Jay-Z</option>
          </select>
          <button>Lay Tha Slay</button>
        </form>
      </div>

    );
  }
}

export default Form;
