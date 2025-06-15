'use client'
import ListingCard from "@/components/layout/listingCard";
import { Navbar } from "@/components/layout/navbarLayout";
import { Listings } from "@/data/properties";
import { useSession } from "next-auth/react";

export default function PublicPropertyListingLayout() {
  const { data: session, status } = useSession();

    const handleBookVisit = (listing) => {
    alert(`Book visit for: ${listing.title}`);
  };

  const handleCardClick = () => {
    alert(`View details for: ${listing.title}`);
  };

  return (
    <div className="flex flex-col h-screen">
  <Navbar />
  <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Listings.map((listing) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          onBookVisit={handleBookVisit}
          onClick={handleCardClick}
        />
      ))}
    </div>
  </div>
</div>

  );
};