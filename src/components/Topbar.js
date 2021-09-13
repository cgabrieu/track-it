import styled from "styled-components"
import React, { useContext } from 'react';
import { ReactComponent as Logo } from "../assets/trackIt-small-logo.svg"
import { useHistory } from 'react-router-dom';
import UserContext from "../contexts/UserContext";

const Topbar = () => {

    const { user } = useContext(UserContext);

    const history = useHistory();

    return (
        <TopbarStyle>
            <Logo />
            <UserPic 
                src={user !== null && user.image}
                onClick={() => {
                    localStorage.clear();
                    history.push("/");
                }}
            />
        </TopbarStyle>
    );

};

const TopbarStyle = styled.div`
    position: fixed;
    top: 0; right: 0; left: 0;
    z-index: 1;
    height: 70px;
    padding: 0 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const UserPic = styled.img`
    width: 51px;
    height: 51px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
`

export default Topbar;

