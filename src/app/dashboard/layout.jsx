'use client';
import React, { useState } from 'react';

import Sidebar from '@/components/layout/sidebarLayout';
import Header from '@/components/layout/header.jsx';
import DashboardHeader from './dashboardHeader';
import MetricCards from './metricCards';
import Charts from './charts';
import PropertiesSection from './properties-section';
import AppToaster from '@/components/ui/Toaster';

export default function DashboardLayout() {
  return (
    <>
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
    </>
  );
}