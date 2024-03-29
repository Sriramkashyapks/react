import React from 'react';
import './App.css';

// Functional component using JSX
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Usage of the Greeting component
const App = () => {
  return (
    <div>
      <Greeting name="Sriram" />
      <Greeting name="Kashyap" />
    </div>
  );
};

export default App;
