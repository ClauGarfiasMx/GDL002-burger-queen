import React, { Component } from "react";
import Counter from "../Counter";
import Button from "../Button";

class MenuBreakfast extends Component {
  state = {
    menu: [
      {
        index: "0",
        data: { name: "Café Americano", value: 0, price: 5, subtotal: 0 }
      },
      {
        index: "1",
        data: { name: "Café con Leche", value: 0, price: 7, subtotal: 0 }
      },
      {
        index: "2",
        data: {
          name: "Jugo de Frutas Natural",
          value: 0,
          price: 10,
          subtotal: 0
        }
      },
      {
        index: "3",
        data: {
          name: "Sandwich de Jamón y Queso",
          value: 0,
          price: 10,
          subtotal: 0
        }
      }
    ]
    // subtotal: [(this.menu.subtotal = this.menu.value * this.menu.price)]
  };

  handleIncrement = id => {
    // console.log(this.state.menu[id]);
    const nextState = this.state;
    nextState.menu[id].data.value++;
    this.setState(nextState);
  };
  handleDecrement = id => {
    const nextState = this.state;
    if (this.state.menu[id].data.value <= 0) {
      nextState.menu[id].data.value = 0;
    } else {
      nextState.menu[id].data.value--;
    }
    this.setState(nextState);
  };
  reset = id => {
    const nextState = this.state;
    nextState.menu[id].data.value = 0;
    this.setState(nextState);
  };
  subtotal = id => {
    const nextState = this.state;
    nextState.menu[id].data.subtotal =
      nextState.menu[id].data.price * nextState.menu[id].data.value;
    this.setState(nextState);
  };

  render() {
    return (
      <main className="flex-row">
        <section>
          <h2>Menú Desayuno</h2>
          {this.state.menu.map(counter => (
            <div key={counter.index}>
              <Counter
                id={counter.id}
                name={counter.data.name}
                value={counter.data.value}
                price={counter.data.price}
                // handleIncrement={this.state.handleIncrement}
              />
              <Button
                action={() => {
                  this.handleIncrement(counter.index);
                }}
                name="+"
              />
              <Button
                action={() => {
                  this.handleDecrement(counter.index);
                }}
                name="-"
              />
              <Button
                action={() => {
                  this.reset(counter.index);
                }}
                name="borrar"
              />
            </div>
          ))}
        </section>
        <section>
          <h2>Orden</h2>
          {this.state.menu.map(order => {
            // console.log(order.data);
            return (
              <p key={order.index}>
                {order.data.name}: {order.data.value} subtotal:
                {order.data.price * order.data.value}
              </p>
            );
          })}
          <p>Total:</p>
        </section>
      </main>
    );
  }
}

export default MenuBreakfast;
