import React, { Component } from "react";
// import Button from "../Button";

class Counter extends Component {
  render() {
    return (
      <div>
        <p> Artículo: {this.props.name}</p>
        <p> Precio: ${this.props.price}</p>
        <p> Cantidad: {this.props.value}</p>
        <label>Sub-Tot: ${this.props.value * this.props.price}</label>
        <div>
          {/* <Button
            action={() => {
              this.props.handleIncrement(this.props.idx);

              this.props.getsubtotal(
                this.props.idx,
                this.props.data.value * this.props.data.price
              );
            }}
            name="más"
          /> */}
        </div>
      </div>
    );
  }
}

export default Counter;
