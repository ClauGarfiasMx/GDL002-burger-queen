import React, { Component } from "react";
// import Button from "../Button";

class Counter extends Component {
  render() {
    return (
      <div>
        <label>Item:{this.props.name} </label>
        <label>Precio:{this.props.price} </label>
        <label>Cantidad:{this.props.value} </label>
        {/* <Button
          name="+"
          action={this.props.handleIncrement}
          extraClassName="counter-btn"
        />
        <Button
          name="-"
          action={this.props.handleDecrement}
          extraClassName="counter-btn"
        />
        <span>{this.props.value}</span>
        <Button
          name="borrar"
          action={this.props.reset}
          extraClassName="counter-btn"
        /> */}
        <label>Subtotal:{this.props.value * this.props.price}</label>
      </div>
    );
  }
}

export default Counter;
