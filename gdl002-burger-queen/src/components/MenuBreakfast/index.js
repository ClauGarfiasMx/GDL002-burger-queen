import React, { Component } from "react";
import Order from "./Order";
import Menu from "./Menu";
import { menuB } from "../Data/BreakfastMenu.json";

class MenuBreakfast extends Component {
  constructor() {
    super();
    this.state = {
      menuB,
      table: 0,
      total: 0
    };
  }

  handleIncrement = idx => {
    const nextState = this.state;
    nextState.menuB[idx].data.value++;
    this.setState(nextState);
  };
  handleDecrement = idx => {
    const nextState = this.state;
    if (this.state.menuB[idx].data.value <= 0) {
      nextState.menuB[idx].data.value = 0;
    } else {
      nextState.menuB[idx].data.value--;
    }
    this.setState(nextState);
  };
  reset = idx => {
    const nextState = this.state;
    nextState.menuB[idx].data.value = 0;
    this.setState(nextState);
  };
  getsubtotal = (idx, cant) => {
    const nextState = this.state;
    nextState.menuB[idx].data.subtotal = cant;
    this.setState(nextState);
  };
  onChange = event => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  sumTotal = () => {
    let total = this.state.menuB
      .filter(value => this.state.menuB[value.idx].data.value > 0)
      .reduce((res, e) => {
        return res + e.data.subtotal;
      }, 0);
    return total;
  };

  getOrder = () => {
    let itemArr = this.state.menuB.filter(
      value => this.state.menuB[value.idx].data.value > 0
    );
    const order = {
      items: itemArr,
      table: this.state.table,
      total: this.sumTotal()
    };
    console.log(order);
  };

  render() {
    return (
      <main className="flex-row">
        <Menu
          menuB={this.state.menuB}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          getsubtotal={this.getsubtotal}
          reset={this.reset}
        />

        <Order
          menuB={this.state.menuB}
          sumTotal={this.sumTotal}
          getOrder={this.getOrder}
        />
      </main>
    );
  }
}

export default MenuBreakfast;
