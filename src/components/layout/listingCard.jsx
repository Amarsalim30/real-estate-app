"use client";

import React from 'react';
import PropertyCard from '../ui/card';
const ListingCard = ({ 
  listing,
  onEdit,
  onDelete,
  onBookVisit,
  onClick
}) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className='p-4'>
      <PropertyCard property={listing}
       edit={onEdit} 
       deleteProperty={onDelete}
       visit={onBookVisit}
       Cardclick={onClick}/>

    </div>
    
  
)};

export default ListingCard;