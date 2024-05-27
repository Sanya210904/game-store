import React from 'react';
import './styles/index.scss';
import './App.css';
import Button from './ui/Button/Button'
import Input from './ui/Input/Input'
import Select from './ui/Select/Select'
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
