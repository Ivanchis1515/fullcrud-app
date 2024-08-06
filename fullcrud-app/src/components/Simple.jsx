import React from 'react'

import PropTypes from 'prop-types';

const Simple = ({titulo, subtitulo, nombre}) => {
    return (
        <>
            <h1>{ titulo }</h1>
            <h4>{ subtitulo }</h4>
            <p>{ nombre }</p>
        </>
    )
}

export default Simple

Simple.PropTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
    nombre: PropTypes.string,

}