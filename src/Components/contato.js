import { useState } from "react";
import "./CSS/contato.css";

const Contato = () => {
  return (
    <section id="Contato">
      <h1 className="title">Contato</h1>
      <form
        action="https://formsubmit.co/alipioteccontato@gmail.com"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="assunto"
          placeholder="Assunto"
          required
        />
        <textarea
          placeholder="Sua Mensagem"
          name="message"
          rows="10"
          required
        ></textarea>
        <button type="submit" class="btn btn-lg btn-dark btn-block">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contato;
