import styles from "./styles.module.css"
import { Letters } from "../Letters" 
type Props = {
  value:string
} 
export function LettersUsed(){
  return (
    <div className={styles.LettersUsed}>
      <h5>Letras Utilizadas</h5>
      <div>
        <Letters value="X" color="correct"/>
        <Letters value="Y" color="wrong"/>
      </div>
    </div>
  )
}