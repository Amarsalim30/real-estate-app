'use client';
import React, { useState } from 'react';

import Sidebar from '@/components/layout/sidebarLayout';
import Header from '@/components/layout/header.jsx';
import DashboardHeader from './layout/dashboardHeader';
import MetricCards from './metricCards';
import Charts from './charts';
import PropertiesSection from './layout/properties-section';
import AppToaster from '@/components/ui/Toaster';

export default function PropertyDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      {/* Toast Notifications */}
      <AppToaster/>

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