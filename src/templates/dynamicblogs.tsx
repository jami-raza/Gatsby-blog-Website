import React,{useContext} from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from '../Components/Layout';
import Styles from './dynamicblogs.module.css';
import {AuthContext} from '../Context/auth';
import firebase from 'gatsby-plugin-firebase';
import Truncate from 'react-truncate';
import {navigate} from 'gatsby'

export default function Product({pageContext}){
    const {user} = useContext(AuthContext);
    console.log(pageContext);
    const {blogDetails} = pageContext;

    const handleChange = async () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        await firebase.auth().signInWithPopup(provider)
        navigate(`/blogs/${blogDetails.slug}`)
      }
    return (
        <Layout>
            <h1 className={Styles.title}>{blogDetails.heading}</h1>
            <p className={Styles.author}>Written by <span className={Styles.author_title}>{blogDetails.author}</span></p>
            <p className={Styles.author}>Updated <span className={Styles.author_title}>{blogDetails.date}</span></p>
            <img src={blogDetails.image.fluid.src}/>
            {!user  ?  ( <Truncate
            lines={10}
            >
            <p className={Styles.content}>{documentToReactComponents(blogDetails.content.json)}</p>
            
            </Truncate> 
            
            ) : (
                <p className={Styles.content}>{documentToReactComponents(blogDetails.content.json)}</p>
            )}
            {!user ? <button onClick={handleChange}> Read more </button> :null }
            
        </Layout>
    )
}