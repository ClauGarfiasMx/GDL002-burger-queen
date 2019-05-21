import React, { Component } from "react";
// import Button from "../Button";

class Counter extends Component {
  render() {
    return (
      <div>
        <p> Artículo: {this.props.name}</p>
        <p> Precio: ${this.props.price}</p>
        <p> Cantidad: ${this.props.value}</p>
        {/* <Button action={this.props.handleIncrement} name="+" /> */}
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
