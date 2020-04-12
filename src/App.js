import React, { useState, useEffect } from "react";

import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import RepoList from "./components/RepoList";
import Repo from "./components/Repo";
import AddBox from "./components/AddBox";
import api from "./services/api";
import { message } from "antd";

import "antd/dist/antd.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository({ title, url, techs }) {
    const techList = techs.split(",");
    const form = { title, url, techs: techList };
    const { data } = await api.post("/repositories", form);
    setRepositories([...repositories, data]);
    message.success("Repositório adicionado com sucesso!");
  }

  async function handleRemoveRepository(id) {
    try {
      const { data } = await api.delete(`/repositories/${id}`);
      setRepositories([...repositories.filter((repo) => repo.id !== id)]);
      message.success("Repositório removido com sucesso!");
    } catch (error) {
      console.error(error);
      message.error("Erro ao salvar repositório! Verifique o console");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("/repositories");
        setRepositories(data);
      } catch (error) {
        console.error(error);
        message.error("Erro ao carregar dados! Verifique o console");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header />

      <AddBox onAdd={handleAddRepository} />
      <RepoList>
        {repositories.map((repo) => {
          return (
            <Repo key={repo.id} repo={repo} onRemove={handleRemoveRepository} />
          );
        })}
      </RepoList>
    </div>
  );
}

export default App;
