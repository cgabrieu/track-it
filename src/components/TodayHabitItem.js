import styled from 'styled-components';
import React, { useState } from 'react';
import {ReactComponent as CheckIcon} from '../assets/check.svg';
import Loader from "react-loader-spinner";

function TodayHabitItem({ habit, handleCheckHabit }) {
    const { id, name, done, currentSequence, highestSequence } = habit;
    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <ContainerHabit checked={done}>
            <div>
                <h1>{name}</h1>
                <ContainerSequence>
                    <p>Sequência atual: 
                        <SequenceInfo checked={done}> {currentSequence} dias</SequenceInfo>
                    </p>
                    <p>Seu recorde:
                        <SequenceInfo checked={currentSequence === highestSequence}> {highestSequence} dias</SequenceInfo>
                    </p>
                </ContainerSequence>
            </div>
            <Checkbox 
                id={id} 
                onClick={(e) => {handleCheckHabit(e, setIsLoading)}}
                checked={done}>
                {isLoading 
                ? <Loader type="ThreeDots" color="#FFFFFF" height={10} width={45} />
                : <CheckIcon />}
            </Checkbox>
        </ContainerHabit>
    );
}

export default TodayHabitItem;

const ContainerHabit = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    min-height: 95px;
    padding: 13px;
    background-color: #FFFFFF;
    border-radius: 5px;
    color: #666666;
    h1 {
        font-size: 20px;
    }
    h2 {
        font-size: 18px;
        color: #8FC549;
    }
    p {
        font-size: 13px;
        line-height: 18px;
    }
`;

const Checkbox = styled.button`
    background-color: ${({ checked }) => checked ? "#8FC549" : "#EBEBEB"};
    border-radius: 5px;
    min-width: 69px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s linear;
`;

const ContainerSequence = styled.div`
    margin-top: 10px;
`;

const SequenceInfo = styled.span`
    color: ${({ checked }) => checked ? "#8FC549" : "#666666"};
`;
