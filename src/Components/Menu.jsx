import {Link} from 'react-router-dom'

import Style from '../styles/components/menu.module.css'

export function Menu (){
    return (
        <ul className={Style.menuContainer}>
            <li className={Style.menuItem}>
                <Link className={Style.menuLink} to="/"> Home </Link>
            </li>
            <li className={Style.menuItem}>
                <Link className={Style.menuLink}  to="/sobre"> Sobre </Link>
            </li>
            <li className={Style.menuItem}>
                <Link className={Style.menuLink}  to="/portfolio" >Portfólio</Link>
            </li>
            <li className={Style.menuItem} >
                <Link className={Style.menuLink}  to="/contato" >Contato</Link>
            </li>
        </ul>
    )
}