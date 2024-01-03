import styles from "./styles.module.css"
export default function InputPassword(props){
   
    const hadleChange = (event) =>{
        console.log('Digitando...', event.target.name, event.target.value)
      }  
      
      return(
          <input className={styles.wrapper}
          name="password"
          placeholder="Digite o sua Senha"
          onChange={hadleChange}
          type="password"
          />
        )
}