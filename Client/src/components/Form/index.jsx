import Button from "../Button"
import InputEmail from "../InputEmail"
import InputPassword from "../InputPassword"
import styles from "./styles.module.css"
export default function Form(props){
    return(
 <div
         className={styles.form}
         >
        <h1 className={styles.h1}>
                Faça o seu login 🫵
        </h1>
            <InputEmail/>
            <InputPassword/>
        <Button
        type={type}
        onClick={onClick}
        />
    <div>
        <p>
                Não possui conta?
        </p>
        <a>
                Cadastrar
        </a>
    </div>
 </div>
    )
}