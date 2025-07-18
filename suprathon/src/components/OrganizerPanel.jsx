import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Award, 
  TrendingUp, 
  TrendingDown,
  Plus,
  Search,
  Filter,
  Download,
  Settings,
  Bell,
  User,
  Star,
  Clock,
  MapPin,
  Eye,
  Edit3,
  Trash2,
  CheckCircle,
  AlertCircle,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
  MessageSquare,
  Share2,
  ExternalLink
} from 'lucide-react';

const OrganizerPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [timeFilter, setTimeFilter] = useState('week');

  // Sample data
  const [stats] = useState({
    totalCandidates: 1247,
    activeJobs: 23,
    activeOpportunities: 45,
    activeAssessments: 12,
    totalRegistrations: 856,
    weeklyGrowth: 12.5,
    monthlyRevenue: 45670,
    completionRate: 89.2
  });

  const [recentActivity] = useState([
    { id: 1, type: 'course', title: 'React Fundamentals', action: 'New enrollment', time: '2 min ago', status: 'active' },
    { id: 2, type: 'event', title: 'Web Development Workshop', action: 'Event completed', time: '1 hour ago', status: 'completed' },
    { id: 3, type: 'course', title: 'Advanced JavaScript', action: 'Certificate issued', time: '3 hours ago', status: 'completed' },
    { id: 4, type: 'event', title: 'Design Thinking Seminar', action: 'Registration opened', time: '5 hours ago', status: 'active' }
  ]);

  const [upcomingEvents] = useState([
    { id: 1, title: 'Machine Learning Bootcamp', date: '2025-07-25', time: '10:00 AM', participants: 45, status: 'confirmed' },
    { id: 2, title: 'UI/UX Design Workshop', date: '2025-07-28', time: '2:00 PM', participants: 32, status: 'confirmed' },
    { id: 3, title: 'Data Science Fundamentals', date: '2025-08-02', time: '9:00 AM', participants: 28, status: 'pending' }
  ]);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'candidates', label: 'Candidates', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 fixed h-full" style={{ backgroundColor: '#022B3A' }}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>un</span>
            </div>
            <h1 className="text-white text-xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>EduPlatform</h1>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-white border-l-4 border-teal-400'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Alex Johnson</p>
                <p className="text-gray-300 text-xs">Organizer</p>
              </div>
            </div>
            <button className="w-full py-2 px-3 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                Welcome Back, 👋
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Here is the summary of overall performance
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300">
                <Plus className="w-5 h-5" />
                <span className="ml-7 font-medium">Host</span>
              </button>
              <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        {activeSection === 'dashboard' && (
          <div className="p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                      {stats.totalCandidates}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">Total Candidates</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-500 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+{stats.weeklyGrowth}%</span>
                  </div>
                  <span className="text-xs text-gray-500">vs last week</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                      {stats.activeJobs}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">Active Jobs & Initiatives</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-emerald-500 flex items-center gap-1">
                    <span className="text-sm font-semibold">Total: {stats.totalRegistrations}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-500">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                      {stats.activeOpportunities}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">Active Opportunities</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-purple-500 flex items-center gap-1">
                    <span className="text-sm font-semibold">Total: {stats.totalRegistrations}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-orange-500">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                      {stats.activeAssessments}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">Active Assessments</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-orange-500 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+5% this week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts and Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                    Candidates Registration
                  </h3>
                  <select 
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                
                {/* Bar Chart */}
                <div className="h-48 bg-gray-50 rounded-xl p-4 flex items-end justify-around">
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-blue-500 rounded-t-lg mb-2" style={{ height: '80px' }}></div>
                    <span className="text-xs text-gray-600">Mon</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-blue-500 rounded-t-lg mb-2" style={{ height: '120px' }}></div>
                    <span className="text-xs text-gray-600">Tue</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-blue-500 rounded-t-lg mb-2" style={{ height: '100px' }}></div>
                    <span className="text-xs text-gray-600">Wed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-blue-500 rounded-t-lg mb-2" style={{ height: '140px' }}></div>
                    <span className="text-xs text-gray-600">Thu</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-blue-500 rounded-t-lg mb-2" style={{ height: '110px' }}></div>
                    <span className="text-xs text-gray-600">Fri</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-blue-500 rounded-t-lg mb-2" style={{ height: '90px' }}></div>
                    <span className="text-xs text-gray-600">Sat</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-blue-500 rounded-t-lg mb-2" style={{ height: '75px' }}></div>
                    <span className="text-xs text-gray-600">Sun</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                    Course Completion Rate
                  </h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">89.2%</p>
                    <p className="text-xs text-gray-500">This month</p>
                  </div>
                </div>
                
                {/* Donut Chart */}
                <div className="h-48 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                        strokeDasharray="89.2, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-800">89.2%</p>
                        <p className="text-xs text-gray-600">Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                    Event Attendance
                  </h3>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">75%</p>
                    <p className="text-xs text-gray-500">Average</p>
                  </div>
                </div>
                
                {/* Horizontal Bar Chart */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-20">Workshop</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">85%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-20">Seminar</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">70%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-20">Bootcamp</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">90%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-20">Webinar</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">55%</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                    User Activity
                  </h3>
                  <div className="text-right">
                    <p className="text-lg font-bold text-indigo-600">2.4k</p>
                    <p className="text-xs text-gray-500">Active users</p>
                  </div>
                </div>
                
                {/* Area Chart */}
                <div className="h-32 bg-gray-50 rounded-xl p-4">
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0.1 }} />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="10,60 10,45 30,35 50,25 70,30 90,20 110,15 130,25 150,18 170,12 190,8 190,60"
                      fill="url(#gradient)"
                    />
                    <polyline
                      points="10,45 30,35 50,25 70,30 90,20 110,15 130,25 150,18 170,12 190,8"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                  Recent Activity
                </h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'course' 
                        ? 'bg-blue-500' 
                        : 'bg-purple-500'
                    }`}>
                      {activity.type === 'course' ? (
                        <BookOpen className="w-4 h-4 text-white" />
                      ) : (
                        <Calendar className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{activity.title}</p>
                      <p className="text-xs text-gray-600">{activity.action}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{activity.time}</p>
                      <div className={`w-2 h-2 rounded-full mt-1 ${
                        activity.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                  Upcoming Events
                </h3>
                <div className="flex items-center gap-3">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Alerts
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Upcoming
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-600 text-sm">
                      <th className="pb-4 font-semibold">Event</th>
                      <th className="pb-4 font-semibold">Date & Time</th>
                      <th className="pb-4 font-semibold">Participants</th>
                      <th className="pb-4 font-semibold">Status</th>
                      <th className="pb-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingEvents.map((event) => (
                      <tr key={event.id} className="border-t border-gray-100">
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-teal-500">
                              <Calendar className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold text-gray-800">{event.title}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <div>
                            <p className="text-sm font-medium text-gray-800">{event.date}</p>
                            <p className="text-xs text-gray-600">{event.time}</p>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="text-sm text-gray-600">{event.participants} registered</span>
                        </td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-all duration-300">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition-all duration-300">
                              <Edit3 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Alert */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-green-500">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                      You're All Caught Up!
                    </h4>
                    <p className="text-sm text-gray-600">All your events and courses are running smoothly.</p>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-medium hover:from-yellow-600 hover:to-orange-700 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other sections can be added here */}
        {activeSection !== 'dashboard' && (
          <div className="p-6">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                {sidebarItems.find(item => item.id === activeSection)?.label}
              </h3>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizerPanel;
