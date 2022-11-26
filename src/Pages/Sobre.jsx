import { Header } from "../Components/Header"
import sobreImage from '../assets/Sobre.svg'

export function Sobre (){
    return (
        <div>
            <Header titulo ="Um pouco sobre mim" image ={sobreImage}/>
        </div>
    )
}