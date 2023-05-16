import React from 'react'
import "./CSS/home.css"

const socialMedia = [
    {
        title: "LinkedIn",
        img: `${process.env.PUBLIC_URL}/icons/in.svg`,
        url:'https://www.linkedin.com/in/alipio-gomes-sf/',
    },
    {
        title: "Github",
        img: `${process.env.PUBLIC_URL}/icons/github.svg`,
        url: 'https://github.com/AlipioGSF'
    }
]

const Home = () => {
  return (
        <section id="home">
            <div id='sbText'>
                <h4>Olá! Eu sou</h4>
                <h1>Alípio Gomes</h1>
                <h4>FullStack Developer</h4>
                <p>Sou estudande em Análise e Desenvolvimento de Sistemas e tenho 22 anos.</p>
            <div id='redes'>
                <span>REDES SOCIAS :&nbsp;&nbsp;</span>
                {
                    socialMedia.map((s)=>(
                        <a href={s.url} target='_blank'><button title={s.title} style={{backgroundImage: `url('${s.img}')`}}></button></a>
                    ))
                }
            </div>
            </div>
            <div id="sbImg"></div>
        </section>
)
}

export default Home