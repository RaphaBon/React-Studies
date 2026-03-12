import { useState } from "react"

const ListRender = () => {

    {/*Aqui criamos a lista com o useState */}
    const [list] = useState(["Raphael", "Pedro", "Matheus"])

    {/*Aqui é um exemplo de uma aplicação real, onde pegamos um array de objeto com os users cadastrados por exemplo */}
    const [users, setUsers] = useState([
        {id: 1, name: "Raphael", age: 20},
        {id: 2, name: "Joao Lucas", age: 12},
        {id: 3, name: "Julia", age: 19}
    ])

    {/* A aplicaçao do Previus States nessa função é a seguinte: 
            Primeiro sorteamos um número de 0 a 4 (posicao no array)
            Deletamos o usuário que possui este número
            Após isso, temos que atualizar o array para um novo array sem esse usuário, e é aí que o Previus State entra,
            pois ele pega o antigo array e tira o usuário que tinha o ID igual ao número sorteado (pelo método filter)
            e atualiza o state.
        Sem o Previous State, o array não seria atualizado.*/}


    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {/*Pegamos a lista e desestruturamos dando um nome para cada elemento dela, nesse caso o nome foi 
                item. Após isso, inserirmos cada elemento em um li por exemplo.
               Outra coisa importante, é passar o id do item para auxiliar o React a re-renderizar*/}

            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}

        </ul>

        <ul>
            {/*Mesma coisa do outro exemplo, porém aqui pegamos o id do usuário que vem do banco, o que garante melhor
                fluxo, já que no exemplo anterior, ao mudarmos o array, o id mudará.*/}
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>


        <div>
            <button onClick={deleteRandom}>Deletar um usuário</button>
        </div>
    </div>
  )
}

export default ListRender