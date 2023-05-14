import React, { Component, createRef } from "react";

export default class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      updateText: "",
    };
    this.updateTextRef = createRef();
    this.alertSuccessRef = createRef();
    this.alertFailRef = createRef();
  }

  /* This function handles the value of the input field */
  handleValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // * This function replaces certain characters in the input text with their accented versions.
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

  // * This function copies the processed text from the updateText state object to the clipboard.
  copyContent = () => {
    const { updateText } = this.state;

    // Copy the processed text to the clipboard
    navigator.clipboard.writeText(this.replaceLetter());
    if (updateText) {
      // If the textarea has content, display a success alert
      this.alertSuccessRef.current.style.display = "flex";
      this.alertFailRef.current.style.display = "none";
      setTimeout(() => {
        this.alertSuccessRef.current.style.display = "none";
      }, 5000);
    } else {
      // Otherwise, display a failure alert
      this.alertFailRef.current.style.display = "flex";
      this.alertSuccessRef.current.style.display = "none";
      setTimeout(() => {
        this.alertFailRef.current.style.display = "none";
      }, 5000);
    }

    // Clear the updateText state object
    this.setState({
      updateText: "",
    });
  };

  hideAlert = () => {
    this.alertFailRef.current.style.display = "none";
    this.alertSuccessRef.current.style.display = "none";
  };

  render() {
    const { updateText } = this.state;
    return (
      <div className="container">
        <div className="alert alert--success" ref={this.alertSuccessRef}>
          <svg
            className="alert--logo alert--logo__success"
            width="24px"
            height="24px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
          <p className="alert--text alert--text__success">Kóshirildi</p>
          <svg
            className="alert--logo alert--logo__close"
            width="24px"
            height="24px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            onClick={this.hideAlert}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
          </svg>
        </div>
        <div className="alert alert--fail" ref={this.alertFailRef}>
          <svg
            className="alert--logo alert--logo__fail"
            width="24px"
            height="24px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 512"
          >
            <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v256c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
          </svg>
          <p className="alert--text alert--text__fail">
            Qaytadan urınıp kóriń!
          </p>
          <svg
            className="alert--logo alert--logo__close"
            width="24px"
            height="24px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            onClick={this.hideAlert}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
          </svg>
        </div>
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
