import { Logo, ContainerLoginAndRegister, LinkLoginAndRegister, LargeButton } from "../styles/styles";

const Register = () => (
    <ContainerLoginAndRegister>
        <Logo />
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="senha"/>
        <input type="text" placeholder="nome"/>
        <input type="text" placeholder="foto"/>
        <LargeButton>Cadastrar</LargeButton>
        <LinkLoginAndRegister to="/">Já tem uma conta? Faça login!</LinkLoginAndRegister>
    </ContainerLoginAndRegister>
);

export default Register;