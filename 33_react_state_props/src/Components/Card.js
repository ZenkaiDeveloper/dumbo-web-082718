import React from "react";

const Card = props => {
  return (
    <div>
      <h1>{props.info.name}</h1>
      <img src={props.info.img} alt="" onClick={props.clickHandler} />
    </div>
  );
};

export default Card;
