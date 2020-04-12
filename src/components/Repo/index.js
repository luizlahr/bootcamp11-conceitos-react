import React from "react";

import { Container } from "./styles";

export default function Repo({ repo: { title, techs, id, url }, onRemove }) {
  const renderTechs = (techList) => (
    <ul className="tech-list">
      {techList.map((tech) => {
        return <li key={tech}>{tech}</li>;
      })}
    </ul>
  );

  return (
    <Container>
      <div className="repo-data">
        <h3>{title}</h3>
        {renderTechs(techs)}
      </div>
      <button onClick={() => onRemove(id)}>Remover</button>
    </Container>
  );
}
