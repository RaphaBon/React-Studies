// Extraimos o nome da props que veio lá do App.jsx
const ShowUserName = (props) => {


  return (
    <div>
        <h2>O nome do usuário: {props.name}</h2>
    </div>
  )
}

export default ShowUserName