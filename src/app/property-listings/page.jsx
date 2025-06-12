'use client';
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Grid, Map, Heart, Bed, Bath, Square, User, Bell } from 'lucide-react';
import Sidebar from '@/components/layout/sidebarLayout';
import SettingsDropdown from '@/components/ui/SettingsDropdown';

const LoadingState = () => (
  <div className="w-full h-[500px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg animate-pulse flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading properties...</p>
    </div>
  </div>
);

const MapEstateApp = () => {
  const [viewMode, setViewMode] = useState('map');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchQuery, setSearchQuery] = useState('France, Nice');
  const [selectedType, setSelectedType] = useState('All');
  const [priceRange, setPriceRange] = useState('€80-650');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Function to parse price range string and return min and max values
  const getPriceRange = (range) => {
    const [min, max] = range.replace('€', '').split('-').map(Number);
    if (max) return { min, max };
    return { min: min, max: Infinity }; // For "500+" case
  };

  // Filter properties whenever search criteria changes
  useEffect(() => {
    const filterProperties = () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const { min, max } = getPriceRange(priceRange);
        const filtered = properties.filter(property => {
          const matchesType = selectedType === 'All' 
            ? true 
            : property.type === selectedType.toLowerCase();
          const matchesPrice = property.price >= min && property.price <= max;
          const searchLower = searchQuery.toLowerCase();
          const matchesSearch = property.title.toLowerCase().includes(searchLower) ||
            property.location.toLowerCase().includes(searchLower);

          return matchesType && matchesPrice && matchesSearch;
        });
        
        setFilteredProperties(filtered);
      } catch (err) {
        setError('Error filtering properties. Please try again.');
        setFilteredProperties([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(filterProperties, 300); // Debounce filtering
    return () => clearTimeout(timer);
  }, [searchQuery, selectedType, priceRange]);

  const properties = [
    {
      id: 1,
      title: 'Cosy apartment for rent',
      price: 80,
      location: 'Nice',
      coordinates: { x: 65, y: 45 },
      beds: 1,
      baths: 1,
      area: 45,
      image: '/api/placeholder/300/200',
      description: 'Located on the plateau central and close to all amenities, this location of this apartment on the first floor of a downtown building will be ideal for your needs.',
      type: 'apartment',
      popular: true
    },
    {
      id: 2,
      title: 'Modern city apartment',
      price: 55,
      location: 'Nice',
      coordinates: { x: 45, y: 60 },
      beds: 2,
      baths: 1,
      area: 60,
      image: '/api/placeholder/300/200',
      type: 'apartment'
    },
    {
      id: 3,
      title: 'Luxury downtown flat',
      price: 80,
      location: 'Nice',
      coordinates: { x: 70, y: 35 },
      beds: 1,
      baths: 1,
      area: 55,
      image: '/api/placeholder/300/200',
      type: 'apartment'
    },
    {
      id: 4,
      title: 'Bright studio apartment',
      price: 69,
      location: 'Nice',
      coordinates: { x: 55, y: 70 },
      beds: 1,
      baths: 1,
      area: 40,
      image: '/api/placeholder/300/200',
      type: 'apartment'
    },
    {
      id: 5,
      title: 'Spacious family home',
      price: 120,
      location: 'Nice',
      coordinates: { x: 40, y: 40 },
      beds: 3,
      baths: 2,
      area: 90,
      image: '/api/placeholder/300/200',
      type: 'house'
    },
    {
      id: 6,
      title: 'Charming villa',
      price: 200,
      location: 'Nice',
      coordinates: { x: 75, y: 55 },
      beds: 4,
      baths: 3,
      area: 150,
      image: '/api/placeholder/300/200',
      type: 'villa'
    }
  ];

  const MapView = () => (
    isLoading ? (
      <LoadingState />
    ) : error ? (
      <div className="w-full h-[500px] bg-red-50 rounded-lg flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    ) : (
      <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
        {/* Map background with subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('/grid-pattern.svg')]"></div>
        </div>
        
        {/* Street labels */}
        <div className="absolute bottom-6 left-6 text-sm font-medium text-gray-600">LA LOUVIÈRE</div>
        <div className="absolute bottom-6 right-20 text-sm font-medium text-gray-600">LA RABINE</div>
        
        {/* Property markers */}
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
              selectedProperty?.id === property.id ? 'z-20' : 'z-10'
            }`}
            style={{
              left: `${property.coordinates.x}%`,
              top: `${property.coordinates.y}%`,
            }}
            onClick={() => setSelectedProperty(property)}
          >
            <div className="relative">
              <MapPin className={`w-6 h-6 ${
                selectedProperty?.id === property.id ? 'text-blue-600' : 'text-gray-800'
              }`} />
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-3 py-2 rounded-lg text-sm font-semibold shadow-lg whitespace-nowrap ${
                selectedProperty?.id === property.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-50'
              }`}>
                €{property.price}/night
              </div>
            </div>
          </div>
        ))}
        
        {/* Search area indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-64 border-2 border-gray-400 border-dashed rounded-full opacity-50"></div>
        </div>
        
        {/* Map controls */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <span className="text-xl font-bold text-gray-600">+</span>
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <span className="text-xl font-bold text-gray-600">-</span>
          </button>
        </div>
      </div>
    )
  );

  const GridView = () => (
    isLoading ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-4 space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="flex gap-4">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : error ? (
      <div className="w-full p-4 bg-red-50 rounded-lg flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-gray-500">Property Image</div>
              </div>
              <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
              {property.popular && (
                <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  Most popular
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{property.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.beds}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.baths}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="w-4 h-4" />
                  <span>{property.area}m²</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-gray-900">€{property.price}/night</div>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Show contacts
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );

  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div className="flex-1 overflow-y-auto bg-gray-50">
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Buy</a>
              <a href="#" className="text-gray-900 font-medium border-b-2 border-gray-900 pb-4">Rent</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{/*name */}</span>
              <div className="w-8 h-8  rounded-full flex items-center justify-center">
                <SettingsDropdown/>
              </div>
              <Bell className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search location..."
              />
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>All</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Villa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>€80-650</option>
                    <option>€50-200</option>
                    <option>€200-500</option>
                    <option>€500+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                  <input
                    type="text"
                    placeholder="Any"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Floor</label>
                  <input
                    type="text"
                    placeholder="Any"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* View Toggle */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                    viewMode === 'map' 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Map className="w-4 h-4" />
                  Map
                </button>
              </div>
              
              <div className="text-sm text-gray-600">
                {filteredProperties.length} properties found
              </div>
            </div>

            {/* Content */}
            <div className="flex gap-6">
              {/* Map/Grid View */}
              <div className="flex-1">
                {viewMode === 'map' ? <MapView /> : <GridView />}
              </div>

              {/* Property Details Sidebar */}
              {viewMode === 'map' && selectedProperty && (
                <div className="w-80 bg-white rounded-lg shadow-sm p-4">
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <div className="text-gray-500">Property Image</div>
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    {selectedProperty.popular && (
                      <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                        Most popular
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">{selectedProperty.title}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{selectedProperty.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{selectedProperty.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{selectedProperty.area}m²</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {selectedProperty.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-gray-900">
                      €{selectedProperty.price}/night
                    </div>
                  </div>
                  
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Show contacts
                  </button>
                  
                  {/* Thumbnail images */}
                  <div className="flex gap-2 mt-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-16 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md flex items-center justify-center">
                        <div className="text-xs text-gray-500">{i}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MapEstateApp;
