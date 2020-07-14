import React from 'react';

import Navbar from './layouts/Navbar/Navbar';
import MeasureLove from './components/MeasureLove/MeasureLove';
import Records from './components/Records/Records';
import Home from './layouts/Home';
import './App.css';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Router>

        <div className="App">

          <Navbar />

          <div className="container">
            <Switch>


              <Route exact path="/" component={Home} />

              <Route exact path="/measure" component={MeasureLove} />

              <Route exact path="/records" component={Records} />

            </Switch>

          </div> </div>
      </Router>
    </Provider>


  );
}

export default App;
