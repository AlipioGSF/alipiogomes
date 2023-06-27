import React from "react";
import "./CSS/habilidades.css";

const habs = [
  {
    title: "HTML5",
    img: `${process.env.PUBLIC_URL}/images/skills/html.svg`,
    pro: 5,
  },
  {
    title: "CSS3",
    img: `${process.env.PUBLIC_URL}/images/skills/css.svg`,
    pro: 4,
  },
  {
    title: "JavaScript",
    img: `${process.env.PUBLIC_URL}/images/skills/javascript.svg`,
    pro: 4,
  },
  {
    title: "ReactJS",
    img: `${process.env.PUBLIC_URL}/images/skills/react.svg`,
    pro: 3,
  },
  {
    title: "NodeJS",
    img: `${process.env.PUBLIC_URL}/images/skills/nodejs.svg`,
  },
  {
    title: "Java",
    img: `${process.env.PUBLIC_URL}/images/skills/java.svg`,
    pro: 3,
  },
  {
    title: "Spring Boot",
    img: `${process.env.PUBLIC_URL}/images/skills/spring.svg`,
    pro: 3,
  },
  {
    title: "MySQL",
    img: `${process.env.PUBLIC_URL}/images/skills/mysql.svg`,
    pro: 2,
  },
  {
    title: "MongoDB",
    img: `${process.env.PUBLIC_URL}/images/skills/mongodb.svg`,
    pro: 2,
  },
  {
    title: "Figma",
    img: `${process.env.PUBLIC_URL}/images/skills/figma.svg`,
    pro: 4,
  },
  {
    title: "Git",
    img: `${process.env.PUBLIC_URL}/images/skills/git.svg`,
    pro: 3,
  },
];

const dev = [
  {
    name: "Front-End",
    pro: [".", ".", ".", ".","X"],
  },
  {
    name: "Back-end",
    pro: [".", ".", ".", "X","X"],
  },
  {
    name: "Database",
    pro: [".", ".", "X", "X","X"],
  },
  {
    name: "Design",
    pro: [".", ".", ".", "X","X"],
  },
];

const Habilidades = () => {
  return (
    <section id="Habilidades" >
      <h1 className="title">Habilidades</h1>
      <div class="skills">
          <div class="habsLocal">
            {habs.map((h) => (
              <div className="hab">
                <div
                  title={h.title}
                  className="habImg"
                  style={{ backgroundImage: `url('${h.img}')` }}
                ></div>
              </div>
            ))}
          </div>
        <div className="devHab">
          {dev.map((h) => (
            <div className="stack">
              <h4>{h.name}</h4>
              {h.pro.map((x) => (
                x==="."?
                <div className="point"></div>
                :
                <div className="point unpoint"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
