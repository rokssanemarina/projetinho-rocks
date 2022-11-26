import { Header } from "../Components/Header"
import homeImg from "../assets/home.svg"

export function  Inicio (){
    return (
        <div>
        <Header titulo="olha que bonito" image={homeImg} />
        </div>
    )
}