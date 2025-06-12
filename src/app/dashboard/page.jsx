'use client';
import React, { useState } from 'react';

import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';
import DashboardHeader from './layout/dashboardHeader';
import MetricCards from './metricCards';
import Charts from './charts';
import PropertiesSection from './layout/properties-section';


export default function PropertyDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header />

        <div className="p-8">
        <DashboardHeader />

          {/* Metrics Cards */}
        <MetricCards />
        <Charts/>
        <PropertiesSection />
        </div>
      </div>
    </div>
  );
}