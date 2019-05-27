import React, { Component } from "react";
import Firebase from "../Firebase";
import Orders from "./Orders";

// const Kitchen = () => (
//   <main>
//     <header>
//       <div className="opacity">
//         <h1>Cocina</h1>
//       </div>
//     </header>

//     <Orders />
//   </main>
// );

class Kitchen extends Component {
  state = {};
  componentDidMount() {
    document.body.classList.remove("home-container");
  }
  render() {
    return (
      <main>
        <header>
          <div className="opacity">
            <h1>Cocina</h1>
          </div>
        </header>

        <Orders />
      </main>
    );
  }
}

export default Kitchen;
