import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Navbar';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import ScrollButton from './components/ScrollButton/scroll';
import Team from './components/Team/Team'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <ScrollButton />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/apply" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
