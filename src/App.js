import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
