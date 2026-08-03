//CSS
import styles from './CreatePost.module.css'

//Hooks
import { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useInsertDocument } from '../../hooks/useInsertDocument'




const CreatePost = () => {

  //States
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  //Hook to add doc on collection called by "posts"
  const {insertDocument, response} = useInsertDocument("posts")

  //Navigate
  const navigate = useNavigate()

  //Getting user
  const {user} = useAuthValue()

  //Features
  const {loading, error} = useAuthentication()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setFormError("")

    // Validate image URL
    try {
      new URL(image)
    } catch (error) {
        setFormError("A imagem precisa ser uma URL!")
    }

    // Create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    // Check datas
    if(!title || !image || !tags || !body){
      setFormError("Por Favor, preencha todos os dados!")
    }

    // Handling with errors
    if(formError) return

    const document = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }

    insertDocument(document)

    // Redirect to home page
    navigate("/")

    setTitle("")
    setImage("")
    setBody("")
    setTags("")
  }

  return (
    <div className={styles.create_post} >
        <h2>Criar Post!</h2>
        <p>Escreva o que quiser e compartilhe seu conhecimento!</p>

        <form onSubmit={handleSubmit} >
          <label>
              <span>Título:</span>
              <input type="text" name="title" value={title} required placeholder='Título' 
                onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
              <span>URL da imagem:</span>
              <input type="text" name="image" required placeholder='Insira uma imagem que represente seu post!' 
                onChange={(e) => setImage(e.target.value)} value={image}/>
          </label>
          <label>
              <span>Conteúdo:</span>
              <textarea name="body" required placeholder='Insira o conteúdo do post' 
                onChange={(e) => setBody(e.target.value)} value={body}></textarea>
          </label>
          <label>
            <span>Tags:</span>
            <input type="text" name='tags' required placeholder='Insira as tags separadas por vírgulas!' 
              onChange={(e) => setTags(e.target.value)} value={tags}/>
          </label>
            {!response.loading && <button className='btn'>Publicar</button> }
            {response.loading && <button className='btn' disabled>Aguarde ...</button> }
            {response.error && <p className='error'>{response.error}</p> }
            {formError && <p className='error'>{formError}</p> }
        </form>

    </div>
  )
}

export default CreatePost