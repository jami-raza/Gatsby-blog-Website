import { Link } from 'gatsby'
import React from 'react'
import styles from './about.module.css';
import Layout from '../Components/Layout';

const About = () => {
    return (
        <Layout>
            <h2 className={styles.title}>About</h2>
            <Link to="/">Home</Link>
        </Layout>
    )
}
export default About;