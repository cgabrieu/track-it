import styled from 'styled-components';
import React, { useContext } from 'react';
import { CheckboxesForm } from '../styles/styles'
import {ReactComponent as TrashIcon} from '../assets/trash.svg';
import { deleteHabit } from '../service/trackit';
import UserContext from "../contexts/UserContext";

function ItemHabit({ id, name, days, setSuccess }) {

    const { user } = useContext(UserContext);

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const handleDeleteHabit = () => {
        deleteHabit(id, user.token)
            .then(() => setSuccess(true))
            .catch(() => alert("Ocorreu um erro ao apagar o hábito."))
    }

    return (
        <ContainerHabit>
            <h1>{name}</h1>
            <CheckboxesForm>
                {weekdays.map((e, index) => days.includes(index)
                    ? <label key={index} name="checked">{e}</label>
                    : <label key={index} name="unchecked">{e}</label>)}
            </CheckboxesForm>
            <Trash onClick={handleDeleteHabit}/>
        </ContainerHabit>
    );
}

const ContainerHabit = styled.div`
    position: relative;
    margin-top: 20px;
    background-color:#FFF;
    width: 340px;
    height: 90px;
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
`

export default ItemHabit;