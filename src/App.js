import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignInEmail from './Pages/SignIn/SignInEmail';
import Join from './Pages/Join/Join';
import JoinEmail from './Pages/Join/Join';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/sign-in">
            <SignIn></SignIn>
          </Route>
          <Route exact path="/sign-in/email">
            <SignInEmail></SignInEmail>
          </Route>
          <Route exact path="/join">
            <Join></Join>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
