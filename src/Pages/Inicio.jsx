import { Header } from "../Components/Header"
import homeImg from "../assets/home.svg"
import { Brain, Code, FigmaLogo} from 'phosphor-react'

import Styles from '../styles/components/inicio.module.css'



export function  Inicio (){
    return (
        <>
        <Header titulo="o que eu acredito" image={homeImg} />
        <div className={Styles.homeContainer}>
            <div className={Styles.cardContainer} >
                <Brain size={150} weight="thin" color="#686AAC"/>
                <h2 className={Styles.cardTitle}>Conhecimento Acessivel e Ilimitado</h2>
                <p className={Styles.cardtext}>Acredito fortemente que o conhecimento ele não tem limites e ele não descrimina ninguem e que ele pode chegar a lugares inimaginaveis e isso me motiva a cada vez mais a usar a internet a meu favor pra me profissionalizar e crescer.</p>
            </div>
            <div className={Styles.cardContainer} >
                <Code size={150} weight="thin" color="#686AAC"/>
                <h2 className={Styles.cardTitle}>O poder do Código</h2>
                <p className={Styles.cardtext}>O código ele te tira da zona de conforto, te coloca em situação que seu olhar analítico precisa ser refinado e aprimorado. Não existe um perfeito no código, mas sim as tentativas.</p>
            </div>
            <div className={Styles.cardContainer} >
                <FigmaLogo size={150} weight="thin" color="#686AAC"/>
                <h2 className={Styles.cardTitle}>Design Criativo</h2>
                <p className={Styles.cardtext}>O design visual ele nos permite a visualizar o resultado de forma mais precisa e detalhada, podendo colocar toques pessoais nele. </p>
            </div>
        </div>
        </>
    )
}