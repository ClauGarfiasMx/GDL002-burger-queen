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
      table: "",
      notes: "",
      total: 0
    };
  }

  handleIncrement = idx => {
    const nextState = this.state;
    nextState.menuB[idx].qty++;
    this.setState(nextState);
  };
  handleDecrement = idx => {
    const nextState = this.state;
    if (this.state.menuB[idx].qty <= 0) {
      nextState.menuB[idx].qty = 0;
    } else {
      nextState.menuB[idx].qty--;
    }
    this.setState(nextState);
  };
  reset = idx => {
    const nextState = this.state;
    nextState.menuB[idx].qty = 0;
    this.setState(nextState);
  };
  getsubtotal = (idx, cant) => {
    const nextState = this.state;
    nextState.menuB[idx].subtotal = cant;
    this.setState(nextState);
  };
  onChangeTable = event => {
    return this.setState({ table: event.target.value });
  };
  onChangeNotes = event => {
    return this.setState({ notes: event.target.value });
  };

  sumTotal = () => {
    let total = this.state.menuB
      .filter(value => this.state.menuB[value.idx].qty > 0)
      .reduce((res, e) => {
        return res + e.subtotal;
      }, 0);
    return total;
  };

  getOrder = () => {
    const db = Firebase.firestore();
    // db.settings({
    //   timestampsInSnapshots: true
    // });
    let itemArr = this.state.menuB.filter(
      value => this.state.menuB[value.idx].qty > 0
    );
    // const userRef =
    db.collection("orders").add({
      items: itemArr,
      notes: this.state.notes,
      table: this.state.table,
      total: this.sumTotal()
    });
  };

  render() {
    return (
      <main>
        <h2>Desayuno</h2>

        {/* <div className="table-box">
          <h2>Desayuno</h2>
          <label>Mesa No: </label>
          <input
            onChangeTable={this.onChangeTable}
            type="text"
            placeholder="#mesa"
            value={this.state.table}
          />
        </div> */}
        <div className="flex-row">
          <Order
            onChangeTable={this.onChangeTable}
            table={this.state.table}
            onChangeNotes={this.onChangeNotes}
            notes={this.state.notes}
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
