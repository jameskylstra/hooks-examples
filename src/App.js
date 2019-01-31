import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter';
import CounterNoHooks from './CounterNoHooks';
import FirstAndLastForm from './FirstAndLastForm';
import StackedNameForm from './StackedNameForm';
import NameAndAddress from './NameAndAddress';
import NameAndAddressProvider from './NameAndAddressProvider';
import TwoName from './TwoName';
import DogForm from './DogForm';
import useNameForm from './NameForm/useNameForm';
import useValidatedForm from './ValidatedForm/useValidatedForm';
import formFragmentHook from './lib/formFragmentHook';

const  App = () => {
  const [nameFormState, nameFormUI] = useNameForm();
  const [firstLastState, firstLastUI] = useNameForm(FirstAndLastForm);
  const [stackedNameState, stackedNameUI] = useNameForm(StackedNameForm);
  const [dogState, dogUI] = formFragmentHook(['name', 'age', 'breed', 'rating'])(DogForm);
  const [validatedState, validatedUI] = useValidatedForm();
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Fun with hooks</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/counter" style={{ margin: '20px' }}>Counter</Link>
          <Link to="/counter-no-hooks" style={{ margin: '20px' }}>Counter No Hooks</Link>
          <Link to="/name" style={{ margin: '20px' }}>Full name form</Link>
          <Link to="/name-no-middle" style={{ margin: '20px' }}>Partial name form</Link>
          <Link to="/name-stacked" style={{ margin: '20px' }}>Stacked name form</Link>
          <Link to="/name-and-address" style={{ margin: '20px' }}>Name and address</Link>
          <Link to="/name-and-address-prov" style={{ margin: '20px' }}>
            Name and address with provider
          </Link>
          <Link to="/two-names" style={{ margin: '20px' }}>Two Names</Link>
          <Link to="/dog" style={{ margin: '20px' }}>Dog</Link>
          <Link to="/validated" style={{ margin: '20px' }}>Validated</Link>
        </nav>
        <Route path="/counter" component={Counter} />
        <Route path="/counter-no-hooks" component={CounterNoHooks} />
        <Route path="/name" render={() => nameFormUI}/>
        <Route path="/name-no-middle" render={() => firstLastUI}/>
        <Route path="/name-stacked" render={() => stackedNameUI}/>
        <Route path="/name-and-address" component={NameAndAddress}/>
        <Route path="/name-and-address-prov" component={NameAndAddressProvider}/>
        <Route path="/two-names" component={TwoName}/>
        <Route path="/dog" render={() => dogUI}/>
        <Route path="/validated" render={() => validatedUI}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
