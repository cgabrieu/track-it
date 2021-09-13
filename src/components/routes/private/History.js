import styled from 'styled-components';
import React, { useContext, useState, useEffect } from 'react';
import { Container } from "../../../styles/styles";
import { getHistoryDailyHabit } from '../../../service/trackit';
import UserContext from "../../../contexts/UserContext";
import Calendar from 'react-calendar';
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import 'react-calendar/dist/Calendar.css';

const History = () => {

    const { user } = useContext(UserContext);
    const [days, setDays] = useState([]);

    useEffect(() => {
        getHistoryDailyHabit(user.token)
            .then(e => setDays(e.data))
            .catch(() => alert("Erro ao obter lista de dias."))
    }, []);

    return (
        <Container color="#E5E5E5" bottom="72px">
            <ContainerCalendar>
                <h1>
                    Histórico
                </h1>
                <FormCalendar 
                   minDate={new Date("8/29/2021")}
                   maxDate={new Date()}
                   calendarType={"US"}
                   formatDay={(locale, date) => dayjs(date).format('DD')}
                />
            </ContainerCalendar>
        </Container>
    );
};

const ContainerCalendar = styled.div`
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

const FormCalendar = styled(Calendar)`
    margin-top: 12px;
    height: 400px;
    border-radius: 10px;
    border: none;
    background-color: #FFF;
    div {
        margin-top: 5px; 
    }
    button {
        color: black;
        border-radius: 50%;
        font-size: 14px;
    }
`

export default History;