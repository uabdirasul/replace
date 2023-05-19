import React, { Component } from "react";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";

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
