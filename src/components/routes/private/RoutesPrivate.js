import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import UserContext from "../../../contexts/UserContext";

const RoutesPrivate = ({ component: Component, ...rest }) => {
    const { token } = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={() => token
                ? <Component {...rest} />
                : <Redirect to="/" />
            }
        />
    )
}

export default RoutesPrivate;