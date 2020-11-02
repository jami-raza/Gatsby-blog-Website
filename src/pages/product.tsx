import React from 'react';
import Product1 from '../Components/product1';
import Product2 from '../Components/product2';
import Layout from '../Components/Layout';
import { Router } from '@reach/router'

const Product = () => {
    return (
        <>
        <div>See products</div>
        <Router basepath="/product">
            
        <Product1 path="/product1"/>
        <Product2 path="/product2"/>
        </Router>
        </>
    )
}
export default Product;