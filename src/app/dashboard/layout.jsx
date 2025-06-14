'use client';
import React, { useState } from 'react';

import Sidebar from '@/components/layout/sidebarLayout';
import Header from '@/components/layout/header.jsx';
import DashboardHeader from './dashboardHeader';
import MetricCards from './metricCards';
import Charts from './charts';
import PropertiesSection from './properties-section';
import AppToaster from '@/components/ui/Toaster';
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { toast } from 'sonner';

export default async function DashboardLayout() {
    const session = await getServerSession()
      if (!session) {
    redirect("/login")
  }
  return (
    <div>
      {toast.success(`welcome back ,${session.user.name}`)}
    <div>
    {user ? <Dashboard /> : <LoginPrompt />}
  </div>
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
    </div>
  );
}