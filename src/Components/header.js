import { useContext, useEffect, useState } from "react";
import "./CSS/header.css";

const navOptions = [
  {
    label: "Sobre Mim",
  },
  {
    label: "Portfólio",
  },
  {
    label: "Habilidades",
  },
  {
    label: "Contato",
  },
  {
    label: "Download CV",
    cvs: [
      {
        label: "Download",
        url: `${process.env.PUBLIC_URL}/Files/AlipioGomes(pt-BR).pdf`,
        img: `${process.env.PUBLIC_URL}/icons/br.svg`,
      },
      {
        label: "Download",
        url: `${process.env.PUBLIC_URL}/Files/AlipioGomes(en).pdf`,
        img: `${process.env.PUBLIC_URL}/icons/usa.svg`,
      },
    ],
  },
];

const Header = () => {
  return (
    <header>
      <nav>
        {navOptions.map((op) =>
          op.label !== "Download CV" ? (
            <a href={`#${op.label.replace(" ", "")}`}>
              <button>{op.label}</button>
            </a>
          ) : (
            <div className={"w3-dropdown-hover"}>
              <button>{op.label}</button>
              <div className={"w3-dropdown-content"}>
                <a href={op.cvs[0].url} download="AlipioGomes(pt-BR).pdf">
                  <button className={"dropdownItem"}>
                    <h5>{op.cvs[0].label}</h5>
                    <div
                      className={"iconCV"}
                      style={{ backgroundImage: `url('${op.cvs[0].img}')` }}
                    ></div>
                  </button>
                </a>
                <a href={op.cvs[1].url} download="AlipioGomes(en).pdf">
                  <button className={"dropdownItem"}>
                    <h5>{op.cvs[1].label}</h5>
                    <div
                      className={"iconCV"}
                      style={{ backgroundImage: `url('${op.cvs[1].img}')` }}
                    ></div>
                  </button>
                </a>
              </div>
            </div>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
