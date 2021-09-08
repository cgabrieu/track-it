import "./reset.css"
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: 'Lexend Deca', sans-serif;
  }
  button {
    cursor: pointer;
  }
  input {
    width: 300px;
    height: 45px;
    border: 1.5px solid#D5D5D5;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 6px;
    padding-left: 10px;
    outline: none;
  }
  input::placeholder {
    color: #DBDBDB;
    font-size: 20px;
  }
`;