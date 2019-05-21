import React, { Component } from "react";
import Counter from "../Counter";
import Button from "../Button";
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
  subtotal = idx => {
    const nextState = this.state;
    nextState.menuB[idx].data.subtotal =
      nextState.menuB[idx].data.price * nextState.menuB[idx].data.value;
    this.setState(nextState);
  };
  onChange = event => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  getTotal = () => {
    return this.setState({ total: 10 });
  };
  getOrder = () => {
    const order = {
      items: this.state.menuB.filter(
        value => this.state.menuB[value.idx].data.value > 0
      ),
      table: this.state.table,
      total: this.getTotal()
    };
    console.log(order);
  };
  render() {
    return (
      <main className="flex-row">
        <section>
          <h2>Menú Desayuno</h2>
          <label>Mesa Núm:</label>
          <input
            name="table"
            onChange={this.onChange}
            type="text"
            placeholder="# Mesa"
          />
          {this.state.menuB.map(counter => (
            <div key={counter.idx}>
              <Counter
                name={counter.data.name}
                value={counter.data.value}
                price={counter.data.price}
              />
              <Button
                action={() => {
                  this.handleIncrement(counter.idx);
                }}
                name="+"
              />
              <Button
                action={() => {
                  this.handleDecrement(counter.idx);
                }}
                name="-"
              />
              <Button
                action={() => {
                  this.reset(counter.idx);
                }}
                name="borrar"
              />
            </div>
          ))}
        </section>
        <section>
          <h2>Orden</h2>
          {this.state.menuB
            .filter(value => this.state.menuB[value.idx].data.value > 0)
            .map(order => {
              return (
                <div key={order.idx}>
                  <p>
                    {order.data.name}: {order.data.value}
                  </p>
                  <p className="subtotalP">
                    Sub-Tot: ${order.data.price * order.data.value}
                  </p>
                </div>
              );
            })}
          <p>Total:</p>
          <Button action={() => this.getOrder()} name="Enviar" />
        </section>
      </main>
    );
  }
}

export default MenuBreakfast;
