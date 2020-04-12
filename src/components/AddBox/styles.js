import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 1024px;
  padding: 24px;
  margin: 0 auto 24px;
  background-color: #1a1a1a;

  input {
    display: flex;
    flex: 1;
    align-items: center;

    height: 45px;
    min-height: 45px;
    padding: 0 16px;
    margin-bottom: 16px;

    border-radius: 8px;
    border: none;

    background-color: rgba(255, 255, 255, 0.07);
    color: #fff;

    :focus {
      background-color: rgba(255, 255, 255, 0.14);
    }
  }

  button {
    display: flex;
    align-self: flex-end;
    align-items: center;
    height: 45px;

    border-radius: 8px;
    border: none;
    width: max-content;

    padding: 0 16px;
    background-color: #7159c1;
    color: #ccc;
    text-transform: uppercase;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
