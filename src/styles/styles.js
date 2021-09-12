import styled from "styled-components"
import { Link } from "react-router-dom";
import { ReactComponent as LogoVector } from "../assets/trackit-logo.svg";

const Logo = styled(LogoVector)`
    margin: 70px 0 23px 0;
`;

const Container = styled.div`
    padding: 0 18px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${({ color }) => color || "#FFFFFF"};
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const LinkLoginAndRegister = styled(Link)`
    font-size: 14px;
    color:#52B6FF;
    text-decoration-line: underline;
    margin-top: 25px;
`;

const LargeButton = styled.button`
    width: 300px;
    &:disabled {
        opacity: 0.7;
    }
`;

const CheckboxesForm = styled.div`
    display: flex;
    width: 100%;
    justify-content: left;
    
    input {
        display: none;
    }

    label {
        margin-right: 4px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        color: #DBDBDB;
        font-size: 20px;
        cursor: pointer;
    }

    label[name="checked"] {
        background:#CFCFCF;
        color: #fff;
    } 
    
    #domingo:checked ~ label[for="domingo"],
    #segunda:checked ~ label[for="segunda"],
    #terca:checked ~ label[for="terca"],
    #quarta:checked ~ label[for="quarta"],
    #quinta:checked ~ label[for="quinta"],
    #sexta:checked ~ label[for="sexta"],
    #sabado:checked ~ label[for="sabado"] {
        background:#CFCFCF;;
        color: #fff;
    }
`;

export {
    Container,
    LargeButton,
    Logo,
    LinkLoginAndRegister,
    CheckboxesForm,
}