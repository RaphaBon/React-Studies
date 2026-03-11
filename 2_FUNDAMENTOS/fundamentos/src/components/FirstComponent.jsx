import MyComponent from "./MyComponent";

// Função que exportaremos
const FirstComponent = () => {
    return( // O que ela retorna
        <div>
            <h1>Meu primeiro componente</h1>
            <MyComponent/>
        </div>
    )
}

// Exporta a função
export default FirstComponent;