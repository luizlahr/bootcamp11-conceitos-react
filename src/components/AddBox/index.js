import React, { useState } from "react";

import { Container } from "./styles";
import { message } from "antd";

export default function AddBox({ onAdd }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [techs, setTechs] = useState("");

  const handleAdd = () => {
    try {
      onAdd({ title, url, techs });
      setTitle("");
      setUrl("");
      setTechs("");
    } catch (error) {
      console.error(error);
      message.error("Erro ao salvar repositório! Verifique o console");
    }
  };

  return (
    <Container>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        placeholder="Titulo do repositório"
        autoFocus={true}
      />
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        name="url"
        placeholder="URL"
      />
      <input
        value={techs}
        onChange={(e) => setTechs(e.target.value)}
        type="text"
        name="techs"
        placeholder="Tecnologias (Separado por virgulas)"
      />
      <button onClick={handleAdd}>Adicionar</button>
    </Container>
  );
}
