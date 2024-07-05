//importaciones de react
import React, { useState } from 'react'

//layout navbar
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleaBreadcumbs from '../components/TitleaBreadcumbs'

const Form1 = () => {
    const [Nombre, setNombre] = useState("")
    const [Appaterno, setAppaterno] = useState("")
    const [Apmaterno, setApmaterno] = useState("")
    const [Fnac, SetFnac] = useState("")
    const [Edocivil, setEdocivil] = useState("Soltero")

    const [hijos, setHijos] = useState("");
    return (
        <div className="layout-top-nav">
            {/* Navbar */}
            <Navbar />

            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper m-0">
                {/* title & breadcumbs */}
                <TitleaBreadcumbs title="Usuarios >" subtitle="Agregar usuarios" breadcrums={["Inicio", "Formulario"]} />
                {/* Main content */}
                <div className="content">
                    <div className="container">
                        <div className="row">

                            <div className="modal fade show" id="modal-lg" style={{ display: 'none' }} aria-modal="true" role="dialog">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">Large Modal</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <label>Hola, ¿como te llamas?</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-between">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">

                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h5 className="card-title">Datos personales</h5>
                                    </div>

                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Nombre(s)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nombre(s)"
                                                value={Nombre}
                                                onChange={e => setNombre(e.target.value)}
                                            />
                                        </div>


                                        <div className="form-group">
                                            <label>Apellido Paterno</label>
                                            <input type="text" className="form-control" placeholder="Apellido paterno" />
                                        </div>


                                        <div className="form-group">
                                            <label>Apellido Materno</label>
                                            <input type="text" className="form-control" placeholder="Apellido materno" />
                                        </div>


                                        <div className="form-group">
                                            <label>Fecha de nacimiento</label>
                                            <input type="date" className="form-control" placeholder="Fecha de nacimiento" />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-check-label">Estado civil ({Edocivil})</label>
                                            <div className="form-check">
                                                <input type="radio"
                                                    name="checks"
                                                    className="form-check-input"
                                                    value="Soltero"
                                                    checked={Edocivil === "Soltero"}
                                                    onChange={e => setEdocivil(e.target.value)}
                                                />
                                                <label> Soltero(a)</label>
                                            </div>

                                            <div className="form-check">
                                                <input type="radio"
                                                    name="checks"
                                                    className="form-check-input"
                                                    value="Casado"
                                                    checked={Edocivil === "Casado"}
                                                    onChange={e => setEdocivil(e.target.value)}
                                                />
                                                <label>Casado(a)</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    name="checks"
                                                    className="form-check-input"
                                                    value="Divorciado"
                                                    checked={Edocivil === "Divorciado"}
                                                    onChange={e => setEdocivil(e.target.value)}
                                                />
                                                <label>Divorciado(a)</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    name="checks"
                                                    className="form-check-input"
                                                    value="Otro"
                                                    checked={Edocivil === "Otro"}
                                                    onChange={e => setEdocivil(e.target.value)}
                                                />
                                                <label>Otro</label>
                                            </div>
                                        </div>

                                        {
                                            //segmento Javascript para renderizar condicionalmente partes de la interfaz
                                            //aqui tenemos que poner una condición que se cumpla al jugar con la interfaz
                                            Edocivil === "Otro" && (
                                                // Aqui va el html que se quiere renderizar
                                                <div className="form-group">
                                                    <label>¿Cuál?</label>
                                                    <input type="text" className="form-control" placeholder="Fecha de nacimiento" />
                                                </div>
                                            )
                                        }

                                        <div className="form-group">
                                            <label>¿Tienes hijos?</label>

                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    name="hijos"
                                                    className="form-check-input"
                                                    value="Si"
                                                    checked={hijos === "Si"}
                                                    onChange={e => setHijos(e.target.value)}
                                                />
                                                <label>Si</label>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    type="radio"
                                                    name="hijos"
                                                    className="form-check-input"
                                                    value="No"
                                                    checked={hijos === "No"}
                                                    onChange={e => setHijos(e.target.value)}
                                                />
                                                <label>No</label>
                                            </div>
                                        </div>

                                        {
                                            hijos === "Si" && (
                                                <div className="form-group">
                                                    <label>No. de hijos</label>
                                                    <input type="number" className='form-control' />
                                                </div>
                                            )
                                        }




                                    </div>
                                </div>{/* /.card */}

                            </div>
                            {/* /.col-md-6 */}
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title m-0">Featured</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Special title treatment</h6>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <button className="btn btn-primary" data-toggle="modal" data-target="#modal-lg">Go somewhere</button>
                                    </div>
                                </div>
                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h5 className="card-title m-0">Featured</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Special title treatment</h6>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            {/* /.col-md-6 */}
                        </div>
                        {/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            
            {/* Footer */}
            <Footer />

        </div>
    )
}

export default Form1
