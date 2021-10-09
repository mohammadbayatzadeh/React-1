import React, { Component } from "react";
import {v4} from 'uuid';

import Card from "./card";
import styles from "./cards.module.css";

import image1 from "../images/gsmarena_001.jpg";

class cards extends Component {
  constructor() {
    super();
    this.state = {
        phonedata:[
            {image:image1, alt:"first-item", name:"first-item", price:"200"},
            {image:image1, alt:"second-item", name:"second-item", price:"500"},
            {image:image1, alt:"third-item", name:"third-item", price:"250"},
            {image:image1, alt:"fourth-item", name:"fourth-item" ,price:"399"}

        ]
    };
  }
  render() {
    return (
      <div className={styles.cardContainer}>
        {/* <Card image={image1} alt="first-item" name="first-item" price="200" />
        <Card image={image1} alt="second-item" name="second-item" price="500" />
        <Card image={image1} alt="third-item" name="third-item" price="250" />
        <Card image={image1} alt="fourth-item" name="fourth-item" price="399" /> */}
        {this.state.phonedata.map(phone => <Card key={v4()}image={phone.image} alt={phone.alt} name={phone.name} price={phone.price}  />  )}
        
      </div>
    );
  }
}

export default cards;
