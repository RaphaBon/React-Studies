//React
import { useEffect, useState } from 'react'

//CSS
import './App.css'

//Components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

//Data (possíveis palavras)
import { wordsList } from "./data/words"

// Estados do jogo para fazermos a progressão, que serão utilizado pelo useState
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {

  {/* Iniciamos o jogo no Start, e usamos o setGameStage para alterar o component a ser chamado */ }
  const [gameStage, setGameStage] = useState(stages[0].name)

  {/* Objeto das palavras */ }
  const [words] = useState(wordsList)

  {/* States para as palavras  */ }
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState("")

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)


  {/* Antes de começarmos o jogo em si, temos que definir a palavra */ }
  const pickWordAndCategory = () => {

    {/* Pega as categorias do ojeto word */ }
    const categories = Object.keys(words)

    {/* Sorteia uma categoria (o math.random escolhe o número da posição, sendo ele até o tamanho do objeto)
       e o (math.floor arredonda o número)*/}

    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    {/* Pegamos a palavra dessa categoria em específico */ }
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  {/* Começa o  jogo, porém antes definimos a palavra a ser advinha e desestruturamos ela em letras */ }

  const startGame = () => {
    {/* Como vamos chamar essa função após gnahar o jogo, resetamos as letras já acertadas e erradas */}
    clearLetterStates()

    const { word, category } = pickWordAndCategory()

    {/* Pega cada letra e transforma em lowerCase */ }
    let wordLetters = word.split("").map((l) => l.toLowerCase())

    {/* Passamos para o state */ }
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    {/* Começa o jogo */ }
    setGameStage(stages[1].name)
  }

  {/* Função para padrozinar a letra */ }
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase()

    {/* Chega se a letra já foi utilizada (tanto acertada quanto errada): */ }
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    {/* Adicionar a letra a palavra ou reduzir uma tentativa  */ }
    if (letters.includes(normalizedLetter)) {
      {/* Pegamos todos os elementos do array (setGuessedLetters) e adicionamos a letra atual digitada */ }
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ])

      {/* Se ele errou, diminui 1 nas chaces */}
      setGuesses((actualGuesses) => actualGuesses - 1)

    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  {/* Método que verifica constantemente um elemento, nesse caso é o "guesses". Onde ele verifica se guesses <= 0 */}
  useEffect(() => {
    if(guesses <= 0){
      {/* Os states precisam ser limpados para evitar que o usuário recomeçe o jogo com 0 tentativas */}
      clearLetterStates()
      
      setGameStage(stages[2].name)
    }

  }, [guesses])

  {/* Condição de Vitória */}
  useEffect(() => {

    {/* Pega o array de letras e o método Set tira as letras repetidas   */}
    const uniqueLetters = [... new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
       setScore((actualScore) => actualScore += 100)

       startGame()
    }


  }, [guessedLetters, letters, startGame])

  {/* Quando ele reiniciar o jogo, zera os dados dele */}
  const retry = () => {
    setScore(0)
    setGuesses(3)

    setGameStage(stages[0].name)
  }


  return (
    <div className="App">
      {/* IF para cada tela e imprime seu respectivo component */}
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score} />}

      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>


  )
}

export default App
