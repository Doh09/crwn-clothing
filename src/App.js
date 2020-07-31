import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import HatsPage from './pages/hatspage/hatspage.component.jsx';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div>
    <Switch>
    <Route exact='true' path='/' component={HomePage}/>
    <Route exact='true' path='/hats' component={HatsPage}/>
    </Switch>
    </div>
  );
}

export default App;
