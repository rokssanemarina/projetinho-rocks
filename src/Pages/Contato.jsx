import{ useState } from 'react'

import { Header } from "../Components/Header"
import contatoImage from "../assets/Contato.svg"
import {database} from '../service/firebase'
import { ref, push, set } from 'firebase/database'

import Styles from '../styles/components/contato.module.css'

export function Contato (){
    const [name, setName] = useState ('')
    const [ email, setEmail]= useState ('')
    const [mensagem , setMensagem ] = useState ('')

    function handleInputValueName (event){
        setName (event.target.value)
    }

    function handleInputEmail (event){
        setEmail (event.target.value)
    }
    function handleInputMensagem (event){
        setMensagem (event.target.value)
    }
    function handleCreateMessage(event){
        event.preventDefault()

        const messageListRef = ref(database, 'mensagem')
        const newMessageRef= push (messageListRef)

        set(newMessageRef, {
            nome: name,
            email: email,
            texto: mensagem,
        })

    }
    return (
    <div>
        <Header titulo="chama no contatinho" image={contatoImage}/>.
        <div>
            <form  onSubmit={handleCreateMessage}  className={Styles.form}>
                <input 
                className={Styles.formInput} 
                placeholder="digite seu nomezito"
                onChange={handleInputValueName}
                />
                <input className={Styles.formInput} 
                placeholder="digite seu email"
                onChange={handleInputEmail}
                />
                <textarea className={Styles.formTextArea}
                 placeholder="um recadinho do coração"
                 onChange={handleInputMensagem}
                 />
                <button type="submit" className={Styles.formButton}>enviar!</button>
            </form>
        </div>

    </div>
    )
}