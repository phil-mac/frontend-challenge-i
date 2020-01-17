import React from 'react';
import {Route} from 'react-router-dom';

import ProjectList from './components/ProjectList'
import Details from './components/Details'

import './App.css';

function App(props) {
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Projects & Actions Sprint Challenge</h1>
        <hr/>
        <Route exact path='/projects' component={ProjectList}/>
        <Route path='/projects/:id' component={Details}/>
      </header>
    </div>
  );
}

export default App;
