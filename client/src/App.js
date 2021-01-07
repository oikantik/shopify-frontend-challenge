import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/";
import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./redux";
import "react-toastify/dist/ReactToastify.css";
import Nomination from "./pages/Nomination";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={Nomination} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
