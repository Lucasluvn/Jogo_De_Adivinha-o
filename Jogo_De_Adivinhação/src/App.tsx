import styles from "./App.module.css"
import { Letters } from "./components/Letters";
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

      <Letters value="R"/>
       <Letters value=""/>
        <Letters value="A"/>
         <Letters value="C"/>
          <Letters value=""/>
   </main>
  
   </div>
    
  )

}