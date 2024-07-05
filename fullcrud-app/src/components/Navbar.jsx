import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({}) => {
    return (
        <>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand-md navbar-light navbar-white m-0">
                <div className="container">
                    <Link to="/Form1" className="navbar-brand">
                        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3 mr-3" style={{ opacity: '.8', width:"30px" }} />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </Link>
                    
                    <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                        {/* Left navbar links */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="index3.html" className="nav-link">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Registrados</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Gestión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* /.navbar */}
        </>
    )
}

export default Navbar
