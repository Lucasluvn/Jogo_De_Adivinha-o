import styles from "./App.module.css"
import { use, useEffect,useState } from "react"
import {WORDS} from "./assets/utils/words"
import type {Challenge} from "./assets/utils/words"

import {Button} from "./components/Button"
import { Input } from "./components/Input/Index"
import {Letters} from "./components/Letters"
import {Tip} from "./components/Tip"
import {Header} from "./components/Header"
import { LettersUsed } from "./components/LettersUsed"
import type {LettersUsedProps} from "./components/LettersUsed"

const ATTEMPTS_MARGIN = 5

export default function App() {
const[lettersUsed,setLetterUsed] = useState<LettersUsedProps[]>([])
const [challenge,setChallenge] = useState<Challenge| null>(null)
const [letter, setLetter] = useState("")
const [score,setScore] = useState(0)

  function handleRestartGame(){
    const isCofirmed = window.confirm("Você tem certeza que deseja reiniciar")
    if(isCofirmed){
      startGame()
    }
    
  }

  function startGame(){
 
  const index = Math.floor(Math.random()* WORDS.length)
  const randomWord = WORDS[index]
  
  setScore(0)
  setChallenge(randomWord)
  setLetter("")
  setLetterUsed([])
}
  
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
  setLetter("")
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
 function endgame(message:string){
  alert(message)
  startGame()
 }
useEffect(()=>{
    startGame()
  },[])

useEffect(()=>{
  if(!challenge){
    return
  }
  setTimeout(()=>{
    if(score === challenge.word.length){
      return endgame("Parabéns, você acertou todas as palavras")
     
    } 
    const attemptLimit = challenge.word.length + ATTEMPTS_MARGIN
    if(lettersUsed.length === attemptLimit){
      return endgame("Que pena, você usou todas as tentativas")

    }
  },200)
},[score,lettersUsed.length])

if(!challenge){
  return
}
return (
    <div className={styles.container}>
      <main>
      <Header current={lettersUsed.length} max={challenge?.word.length + ATTEMPTS_MARGIN} onRestart={handleRestartGame}/>
      <Tip tip = {challenge?.tip}/>
    <div className={styles.word}>
     {challenge?.word.split("").map((letter,index)=>{
      const letterUsed = lettersUsed.find((used)=> used.value.toUpperCase() === letter.toUpperCase())
      
      
    
       
        return <Letters key ={index}  value={letterUsed?.value} color = {letterUsed?.correct? "correct" : "default"}/>
         })}
   </div>
          <h4>Palpite</h4>
         <div className= {styles.guess}>
        <Input autoFocus placeholder="?" value ={letter} maxLength={1} onChange={(e)=> setLetter(e.target.value)}
        />
        <Button title="Confirmar" onClick={handleConfirm}/>
         </div>
        <LettersUsed data ={lettersUsed}/>
        </main>
</div>
)
}

