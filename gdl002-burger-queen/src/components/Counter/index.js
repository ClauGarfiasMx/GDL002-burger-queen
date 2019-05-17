import React, { Component } from "react";
import Button from "../Button";

class Counter extends Component {
  state = {
    item: this.props.name,
    count: this.props.value,
    price:this.props.price
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  formatCount() {
    const { count } = this.state;
    if (count < 0) {
      this.reset();
    }
    return count === 0 ? <label>Cant.</label> : <label>{count}</label>;
  }
  render() {
    return (
      <div>
        <label>{this.state.item}</label>
        <Button
          name="+"
          action={this.handleIncrement}
          extraClassName="counter-btn"
        />
        <Button
          name="-"
          action={this.handleDecrement}
          extraClassName="couunter-btn"
        />
        <span>{this.formatCount()}</span>
        <Button
          name="borrar"
          action={this.reset}
          extraClassName="counter-btn"
        />
         <label>{this.state.price}</label>
      </div>
    );
  }
}

export default Counter;
