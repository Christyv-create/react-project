import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseClick = () => {
    setShowLogin(false);
  };

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Header title="Join our community!" subtitle="" onLoginClick={handleLoginClick} />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      {showLogin && <Login onCloseClick={handleCloseClick} />}
    </div>
  );
}

export default App;
