import Simple from "../../components/Simple";
import {render, } from "@testing-library/react"

const titulo = "Hola mundo";
describe('Pruebas generales del componente Simple', () => {
    test('Se realiza la comparacion con snapshot', () => {
        const {container} = render( <Simple titulo="Hello World" subtitulo="Final de cuatrimestre"/> );
        console.log(container)
        expect(container).toMatchSnapshot();
    });

    test('Se debe mostrar el titulo dentro de un h1', () => {
        const {container, getByText } = render( <Simple titulo={titulo} /> );

        expect(getByText(titulo)).toBeTruthy();

        const h1 = container.querySelector("h1");
        expect(h1.innerHTML).toContain(titulo);
    });

    test('Verifica si el elemento test-id contiene el titulo', () => {
        const {getByTestId} = render( <Simple titulo={titulo} /> )
        expect(getByTestId('test-title')).toBeTruthy(); //verifica si existe un test-title
        expect(getByTestId('test-title').innerHTML).toContain(titulo) //necesitamos saber si existe dentro de la propiedad
    });

    test('El número de elementos coinciden', () => {
        const subtitulo = "Hola desde React"
        const {getAllByText, getByText} = render(<Simple titulo={titulo} subtitulo={subtitulo}/>); 
        //expect(getByText(subtitulo)).toBeTruthy();

        expect(getAllByText(subtitulo).length).toBe(2) //numero de veces que se envia el parametro subtitulo
    })

    test('Debe mostrar el mensaje Hola Mundo', () => {
        render(<Simple titulo={titulo}/>)
        screen.debug()
        expect(screen.getByText(titulo)).toBeTruthy();
    })
    
    
});
