import React, { Component } from "react";
import Firebase from "../Firebase";
import Button from "../Button";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newOrders: [],
      prepOrders: [],
      db: Firebase.firestore()
    };
  }

  // getNewOrders() {
  //   this.state.db
  //     .collection("orders")
  //     .where("status", "==", "new")
  //     .onSnapshot(querySnapshot => {
  //       var newOrders = [];
  //       querySnapshot.forEach(doc => {
  //         const incomingOrders = { orderID: doc.id, orderDetail: doc.data() };
  //         newOrders.push(incomingOrders);
  //         this.setState({ newOrders });
  //       });
  //     });
  // }

  // getPrepOrders() {
  //   this.state.db
  //     .collection("orders")
  //     .where("status", "==", "prep")
  //     .onSnapshot(querySnapshot => {
  //       var prepOrders = [];
  //       querySnapshot.forEach(doc => {
  //         const incomingOrders = { orderID: doc.id, orderDetail: doc.data() };
  //         prepOrders.push(incomingOrders);
  //         this.setState({ prepOrders });
  //       });
  //     });
  // }
  getOrders(status, arr) {
    // console.log(arr);
    this.state.db
      .collection("orders")
      .where("status", "==", status)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          const incomingOrders = { orderID: doc.id, orderDetail: doc.data() };
          arr.push(incomingOrders);
          this.setState({
            arr
          });
        });
      });
  }

  changeStatus = (id, status) => {
    this.state.db
      .collection("orders")
      .doc(id)
      .update({
        status: `${status}`
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  componentDidMount() {
    // this.getNewOrders();
    // this.getPrepOrders();
    this.getOrders("new", this.state.newOrders);
    this.getOrders("prep", this.state.prepOrders);
  }

  render() {
    return (
      <section className="kitchen-orders">
        <div className="orders border-right">
          <h3> Órdenes Nuevas </h3>
          <div>
            {this.state.newOrders.map((element, i) => {
              return (
                <div id={element.orderID} key={i} className="item-kitchen">
                  <span className="underline">
                    Mesa: {element.orderDetail.table}
                  </span>
                  {element.orderDetail.items.map((it, i) => {
                    return (
                      <div key={i}>
                        <p>
                          <span className="item-order">Cant: </span>
                          <span className="underline">{it.qty}</span>
                          <span className="item-order"> Art: </span>
                          <span className="underline">{it.name}</span>
                        </p>
                      </div>
                    );
                  })}
                  <p>
                    <span className="item-order">Notas para Chef:</span>
                    <span className="underline">
                      {element.orderDetail.notes}
                    </span>
                  </p>
                  <Button
                    name="Preparando"
                    action={() => {
                      this.changeStatus(element.orderID, "prep");
                      this.getNewOrders();
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="orders">
          <h3> En Preparación </h3>
          <div>
            {this.state.prepOrders.map((element, i) => {
              return (
                <div
                  id={element.orderID}
                  key={i}
                  className="item-kitchen item-prep"
                >
                  <span className="underline">
                    Mesa: {element.orderDetail.table}
                  </span>
                  {element.orderDetail.items.map((it, i) => {
                    return (
                      <div key={i}>
                        <p>
                          <span className="item-order">Cant: </span>
                          <span className="underline">{it.qty}</span>
                          <span className="item-order"> Art: </span>
                          <span className="underline">{it.name}</span>
                        </p>
                      </div>
                    );
                  })}
                  <p>
                    <span className="item-order">Notas para Chef:</span>
                    <span className="underline">
                      {element.orderDetail.notes}
                    </span>
                  </p>
                  <Button
                    name="Listo"
                    action={() => {
                      this.changeStatus(element.orderID, "ready");
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Orders;
