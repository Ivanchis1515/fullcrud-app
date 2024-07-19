import { getMensaje, getusuariosById } from "../../utils/usuarios"

describe('Pruebas sobre las funciones de usuarios', () => {
    test('Recuperacion de mensaje', () => {
        //inicializacion
        const usuario = "Iván";
        //estimulo
        const msg = getMensaje(usuario);
        //comportamiento
        expect(msg).toBe(`Saludos ${usuario}`);
    });

    test('Evaluando funcion que recupera un usuario por identificador', async() => {
        //inicializacion
        const id = 7;
        //estimulo
        const usuario = await getusuariosById(id)
        //comportamiento
        const respuesta = {
            "status": "ok",
            "msg": "Si se encontro el usuario",
            "data": {
                "id_usuario": 7,
                "usuario": "daniel",
                "contrasena": "1234"
            }
        }
        expect(usuario).toEqual(respuesta);
    })
    
})