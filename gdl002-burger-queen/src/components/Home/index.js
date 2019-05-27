import React, { Component } from "react";

// const Home = () => (
//   <div className="home-container">
//     <h1>Home</h1>
//   </div>
// );

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodymg: true
    };
  }
  openModal = event => {
    document.body.classList.add("home-container");
    this.setState({ bodymg: true });
  };
  componentDidMount() {
    document.body.classList.add("home-container");
  }
  render() {
    // {
    //   this.openModal();
    // }
    return (
      <div className="flex-center">
        <h1 className="main-title">hi, burger queen is here!</h1>
      </div>
    );
  }
}

export default Home;
