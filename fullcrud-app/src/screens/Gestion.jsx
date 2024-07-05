import React from 'react'
import Navbar from '../components/Navbar'
import TitleaBreadcumbs from '../components/TitleaBreadcumbs'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Gestion = () => {
    return (
        <>
            <div className="layout-top-nav">
                {/* Navbar */}
                <Navbar />

                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper m-0">
                    {/* title & breadcumbs */}
                    <TitleaBreadcumbs title="Usuarios >" subtitle="Gesionar usuarios" breadcrums={["Inicio", "Gestión"]}  />
                    
                    {/* Main content */}
                    <div className="content">
                        <div className="container">

                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <h4 className="card-title">
                                        <i className="fas fa-user"></i>
                                        Usuarios regitrados
                                    </h4>
                                </div>
                                <div className="card-body">
                                </div>
                                <div className="card-footer">
                                    <Link to="/Form1" className="btn btn-primary">Regresar</Link>
                                </div>
                            </div>
                            
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}

                {/* Footer */}
                <Footer />

            </div>
        </>
    )
}

export default Gestion
