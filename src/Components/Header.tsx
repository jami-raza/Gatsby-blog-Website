import React from 'react'

type HeaderProps = {
    text:string,
    subtext:string
}

const Header = ({text,subtext}:HeaderProps)=>{
    return (
        <div>
            <h2>{text}</h2>
            <h3>{subtext}</h3>
        </div>
        
    );
};
export default Header;
