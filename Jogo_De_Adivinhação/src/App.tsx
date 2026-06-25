import styles from "./App.module.css"
import {Button} from "./components/Button"
import { Input } from "./components/Input/Index"
import {Letters} from "./components/Letters"
import {Tip} from "./components/Tip"
import {Header} from "./components/Header"



export default function App() {

  function handleRestartGame(){
    alert("REINICIAR O JOGO")
  }
  return (
    <div className={styles.container}>
      <main>
      <Header current={5} max={10} onRestart={handleRestartGame}/>
      
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
   </main>
  
   </div>
    
  )

}