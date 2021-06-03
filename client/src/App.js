import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Management from './containers/Management.jsx';
import Technician from './containers/Technician.jsx';
import TechByTest from './containers/TechByTest.jsx';
// import Register from './containers/Register.jsx';
import Results from './containers/ResultsContainer.jsx';
import Units from './containers/Units.jsx';
import TestsbySn from './containers/TestsResultBySn.jsx';
import SHowHideBtn from './containers/ResultsBtn.jsx';
import Footer from './components/Footer.jsx';
import SearchOptionsPage from './containers/SearchOptions.jsx';
import AlertComponent from './components/Alert.jsx';
import NotFound from './components/NotFound.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';
import PrivateRoute from './components/routing/PrivateRoute';
import Alerts from './components/layout/Alerts';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import '../src/sass/main.scss';
// import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <AuthState>
      <AlertState>
        <Router>
          <div className="App">
          <Header/>
          <Nav />
            <div className="App-header">
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/management" component={Management} />
                <PrivateRoute exact path="/search-options" component={SearchOptionsPage} />
                <Route exact path="/technician" component={Technician} />
                <Route exact path="/techByTest" component={TechByTest} />
                {/* <Route exact path="/register" >
                  <Register showError={updateErrorMessage} />
                </Route> */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/results" component={Results} />
                <Route exact path="/units" component={Units} />
                <Route exact path="/results-btn" component={SHowHideBtn} />                
                <Route exact path="/tests-result" component={TestsbySn}/>
                <Route component={NotFound}/>
              </Switch>
              <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
            </div>
            <Footer/>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
