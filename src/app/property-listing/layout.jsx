'use client';
import { useState } from "react";
import ListingCard from "@/components/layout/listingCard";
import Sidebar from "@/components/layout/sidebarLayout";
import { Listings } from "@/data/properties";
import { useSession } from "next-auth/react";
import Header from "@/components/layout/header";
import FilterBar from "@/components/features/filterBar";

export default function PropertyListingLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const { data: session } = useSession();

  const handleEdit = (listing) => {
    alert(`Edit listing: ${listing.title}`);
  };

  const handleDelete = (listing) => {
    alert(`Delete listing: ${listing.title}`);
  };

  const handleBookVisit = (listing) => {
    alert(`Book for: ${listing.title}`);
  };

  const handleCardClick = (listing) => {
    alert(`View details for: ${listing.title}`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar collapsed={collapsed} toggleSidebar={() => setCollapsed(!collapsed)} />

      <div className="flex-1 flex flex-col">
        <Header session={session} />
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <FilterBar onFilter={(filters) => {
            // Use filters to refetch or filter locally
            console.log(filters);
          }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Listings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onBookVisit={handleBookVisit}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
