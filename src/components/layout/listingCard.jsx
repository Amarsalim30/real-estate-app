'use client';
import { useAuth } from '@/app/context/authContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Calendar, Edit, Trash2 } from 'lucide-react';

export default function ListingCard({ listing, onEdit, onDelete }) {
  const { user } = useAuth();


//   const handleCardClick = () => {
//     setDrawerListing(listing);
//   };

//   const handleButtonClick = (e, action) => {
//     e.stopPropagation();
//     if (action) action(listing.id);
//   };

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
    //   onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSO0RFap_z2IDRds8F0t5PlPnmmnlpECup6c94nxCCJlVrgmgaVwmCnBxPWuDKT5LxfXns6IRFPL41Sx80iaSUVTkKacX7QmooXWXLTYsI&usqp=CAc"
          alt={listing.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-3 right-3 ${getStatusColor(listing.status)} text-white`}>
          {listing.status.toUpperCase()}
        </Badge>
        <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">
          {formatPrice(listing.price)}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold line-clamp-1">{listing.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          {listing.location}
        </div>
      </CardHeader>
      
      <CardContent className="py-2">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {listing.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {listing.bedrooms && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {listing.bedrooms} Beds
            </div>
          )}
          {listing.bathrooms && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {listing.bathrooms} Baths
            </div>
          )}
          {listing.sqft && (
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              {listing.sqft.toLocaleString()} sq.ft.
            </div>
          )}
          
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <img
            src={listing.agent.avatar}
            alt={listing.agent.name}
            className="w-8 h-8 rounded-full object-cover"
          /> */}
          <div>
            <p className="text-xs text-muted-foreground">Agent</p>
            <p className="text-sm font-medium">{"Amar"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {user?.role === 'admin' && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => handleButtonClick(e, onEdit)}
                className="p-2"
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => handleButtonClick(e, onDelete)}
                className="p-2 text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </>
          )}
          <Button size="sm" className="ml-2" onClick={(e) => handleButtonClick(e)}>
            {listing.status === 'available' ? 'Book Visit' : 'Contact Agent'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
