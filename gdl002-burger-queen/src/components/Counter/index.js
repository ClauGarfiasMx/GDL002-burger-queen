import React, { Component } from "react";
// import Button from "../Button";

class Counter extends Component {
  render() {
    return (
      <div>
        <p> Artículo: {this.props.name}</p>
        <p> Precio: ${this.props.price}</p>
        <p> Cantidad: {this.props.value}</p>
        <label>Sub-Tot: ${this.props.value * this.props.price}</label>
      </div>
    );
  }
}

export default Counter;
