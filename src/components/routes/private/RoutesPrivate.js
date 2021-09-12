import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import UserContext from "../../../contexts/UserContext";

const RoutesPrivate = ({ component: Component, ...rest }) => {
    const { user } = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={() => user
                ? <Component {...rest} />
                : <Redirect to="/" />
            }
        />
    )
}

export default RoutesPrivate;