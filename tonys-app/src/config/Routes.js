import React from 'react';
import { Switch, Route } from 'react-router-dom';


export default ({currentUser, setCurrentUser}) => (
  <div className="routes">
    <Switch>
      <Route exact path='/' render={() => <Landing currentUser={currentUser} /> } />
    </Switch>
  </div>
);