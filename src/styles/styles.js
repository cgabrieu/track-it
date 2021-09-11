import styled from "styled-components"
import { Link } from "react-router-dom";
import { ReactComponent as LogoVector } from "../assets/trackit-logo.svg";

const Logo = styled(LogoVector)`
    margin: 70px 0 23px 0;
`;

const ContainerLoginAndRegister = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export {
    ContainerLoginAndRegister,
    LargeButton,
    Logo,
    LinkLoginAndRegister,
}