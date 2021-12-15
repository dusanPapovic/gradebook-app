import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import AppGradebooks from "./pages/AppGradebooks";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <AppGradebooks />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
