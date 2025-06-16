'use client';
import{ React, useState,useEffect } from 'react';

import Sidebar from '@/components/layout/sidebarLayout';
import Header from '@/components/layout/header.jsx';
import DashboardHeader from './dashboardHeader';
import MetricCards from './metricCards';
import Charts from './charts';
import PropertiesSection from './properties-section';
import AppToaster from '@/components/ui/Toaster';
import { toast } from 'sonner';

export default function DashboardClientLayout({session}) {
    const [collapsed, setCollapsed] = useState(false);
  useEffect(
      () => {
    if (session?.user) {
      toast.success(`Welcome back, ${session.user.name}`);
    }
  },[session])

  return (
 
    <div className="flex h-screen bg-gray-50">
      <Sidebar collapsed={collapsed} toggleSidebar={() => setCollapsed(!collapsed)}  />
      {/* Toast Notifications */}
      <AppToaster/>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header session={session} />

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