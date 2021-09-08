import { Logo, ContainerLoginAndRegister, LinkLoginAndRegister, LargeButton } from "../styles/styles";

const Login = () => (
    <ContainerLoginAndRegister>
        <Logo />
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="senha"/>
        <LargeButton>Entrar</LargeButton>
        <LinkLoginAndRegister to="/cadastro">Não tem uma conta? Cadastre-se!</LinkLoginAndRegister>
    </ContainerLoginAndRegister>
);

export default Login;