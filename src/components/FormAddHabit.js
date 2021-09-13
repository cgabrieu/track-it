import styled from 'styled-components';
import { postMakeHabit } from '../service/trackit';
import React, { useState, useContext } from 'react';
import CheckboxesForm from './CheckboxesForm';
import Loader from "react-loader-spinner";
import NewHabitContext from '../contexts/NewHabitContext';

function FormAddHabit({ user, setShowHabitForm, setSuccess }) {

    const [isLoading, setIsLoading] = useState(false);
    const { newHabit, setNewHabit } = useContext(NewHabitContext);

    const handleCheckboxChange = (e) => {
        const { value } = e.target;

        if(newHabit.listDays.includes(value)){
            const newListDays = newHabit.listDays.filter((t) => t !== value);
            setNewHabit({...newHabit, listDays: newListDays});
            return;
        }
        setNewHabit({
            ...newHabit, 
            listDays: [...newHabit.listDays, value]
        });
    }
    
    const makeHabit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        postMakeHabit(newHabit.habitName, newHabit.listDays, user.token)
            .then(() => {
                setNewHabit({habitName: "", listDays: []})
                setShowHabitForm(false);
                setSuccess(true);
                setIsLoading(false);
            })
            .catch(() => alert("Ocorreu um erro ao criar o hábito."));
    }

    return (
        <Form onSubmit={makeHabit}>
            <input
                placeholder="nome do hábito"
                type="text"
                maxLength="35"
                disabled={isLoading}
                value={newHabit.habitName}
                onChange={(e) => 
                    setNewHabit({...newHabit, habitName: e.target.value}
                )}
                required
            />
            <CheckboxesForm handleCheckboxChange={handleCheckboxChange} listDays={newHabit.listDays} isLoading={isLoading} />
            <div className="buttons-form">
                <CancelButton onClick={() => setShowHabitForm(false)}>Cancelar</CancelButton>
                {isLoading
                    ? <ButtonsForm disabled>
                        <Loader type="ThreeDots" color="#FFFFFF" height={10} width={45} />
                    </ButtonsForm>
                    : (<ButtonsForm type="submit" disabled={newHabit.listDays.length === 0}>Salvar</ButtonsForm>)
                }
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