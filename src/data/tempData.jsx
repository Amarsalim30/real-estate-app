import { Building ,DollarSign ,Home ,Users } from "lucide-react";
// Sample data
export const metricsData = [
  {
    title: "Properties Managed",
    value: "4860",
    change: "+98%",
    trend: "up",
    icon: Building,
    color: "bg-teal-500"
  },
  {
    title: "Asset Value",
    value: "$2B",
    change: "+72%",
    trend: "up",
    icon: DollarSign,
    color: "bg-blue-500"
  },
  {
    title: "Properties Sold",
    value: "1037",
    change: "+44.2%",
    trend: "up",
    icon: Home,
    color: "bg-yellow-500"
  },
  {
    title: "New Clients",
    value: "895",
    change: "+70%",
    trend: "up",
    icon: Users,
    color: "bg-purple-500"
  }
];

export const statusData = [
  { name: 'Accepted', value: 1037, color: '#3B82F6' },
  { name: 'Rejected', value: 486, color: '#F59E0B' },
  { name: 'Counter', value: 165, color: '#8B5CF6' },
  { name: 'Pending', value: 166, color: '#10B981' }
];

export const revenueData = [
  { month: 'Jan', deals: 4200, value: 5800 },
  { month: 'Feb', deals: 4800, value: 6200 },
  { month: 'Mar', deals: 3900, value: 5400 },
  { month: 'Apr', deals: 5200, value: 6800 },
  { month: 'May', deals: 4100, value: 5600 },
  { month: 'Jun', deals: 3800, value: 5200 },
  { month: 'Jul', deals: 4600, value: 6000 },
  { month: 'Aug', deals: 5400, value: 7200 },
  { month: 'Sep', deals: 5800, value: 7600 },
  { month: 'Oct', deals: 5200, value: 6800 },
  { month: 'Nov', deals: 4400, value: 5800 },
  { month: 'Dec', deals: 4800, value: 6200 }
];

export const properties = [
  {
    id: 1,
    name: "Sunset Retreat Villa",
    location: "Austin, Texas",
    price: "$7548",
    beds: 3,
    baths: 2,
    sqft: "1400 sqft",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Riverside Haven",
    location: "Portland, Oregon",
    price: "$1548",
    beds: 4,
    baths: 3,
    sqft: "2000 sqft",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Mountain View Villa",
    location: "Boulder, Colorado",
    price: "$2048",
    beds: 2,
    baths: 2,
    sqft: "1400 sqft",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Ocean Breeze Cottage",
    location: "San Diego, California",
    price: "$6948",
    beds: 2,
    baths: 1,
    sqft: "1200 sqft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
  }
];
