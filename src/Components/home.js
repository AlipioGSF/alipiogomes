import React from "react";
import "./CSS/home.css";

const socialMedia = [
  {
    title: "LinkedIn",
    img: `${process.env.PUBLIC_URL}/images/icons/in.svg`,
    url: "https://www.linkedin.com/in/alipio-gomes-sf/",
  },
  {
    title: "Github",
    img: `${process.env.PUBLIC_URL}/images/icons/github.svg`,
    url: "https://github.com/AlipioGSF",
  },
];

const homeImg = `${process.env.PUBLIC_URL}/images/coding.gif`

const Home = () => {
  return (
    <section id="SobreMim">
      <div id="sbText">
        <h4>Olá! Eu sou</h4>
        <h1 className="title">Alípio Gomes</h1>
        <h4>FullStack Developer</h4>
        <p>
          Estudante de Análise e Desenvolvimento de Sistemas, tenho 22 anos
          e sou comunicativo, proativo, curioso e busco sempre aprender
          coisas novas. Criatividade, liderança e trabalho em equipe são
          pontos fortes em mim.
          Ajudar as pessoas é algo que me faz sentir bem, por isso, pretendo em
          minha carreira participar de projetos que possam ser úteis e tenham
          impacto positivo para a sociedade.
        </p>
        <div id="redes">
          <span>REDES SOCIAS :&nbsp;&nbsp;</span>
          {socialMedia.map((s) => (
            <a href={s.url} target="_blank">
              <button
                title={s.title}
                style={{ backgroundImage: `url('${s.img}')` }}
              ></button>
            </a>
          ))}
        </div>
      </div>
      <div id="sbImg" style={{backgroundImage: `url('${homeImg}')`}}></div>
    </section>
  );
};

export default Home;
