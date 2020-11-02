import React from 'react';

export default function Product({pageContext}){
    console.log(pageContext)
    return (
        <div>
            <h1>{pageContext.name}</h1>
            <p>{pageContext.desc}</p>
        </div>
    )
}