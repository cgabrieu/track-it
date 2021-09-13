import styled from 'styled-components';
import React, { useContext } from 'react';
import { CheckboxesFormStyle } from '../styles/styles'
import {ReactComponent as TrashIcon} from '../assets/trash.svg';
import { deleteHabit } from '../service/trackit';
import UserContext from "../contexts/UserContext";

function ItemHabit({ id, name, days, setSuccess }) {

    const { user } = useContext(UserContext);

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const handleDeleteHabit = () => {

        if(window.confirm("Deseja mesmo apagar este hábito?")) 
            deleteHabit(id, user.token)
                .then(() => setSuccess(true))
                .catch(() => alert("Ocorreu um erro ao apagar o hábito."));
    }

    return (
        <ContainerHabit>
            <h1>{name}</h1>
            <CheckboxesFormStyle>
                {weekdays.map((e, index) => 
                    <li key={index} state={days.includes(index) ? "checked" : "unchecked"}>{e}</li>
                )}
            </CheckboxesFormStyle>
            <Trash onClick={handleDeleteHabit}/>
        </ContainerHabit>
    );
}

const ContainerHabit = styled.div`
    position: relative;
    margin-top: 10px;
    background-color:#FFF;
    width: 340px;
    min-height: 90px;
    padding: 15px;
    border-radius: 5px;
    h1 {
        color: #666666;
        font-size: 20px;
        margin-bottom: 6px;
    }
`;

const Trash = styled(TrashIcon)`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`

export default ItemHabit;