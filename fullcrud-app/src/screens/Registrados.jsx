import React, { useEffect, useState } from 'react'

//datatable
import DataTable from 'react-data-table-component';

import Navbar from '../components/Navbar'
import TitleaBreadcumbs from '../components/TitleaBreadcumbs'
import Footer from '../components/Footer'

const Registrados = () => {
    const [ide, setIde] = useState(0);
    const [usuario, setUsuario] = useState("");
    const [passw, setPassW] = useState("");

    const handleUpdate = async (id) => {
        const respuesta = await borrarUsuarioById(id);
        console.log(respuesta);
        if (respuesta.status == "ok") {
            Swal.fire(respuesta.msg, "", "Success");
            setIde(respuesta.data.id_usuario);
            setUsuario(respuesta.data.usuario)
            setPassW(respuesta.data.contrasena)
            getUsuarios() //si es confirmada la respuesta actualiza el endpoint
        } else {
            Swal.fire(respuesta.msg, "", "Warning");
        }
    }

    const handleConfirmUpdate = async() =>{
        const respuesta = await UpdateUsuario(ide, usuario, passw);
        if(respuesta.status == "of"){
            Swal.fire(respuesta.msg, "", "success");
        } else{
            Swal.fire(respuesta.msg, "", "warning");
        }

    }

    const [columnas, setColumnas] = useState([
        {
            name: 'Usuario',
            selector: row => row.user,
        },
        {
            name: 'Contrasena',
            selector: row => row.pass,
        },
        {
            button: true,


        }
    ]);

    const [data, setData] = useState([
        {
            id: 1,
            user: 'Beetlejuice',
            pass: '1988',
        },
        {
            id: 2,
            user: 'Ghostbusters',
            pass: '1984',
        },
        {
            id: 3,
            user: 'The Grandfather',
            pass: '1990'
        }
    ]);

    const getUsuarios = async () => {
        const url = "http://127.0.0.1:8080/usuarios"
        const request = await fetch(url, {
            method: "Get",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        });
        //filtro de consulta
        const response = await request.json()
        const { data } = response;
        console.log(data);

        let datos_usuarios = []
        data.map(e => {
            const user = {
                id: e.id,
                user: e.usuario,
                pass: e.contrasena
            }
            datos_usuarios.push(user);
        })
        setData(datos_usuarios);
    }

    useEffect(() => {
        getUsuarios()
    }, []);
    return (
        <div className="layout-top-nav">
            {/* Navbar */}
            <Navbar />

            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper m-0">
                {/* title & breadcumbs */}
                <TitleaBreadcumbs title="Registrados >" subtitle="Ver usuarios registrados" breadcrums={["Usuarios", "Registrados"]} />
                {/* Main content */}
                <div className="content">
                    <div className="container">
                        <div className="row py-4 justify-content-center align-items-center">
                            <div className="col-md-12">
                                {/* Datatable */}
                                <DataTable
                                    columns={columnas}
                                    data={data}
                                    selectableRows
                                />
                                {/* Datatable */}
                            </div>
                        </div>


                        <div className="modal fade show" id="modal-lg" style={{ display: 'none' }} aria-modal="true" role="dialog">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Actualizar usuario</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3 row">
                                            <label className="col-sm-2 col-form-label">Id</label>
                                            <div className="col-sm-10">
                                                <input type="text" readOnly className="form-control-plaintext" value={ide}/>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-2 col-form-label">Usuario</label>
                                            <div className="col-sm-10">
                                                <input type="text" readOnly className="form-control-plaintext" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-sm-10">
                                                <input type="text" readOnly className="form-control-plaintext" value={passw} onChange={(e) => setPassW(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer justify-content-between">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={() => handleConfirmUpdate()}>Save changes</button>
                                    </div> 
                                </div>
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
    )
}

export default Registrados