import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { UserList } from './components/UserList';
import { loadUser, selectUsers } from './components/features/usersSlice';

import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import LogIn from './components/LogIn';


import './App.css';

function App() {
  let dispatch = useDispatch();
  let users = useSelector(selectUsers);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((user) => {
        dispatch(loadUser(user));
      });
  }, [dispatch, users.length]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route exact path="/LogIn">
          <LogIn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <UserList />
    </div>
  );
}

export default withRouter(App);
