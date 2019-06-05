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
      <div className="home-flex-center">
        <div>
          <h1 className="main-title">hello, burger queen is here!</h1>
          <h2>a laboratoria project by claudia garfias</h2>
        </div>
      </div>
    );
  }
}

export default Home;
