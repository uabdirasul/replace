import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

export default class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}
