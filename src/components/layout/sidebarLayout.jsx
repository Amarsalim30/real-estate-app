import { Building, Home, User, Settings,BarChart3,Calendar,TrendingUp ,TrendingDown,MessageSquare ,HelpCircle } from 'lucide-react';
export default function Sidebar(){
    
    const sidebarItems = [
      { icon: BarChart3, label: 'Dashboard', active: true },
      { icon: Building, label: 'My Property' },
      { icon: BarChart3, label: 'Analytic' },
      { icon: Calendar, label: 'Transaction' },
      { icon: TrendingUp, label: 'Cashflow' },
      { icon: User, label: 'Customer' },
      { icon: MessageSquare, label: 'Message' },
      { icon: HelpCircle, label: 'User Guide' },
      { icon: HelpCircle, label: 'FAQ' },
      { icon: Settings, label: 'Help Center' }
    ];

    return (
//  {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold t ext-gray-800">Estate</span>
          </div>
        </div>
        
        <nav className="mt-8">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 cursor-pointer ${
                item.active ? 'bg-teal-50 text-teal-600 border-r-2 border-teal-500' : ''
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    );
 }