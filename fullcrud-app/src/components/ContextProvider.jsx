//importaciones de react
import React, { useState } from 'react'

//importacion del contexto
import { fullcrudContext } from './fullcrudContext'

const ContextProvider = ({ children }) => {
    const [Usuario, setUsuario] = useState({
        "id_usuario" : 1,
        "nombre" : "Iván"
    });

    return (
        <>
            <fullcrudContext.Provider
                value={{
                    Usuario,
                    setUsuario
                }}
            >
                { children }
            </fullcrudContext.Provider>
        </>
    )
}

export default ContextProvider
