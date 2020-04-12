import React from "react";

import { Container } from "./styles";

export default function RepoList({ children }) {
  return <Container data-testid="repository-list">{children}</Container>;
}
