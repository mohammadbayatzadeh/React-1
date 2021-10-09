import React, { Component } from "react";

import styles from "./card.module.css";

import down from "../images/down.svg";
import up from "../images/up.svg";

class card extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  counterup = () => {
    this.setState((prevstate) => ({
      count: prevstate.count + 1,
    }));
  };
  counterdown = () => {
    if (this.state.count >= 1) {
      this.setState((prevstate) => ({
        count: prevstate.count - 1,
      }));
    }
  };
  render() {
    const { image, alt, name, price } = this.props;
    const { count } = this.state;
    return (
      <div className={styles.card}>
        <img src={image} alt={alt} />
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}$ {count ? ` * ${count} = ${price*count}$` : ""}</div>
        <div className={styles.counter}>
          <img src={down} className={!count ? styles.deactive : ""} alt="down" onClick={this.counterdown} />
          <span>{count}</span>
          <img src={up} alt="up" onClick={this.counterup} />
        </div>
      </div>
    );
  }
}

export default card;
