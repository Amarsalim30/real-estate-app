import { Building, Home, User, Settings, BarChart3, Calendar, TrendingUp, TrendingDown, MessageSquare, HelpCircle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

export default function Sidebar() {
  const {data:session,status}=useSession();
  if (status==="loading")return null;
  if(!session)return null;
  const user =session.user;
  const router = useRouter();
  const pathname = usePathname();
  const sidebarItems = [  
    { icon: BarChart3, label: 'Dashboard', active: pathname === '/dashboard', pathname: '/dashboard', roles: ['admin', 'user'] },
    { icon: Building, label: 'My Property', active: pathname === '/property-listings', pathname: '/property-listing', roles: ['admin', 'user'] },
    { icon: BarChart3, label: 'Analytic', active: pathname === '/analytics', pathname: '/analytics', roles: ['admin'] },
    { icon: Calendar, label: 'Transaction', active: pathname === '/transactions', pathname: '/transactions', roles: ['admin', 'user'] },
    { icon: TrendingUp, label: 'Cashflow', active: pathname === '/cashflow', pathname: '/cashflow', roles: ['admin'] },
    { icon: User, label: 'Customer', active: pathname === '/customers', pathname: '/customers', roles: ['admin'] },
    { icon: MessageSquare, label: 'Message', active: pathname === '/messages', pathname: '/messages', roles: ['admin', 'user'] },
    { icon: HelpCircle, label: 'User Guide', active: pathname === '/user-guide', pathname: '/user-guide', roles: ['admin', 'user'] },
    { icon: HelpCircle, label: 'FAQ', active: pathname === '/faq', pathname: '/faq', roles: ['admin', 'user'] },
    { icon: Settings, label: 'Help Center', active: pathname === '/help-center', pathname: '/help-center', roles: ['admin', 'user'] },
  ];

  return (
    //  {/* Sidebar */}
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <Building className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">Estate</span>
        </div>
      </div>

      <nav className="mt-8">
        {sidebarItems
          // Filter items based on user role
          // Ensure the user has permission to view the item
          .filter(item => item.roles?.includes(user.role))
          .map((item) => (
            <div
              key={item.pathname}
              onClick={() => router.push(item.pathname || '#')}
              className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 cursor-pointer ${item.active ? 'bg-teal-50 text-teal-600 border-r-2 border-teal-500' : ''
                }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
      </nav>
      {/* Optional Footer */}
      <div className="p-4 border-t text-xs text-gray-400">
        Logged in as: <span className="text-gray-600 font-medium">{user.email}</span>
      </div>
    </div>
  );
}