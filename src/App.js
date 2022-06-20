import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages';
import DonationPage from './pages/donation';
import DonationForm from './pages/donation-form';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/donation-form" element={<DonationForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
