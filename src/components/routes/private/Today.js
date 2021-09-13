import styled from 'styled-components';
import React, { useContext, useState, useEffect } from 'react';
import { Container } from "../../../styles/styles";
import { getListHabits } from '../../../service/trackit';
import UserContext from "../../../contexts/UserContext";
import Topbar from '../../Topbar';
import Bottombar from '../../Bottombar';
import FormAddHabit from '../../FormAddHabit'

const Today = () => {
    const { user } = useContext(UserContext);
    const [showHabitForm, setShowHabitForm] = useState(false);
    const [listHabits, setListHabits] = useState([]);
    const [isSuccess, setSuccess] = useState(false);
    
    useEffect(() => {
        getListHabits(user.token)
            .then((e) => console.log(e.data))
            .catch(() => alert("Erro"));
        setSuccess(false);
    }, [isSuccess]);

    return (
        <>
            <Topbar image={user.image} />
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
            <Bottombar />
        </>
    );
};


export default Today;