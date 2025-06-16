import { Building ,DollarSign ,Home ,Users,Receipt,Flame } from "lucide-react";
// Sample data
export const metricsData = [
  {
    title: "Properties Managed",
    value: "100",
    change: "+98%",
    trend: "up",
    icon: Home,
    color: "bg-teal-500"
  },
  {
    title: "Active Deal",
    value: "50000",
    change: "+72%",
    trend: "up",
    icon: Flame,
    color: "bg-blue-500"
  },
  {
    title: "Properties Sold",
    value: "1037",
    change: "+44.2%",
    trend: "up",
    icon: Receipt,
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
    price: "7,548ksh",
    beds: 3,
    baths: 2,
    sqft: "1400 sqft",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Riverside Haven",
    location: "Portland, Oregon",
    price: "1548ksh",
    beds: 4,
    baths: 3,
    sqft: "2000 sqft",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Mountain View Villa",
    location: "Boulder, Colorado",
    price: "2,048ksh",
    beds: 2,
    baths: 2,
    sqft: "1400 sqft",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Ocean Breeze Cottage",
    location: "San Diego, California",
    price: "6,948ksh",
    beds: 2,
    baths: 1,
    sqft: "1200 sqft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
  }
];
