import Header from './components/Header'
import Hello from './hello';
import Counter from './Counter';
import React from "react";
import { Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <>
      <Header nama="tedy" alamat="Mojokerto" />
      <Hello />
      <Counter />
      <Button color="primary">Button reactstrap</Button>
    </>

  );
}

export default App;
