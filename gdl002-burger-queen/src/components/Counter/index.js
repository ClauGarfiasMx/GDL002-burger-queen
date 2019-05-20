import React, { Component } from "react";
import Button from "../Button";

class Counter extends Component {
  render() {
    return (
      <div>
        <label>{this.props.name}</label>
        <label>{this.props.price}</label>
        {/* <Button
          name="+"
          action={this.props.handleIncrement}
          extraClassName="counter-btn"
        /> */}
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
        />
        <label>{this.props.value * this.props.price}</label>
      </div>
    );
  }
}

export default Counter;
