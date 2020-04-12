import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex: 1;
  background-color: #1a1a1a;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.07);

  padding: 24px;
  margin-bottom: 24px;

  .repo-data {
    display: flex;
    flex-direction: column;

    h3 {
      display: flex;
      color: #7159c1;
      font-weight: bold;
    }

    ul.tech-list {
      display: flex;
      margin-top: 4px;

      li {
        display: inline-flex;
        background-color: rgba(255, 255, 255, 0.1);
        color: #111;
        padding: 0 8px;
        border-radius: 8px;
      }

      li + li {
        margin-left: 4px;
      }
    }
  }

  button {
    display: flex;

    width: max-content;
    height: 24px;
    margin: auto 0;
    padding: 0 8px;

    border: none;
    border-radius: 8px;
    font-size: 14px;

    background-color: #700;
    color: #fff;

    opacity: 0.7;
    transition: opacity 0.2s;

    :hover {
      opacity: 1;
    }
  }
`;
