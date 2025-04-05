import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">TravelGuide</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover the world's most amazing places with our AI-powered travel guide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="text-gray-400 hover:text-white transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destination/1" className="text-gray-400 hover:text-white transition-colors">
                  Santorini, Greece
                </Link>
              </li>
              <li>
                <Link to="/destination/2" className="text-gray-400 hover:text-white transition-colors">
                  Kyoto, Japan
                </Link>
              </li>
              <li>
                <Link to="/destination/3" className="text-gray-400 hover:text-white transition-colors">
                  Machu Picchu, Peru
                </Link>
              </li>
              <li>
                <Link to="/destination/4" className="text-gray-400 hover:text-white transition-colors">
                  Amalfi Coast, Italy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">123 Travel Street, World 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="mailto:info@travelguide.com" className="text-gray-400 hover:text-white transition-colors">
                  info@travelguide.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TravelGuide. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}