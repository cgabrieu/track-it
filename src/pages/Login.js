import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import Loader from "react-loader-spinner";
import { Logo, ContainerLoginAndRegister, LinkLoginAndRegister, LargeButton } from "../styles/styles";
import { postLogin } from '../service/trackit';
import { useHistory } from 'react-router';

const Login = () => {
    const [values, setValues] = useState({email: '', password:''});
    const [isLoading, setIsLoading] = useState(false);
    const { setToken } = useContext(UserContext);

    const history = useHistory();

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
            setToken(res.data.token);
            history.push("/habitos")
            setIsLoading(false);
        }).catch(() => setIsLoading(false));
    };

    return (
        <ContainerLoginAndRegister onSubmit={onSubmitLogin}>
            <Logo />
                <input
                    type="email"
                    onChange={onChangeInput}
                    value={values.email}
                    name="email"
                    placeholder="email"
                />
                <input 
                    type="password"
                    onChange={onChangeInput}
                    value={values.password}
                    name="password"
                    placeholder="senha"
                    minLength="6"
                />
                {isLoading ?
                    <LargeButton disabled>
                        <Loader type="ThreeDots" color="#FFFFFF" height={15} width={80} />
                    </LargeButton>
                    : <LargeButton type="submit">Entrar</LargeButton>
                }
            <LinkLoginAndRegister to="/cadastro">Não tem uma conta? Cadastre-se!</LinkLoginAndRegister>
        </ContainerLoginAndRegister>
    );
};

export default Login;