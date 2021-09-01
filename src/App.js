import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";

const App = () => (
  <Router>
    <Route exact path="/browse">
      <Browse />
    </Route>
    <Route exact path="/signin">
      <Signin />
    </Route>
    <Route exact path="/signup">
      <Signup />
    </Route>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
  </Router>
);

export default App;
