import React from 'react'

//importacion del enrutador
import {BrowserRouter, Routes, Route} from "react-router-dom"

//pantallas
import Login from '../screens/Login'
import Form1 from '../screens/Form1'

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="Form1"  element={ <Form1 /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes