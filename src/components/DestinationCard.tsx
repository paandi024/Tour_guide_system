import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Destination } from '../types';

interface Props {
  destination: Destination;
}

export default function DestinationCard({ destination }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-blue-600 mr-1" />
          <span className="text-sm text-gray-600">{destination.country}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
        <Link
          to={`/destination/${destination.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}