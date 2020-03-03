import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing/Landing';

export default ({currentUser, setCurrentUser}) => (
  <div className="routes">
    <Switch>
      <Route exact path='/' render={() => <Landing currentUser={currentUser} setCurrentUser={setCurrentUser}/> } />
    </Switch>
  </div>
);