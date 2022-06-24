import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages';
import DonationPage from './pages/donation';
import DonationForm from './pages/donation-form';
import ShopPage from './pages/shop';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/donation-form" element={<DonationForm />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-view" element={<ProductView/>} />
      </Routes>
    </Router>
  );
}

export default App;
