import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="header__title">
            Replace - Upgrade your Karakalpak letters
          </h1>
        </header>
      </div>
    );
  }
}
