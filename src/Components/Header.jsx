import Style from '../styles/components/header.module.css'

export function Header (props){
    return (
        <div className={Style.headerContainer}>
            <h1 className={Style.headerTitle}>{props.titulo}</h1>
            <img className={Style.headerImage} src={props.image}/>
        </div>
    )
}