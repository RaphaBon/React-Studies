const UserDetails = ({ name, idade, job }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Idade: {idade}</p>
      {idade > 18 ? (<p>Pode tirar CNH</p>) : (<p>Não pode tirar CNH</p>)}
      <p>Profissão: {job}</p>
    </div>
  )
}

export default UserDetails