import React, { useContext } from 'react';
import UserContext from "../../../contexts/UserContext";
import Topbar from '../../Topbar';
import Bottombar from '../../Bottombar';

const Habits = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <Topbar image={user.image}/>
            <Bottombar />
        </>
    );
};



export default Habits;