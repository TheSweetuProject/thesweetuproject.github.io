import React from 'react';
import './App.css';

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path = "/" element={<Landing />}> </Route>
          <Route path = "/about" element={<About />}> </Route>
          <Route path = "/contact" element={<Contact />}> </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
