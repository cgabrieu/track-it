import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/cadastro">
					<Register />
				</Route>
			</Switch>
		</Router>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));