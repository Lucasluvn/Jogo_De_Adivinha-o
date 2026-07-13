import styles from "./App.module.css"
import { useEffect,useState } from "react"
import {WORDS} from "./assets/utils/words"
import type {Challenge} from "./assets/utils/words"


import {Button} from "./components/Button"
import { Input } from "./components/Input/Index"
import {Letters} from "./components/Letters"
import {Tip} from "./components/Tip"
import {Header} from "./components/Header"
import { LettersUsed } from "./components/LettersUsed"
import type {LettersUsedProps} from "./components/LettersUsed"

export default function App() {
const[lettersUsed,setLetterUsed] = useState<LettersUsedProps[]>([])
const [challenge,setChallenge] = useState<Challenge| null>(null)
const [attempts, setAttempts] = useState(0)
const [letter, setLetter] = useState("")
const [score,setScore] = useState(0)

  function handleRestartGame(){
    
    alert("REINICIAR O JOGO")
  }

  function startGame(){
 
  const index = Math.floor(Math.random()* WORDS.length)
  const randomWord = WORDS[index]
  
  setAttempts(0)
  setChallenge(randomWord)
  setLetter("")
}
  useEffect(()=>{
    startGame()
  },[])
function handleConfirm(){
if(!challenge){
return
}
  if(!letter.trim()){
  return alert ("Digite uma letra")
}
const value = letter.toUpperCase()
const existis = lettersUsed.find((used)=> used.value.toUpperCase() === value)
if(existis){
  return alert ("Você já utilizou a letra" + value)
}

const hits =  challenge.word.toUpperCase().split("").filter((char) => char === value).length

const correct = hits > 0

const currentScore = score + hits 

setLetterUsed((prevState) => [...prevState,{value,correct}])
 console.log(lettersUsed)
setScore(currentScore) 
setLetter("")

}
return (
    <div className={styles.container}>
      <main>
      <Header current={attempts} max={10} onRestart={handleRestartGame}/>
      <Tip tip = {challenge?.tip}/>
    <div className={styles.word}>
     {challenge?.word.split("").map(()=>(
         <Letters value=""/>
         ))}
   </div>
          <h4>Palpite</h4>
         <div className= {styles.guess}>
        <Input autoFocus placeholder="?" maxLength={1} onChange={(e)=> setLetter(e.target.value)}
        />
        <Button title="Confirmar" onClick={handleConfirm}/>
         </div>
        <LettersUsed data ={lettersUsed}/>
        </main>
</div>
)
}

