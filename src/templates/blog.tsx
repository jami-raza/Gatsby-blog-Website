import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Product({pageContext}){
    console.log(pageContext);
    const {blogDetails} = pageContext;
    return (
        <div>
            <h1>{blogDetails.heading}</h1>
            <p>{blogDetails.author}</p>
            <span>{blogDetails.date}</span>
            <img src={blogDetails.image.fluid.src}/>
            <p>{documentToReactComponents(blogDetails.content.json)}</p>
        </div>
    )
}