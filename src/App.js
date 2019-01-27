import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter';
import FirstAndLastForm from './FirstAndLastForm';
import StackedNameForm from './StackedNameForm';
import NameAndAddress from './NameAndAddress';
import useNameForm from './NameForm/useNameForm';

const  App = () => {
  const [nameFormState, nameFormUI] = useNameForm();
  const [firstLastState, firstLastUI] = useNameForm(FirstAndLastForm);
  const [stackedNameState, stackedNameUI] = useNameForm(StackedNameForm);
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Fun with hooks</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/counter" style={{ margin: '20px' }}>Counter</Link>
          <Link to="/name" style={{ margin: '20px' }}>Full name form</Link>
          <Link to="/name-no-middle" style={{ margin: '20px' }}>Partial name form</Link>
          <Link to="/name-stacked" style={{ margin: '20px' }}>Stacked name form</Link>
          <Link to="/name-and-address" style={{ margin: '20px' }}>Name and address</Link>
        </nav>
        <Route path="/counter" component={Counter} />
        <Route path="/name" render={() => nameFormUI}/>
        <Route path="/name-no-middle" render={() => firstLastUI}/>
        <Route path="/name-stacked" render={() => stackedNameUI}/>
        <Route path="/name-and-address" component={NameAndAddress}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
