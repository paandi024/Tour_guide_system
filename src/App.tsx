import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import AIAssistant from './pages/AIAssistant';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;