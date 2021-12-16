import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import AppGradebooks from "./pages/AppGradebooks";
import AppTeachers from "./pages/AppTeachers";
import Teacher from "./pages/Teacher";
import Gradebook from "./pages/Gradebook";
import GuestRoute from "./components/shared/GuestRoute";
import PrivateRoute from "./components/shared/PrivateRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getActiveUser,selectIsAuthenticated } from "./store/auth";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getActiveUser());
    }
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <GuestRoute exact path="/login">
            <Login />
          </GuestRoute>
          <GuestRoute exact path="/register">
            <Register />
          </GuestRoute>
          <PrivateRoute exact path="/">
            <AppGradebooks />
          </PrivateRoute>
          <PrivateRoute exact path="/teachers">
            <AppTeachers />
          </PrivateRoute>
          <PrivateRoute exact path="/teachers/:id">
            <Teacher />
          </PrivateRoute>
           <PrivateRoute exact path="/gradebooks/:id">
            <Gradebook />
          </PrivateRoute>
          <PrivateRoute exact path="/my-gradebook">
            <Gradebook />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
