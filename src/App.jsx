import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';

// import ImportIcons from './assets/icons';
import './App.css';
import Gcs from './pages/gcs/Gcs';

function App() {
  // ImportIcons();
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gcs" exact component={Gcs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
