import { Search, Filter, Eye } from 'lucide-react';
import { properties } from '@/data/tempData';

export default function PropertiesSection() {
    return(
            //   {/* Properties Section */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Explore Your Properties</h3>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    <span className="text-sm">Filter</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {properties.map((property) => (
                  <div key={property.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">{property.name}</h4>
                      <p className="text-sm text-gray-600">{property.location}</p>
                      <p className="text-lg font-bold text-gray-800">{property.price}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{property.beds} beds</span>
                        <span>{property.baths} baths</span>
                        <span>{property.sqft}</span>
                      </div>
                      
                      <div className="flex space-x-2 pt-2">
                        <button className="flex-1 px-3 py-2 border border-gray-200 text-black rounded-lg text-sm hover:bg-gray-50">
                               More Info
                        </button>
                        <button className="flex-1 px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
                          Book a call
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    );
}