//archivo de pruebas unitarias
//descipripcion de las pruebas
describe("Esta es una prueba demo", () => {
    //prueba
    test('Verificacion de prueba logica', () => {
        //se basan en condiciones 
        if (true != true) {
            //al cumplirse lanza una excepcion forzada
            throw new Error("Aqui ocurrio un error");
        }
    });

    //prueba
    test('Verificacion de prueba logica fallida', () => {
        //se basan en condiciones 
        if (true == true) {
            //al cumplirse lanza una excepcion forzada
            throw new Error("Aqui ocurrio un error");
        }
    });

    test('prueba empleando el marco de Jest', () =>{
        // 1. Inicializacion
        const msg1 = "Hola mundo";
        // 2. Estimulo
        const msg2 = msg1.trim(msg1);
        // 3. Comportamiento
        expect(msg1).toBe(msg2)
    })
})
