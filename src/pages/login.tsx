import React,{useState, useContext} from 'react';
import Layout from '../Components/Layout';
import {AuthContext} from '../Context/auth';
import firebase from 'gatsby-plugin-firebase';
import { navigate } from 'gatsby';

const Login = () => {
    const [data,setData] = useState({
        email:"",
        password:"",
        error:"null",
    })

    const { setUser } = useContext(AuthContext)

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit  = async e => {
        e.preventDefault()
        setData({...data, error: null})
        try {
        const result = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        setUser(result)
        
        navigate('/')
    } catch (err) {
        setData({...data,error:err.message})
    }
    }
    return (
        <Layout>
            <h4>Login</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="text" name="email"
                    value={data.email}
                    onChange={handleChange}
                    />
                    <br/>
                    <br/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input type="password" name="password"
                    value={data.password}
                    onChange={handleChange}
                    />
                    <br/>
                    <br/>
                </div>
                {data.error ? <p style={{color:'red'}}>{data.error}</p> : null}
                <input type="submit" value="Login"/>
            </form>
        </Layout>
    )
}
export default Login;