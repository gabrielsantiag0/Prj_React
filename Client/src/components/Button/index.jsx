import styles from "./styles.module.css"
export default function Button({type, onClick}){
    
    const handleSubmit = async () =>{
      alert('Login')  
    }

   
    
    return(
        <button className={styles.wrapper}
        type='submit'
        onClick={handleSubmit}
        >
        Entrar!

        </button>
    )
}