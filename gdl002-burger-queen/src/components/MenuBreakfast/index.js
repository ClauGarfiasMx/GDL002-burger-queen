import React, { Component } from "react";
import Counter from "../Counter";
import Button from "../Button";

class MenuBreakfast extends Component {
  state = {
    menu: [
      { id: "b01", data: { name: "Café Americano", value: 0, price: 5 } },
      { id: "b02", data: { name: "Café con Leche", value: 0, price: 7 } },
      {
        id: "b03",
        data: { name: "Jugo de Frutas Natural", value: 0, price: 10 }
      },
      {
        id: "b04",
        data: { name: "Sandwich de Jamón y Queso", value: 0, price: 10 }
      }
    ]
    // subtotal: [(this.menu.subtotal = this.menu.value * this.menu.price)]
  };

  handleIncrement = id => {
    console.log(id);
    const nextState = this.state;
    nextState.menu[id].data.value++;
    this.setState(nextState);
  };
  handleDecrement = () => {
    console.log("handleDecrement parent");
    const nextState = this.state;
    nextState.menu[0].data.value--;
    this.setState(nextState);
  };
  reset = () => {
    console.log("reset parent");
    const nextState = this.state;
    nextState.menu.data.value = 0;
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
