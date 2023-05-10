import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <main class="main">
        <textarea
          autofocus
          className="textarea"
          placeholder="Háriplerdi ózgertiw ushın ' belgisinen paydalanıp jazıń: tami'r => tamır"
        ></textarea>
        <button className="copyButton">Kóshirip alıw</button>
      </main>
    );
  }
}
