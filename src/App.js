import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './HomeContainer';


const My404 = () => {
  return(
    <div>
      ...error...sorry...
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ HomeContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  )
}

export default App;
