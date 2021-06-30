import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./state/store";

import Properties from "./pages/Properties";

import "./App.module.css";

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<React.Suspense fallback={() => null}>
				<Switch>
					<Route exact path="/" render={() => <Properties />} />
				</Switch>
			</React.Suspense>
		</BrowserRouter>
	</Provider>
);

export default App;
