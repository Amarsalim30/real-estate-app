import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { revenueData} from '@/data/tempData';
import DealPipelineChart from './dealChart';

export default function Charts() {

    return (
        // {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

            {/* Revenue Generation */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Revenue Generation</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-teal-200 rounded-full"></div>
                    <span className="text-gray-600">Deals</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-600">Deal value</span>
                  </div>
                  <select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
                    <option>Last year</option>
                    <option>This year</option>
                  </select>
                </div>
              </div>
              
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="deals" fill="#B2F5EA" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="value" fill="#319795" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DealPipelineChart />
          </div>
    );
}
