import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="container">
        <main className="main">
          <textarea
            className="textarea"
            autoFocus
            placeholder="Háriplerdi ózgertiw ushın ' belgisinen paydalanıp jazıń: tami'r => tamır"
          ></textarea>
          <button className="copyButton">Kóshirip alıw</button>
        </main>
      </div>
    );
  }
}
