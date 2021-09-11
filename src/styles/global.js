import "./reset.css"
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: 'Lexend Deca', sans-serif;
  }
  button {
    cursor: pointer;
    height: 45px;
    background-color:#52B6FF;
    color: white;
    font-size: 21px;
    border: none;
    border-radius: 4.65px;
  }
  input {
    width: 300px;
    height: 45px;
    border: 1.5px solid#D5D5D5;
    color:#666666;
    line-height: 25px;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 6px;
    padding-left: 10px;
    outline: none;
    &::placeholder {
      color: #DBDBDB;
      font-size: 20px;
    }
    &:invalid {
        border: 1.5px solid red;
    }
  }
`;