import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import Join from './Pages/Join/Join';
import ContextProvider from './context/ContextProvider';
import CarDetails from './Pages/CarDetails/CarDetails';
import Cars from './Pages/Cars/Cars';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/cars/:condition">
                <Cars></Cars>
              </Route>
              <Route exact path="/sign-in">
                <SignIn></SignIn>
              </Route>
              <Route exact path="/join">
                <Join></Join>
              </Route>
              <PrivateRoute exact path="/car/:id">
                <CarDetails></CarDetails>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
            </Switch>
          </ScrollToTop>

        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
