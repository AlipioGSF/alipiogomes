import React from "react";
import "./CSS/portfolio.css";

const projects = [
  {
    title: "Pokedex",
    img: `${process.env.PUBLIC_URL}/images/banners/pokedex.png`,
    url: "https://pokedex-snowy.vercel.app/",
  },
  {
    title: "Nu Invest",
    img: `${process.env.PUBLIC_URL}/images/banners/nu.png`,
    url: "https://ephemeral-quokka-8d542c.netlify.app/",
  },
  {
    title: "Calcule seu IMC",
    img: `${process.env.PUBLIC_URL}/images/banners/imc.png`,
    url: "https://elastic-meninsky-b8beea.netlify.app/",
  },
  {
    title: "Xadrez",
    img: `${process.env.PUBLIC_URL}/images/banners/xadrez.png`,
    url: "https://github.com/AlipioGSF/xadrez",
  },
  {
    title: "Mangrove Bank",
    img: `${process.env.PUBLIC_URL}/images/banners/mangrove.png`,
    url: "https://www.figma.com/proto/jwl29Oak7f7CTRXfwcNpQ1/Mangrove?kind=&node-id=5-188&page-id=0%3A1&scaling=scale-down&starting-point-node-id=3%3A3",
  },
  {
    title: "Taldas Flores",
    img: `${process.env.PUBLIC_URL}/images/banners/taldasbanner.png`,
    url: "https://taldas-flores.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="Portfólio">
      <h1 className="title">Portfólio</h1>
      <p className="subTitle">
        Projetos e trabalhos acadêmicos que criei para aprimorar meu conhecimento em websites, design e sistemas.
      </p>
      <div class="projects">
        {projects.map((p) =>
          p.url ? (
            <a href={p.url} title={p.title} className="project" target="_blank">
              <div style={{ backgroundImage: `url('${p.img}')` }}></div>
            </a>
          ) : (
            <a className="project" title={p.title} target="_blank">
              <div style={{ backgroundImage: `url('${p.img}')` }}></div>
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
