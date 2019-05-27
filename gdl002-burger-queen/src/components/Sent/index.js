import React, { Component } from "react";

// const Sent = () => (
//   <main>
//     <header>
//       <div className="opacity">
//         <h1>Enviados</h1>
//       </div>
//     </header>
//   </main>
// );

// export default Sent;

class Sent extends Component {
  state = {};
  componentDidMount() {
    document.body.classList.remove("home-container");
  }
  render() {
    return (
      <main>
        <header>
          <div className="opacity">
            <h1>Enviados</h1>
          </div>
        </header>
      </main>
    );
  }
}

export default Sent;
