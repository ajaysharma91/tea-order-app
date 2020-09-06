import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeaBuilder from './component/teaBuilder/TeaBuilder';
import Container from '@material-ui/core/Container';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import { Switch } from '@material-ui/core';
import CheckoutForm from './component/costumerData/CheckoutForm';
function App() {
  return (
  
    <Container maxWidth="sm">
      <BrowserRouter> 
      <Switch>
      <Route path="/" exact component={TeaBuilder} />
      <Route path="/checkout" component={CheckoutForm} />

      </Switch>
   
  </BrowserRouter>,
    </Container>
    
  );
}

export default App;
