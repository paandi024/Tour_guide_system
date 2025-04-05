import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import type { Destination } from '../types';

const featuredDestinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    description: 'Famous for its dramatic views, stunning sunsets, and white-washed houses.',
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    highlights: ['Caldera Views', 'Sunset in Oia', 'Black Sand Beaches', 'Wine Tasting']
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Experience the essence of traditional Japan with ancient temples and gardens.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    highlights: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Kinkaku-ji', 'Gion District']
  },
  {
    id: '3',
    name: 'Machu Picchu',
    country: 'Peru',
    description: 'This ancient Incan city set high in the Andes Mountains is truly remarkable.',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    highlights: ['Inca Trail', 'Sun Gate', 'Temple of the Sun', 'Agricultural Terraces']
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Discover Your Next Adventure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white mb-8"
            >
              Explore beautiful destinations around the world with our AI-powered travel guide
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex w-full max-w-md"
            >
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="flex-1 px-4 py-3 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 flex items-center">
                <Search className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
}