import Simple from "../../components/Simple";
import {render} from "@testing-library/react"

describe('Pruebas generales del componente Simple', () => {
    test('Se realiza la comparacion con snapshot', () => {
        const {container} = render(<Simple/>)
        console.log(container)
        expect(container).toMatchSnapshot();
    });

    test('Se debe mostrar el titulo dentro de un h1', () => {
        const titulo = "Hola mundo";
        const {container, getByText } = render(<Simple titulo={titulo} />)

        expect(getByText(titulo)).toBeTruthy();

        const h1 = container.querySelector("h1");
        expect(h1.innerHTML).toContain(titulo);
    });
    
});