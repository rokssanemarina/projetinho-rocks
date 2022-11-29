import { Header } from "../Components/Header"
import sobreImage from '../assets/Sobre.svg'

import Styles from '../styles/components/sobre.module.css'

export function Sobre (){
    return (
        <>
            <Header titulo ="Um pouco sobre mim" image ={sobreImage}/>
            <div className={Styles.sobreContainer}>
                <img className={Styles.bioImage} src="https://avatars.githubusercontent.com/u/109772792?v=4" alt="fotinha de perfil da rocks" />
                <div>
                <h2 className={Styles.bioTitle}>Hi, It's me :) </h2>
                <p className={Styles.bioText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </>
    )
}