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



export default function App() {
  console.log("App renderizou")
const [challenge,setChallenge] = useState<Challenge| null>(null)
const [attempts, setAttempts] = useState(0)
const [letter, setLetter] = useState("")

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

  return (
    <div className={styles.container}>
      <main>
      <Header current={attempts} max={10} onRestart={handleRestartGame}/>
      
      <Tip tip = "Linguagem de Programação"/>
    
    <div className={styles.word}>
      <Letters value="R"/>
       <Letters value=""/>
        <Letters value="A"/>
         <Letters value="C"/>
          <Letters value=""/>
          </div>
          
          
          <h4>Palpite</h4>
         
          <div className= {styles.guess}>
        <Input autoFocus placeholder="?" maxLength={1}/>
        <Button title="Confirmar"/>
         </div>
        
  <LettersUsed />
 
   </main>

  
   </div>
    
  )
 
}

