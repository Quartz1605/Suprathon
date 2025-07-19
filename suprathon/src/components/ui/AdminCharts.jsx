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
  Legend
} from 'recharts';

// Live Platform Activity Data (similar to your image)
const activityData = [
  { time: '6AM', activity: 12 },
  { time: '9AM', activity: 45 },
  { time: '12PM', activity: 95 },
  { time: '3PM', activity: 125 },
  { time: '6PM', activity: 180 },
  { time: '9PM', activity: 165 },
  { time: '12AM', activity: 85 }
];

// Performance Overview Data (radar chart)
const performanceData = [
  {
    subject: 'Engagement',
    A: 85,
    fullMark: 100,
  },
  {
    subject: 'Completion',
    A: 75,
    fullMark: 100,
  },
  {
    subject: 'Satisfaction',
    A: 90,
    fullMark: 100,
  },
  {
    subject: 'Retention',
    A: 70,
    fullMark: 100,
  },
  {
    subject: 'Growth',
    A: 65,
    fullMark: 100,
  },
  {
    subject: 'Quality',
    A: 88,
    fullMark: 100,
  },
];

// Custom tooltip for area chart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-gray-600 text-sm">{`Time: ${label}`}</p>
        <p className="text-blue-600 font-semibold">
          {`Activity: ${payload[0].value} users`}
        </p>
      </div>
    );
  }
  return null;
};

// Live Platform Activity Chart Component
export const LiveActivityChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <h3 className="text-lg font-semibold text-gray-800">Live Platform Activity</h3>
      </div>
      
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={activityData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="activity"
              stroke="#3B82F6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorActivity)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Performance Overview Radar Chart Component
export const PerformanceRadarChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <h3 className="text-lg font-semibold text-gray-800">Performance Overview</h3>
      </div>
      
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <RadarChart data={performanceData}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fontSize: 10, fill: '#666' }}
            />
            <Radar
              name="Performance"
              dataKey="A"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                      <p className="text-gray-600 text-sm">{payload[0].payload.subject}</p>
                      <p className="text-green-600 font-semibold">
                        {`Score: ${payload[0].value}%`}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Additional Chart Components

// Revenue Chart (Line Chart)
export const RevenueChart = () => {
  const revenueData = [
    { month: 'Jan', revenue: 12000, courses: 8000, events: 4000 },
    { month: 'Feb', revenue: 15000, courses: 10000, events: 5000 },
    { month: 'Mar', revenue: 18000, courses: 12000, events: 6000 },
    { month: 'Apr', revenue: 22000, courses: 14000, events: 8000 },
    { month: 'May', revenue: 25000, courses: 16000, events: 9000 },
    { month: 'Jun', revenue: 28000, courses: 18000, events: 10000 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Trends</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="courses"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="events"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// User Growth Chart (Bar Chart)
export const UserGrowthChart = () => {
  const userGrowthData = [
    { month: 'Jan', students: 1200, institutes: 45 },
    { month: 'Feb', students: 1450, institutes: 52 },
    { month: 'Mar', students: 1680, institutes: 58 },
    { month: 'Apr', students: 1920, institutes: 65 },
    { month: 'May', students: 2150, institutes: 72 },
    { month: 'Jun', students: 2380, institutes: 78 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">User Growth</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="students"
              stroke="#FF6B6B"
              fill="#FF6B6B"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default {
  LiveActivityChart,
  PerformanceRadarChart,
  RevenueChart,
  UserGrowthChart
};
