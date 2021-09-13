import React, { useState } from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/routes/public/Login";
import Register from "./components/routes/public/Register";
import UserContext from './contexts/UserContext';
import NewHabitContext from "./contexts/NewHabitContext";
import Habits from "./components/routes/private/Habits"
import History from "./components/routes/private/History";
import RoutesPrivate from "./components/routes/private/RoutesPrivate";
import NotFound from "./components/routes/public/NotFound";
import Today from "./components/routes/private/Today";
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";

function App() {
	const [user, setUser] = useState(null);
	const [newHabit, setNewHabit] = useState({
		habitName: "",
		listDays: [],
	});
	const [progressDay, setProgressDay] = useState(0);

	return (
		<Router>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser, progressDay, setProgressDay }}>
				<Switch>
					<Route component={Login} path="/" exact />
					<Route component={Register} path="/cadastro" exact />
					<NewHabitContext.Provider value={{ newHabit, setNewHabit }}>
						<Topbar />
						<RoutesPrivate component={Habits} path="/habitos" exact />
						<RoutesPrivate component={Today} path="/hoje" exact />
						<RoutesPrivate component={History} path="/historico" exact />
						<Bottombar />
					</NewHabitContext.Provider>
					<Route component={NotFound} />
				</Switch>
			</UserContext.Provider>
		</Router>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));