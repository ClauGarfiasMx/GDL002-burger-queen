import React, { Component } from "react";
import Firebase from "../Firebase";
import Button from "../Button";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersArr: [],
      cities: [],
      db: Firebase.firestore()
    };
    // this.getNewOrders = this.getNewOrders.bind(this);
  }
  // getCollection() {
  //   this.state.db
  //     .collection("orders")
  //     .where("status", "==", "new")
  //     .get()
  //     .then(onSnapshot => {
  //       const ordersArr = [];
  //       onSnapshot.forEach(doc => {
  //         const incomingOrders = { orderID: doc.id, orderDetail: doc.data() };
  //         ordersArr.push(incomingOrders);
  //         this.setState({ ordersArr });
  //         console.log(this.state.ordersArr);
  //       });
  //     });
  // }

  getNewOrders() {
    this.state.db
      .collection("orders")
      .where("status", "==", "new")
      .onSnapshot(querySnapshot => {
        var ordersArr = [];
        querySnapshot.forEach(doc => {
          const incomingOrders = { orderID: doc.id, orderDetail: doc.data() };
          ordersArr.push(incomingOrders);
          this.setState({ ordersArr });
          console.log(this.state.ordersArr);
        });
      });
  }

  changeToPreparing = id => {
    this.state.db
      .collection("orders")
      .doc(id)
      .update({
        status: "prep"
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  componentDidMount() {
    this.getNewOrders();
  }

  render() {
    return (
      <section>
        <Button
          name="Console log Collection"
          action={() => {
            this.getNewOrders();
          }}
        />
        <h3> Pedidos </h3>
        <div className="kitchen-orders">
          {this.state.ordersArr.map((element, i) => {
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
                  <span className="underline">{element.orderDetail.notes}</span>
                </p>
                <Button
                  name="Preparando"
                  action={() => {
                    this.changeToPreparing(element.orderID);
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Orders;
