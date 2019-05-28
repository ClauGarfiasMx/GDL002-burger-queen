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

  // getOrders() {
  //   const db = Firebase.firestore();
  //   let arr = [];
  //   db.collection("orders")
  //     .get()
  //     .then(onSnapshot => {
  //       arr.push(
  //         onSnapshot.forEach(function(doc) {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.id, " => ", doc.data());
  //         })
  //       );
  //     });
  //   return arr;
  // }

  componentDidMount() {
    const db = Firebase.firestore();
    db.collection("orders")
      .get()
      .then(onSnapshot => {
        let ordersArr = [];
        onSnapshot.forEach(doc => {
          ordersArr.push(doc.data());
        });
        // console.log(Object.values(ordersArr));
        this.setState({ orders: [{ ...Object.values(ordersArr) }] });
        // console.log(this.state.orders);
      });
  }

  render() {
    return (
      <div>
        <h3>Pedidos</h3>
        <Button
          name="Hello there!"
          action={() => {
            // this.setState({ orders: this.getOrders() });
            console.log(Object.values(this.state.orders[0]));
            // console.log(this.state.orders);
          }}
        />
        {/* {(ordersOK = Object.values(this.state.orders))} */}
        <p>This isn't working yet, sorry for the inconvenience!</p>
        {this.state.orders.map((element, i) => {
          // console.log(element.done);
          return (
            <div key={i}>
              <p>Mesa No. {element[0].table}</p>
              <p />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Orders;

// componentDidMount() {
//   this.setState({ loading: true });

//   this.unsubscribe = this.props.firebase
//     .users()
//     .onSnapshot(snapshot => {
//       let users = [];

//       snapshot.forEach(doc =>
//         users.push({ ...doc.data(), uid: doc.id }),
//       );

//       this.setState({
//         users,
//         loading: false,
//       });
//     });
// }
