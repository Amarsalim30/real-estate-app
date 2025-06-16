import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';

const DealPipelineChart = () => {
  // Dummy data for deals/bookings
  const dealData = [
    { name: 'Closed Won', value: 12, color: '#10B981' },
    { name: 'In Progress', value: 8, color: '#F59E0B' },
    { name: 'Follow Up', value: 5, color: '#EF4444' },
    { name: 'Qualified', value: 15, color: '#3B82F6' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm text-gray-600">{payload[0].value} deals</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Deal Pipeline</h3>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
          <option>This month</option>
          <option>Last month</option>
          <option>This quarter</option>
        </select>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dealData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {dealData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex flex-col space-y-3">
          {dealData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-700">{item.name}</span>
              <span className="text-sm font-medium text-gray-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Summary stats */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total Active Deals</span>
          <span className="font-medium">40</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span className="text-gray-600">Conversion Rate</span>
          <span className="font-medium text-green-600">30%</span>
        </div>
      </div>
    </div>
  );
};

export default DealPipelineChart;