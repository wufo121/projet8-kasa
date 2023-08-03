import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/index.scss';
import Header from './components/Header';
import Home from './pages/Home'; 
import Footer from './components/footer';
import APropos from './pages/APropos/index.jsx';
import Error from './pages/Error';
import Logements from './pages/Logements';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/Apropos" element={<APropos />} />
        <Route path = "/Logements/:id" element={<Logements/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


