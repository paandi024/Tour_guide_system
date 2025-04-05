import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">TravelGuide</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/destinations" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              Destinations
            </Link>
            <Link to="/ai-assistant" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              AI Assistant
            </Link>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/destinations" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
              Destinations
            </Link>
            <Link to="/ai-assistant" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
              AI Assistant
            </Link>
            <Link to="/login" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}