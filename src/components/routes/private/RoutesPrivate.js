import React, { useContext, useEffect } from "react";
import { Route, Redirect, useHistory } from 'react-router-dom';
import UserContext from "../../../contexts/UserContext";

const RoutesPrivate = ({ component: Component, ...rest }) => {
    const { user, setUser } = useContext(UserContext);

    const history = useHistory();

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved !== null) {
            setUser(JSON.parse(saved));
            history.push("/habitos");
        }
      }, []);

    return (
        <Route
            {...rest}
            render={() => user
                ? <Component {...rest} />
                : <Redirect to="/" />}
        />
    );
}

export default RoutesPrivate;