import React from 'react';
import './App.css';

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import Order from './components/Order/Order';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path = "/" element={<Landing />}> </Route>
          <Route path = "/about" element={<About />}> </Route>
          <Route path = "/contact" element={<Contact />}> </Route>
          <Route path = "/Menu" element={<Menu />}> </Route>
          <Route path = "/Order" element={<Order />}> </Route>
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
