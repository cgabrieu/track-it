import styled from 'styled-components';
import React, { useContext, useState, useEffect } from 'react';
import { Container } from "../../../styles/styles";
import { getTodayHabits, postCheckHabit, postUncheckHabit } from '../../../service/trackit';
import UserContext from "../../../contexts/UserContext";
import Topbar from '../../Topbar';
import Bottombar from '../../Bottombar';
import TodayHabitItem from '../../TodayHabitItem';
import dayjs from "dayjs";
import "dayjs/locale/pt-br";


const Today = () => {
    const { user, progressDay, setProgressDay } = useContext(UserContext);
    const [listHabits, setListHabits] = useState([]);
    const [success, setSuccess] = useState(false);

    const day = dayjs().locale('pt-br');
    const weekday = day.format('dddd');
    const date = day.format('DD/MM')

    const progressPercent = (listHabits.filter((e) => e.done === true).length/listHabits.length)*100;
    setProgressDay(progressPercent.toFixed(0));

    useEffect(() => {
        getTodayHabits(user.token)
            .then((e) => {
                setListHabits(e.data);
            })
            .catch(() => alert("Erro ao obter lista de hábitos."));
        setSuccess(false);
    }, [success]);

    function handleCheckHabit({ currentTarget: habit }, setIsLoading) {
        setIsLoading(true);
        if (!habit.checked) {
            postCheckHabit(habit.id, user.token)
                .then(() => setSuccess(true))
                .catch(() => alert("Erro ao marcar hábito."))
                .then(() => setIsLoading(false));
        } else {
            postUncheckHabit(habit.id, user.token)
                .then(() => setSuccess(true))
                .catch(() => alert("Erro ao desmarcar hábito."))
                .then(() => setIsLoading(false));
        }
    };

    return (
        <Container color="#E5E5E5" bottom="72px">
            <ContainerDate>
                <h1>
                    {(weekday.length > 7 ? weekday.slice(0, weekday.indexOf("-")) : weekday) + ", " + date}
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

export default Today;