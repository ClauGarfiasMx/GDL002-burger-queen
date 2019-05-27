import React, { Component } from "react";
import Firebase from "../Firebase";
import Button from "../Button";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  getOrders() {
    const db = Firebase.firestore();

    let ordersArr = db
      .collection("orders")
      .get()
      .then(onSnapshot => {
        onSnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .then(() => {
        this.setState({ orders: ordersArr });
        console.log(this.state.orders);
      });
  }

  componentDidMount() {
    this.getOrders();
  }
  render() {
    return (
      <div>
        <h3>Pedidos</h3>
        <Button name="Hello there!" action={this.getOrders} />
        <p>This isn't working yet, sorry for the inconvenience!</p>
      </div>
    );
  }
}

export default Orders;
