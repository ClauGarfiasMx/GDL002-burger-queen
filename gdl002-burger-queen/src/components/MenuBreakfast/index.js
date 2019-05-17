import React, { Component } from "react";
import Counter from "../Counter";

class MenuBreakfast extends Component {
  state = {
    menu: [
      { id: "b01", name: "Café Americano", value: 0, price: 5 },
      { id: "b02", name: "Café con Leche", value: 0, price: 7 },
      { id: "b03", name: "Jugo de Frutas Natural", value: 0, price: 10 },
      { id: "b04", name: "Sandwich de Jamón y Queso", value: 0, price: 10 }
    ]
  };
  render() {
    return (
      <section>
        <h2>Menú Desayuno</h2>
        {this.state.menu.map(counter => (
          <Counter
            key={counter.id}
            name={counter.name}
            value={counter.value}
            price={`$${counter.price}`}
          />
        ))}
      </section>
    );
  }
}

export default MenuBreakfast;
