import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Properties from "./pages/Properties";

const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={() => null}>
      <Switch>
        <Route
          exact
          path="/"
          name="Propriedades"
          render={(props: any) => <Properties {...props} />}
        />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default App;
