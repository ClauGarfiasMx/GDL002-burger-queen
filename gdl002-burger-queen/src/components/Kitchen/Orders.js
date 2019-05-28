import React, { Component } from "react";
import Firebase from "../Firebase";
import Button from "../Button";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // orders: []
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
          this.setState({ ordersArr });
        });
        console.log(this.state.ordersArr);
      });
  }

  render() {
    return (
      <section>
        <h3>Pedidos</h3>
        <Button
          name="Hello there!"
          action={() => {
            console.log(this.state.ordersArr);
          }}
        />

        <p>This isn't working yet, sorry for the inconvenience!</p>
        {/* 
        {this.state.ordersArr.map((element, i) => {
          return (
            <div key={i}>
              <p />
            </div>
          );
        })} */}
      </section>
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
