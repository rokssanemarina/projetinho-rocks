import Axios from 'axios'
import { useState, useEffect } from 'react'
import { ArrowBendDownLeft } from 'phosphor-react'

import {Header} from "../Components/Header"
import projetoImg from "../assets/Projeto.svg"


import Styles from '../styles/components/portfolio.module.css'


export function Portfolio ( ) {
    const [repositories, setRepositories]= useState([])

    useEffect( ()=>{
        async function getData (){
            const response = await Axios.get('https://api.github.com/users/rokssanemarina/repos')
            setRepositories (response.data)
        }
        getData()
    },[])


    return (
        <div>
            <Header titulo="Projetinhos" image={projetoImg}/>
            <div className={Styles.projectsContainer}>
                <h2 className={Styles.projectsTitle}>Projetinho do Github</h2>
                <div className={Styles.projectsContainer}>
                    <div className={Styles.cardsRepoContainer}>
                        {
                            repositories.map(repo =>{
                                return(
                                    <div className={Styles.cardRepo} >
                                        <h3 className={Styles.cardRepoText} key={repo.id} >{repo.name}</h3>
                                        <p className={Styles.cardRepoText} >{repo.description} </p>
                                        <a  className={Styles.cardRepoLink} href={repo.html_url} target="_blank" rel='noreferrer'>{repo.html_url}
                                        <ArrowBendDownLeft size={32} weight="thin" color="#fff" />
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}