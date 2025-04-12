import React from 'react';
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Screens/Contact';
import P_contacts from './Screens/P_contacts';
import Std_vcard from './Screens/Std_vcard';
import Private from './Screens/Private';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/private" element={<Private />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/private/p_contacts" element={<P_contacts />} />
          <Route path="/std_vcard" element={<Std_vcard />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
