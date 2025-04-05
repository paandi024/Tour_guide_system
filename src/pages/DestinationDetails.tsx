import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, Users, MessageSquare } from 'lucide-react';
import type { Destination } from '../types';

// This would normally come from an API
const destinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    description: 'Famous for its dramatic views, stunning sunsets, and white-washed houses, Santorini is one of the most beautiful islands in the world.',
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    highlights: ['Caldera Views', 'Sunset in Oia', 'Black Sand Beaches', 'Wine Tasting']
  },
  // ... other destinations
];

export default function DestinationDetails() {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Destination not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[500px]">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {destination.name}
            </motion.h1>
            <div className="flex items-center text-white">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">{destination.country}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{destination.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              <div className="space-y-6">
                {/* Placeholder for reviews */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h4 className="font-semibold">John Doe</h4>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">Amazing place! The views are breathtaking and the local food is delicious.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 sticky top-4"
            >
              <h3 className="text-xl font-bold mb-4">Plan Your Trip</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Check Availability
                </button>
                <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Chat with AI Assistant
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}