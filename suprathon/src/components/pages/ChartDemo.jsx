import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Legend
} from 'recharts';

const ChartDemo = () => {
  // Sample data for different chart types
  const lineData = [
    { month: 'Jan', users: 1200, revenue: 8400 },
    { month: 'Feb', users: 1450, revenue: 9800 },
    { month: 'Mar', users: 1680, revenue: 11200 },
    { month: 'Apr', users: 1920, revenue: 13500 },
    { month: 'May', users: 2150, revenue: 15800 },
    { month: 'Jun', users: 2380, revenue: 18200 },
  ];

  const barData = [
    { category: 'Tech', events: 45, completion: 85 },
    { category: 'Business', events: 32, completion: 78 },
    { category: 'Arts', events: 28, completion: 82 },
    { category: 'Science', events: 35, completion: 88 },
    { category: 'Sports', events: 22, completion: 75 },
  ];

  const pieData = [
    { name: 'Computer Science', value: 35, color: '#3B82F6' },
    { name: 'Business', value: 25, color: '#10B981' },
    { name: 'Engineering', value: 20, color: '#F59E0B' },
    { name: 'Arts', value: 15, color: '#EF4444' },
    { name: 'Others', value: 5, color: '#8B5CF6' },
  ];

  const performanceData = [
    { subject: 'Engagement', A: 85, fullMark: 100 },
    { subject: 'Quality', A: 88, fullMark: 100 },
    { subject: 'Satisfaction', A: 90, fullMark: 100 },
    { subject: 'Retention', A: 70, fullMark: 100 },
    { subject: 'Growth', A: 65, fullMark: 100 },
    { subject: 'Innovation', A: 78, fullMark: 100 },
  ];

  const activityData = [
    { time: '6AM', active: 12, peak: 20 },
    { time: '9AM', active: 45, peak: 60 },
    { time: '12PM', active: 95, peak: 120 },
    { time: '3PM', active: 125, peak: 150 },
    { time: '6PM', active: 180, peak: 200 },
    { time: '9PM', active: 165, peak: 180 },
    { time: '12AM', active: 85, peak: 100 },
  ];

  const ChartCard = ({ title, children, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
      {children}
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 Chart Types Demo</h1>
          <p className="text-gray-600">
            Explore different chart types you can use in your admin dashboard using Recharts library
          </p>
        </div>

        <div className="space-y-8">
          {/* Area Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="🌊 Area Chart - Simple" 
              description="Perfect for showing trends over time with filled areas"
            >
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorUsers)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard 
              title="📈 Area Chart - Stacked" 
              description="Show multiple data series stacked on top of each other"
            >
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stackId="1"
                    stroke="#8884d8" 
                    fill="#8884d8" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stackId="1"
                    stroke="#82ca9d" 
                    fill="#82ca9d" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Line Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="📊 Line Chart - Multi-Series" 
              description="Compare multiple metrics with clean line visualization"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard 
              title="🎯 Radar Chart" 
              description="Perfect for showing performance across multiple dimensions"
            >
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={performanceData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#666' }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: '#666' }} />
                  <Radar
                    name="Performance"
                    dataKey="A"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Bar Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="📊 Bar Chart - Grouped" 
              description="Compare multiple values across different categories"
            >
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="category" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="events" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="completion" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard 
              title="🍕 Pie Chart" 
              description="Show proportional data with colorful segments"
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Advanced Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="🔄 Composed Chart" 
              description="Combine different chart types (bar + line) in one visualization"
            >
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="active" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Line 
                    type="monotone" 
                    dataKey="peak" 
                    stroke="#EF4444" 
                    strokeWidth={3}
                    dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard 
              title="📱 Responsive Design Tips" 
              description="Best practices for mobile-friendly charts"
            >
              <div className="space-y-4 h-[300px] flex flex-col justify-center">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">📱 Mobile Optimization</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Use ResponsiveContainer for auto-sizing</li>
                    <li>• Reduce font sizes on small screens</li>
                    <li>• Consider horizontal bars for mobile</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">🎨 Color Guidelines</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Use consistent color palette</li>
                    <li>• Ensure accessibility (contrast)</li>
                    <li>• Add gradients for visual appeal</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">⚡ Performance</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Limit data points for smooth rendering</li>
                    <li>• Use animations sparingly</li>
                    <li>• Implement lazy loading for large datasets</li>
                  </ul>
                </div>
              </div>
            </ChartCard>
          </div>

          {/* Code Examples */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">💻 Quick Start Code Examples</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">📈 Basic Area Chart</h4>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<AreaChart data={data}>
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Area 
    type="monotone" 
    dataKey="value" 
    stroke="#3B82F6" 
    fill="#3B82F6" 
    fillOpacity={0.6}
  />
</AreaChart>`}
                </pre>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">🎯 Basic Radar Chart</h4>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<RadarChart data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis />
  <Radar
    dataKey="value"
    stroke="#10B981"
    fill="#10B981"
    fillOpacity={0.3}
  />
</RadarChart>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartDemo;
