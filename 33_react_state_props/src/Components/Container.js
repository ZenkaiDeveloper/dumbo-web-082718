import React, { Component } from "react";
import Card from "./Card";
import Form from "./Form";


class Container extends Component {

  printCards = () =>{
    return this.props.info.map(info=>{
      return <Card key={info.id} info={info}/>
    })
  }

  render(){
    return(
      <div  className="container">
        {this.printCards()}
      </div>
    )
  }
}

export default Container;
