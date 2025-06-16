'use client';

import React, { useState } from 'react';
import {Filter} from "lucide-react";

const kenyaRegions = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Machakos', 'Meru', 'Nyeri', 'Naivasha',
];

const categories = ['Project', 'Building', 'Flat', 'Unit'];

export default function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    region: '',
    priceMin: '',
    priceMax: ''
  });

  const [showFilters, setShowFilters] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    const cleared = { search: '', category: '', region: '', priceMin: '', priceMax: '' };
    setFilters(cleared);
    onFilter(cleared);
  };

  return (
    <div className="bg-white shadow rounded-xl m-2 p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-700">{showFilters ? 'Filter Properties' : ''}</h2>
        <button 
                           onClick={() => setShowFilters(!showFilters)}
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-400 rounded-lg hover:bg-teal-800 text-gray-400">
                    <Filter className="w-4 h-4" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
 
      </div>

      {showFilters && (
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-5">
          <input
            type="text"
            name="search"
            placeholder="Search title or address"
            value={filters.search}
            onChange={handleChange}
            className="p-2 border rounded placeholder-gray-400 text-gray-500"
          />

          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="p-2 border rounded placeholder-gray-400 text-gray-500"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            name="region"
            value={filters.region}
            onChange={handleChange}
            className="p-2 border rounded placeholder-gray-400 text-gray-500"
          >
            <option value="">All Regions</option>
            {kenyaRegions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>

          <div className="flex gap-1">
            <input
              type="number"
              name="priceMin"
              placeholder="Min Price"
              value={filters.priceMin}
              onChange={handleChange}
              className="p-2 border rounded w-1/2 placeholder-gray-400 text-gray-500"
            />
            <input
              type="number"
              name="priceMax"
              placeholder="Max Price"
              value={filters.priceMax}
              onChange={handleChange}
              className="p-2 border rounded w-1/2 placeholder-gray-400 text-gray-500"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
            >
              Filter
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
