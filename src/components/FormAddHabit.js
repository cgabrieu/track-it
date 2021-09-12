import styled from 'styled-components';
import { postMakeHabit } from '../service/trackit';
import React, { useState } from 'react';
import { CheckboxesForm } from '../styles/styles'

function FormAddHabit({ user, setShowHabitForm, setSuccess }) {

    const [habitName, setHabitName] = useState("");
    const [listDays, setListDays] = useState([]);

    const handleCheckboxChange = (e) => {
        if (listDays.includes(e.target.value)) {
            setListDays(listDays.filter((day) => day !== e.target.value));
            return;
        }
        setListDays([...listDays, e.target.value]);
    }

    const makeHabit = (e) => {
        e.preventDefault();
        if(listDays.length > 0) postMakeHabit(habitName, listDays, user.token)
            .then(() => {
                setShowHabitForm(false);
                setSuccess(true);
            })
            .catch(() => alert("Ocorreu um erro ao criar o hábito."));
    }

    return (
        <Form onSubmit={makeHabit}>
            <input
                placeholder="nome do hábito"
                type="text"
                maxLength="35"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                required
            />
            <CheckboxesForm>
                <input type="checkbox" onChange={handleCheckboxChange} value="0" id="domingo" />
                <input type="checkbox" onChange={handleCheckboxChange} value="1" id="segunda" />
                <input type="checkbox" onChange={handleCheckboxChange} value="2" id="terca" />
                <input type="checkbox" onChange={handleCheckboxChange} value="3" id="quarta" />
                <input type="checkbox" onChange={handleCheckboxChange} value="4" id="quinta" />
                <input type="checkbox" onChange={handleCheckboxChange} value="5" id="sexta" />
                <input type="checkbox" onChange={handleCheckboxChange} value="6" id="sabado" />
                <label htmlFor="domingo">D</label>
                <label htmlFor="segunda">S</label>
                <label htmlFor="terca">T</label>
                <label htmlFor="quarta">Q</label>
                <label htmlFor="quinta">Q</label>
                <label htmlFor="sexta">S</label>
                <label htmlFor="sabado">S</label>
            </CheckboxesForm>
            <div className="buttons-form">
                <CancelButton onClick={() => setShowHabitForm(false)}>Cancelar</CancelButton>
                <ButtonsForm type="submit">Salvar</ButtonsForm>
            </div>
        </Form>
    );
}

const Form = styled.form`
    padding: 15px;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    margin-top: 15px;
    background-color: #FFFFFF;
    .buttons-form {
        margin-top: 29px;
        width: 100%;
        display: flex;
        justify-content: right;
        font-size: 16px;
    }
    input {
        width: 100%;
    }
`;

const ButtonsForm = styled.button`
    background-color:#52B6FF;
    padding: 0 17px;
    color: #FFFFFF;
    font-size: 16px;
    height: 35px;
`;

const CancelButton = styled(ButtonsForm)`
    background-color: #FFFFFF;
    color: #52B6FF;
`;

export default FormAddHabit;