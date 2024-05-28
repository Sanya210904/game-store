import React from 'react';
import './styles/index.scss';
import './App.css';
import Button from './ui/Button/Button';
import Input from './ui/Input/Input';
import Select from './ui/Select/Select';
import AppRouter from './router/AppRouter';
import AuthFeature from './feature/AuthFeature/AuthFeature';
import { useAppSelector } from './hooks/useAppSelector';

function App() {
  return (
    <div className="app">
      <AuthFeature />
      <AppRouter />
    </div>
  );
}

export default App;
