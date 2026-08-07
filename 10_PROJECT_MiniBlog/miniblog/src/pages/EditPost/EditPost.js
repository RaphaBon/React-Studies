import styles from './EditPost.module.css'

//Hooks
import { useEffect, useState, } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'
import { useFetchDocument } from '../../hooks/useFetchDocument'


const EditPost = () => {

  //Post ID
  const {id} = useParams()

  //Getting post by ID
  const {document: post} = useFetchDocument("posts", id)

  //States
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  // Loading the post data returned by the hook
  
  useEffect(() => {

    if(post){
        setTitle(post.title)
        setBody(post.body)
        setImage(post.image)
    
        //Tags came in array
        const textTags = post.tagsArray.join(", ")
        setTags(textTags)
    }
  }, [post])

  //Navigate
  const navigate = useNavigate()

  //Getting user
  const {user} = useAuthValue()

  const { updateDocument, response } = useUpdateDocument("posts")

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

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }

    updateDocument(id, data)

    // Redirect to home page
    navigate("/dashboard")

    setTitle("")
    setImage("")
    setBody("")
    setTags("")
  }

  return (
    <div className={styles.edit_post} >
        {post && (
        <>
            <h2>Editanto o post: {post.title} </h2>
            <p>Altere os dados do post como desejar!</p>

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
            <p className={styles.preview_title}>Preview da imagem atual: </p>
            <img  className={styles.image_preview} src={post.image} alt={post.title} />
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
                {!response.loading && <button className='btn'>Editar</button> }
                {response.loading && <button className='btn' disabled>Aguarde ...</button> }
                {response.error && <p className='error'>{response.error}</p> }
                {formError && <p className='error'>{formError}</p> }
            </form> 
        </>
        )}

    </div>
  )
}

export default EditPost