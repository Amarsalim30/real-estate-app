"use client";

import React from 'react';
import { MapPin, Bed, Bath, Square, Calendar, Edit, Trash2, Heart } from 'lucide-react';

const ListingCard = ({ 
  listing,
  onEdit,
  onDelete,
  onBookVisit,
  onClick
}) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] max-w-sm mx-auto">
      {/* Image Section */}
      <div className="relative overflow-hidden" onClick={onClick}>
        <img 
          src={listing.image} 
          alt={listing.title}
          className="w-full h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-lg shadow-xl transform transition-all duration-300 group-hover:scale-105">
          {formatPrice(listing.price)}
        </div>
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transform transition-all duration-300 group-hover:scale-105 ${
          listing.status === 'AVAILABLE' 
            ? 'bg-emerald-500 text-white' 
            : 'bg-orange-500 text-white'
        }`}>
          {listing.status}
        </div>

        {/* Heart Icon */}
        <div className="absolute top-4 right-16 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-50">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300" onClick={onClick}>
          {listing.title}
        </h3>

        {/* Address */}
        <div className="flex items-center text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
          <MapPin className="w-4 h-4 mr-2 text-blue-500" />
          <span className="text-sm font-medium">{listing.address}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {listing.description}
        </p>

        {/* Property Details */}
        <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm mb-6">
          <div className="flex items-center bg-gray-50 p-3 rounded-lg transition-colors duration-300 group-hover:bg-blue-50">
            <Bed className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-semibold">{listing.beds} Beds</span>
          </div>
          
          <div className="flex items-center bg-gray-50 p-3 rounded-lg transition-colors duration-300 group-hover:bg-blue-50">
            <Bath className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-semibold">{listing.baths} Baths</span>
          </div>
          
          <div className="flex items-center bg-gray-50 p-3 rounded-lg transition-colors duration-300 group-hover:bg-blue-50">
            <Square className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-semibold">{formatNumber(listing.sqft)} sq.ft.</span>
          </div>
          
          <div className="flex items-center bg-gray-50 p-3 rounded-lg transition-colors duration-300 group-hover:bg-blue-50">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-semibold">{listing.year}</span>
          </div>
        </div>

        {/* Agent and Actions */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          {/* Agent Info */}
          <div className="flex items-center">
            <div className="relative">
              <img 
                src={listing.agent.avatar} 
                alt={listing.agent.name}
                className="w-10 h-10 rounded-full mr-3 ring-2 ring-blue-100 transition-all duration-300 group-hover:ring-blue-200"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Agent</p>
              <p className="text-sm font-bold text-gray-900">{listing.agent.name}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {onEdit && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(listing);
                }}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 transform hover:scale-110"
                title="Edit"
              >
                <Edit className="w-4 h-4" />
              </button>
            )}
            
            {onDelete && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(listing);
                }}
                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200 transform hover:scale-110"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onBookVisit && onBookVisit(listing);
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;