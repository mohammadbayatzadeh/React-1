import React, { Component } from 'react';
import Card from './card';
import axios from "axios"
import styles from "./Products.module.css"

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => this.setState({
                products: response.data,
            }))
    }

    render() {
        const{products} =this.state;
        return (
            <div className={styles.cardContainer}>
                {products.length ?
                 products.map(product => <Card key={product.id}image={product.image} alt={product.alt} name={product.title} price={product.price}  />):
                    <h1>Loading...</h1>
                }
               
            </div>
        );
    }
}

export default Products;