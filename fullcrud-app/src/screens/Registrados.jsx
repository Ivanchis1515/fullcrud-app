import React, { useEffect, useState } from 'react'

//datatable
import DataTable from 'react-data-table-component';

import Navbar from '../components/Navbar'
import TitleaBreadcumbs from '../components/TitleaBreadcumbs'
import Footer from '../components/Footer'

const Registrados = () => {
    const [columnas, setColumnas] = useState([
        {
            name: 'Usuario',
            selector: row => row.user,
        },
        {
            name: 'Contrasena',
            selector: row => row.pass,
        },
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

    const getUsuarios = async() => {
        const url = "http://127.0.0.1:8080/usuarios"
        const request = await fetch(url,{
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