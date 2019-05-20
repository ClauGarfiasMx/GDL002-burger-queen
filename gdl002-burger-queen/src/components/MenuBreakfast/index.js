import React, { Component } from "react";
import Counter from "../Counter";
import Button from "../Button";

class MenuBreakfast extends Component {
  state = {
    menu: [
      { id: "0", data: { name: "Café Americano", value: 0, price: 5 } },
      { id: "1", data: { name: "Café con Leche", value: 0, price: 7 } },
      {
        id: "2",
        data: { name: "Jugo de Frutas Natural", value: 0, price: 10 }
      },
      {
        id: "3",
        data: { name: "Sandwich de Jamón y Queso", value: 0, price: 10 }
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

  render() {
    return (
      <main>
        <section>
          <h2>Menú Desayuno</h2>
          {this.state.menu.map(counter => (
            <div>
              <Counter
                key={counter.id}
                id={counter.id}
                name={counter.data.name}
                value={counter.data.value}
                price={counter.data.price}
                // handleIncrement={this.handleIncrement}
                // handleDecrement={this.handleDecrement}
                // reset={this.reset}
              />
              <Button
                action={() => {
                  this.handleIncrement(counter.id);
                }}
                name="++"
              />
              <Button
                action={() => {
                  this.handleDecrement(counter.id);
                }}
                name="--"
              />
              <Button
                action={() => {
                  this.reset(counter.id);
                }}
                name="borrar"
              />
            </div>
          ))}
        </section>
        {/* <section>
          <h2>Orden</h2>
          {this.state.menu
            .filter(value => this.state.menu[0].value > 0)
            .map(order => {
              return (
                <p>
                  {order.name}
                  {order.value}
                </p>
              );
            })}
        </section> */}
      </main>
    );
  }
}

export default MenuBreakfast;
