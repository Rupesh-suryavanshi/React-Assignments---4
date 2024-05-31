import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tickets from './pages/Tickets';
import TicketView from './pages/TicketView';
import TicketCreate from './pages/TicketCreate';
import TicketEdit from './pages/TicketEdit';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="tickets/view/:id" element={<TicketView />} />
          <Route path="tickets/create" element={<TicketCreate />} />
          <Route path="tickets/edit/:id" element={<TicketEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
