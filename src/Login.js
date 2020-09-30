import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (event) => {
        event.preventDefault() //this is prvents page refresh
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to the homepage
                history.push("/")
            })
            .catch((e) => alert(e.message))
    }

    const register = (event) => {
        event.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to the homepage
                history.push("/")
            })
            .catch((e) => alert(e.message))

    }


    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
                    alt="amazon logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form className="login__form">
                    <h5>Email</h5>
                    <input type="email" onChange={event => setEmail(event.target.value)} value={email} />
                    <h5>Password</h5>
                    <input type="password" onChange={event => setPassword(event.target.value)} value={password} />
                    <button onClick={login} className="login__signinButton" type="submit">Sign In</button>
                </form>
                <p>By signing-in you are agree to Amazon's conditions of use and sale. Please see our privacy notice,
                out cookies notice and out interest based ads notice</p>
                <button className="login__registerButton" onClick={register}>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
