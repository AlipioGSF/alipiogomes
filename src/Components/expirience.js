import React from "react";
import "./CSS/expirience.css";

const exp = [
  {
    title: "Graduação em Engenharia Mecânica",
    duration: "08/19 - 06/21",
    local: "UFPE",
  },
  {
    title: "Curso de Programação de Software",
    duration: "12/21 - 04/22",
    local: "ADM&TEC",
  },
  {
    title: "Graduação em Análise Desenvolvimento de Sistemas",
    duration: "03/2022 - 06/2024",
    local: "UNIT-PE",
  },
  {
    title: "Capacitação em Teste de Software",
    duration: "08/2022 - 11/2022",
    local: "CESAR",
  },
  {
    title: "Capacitação em Desenvolvimento FullStack ",
    duration: "03/2023 - 06/2023",
    local: "Accenture",
  },
];

const Experience = () => {
  return (
    <section id="Experiências">
      <h1 className="title">Minhas Experiências</h1>
      <p className="subTitle">
        Graduações, cursos e capacitações que fiz e faço e que moldam meu
        conhecimento me tornando um profissional ainda mais qualificado.
      </p>
      <div className="Exps">
        {exp.map((e) => (
          <div className="exp">
            <h4>{e.local}</h4>
            <p>{e.title}</p>
            <h4>{e.duration}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
