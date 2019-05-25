import React, { Component } from "react";
import Firebase from "../Firebase";
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
    const db = Firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    let itemArr = this.state.menuB.filter(
      value => this.state.menuB[value.idx].data.value > 0
    );
    // const order = {
    //   items: itemArr,
    //   table: this.state.table,
    //   total: this.sumTotal()
    // };
    const userRef = db.collection("orders").add({
      items: itemArr,
      table: this.state.table,
      total: this.sumTotal()
    });
    // console.log(order);
  };

  render() {
    return (
      <main>
        <div className="">
          <h2>Desayuno</h2>
          <label>Mesa Núm: </label>
          <input
            name="table"
            onChange={this.onChange}
            type="text"
            placeholder="#mesa"
          />
        </div>
        <div className="flex-row">
          <Order
            menuB={this.state.menuB}
            sumTotal={this.sumTotal}
            getOrder={this.getOrder}
            getsubtotal={this.getsubtotal}
          />
          <Menu
            menuB={this.state.menuB}
            handleDecrement={this.handleDecrement}
            handleIncrement={this.handleIncrement}
            getsubtotal={this.getsubtotal}
            reset={this.reset}
          />
        </div>
      </main>
    );
  }
}

export default MenuBreakfast;
