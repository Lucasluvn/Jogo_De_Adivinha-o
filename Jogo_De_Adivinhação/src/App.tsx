import styles from "./App.module.css"



import {Header} from "./components/Header"


export default function App() {

  function handleRestartGame(){
    alert("Reiniciar o Jogo")
  }
  return (
    <main>
    <div className={styles.container}>
      <Header current={5} max={10} onRestart={handleRestartGame}/>
   </div>
   </main>
  )

}