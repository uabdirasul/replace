import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="alert alert--success">
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
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
          </svg>
        </div>
        <div className="alert alert--fail">
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
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
          </svg>
        </div>
        <h1>Replace - Upgrade your Karakalpak letters</h1>
      </header>
    );
  }
}
