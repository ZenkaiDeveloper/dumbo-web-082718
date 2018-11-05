import React, { Component } from "react";
import "./App.css";
import Container from "./Components/Container";
import Form from './Components/Form'

class App extends Component {
  state={
    bey:[],
    jay:[]
  }


  submitHandler = (e, obj)=>{
    e.preventDefault();
    if (obj.category === "Jay-Z") {
      let arr = [...this.state.jay,obj]
      this.setState({
        jay:arr
      })
    }else if (obj.category === "Beyonce") {
      let arr = [...this.state.bey,obj]
      this.setState({
        bey:arr
      })
    }
  }

  getBeyImgs = ()=>{
    fetch(`http://localhost:3001/bey`)
      .then(resp=>resp.json())
      .then((arr)=>{
        this.setState({
          bey: arr
        })
      })
  }

  getJayImgs = ()=>{
    fetch(`http://localhost:3001/jay`)
      .then(resp => resp.json())
      .then((arr)=>{
        this.setState({
          jay: arr
        })
      })
  }

  componentDidMount(){
    this.getBeyImgs();
    this.getJayImgs();
  }

  render() {
    return (
      <div>
        <Form submitHandler={this.submitHandler} />
        <div>
          <Container info={this.state.bey} />
        </div>
        <div>
          <Container info={this.state.jay} />
        </div>
      </div>
    )
  }
}



export default App;
