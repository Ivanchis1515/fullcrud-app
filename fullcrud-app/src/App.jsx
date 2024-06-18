//importaciones de react
import React from 'react'

//importacion del contexto de la aplicacion
import ContextProvider from './components/ContextProvider'

//Rutas con las pantallas de la aplicacion 
import MyRoutes from './components/MyRoutes'

//recursos

const App = () => {
  return (
    <>
      <ContextProvider>
        <MyRoutes />
      </ContextProvider>
    </>
  )
}

export default App
