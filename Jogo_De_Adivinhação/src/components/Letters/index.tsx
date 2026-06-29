import styles from "./styles.module.css"

type Props = {
value?:string
color?: "default" | "correct" | "wrong"

}

export function Letters ({value = "", color = "default" }: Props) {
  return (
    <div className= {`
      ${styles.letter}
      ${color === "correct" && styles.letterCorrect}
        ${color === "wrong" && styles.letterWrong}`} 
      >
      <span>{value}</span>
    </div>
  )

  
}

