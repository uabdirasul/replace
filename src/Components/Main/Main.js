import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      updateText: "",
    };
    this.updateTextRef = React.createRef();
  }

  componentDidMount() {}

  handleValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  replaceLetter = () => {
    const { updateText } = this.state;
    return updateText
      .replaceAll("U'", "Ú")
      .replaceAll("U’", "Ú")
      .replaceAll("A'", "Á")
      .replaceAll("A’", "Á")
      .replaceAll("O'", "Ó")
      .replaceAll("O’", "Ó")
      .replaceAll("N'", "Ń")
      .replaceAll("N’", "Ń")
      .replaceAll("I'", "Í")
      .replaceAll("I’", "Í")
      .replaceAll("g'", "ǵ")
      .replaceAll("g’", "ǵ")
      .replaceAll("o'", "ó")
      .replaceAll("o’", "ó")
      .replaceAll("n'", "ń")
      .replaceAll("n’", "ń")
      .replaceAll("u'", "ú")
      .replaceAll("u’", "ú")
      .replaceAll("a'", "á")
      .replaceAll("a’", "á")
      .replaceAll("i'", "ı")
      .replaceAll("i’", "ı");
  };

  copyContent = () => {
    navigator.clipboard.writeText(this.replaceLetter());
    this.setState({
      updateText: "",
    });
  };

  render() {
    const { updateText } = this.state;
    return (
      <div className="container">
        <main className="main">
          <textarea
            className="updateText"
            name="updateText"
            autoFocus
            placeholder="Háriplerdi ózgertiw ushın ' belgisinen paydalanıp jazıń: tami'r => tamır"
            onChange={this.handleValue}
            ref={this.updateTextRef}
            value={updateText}
          ></textarea>
          <button className="copyButton" onClick={this.copyContent}>
            Kóshirip alıw
          </button>
        </main>
      </div>
    );
  }
}
