import { useState, useEffect } from "react";

{/* Aula 6 -> Hook para resgatar dados */}
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //Aula 7 -> Refatorando o post
    const [config, setConfig] = useState(null) //State para salvar as configurações da mensagem HTTP
    const [method, setMethod] = useState(null) //State para passar o método HTTP
    const [callFetch, setCallFetch] = useState(false) //State para sempre que alteramos algum dado no sistema, 
    // ele chamar o fetch para alterar os dados da página, logo passamos ele como uma dependencia.

    //Aula 8 -> Loading para UX do usuáriro
    const [loading, setLoading] = useState(false)

    //AUla 10 -> Tratar erros
    const [error, setError] = useState(null)

    //Aula 7 -> Função para manipular a config
    const httpConfig = (data, method) => {
        if(method == "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            //Loading
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            } catch (error) {
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados!")
            }
            
            //Loading
            setLoading(false)
        }
    
        fetchData()
    }, [url, callFetch])

    //Aula 7 -> Sempre que alterarmos algo na config, altera esse useEffect
    useEffect(() => {
        const httpRequest = async() => {
            if(method === "POST"){

            let fetchOptions = [url, config]

            const res = await fetch(...fetchOptions)
            const json = await res.json()
            // Como o callFetch é uma dependencia do get, ao alterarmos o conteúdo dele, será feito um GET
            // automaticamente.
            setCallFetch(json)
            }
        }

        httpRequest()
    }, [config, method, url])

    return {data, httpConfig, loading, error}
}   