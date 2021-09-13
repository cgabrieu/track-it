import styled from "styled-components"
import { Link } from "react-router-dom";
import { ReactComponent as LogoVector } from "../assets/trackit-logo.svg";

const Logo = styled(LogoVector)`
    margin: 70px 0 23px 0;
`;

const Container = styled.div`
    padding: 0 18px 80px 18px;
    ${props => `min-height: calc(100vh - ${props.bottom});`}
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ color }) => color || "#FFFFFF"};
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const LinkBase = styled(Link)`
    color:#52B6FF;
`;

const LinkLoginAndRegister = styled(LinkBase)`
    font-size: 14px;
    text-decoration-line: underline;
    margin-top: 25px;
`;

const LinkBottombar = styled(LinkBase)`
    font-size: 18px;
    color: "#52B6FF"
`;

const LargeButton = styled.button`
    width: 300px;
`;

const CheckboxesFormStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: left;
    input {
        display: none;
    }
    li {
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
    li[state="checked"] {
        background:#CFCFCF;
        color: #fff;
    }
`;

export {
    Container,
    LargeButton,
    Logo,
    LinkLoginAndRegister,
    CheckboxesFormStyle,
    LinkBottombar,
}