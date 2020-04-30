//React core
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Assets and style
import './App.css';

//Components
import HomePage from './components/HomePage.js';
import ResultsPage from './components/ResultsPage.js';

function App() {
  
  //Render
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/videos/:id" exact component={ResultsPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;