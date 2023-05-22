import React from "react";
import "./CSS/portfolio.css";

const projects = [
  {
    title: "Pokedex",
    img: `${process.env.PUBLIC_URL}/images/pokedex.png`,
    url: "https://pokedex-snowy.vercel.app/",
  },
  {
    title: "Nu Invest",
    img: `${process.env.PUBLIC_URL}/images/nu.png`,
    url: "https://ephemeral-quokka-8d542c.netlify.app/",
  },
  {
    title: "Calcule seu IMC",
    img: `${process.env.PUBLIC_URL}/images/imc.png`,
    url: "https://elastic-meninsky-b8beea.netlify.app/",
  },
  {
    title: "Xadrez",
    img: `${process.env.PUBLIC_URL}/images/xadrez.png`,
    url: "https://github.com/AlipioGSF/xadrez",
  },
  {
    title: "Mangrove Bank",
    img: `${process.env.PUBLIC_URL}/images/mangrove.png`,
    url: "https://www.figma.com/proto/jwl29Oak7f7CTRXfwcNpQ1/Mangrove?kind=&node-id=5-188&page-id=0%3A1&scaling=scale-down&starting-point-node-id=3%3A3",
  },
  {
    title: "",
    img: `${process.env.PUBLIC_URL}/images/`,
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section id="Portfólio">
      <h1 className="title">Portfólio</h1>
      <p className="subTitle">Projetos de Websites, Design e Sistemas que fiz para aprimorar meu conhecimento e em trabalhos acadêmicos</p>
      <div class="projects">
        {projects.map((p) =>
          p.url ? (
            <a href={p.url} className="project" target="_blank">
              <div style={{ backgroundImage: `url('${p.img}')` }}></div>
            </a>
          ) : (
            <a className="project" target="_blank">
              <div style={{ backgroundImage: `url('${p.img}')` }}></div>
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
