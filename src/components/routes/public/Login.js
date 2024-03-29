import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../../contexts/UserContext';
import Loader from "react-loader-spinner";
import { Logo, Container, LinkLoginAndRegister, LargeButton } from "../../../styles/styles";
import { postLogin } from '../../../service/trackit';
import { useHistory } from 'react-router';

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useContext(UserContext);

    const history = useHistory();
    
    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved !== null) {
            setUser(JSON.parse(saved));
            history.push("/habitos");
        }
      }, []);

    const onChangeInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmitLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        postLogin(values.email, values.password).then(res => {
            setUser(res.data);
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            history.push("/habitos");
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
            alert("Usuário e senha inválidos.")
        });
    };

    return (
        <Container bottom="0px">
            <Logo />
            <form onSubmit={onSubmitLogin}>
                <input
                    type="email"
                    onChange={onChangeInput}
                    value={values.email}
                    disabled={isLoading}
                    name="email"
                    placeholder="email"
                    required
                />
                <input
                    type="password"
                    onChange={onChangeInput}
                    value={values.password}
                    disabled={isLoading}
                    name="password"
                    placeholder="senha"
                    minLength="6"
                    required
                />
                {isLoading
                    ? <LargeButton disabled>
                        <Loader type="ThreeDots" color="#FFFFFF" height={15} width={80} />
                    </LargeButton>
                    : <LargeButton type="submit">Entrar</LargeButton>
                }
            </form>
            <LinkLoginAndRegister to="/cadastro">Não tem uma conta? Cadastre-se!</LinkLoginAndRegister>
        </Container>
    );
};

export default Login;