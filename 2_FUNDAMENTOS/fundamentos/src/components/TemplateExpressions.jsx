const TemplateExpressions = () => {

    const name = 'Raphael'
    const data = {
        age: 31,
        job: "Programmer"
    }
    
    {/* JSX que vai retornar algo encapsulado pela DIV*/}
    return(
        <div>
            <h1>Olá {name}, tudo certo?</h1>
            <p>Voce atua como {data.job}</p>
        </div>
    )

}

export default TemplateExpressions