import React, { useState } from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserContext from './contexts/UserContext';
import Habits from "./components/routes/private/Habits"
import RoutesPrivate from "./components/routes/private/RoutesPrivate";
import NotFound from "./pages/NotFound";

function App() {
	const [user, setUser] = useState(null);
	return (
		<Router>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser }}>
				<Switch>
					<Route component={Login} path="/" exact />
					<Route component={Register} path="/cadastro" exact />
					<RoutesPrivate component={Habits} path="/habitos" exact />
					<Route component={NotFound} />
				</Switch>
			</UserContext.Provider>
		</Router>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));