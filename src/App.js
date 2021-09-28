import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from "./components/ServiceFilter";

function App() {
  return (
      <>
        <ServiceFilter />
        <ServiceAdd />
        <ServiceList />
      </>
  );
}

export default App;
