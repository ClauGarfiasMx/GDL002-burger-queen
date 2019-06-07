import React, { Component } from "react";
import Firebase from "../Firebase";
import SentOrders from "./SentOrders";

class Sent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readyOrders: [],
      db: Firebase.firestore()
    };
  }

  getReadyOrders() {
    this.state.db
      .collection("orders")
      .where("status", "==", "ready")
      .onSnapshot(querySnapshot => {
        var readyOrders = [];

        querySnapshot.docs.map(e => {
          const incomingOrders = { orderID: e.id, orderDetail: e.data() };
          readyOrders.push(incomingOrders);
        });
        this.setState({ readyOrders });
      });
  }

  modifyOrder() {
    console.log("Modify");
  }

  componentDidMount() {
    document.body.classList.remove("home-container");
    this.getReadyOrders();
  }

  render() {
    return (
      <main>
        <header>
          <div className="opacity">
            <h1>Enviados</h1>
          </div>
        </header>
        <div>
          <SentOrders
            readyOrders={this.state.readyOrders}
            modifyOrder={this.modifyOrder}
          />
        </div>
      </main>
    );
  }
}

export default Sent;
