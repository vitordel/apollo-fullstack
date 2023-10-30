import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/form" component={ProductForm} />
        <Route path="/" component={ProductTable} />
      </Routes>
    </div>
  );
};

export default App;
