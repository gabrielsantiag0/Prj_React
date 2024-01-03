import styles from "./styles.module.css"
export default function InputEmail(props){
 
  const hadleChange = (event) =>{
    console.log('Digitando...', event.target.name, event.target.value)
  }  
  
  return(
      <input className={styles.wrapper}
      name="email"
      placeholder="Digite o seu E-mail"
      onChange={hadleChange}
      type="email"
      />
    )
}