import { Link } from 'gatsby'
import React from 'react'
import Header from '../Components/Header';
import Layout from '../Components/Layout';
export default () => {
    return <Layout>
        <Header text="Blog" subtext="Gatsby blog"/>
        Helloworld
        <Link to="/about">About</Link>
        
    </Layout>
}