import { Suspense } from "react"
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages';
import DonationPage from './pages/donation';
import DonationForm from './pages/donation-form';
import ShopPage from './pages/shop';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {

  return (
    <Suspense fallback={null}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/donation-form" element={<DonationForm />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product-view/:id" element={<ProductView />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
