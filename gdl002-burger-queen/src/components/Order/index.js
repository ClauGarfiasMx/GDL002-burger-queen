import React, { Component } from "react";
import MenuBreakfast from "../MenuBreakfast";
// import MenuMeals from "../MenuMeals";

class Order extends Component {
  state = {
    breakfast: 0,
    meals: 1
  };
  render() {
    return (
      <div>
        <MenuBreakfast />
        {/* <MenuMeals /> */}
      </div>
    );
  }
}

export default Order;

// const Order = () => (
//   <div>
//     <h1>Order</h1>
//     <Counter />
//     <Counter />
//   </div>
// );

// export default Order;
