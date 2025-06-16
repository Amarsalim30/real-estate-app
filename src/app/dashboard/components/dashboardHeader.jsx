'use client';

import { Calendar,Download } from "lucide-react"
import { useState } from "react";

export default function DashboardHeader() {  
      const [selectedDate, setSelectedDate] = useState('26 June 2025');
      
    return (    
      //   {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{selectedDate}</span>
              </div>
              <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border hover:bg-gray-50">
                <Download className="w-4 h-4" />
                <span className="text-sm">Export</span>
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center space-x-2">
                <span className="text-sm">Add Property</span>
              </button>
            </div>
          </div>
          );
        }