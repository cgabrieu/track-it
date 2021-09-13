import styled from 'styled-components';
import React, { useContext, useState, useEffect } from 'react';
import { Container } from "../../../styles/styles";
import { getTodayHabits, postCheckHabit, postUncheckHabit } from '../../../service/trackit';
import UserContext from "../../../contexts/UserContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

const History = () => {

    const day = dayjs().locale('pt-br');
    const weekday = day.format('dddd');
    const date = day.format('DD/MM')

    useEffect(() => {
        getTodayHabits(user.token)
            .then((e) => {
                setListHabits(e.data);
            })
            .catch(() => alert("Erro ao obter lista de hábitos."));
        setSuccess(false);
    }, [success]);


    return (
        <Container color="#E5E5E5" bottom="72px">
            <ContainerDate>
                <h1>
                    
                </h1>
                <h2>{progressDay}% dos hábitos concluídos</h2>
            </ContainerDate>
            {listHabits.map((e) => <TodayHabitItem key={e.id} handleCheckHabit={handleCheckHabit} habit={e} />)}
        </Container>
    );
};

const ContainerDate = styled.div`
    margin: 100px 0 18px 0;
    width: 340px;
    h1 {
        font-size: 23px;
        color: #126BA5;
    }
    h2 {
        font-size: 18px;
        color: #8FC549;
        line-height: 26px;
    }
`;

export default History;