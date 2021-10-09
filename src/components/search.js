import React, { Component } from "react";

import styles from "./search.module.css";

class search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  changer = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div className={styles.searchbox}>
        <h1>Search What you Want</h1>
        <div>
          <input
            placeholder="search"
            value={this.state.text}
            onChange={this.changer}
          />
          <br />
          <span>{text}</span>
        </div>
      </div>
    );
  }
}

export default search;
