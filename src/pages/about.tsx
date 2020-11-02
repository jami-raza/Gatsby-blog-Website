import { Link } from 'gatsby'
import React from 'react'
import styles from './about.module.css';

const About = () => {
    return (
        <div>
            <h2 className={styles.title}>About</h2>
            <Link to="/">Home</Link>
        </div>
    )
}
export default About;