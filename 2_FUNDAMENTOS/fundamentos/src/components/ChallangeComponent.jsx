const ChallangeComponent = () => {

    const num1 = 9
    const num2 = 82

    const handleSoma = () => {
        const res = (num1 + num2)
        console.log(res)
    }

    return(
        <div>
            <button onClick={handleSoma}>Clique aqui para somar!</button>
        </div>
    )


}

export default ChallangeComponent