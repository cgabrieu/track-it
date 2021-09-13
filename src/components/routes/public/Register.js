import React, { useState } from 'react';
import Loader from "react-loader-spinner";
import { Logo, Container, LinkLoginAndRegister, LargeButton } from "../../../styles/styles";
import { postRegister } from '../../../service/trackit';
import { useHistory } from 'react-router';

const Register = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        name: '',
        picture: ''
    });
    const [isLoading, setIsLoading] = useState(false);

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
        const { email, password, name, picture } = values;
        postRegister(email, name, picture, password).then(res => {
            history.push("/");
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
            alert("E-mail já utilizado.")
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
                <input
                    type="text"
                    onChange={onChangeInput}
                    value={values.name}
                    disabled={isLoading}
                    name="name"
                    placeholder="nome"
                    minLength="3"
                    required
                />
                <input
                    type="url"
                    onChange={onChangeInput}
                    value={values.picture}
                    disabled={isLoading}
                    name="picture"
                    placeholder="foto"
                    required
                />
                {isLoading 
                    ? <LargeButton disabled>
                        <Loader type="ThreeDots" color="#FFFFFF" height={15} width={80} />
                    </LargeButton>
                    : <LargeButton type="submit">Cadastrar</LargeButton>
                }
            </form>
            <LinkLoginAndRegister to="/">Já tem uma conta? Faça login!</LinkLoginAndRegister>
        </Container>
    );
};

export default Register;