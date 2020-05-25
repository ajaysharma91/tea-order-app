import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeaBuilder from './component/teaBuilder/TeaBuilder';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container maxWidth="sm">
      <TeaBuilder/>
    </Container>
  );
}

export default App;
