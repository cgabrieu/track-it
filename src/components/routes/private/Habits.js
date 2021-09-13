import styled from 'styled-components';
import React, { useContext, useState, useEffect } from 'react';
import { Container } from "../../../styles/styles";
import { getListHabits } from '../../../service/trackit';
import UserContext from "../../../contexts/UserContext";
import Topbar from '../../Topbar';
import Bottombar from '../../Bottombar';
import FormAddHabit from '../../FormAddHabit'
import ItemHabit from '../../ItemHabit';

const Habits = () => {
    const { user } = useContext(UserContext);
    const [showHabitForm, setShowHabitForm] = useState(false);
    const [listHabits, setListHabits] = useState([]);
    const [isSuccess, setSuccess] = useState(false);
    
    useEffect(() => {
        getListHabits(user.token)
            .then((e) => setListHabits(e.data))
            .catch(() => alert("Erro ao obter lista de hábitos."));
        setSuccess(false);
    }, [isSuccess]);

    return (
        <>
            <Container color="#E5E5E5" bottom="72px">
                <ContainerAddMyHabits>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setShowHabitForm(true)} >+</button>
                </ContainerAddMyHabits>
                {showHabitForm &&
                <FormAddHabit
                    user={user}
                    setShowHabitForm={setShowHabitForm}
                    setSuccess={setSuccess}
                />}
                {listHabits.length > 0 
                ? listHabits.map((e) => 
                    <ItemHabit
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        days={e.days}
                        setSuccess={setSuccess}
                    />) 
                : <TextNoHabits>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TextNoHabits>}
            </Container>
        </>
    );
};

const ContainerAddMyHabits = styled.div`
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    height: 40px;
    h1 {
        font-size: 23px;
        color:#126BA5;
    }
    button {
        font-size: 27px;
        height: 35px;
        width: 40px;
    }
`;

const TextNoHabits = styled.p`
    font-size: 18px;
    color:#666666;
    margin-top: 25px;
`;

export default Habits;