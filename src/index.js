import React, { useState } from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/routes/public/Login";
import Register from "./components/routes/public/Register";
import UserContext from './contexts/UserContext';
import NewHabitContext from "./contexts/NewHabitContext";
import Habits from "./components/routes/private/Habits"
import RoutesPrivate from "./components/routes/private/RoutesPrivate";
import NotFound from "./components/routes/public/NotFound";
import Today from "./components/routes/private/Today";

function App() {
	const [user, setUser] = useState(null);
	const [newHabit, setNewHabit] = useState({
		habitName: "",
		listDays: [],
	});
	return (
		<Router>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser }}>
				<Switch>
					<Route component={Login} path="/" exact />
					<Route component={Register} path="/cadastro" exact />
					<NewHabitContext.Provider value={{ newHabit, setNewHabit }}>
						<RoutesPrivate component={Habits} path="/habitos" exact />
						<RoutesPrivate component={Today} path="/hoje" exact />
					</NewHabitContext.Provider>
					<Route component={NotFound} />
				</Switch>
			</UserContext.Provider>
		</Router>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));