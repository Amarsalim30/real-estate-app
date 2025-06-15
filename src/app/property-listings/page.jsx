'use client'
import ListingCard from "@/components/layout/listingCard";
import Sidebar from "@/components/layout/sidebarLayout";
import {Listings} from "@/data/properties";

export default function PropertListingPage () {

  const handleEdit = (listing) => {
    alert(`Edit listing: ${listing.title}`);
  };

  const handleDelete = (listing) => {
    alert(`Delete listing: ${listing.title}`);
  };

  const handleBookVisit = (listing) => {
    alert(`Book visit for: ${listing.title}`);
  };

  const handleCardClick = () => {
    alert(`View details for: ${listing.title}`);
  };

  return (
        <div className="flex h-screen bg-gray-50">
    <Sidebar/>
    <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
     { Listings.map((listing)=>
      <ListingCard
        key={listing.id}
        listing={listing}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onBookVisit={handleBookVisit}
        onClick={handleCardClick}
      />)}
    </div>
    </div>
  );
};