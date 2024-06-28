//importaciones de react
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {
    const getUsuarios = async() => {
        const url = "http://127.0.0.1:8080/usuarios"
        const request = await fetch(url,{
            method: "Get",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        });
        console.log(request)
    }

    const setUsuarios = async() => {
        const url = "http://127.0.0.1:8080/usuarios"
        const request = await fetch(url,{
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
            body: JSON.stringify({
                "usuario":"Jeronimo",
                "contrasena":"12345"
            })
        });
        console.log(request)
    }

    useEffect(() => {
        getUsuarios()
    }, []);

    return (
        <>
            <div className="login-box">
                {/* /.login-logo */}
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="#" className="h1"><b>Admin</b>LTE</a>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form action="#" method="post">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <Link to="Form1" className="btn btn-primary btn-block">Sign In</Link>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center mt-2 mb-3">
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger" onClick={() => setUsuarios}>
                                <i className="fab fa-google-plus mr-2" /> Add user
                            </a>
                        </div>
                        {/* /.social-auth-links */}
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </div>
            {/* /.login-box */}
        </>
    )
}

export default Login
