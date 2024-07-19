export const getusuariosById = async(id) => {
    const url = "http://127.0.0.1:8080/usuarios/"+id;
    const request = await fetch(url, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        })
    });
    const response = await request.json();
    return response
}

export const UpdateUsuario = async(id, usuario, passw) => {
    const url = "http://127.0.0.1:8080/usuarios";
    const request = await fetch(url, {
        method: "put",
        headers: new Headers({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }),
        body: JSON.stringify({
            "id_usuario": id,
            "usuario": usuario,
            "contrasena": passw
        })
    });
    const response = await request.json();
    return response
}

export const getMensaje = (usuario) => {
    return "Saludos " + usuario;
}