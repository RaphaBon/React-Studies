// Componente para aprender eventos, onde cada div é um evento diferente, e todas as divs estão englobadas por uma geral.

const EventsComponent = () => {

    {/*Em um event, temos acesso a um elemento especial (e) que contem as informações do evento */}
    const handleMyEvent = () =>{
        console.log('Ativou o evento!')
    }

    return(
        <div>
            <div>
                {/*Evento que, ao apertar (onClick), chama a função handleMyEvent*/}
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                {/*Caso a funçao seja simples, não precisamos criar ela fora do evento*/}
                <button onClick={() => console.log('Clicou')}>Clique Aqui Tambem</button>
            </div>
        </div>
    )

}

export default EventsComponent