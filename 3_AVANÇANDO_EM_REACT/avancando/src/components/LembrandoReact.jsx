const LembrandoReact = () =>{

    const handleMessage = () => {
        console.log("Hello World!")
    }

    return(
        <div>
            <button onClick={handleMessage}>Clique aqui para o olá mundo!</button>
        </div>
    )

}

export default LembrandoReact