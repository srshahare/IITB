import { Route, Switch } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Auth from "./functions/Auth";
import PostPage from "./components/PostPage";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom'

function App() {
  const history = useHistory();
  const { isUserAuth, userLogin, inputHandler, userSignUp } = Auth();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/user/:userId">
          <Dashboard />
        </Route>
        <Route path="/post/:postId" component={PostPage} />
        <div className="auth-wrapper">
          <h1>IIT News</h1>
          <div className="auth-inner">
            <Route path="/" exact>
              <Login inputHandler={inputHandler} userLogin={userLogin} />
            </Route>
            <Route path="/signup">
              <Signup inputHandler={inputHandler} userSignUp={userSignUp} />
            </Route>
          </div>
        </div>
      </Switch>
    </div>
  );
}

export default App;
