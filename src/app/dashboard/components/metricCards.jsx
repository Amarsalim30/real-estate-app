import { TrendingUp, TrendingDown } from 'lucide-react';
import { metricsData } from '@/data/tempData';

export default function MetricCards() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metricsData.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${metric.color}`}>
                        <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                        {metric.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                            {metric.change}
                        </span>
                        <span className="text-gray-500">Last year</span>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</h3>
                <p className="text-gray-600 text-sm">{metric.title}</p>
            </div>
        ))}
    </div>
  );
}