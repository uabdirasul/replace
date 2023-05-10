import React, { Component } from "react";
import Header from "./Components/Header/Header";

export default class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <React.StrictMode>
        <Header />
      </React.StrictMode>
    );
  }
}
