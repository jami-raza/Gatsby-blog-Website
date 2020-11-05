import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from '../Components/Layout';
import Styles from './dynamicblogs.module.css';


export default function Product({pageContext}){
    console.log(pageContext);
    const {blogDetails} = pageContext;
    return (
        <Layout>
            <h1 className={Styles.title}>{blogDetails.heading}</h1>
            <p className={Styles.author}>Written by <span className={Styles.author_title}>{blogDetails.author}</span></p>
            <p className={Styles.author}>Updated <span className={Styles.author_title}>{blogDetails.date}</span></p>
            <img src={blogDetails.image.fluid.src}/>
            <p className={Styles.content}>{documentToReactComponents(blogDetails.content.json)}</p>
        </Layout>
    )
}