import React from 'react';
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Screens/Contact';
import P_contacts from './Screens/PContacts';
import Std_vcard from './Screens/StdVcard';
import Private from './Screens/Private';
import Auth from './Components/Auth';
import ClsVCard from './Screens/ClsVCard';
import Cart from './Screens/Cart';
import Order from './Screens/Order';
import OrderList from './Screens/OrderList';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/contact" element={<Contact />} />         
          <Route path="/std_vcard" element={<Std_vcard />} />
          <Route path="/clsvcard" element={<ClsVCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<Auth />} >
          <Route path="/private" element={<Private />} />
          <Route path="/private/p_contacts" element={<P_contacts />} />
          <Route path="/orderlist" element={<OrderList />} />
          </Route>
          <Route path="/order" element={<Order />} /> 
        </Routes>
      </Router>

    </div>
  );
}

export default App;
