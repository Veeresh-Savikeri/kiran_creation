import React from 'react';
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Screens/Contact';
import P_contacts from './Screens/P_contacts';
import Std_vcard from './Screens/Std_vcard';
import Private from './Screens/Private';
import Auth from './Components/Auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/contact" element={<Contact />} />
         
          <Route path="/std_vcard" element={<Std_vcard />} />
          <Route element={<Auth />} >
          <Route path="/private" element={<Private />} />
          <Route path="/private/p_contacts" element={<P_contacts />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
