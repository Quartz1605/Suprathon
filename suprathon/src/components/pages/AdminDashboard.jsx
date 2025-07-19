import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Eye, 
  Edit, 
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Award,
  Target,
  Globe,
  Star,
  ArrowUpRight,
  ArrowDownLeft,
  Activity,
  Building
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { 
  LiveActivityChart, 
  PerformanceRadarChart, 
  RevenueChart, 
  UserGrowthChart 
} from '../ui/AdminCharts';

const AdminDashboard = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Enhanced mock data with comprehensive analytics
  const stats = [
    { 
      label: "Total Events", 
      value: "2,847", 
      icon: Calendar, 
      color: "text-[#1F7A8C]", 
      change: "+18%", 
      trend: "up",
      description: "Events this month"
    },
    { 
      label: "Active Students", 
      value: "12,459", 
      icon: Users, 
      color: "text-[#022B3A]", 
      change: "+23%", 
      trend: "up",
      description: "Registered learners"
    },
    { 
      label: "Revenue Generated", 
      value: "₹8,47,290", 
      icon: DollarSign, 
      color: "text-green-600", 
      change: "+31%", 
      trend: "up",
      description: "Total earnings"
    },
    { 
      label: "Partner Institutes", 
      value: "234", 
      icon: Globe, 
      color: "text-orange-600", 
      change: "+12%", 
      trend: "up",
      description: "Active institutions"
    },
    {
      label: "Completion Rate",
      value: "87.3%",
      icon: Target,
      color: "text-purple-600",
      change: "+5.2%",
      trend: "up",
      description: "Course completion"
    },
    {
      label: "Avg. Rating",
      value: "4.8",
      icon: Star,
      color: "text-yellow-600",
      change: "+0.3",
      trend: "up",
      description: "Student satisfaction"
    }
  ];

  const monthlyData = [
    { month: "Jan", events: 142, registrations: 2340, revenue: 42000 },
    { month: "Feb", events: 165, registrations: 3210, revenue: 58000 },
    { month: "Mar", events: 189, registrations: 4450, revenue: 72000 },
    { month: "Apr", events: 212, registrations: 5670, revenue: 89000 },
    { month: "May", events: 245, registrations: 6780, revenue: 98000 },
    { month: "Jun", events: 278, registrations: 7890, revenue: 112000 },
  ];

  const eventTypeData = [
    { name: "Webinars", value: 45, count: 1247, color: "#1F7A8C" },
    { name: "Seminars", value: 30, count: 832, color: "#BFDBF7" },
    { name: "Courses", value: 25, count: 623, color: "#022B3A" }
  ];

  const pendingEvents = [
    {
      id: 1,
      title: "Advanced AI Workshop",
      institute: "Tech Academy",
      type: "workshop",
      date: "2025-01-25",
      status: "pending",
      registrations: 0
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      institute: "Marketing Institute",
      type: "course",
      date: "2025-01-28",
      status: "pending",
      registrations: 0
    },
    {
      id: 3,
      title: "Blockchain Development Bootcamp",
      institute: "Crypto Academy",
      type: "bootcamp",
      date: "2025-02-01",
      status: "pending",
      registrations: 0
    }
  ];

  const liveEvents = [
    {
      id: 3,
      title: "React Development Bootcamp",
      institute: "Code Academy",
      type: "course",
      date: "2025-01-20",
      status: "live",
      registrations: 89,
      maxRegistrations: 100
    },
    {
      id: 4,
      title: "Business Strategy Seminar",
      institute: "Business School",
      type: "seminar",
      date: "2025-01-22",
      status: "live",
      registrations: 156,
      maxRegistrations: 200
    },
    {
      id: 5,
      title: "Data Science Masterclass",
      institute: "AI Institute",
      type: "masterclass",
      date: "2025-01-23",
      status: "live",
      registrations: 78,
      maxRegistrations: 120
    }
  ];

  const recentRegistrations = [
    { id: 1, user: "Rahul Sharma", event: "React Development", time: "2 min ago", type: "course" },
    { id: 2, user: "Priya Patel", event: "AI Workshop", time: "5 min ago", type: "workshop" },
    { id: 3, user: "Amit Kumar", event: "Business Strategy", time: "8 min ago", type: "seminar" },
    { id: 4, user: "Sneha Singh", event: "Data Science", time: "12 min ago", type: "masterclass" },
    { id: 5, user: "Vikash Gupta", event: "Digital Marketing", time: "15 min ago", type: "course" }
  ];

  const topInstitutes = [
    { name: "TechCorp Innovation Hub", events: 45, students: 2340, rating: 4.9, revenue: "₹2,34,000" },
    { name: "AI Academy", events: 38, students: 1890, rating: 4.8, revenue: "₹1,89,000" },
    { name: "Business School Pro", events: 42, students: 2100, rating: 4.7, revenue: "₹2,10,000" },
    { name: "Code Masters", events: 36, students: 1650, rating: 4.8, revenue: "₹1,65,000" }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'events', label: 'Event Management', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'institutes', label: 'Institutes', icon: Building }
  ];

  const handleApproveEvent = (eventId) => {
    console.log('Approving event:', eventId);
    // Handle event approval logic
  };

  const handleRejectEvent = (eventId) => {
    console.log('Rejecting event:', eventId);
    // Handle event rejection logic
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Quick Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#022B3A]">
                    <Activity className="h-5 w-5 text-[#1F7A8C]" />
                    Recent Registrations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentRegistrations.map((registration) => (
                      <div key={registration.id} className="flex items-center justify-between p-3 bg-[#E1E5F2] rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#1F7A8C] rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-[#022B3A]">{registration.user}</p>
                            <p className="text-sm text-gray-600">{registration.event}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-1">
                            {registration.type}
                          </Badge>
                          <p className="text-xs text-gray-500">{registration.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#022B3A]">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab('events')}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('events')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Review Queue ({pendingEvents.length})
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('institutes')}
                  >
                    <Building className="w-4 h-4 mr-2" />
                    Manage Institutes
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('analytics')}
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Top Performing Institutes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#022B3A]">
                  <Star className="h-5 w-5 text-[#1F7A8C]" />
                  Top Performing Institutes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topInstitutes.map((institute, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-[#BFDBF7] rounded-lg hover:bg-[#E1E5F2] transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#1F7A8C] rounded-lg flex items-center justify-center">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#022B3A]">{institute.name}</h4>
                          <p className="text-sm text-gray-600">
                            {institute.events} events • {institute.students} students
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium">{institute.rating}</span>
                        </div>
                        <p className="text-sm font-semibold text-[#1F7A8C]">{institute.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-[#022B3A]">Event Management</h2>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add New Event
              </Button>
            </div>

            {/* Pending Approvals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#022B3A]">
                  <Clock className="h-5 w-5 text-orange-500" />
                  Pending Approvals ({pendingEvents.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingEvents.map((event) => (
                  <div key={event.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-[#BFDBF7] rounded-lg gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#022B3A]">{event.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {event.institute} • {event.date} • 
                        <Badge variant="outline" className="ml-2 text-xs">
                          {event.type}
                        </Badge>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Review
                      </Button>
                      <Button 
                        size="sm" 
                        className="gap-2"
                        onClick={() => handleApproveEvent(event.id)}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="gap-2 text-red-600 hover:bg-red-50"
                        onClick={() => handleRejectEvent(event.id)}
                      >
                        <XCircle className="h-4 w-4" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Live Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#022B3A]">
                  <Calendar className="h-5 w-5 text-green-500" />
                  Live Events ({liveEvents.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {liveEvents.map((event) => (
                  <div key={event.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-[#BFDBF7] rounded-lg gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#022B3A]">{event.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {event.institute} • {event.date}
                      </p>
                      <div className="mt-3">
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <span>Registrations: {event.registrations}/{event.maxRegistrations}</span>
                          <Badge 
                            variant={event.registrations > event.maxRegistrations * 0.8 ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {Math.round((event.registrations / event.maxRegistrations) * 100)}% full
                          </Badge>
                        </div>
                        <div className="w-full bg-[#E1E5F2] rounded-full h-2">
                          <div 
                            className="bg-[#1F7A8C] h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${(event.registrations / event.maxRegistrations) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-[#022B3A]">
                Analytics Dashboard
              </h2>
              <p className="text-gray-600">Comprehensive insights into platform performance</p>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#022B3A]">
                    <TrendingUp className="h-5 w-5 text-[#1F7A8C]" />
                    Growth Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Growth</p>
                      <p className="text-2xl font-bold text-[#1F7A8C]">+23.5%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">User Acquisition</p>
                      <p className="text-lg font-semibold text-[#022B3A]">1,234 new users</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#022B3A]">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Revenue Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">This Month</p>
                      <p className="text-2xl font-bold text-green-600">₹1,28,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Average per Event</p>
                      <p className="text-lg font-semibold text-[#022B3A]">₹4,200</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#022B3A]">
                    <Award className="h-5 w-5 text-purple-600" />
                    Quality Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Avg. Completion Rate</p>
                      <p className="text-2xl font-bold text-purple-600">87.3%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Satisfaction Score</p>
                      <p className="text-lg font-semibold text-[#022B3A]">4.8/5.0</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Event Type Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#022B3A]">
                  <Calendar className="h-5 w-5 text-[#1F7A8C]" />
                  Event Type Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eventTypeData.map((event, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: event.color }}
                        />
                        <span className="font-medium text-[#022B3A]">{event.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">{event.count} events</span>
                        <span className="font-semibold text-[#1F7A8C]">{event.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Analytics Charts */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#022B3A]">Detailed Analytics</h3>
              
              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <LiveActivityChart />
                <PerformanceRadarChart />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RevenueChart />
                <UserGrowthChart />
              </div>
            </div>
          </div>
        );

      case 'institutes':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-[#022B3A]">
                  Institute Management
                </h2>
                <p className="text-gray-600">Manage partner institutions and their performance</p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Institute
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {topInstitutes.map((institute, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#1F7A8C] rounded-xl flex items-center justify-center">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-[#022B3A]">{institute.name}</CardTitle>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium">{institute.rating}</span>
                          <span className="text-sm text-gray-600 ml-2">
                            ({Math.floor(Math.random() * 200 + 50)} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Events</p>
                        <p className="text-xl font-bold text-[#1F7A8C]">{institute.events}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Students</p>
                        <p className="text-xl font-bold text-[#022B3A]">{institute.students.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">Revenue Generated</p>
                      <p className="text-lg font-bold text-green-600">{institute.revenue}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E1E5F2]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-[#022B3A]">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 text-lg">
                  Real-time insights and comprehensive platform management
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Last updated</p>
                  <p className="font-semibold text-[#1F7A8C]">2 minutes ago</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white border border-[#E1E5F2]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#E1E5F2] group-hover:bg-[#BFDBF7] transition-colors">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownLeft className="h-4 w-4 mr-1" />}
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold mb-1 group-hover:text-[#1F7A8C] transition-colors text-[#022B3A]">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="bg-white rounded-2xl p-2 shadow-inner border border-[#E1E5F2]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#1F7A8C] text-white shadow-md'
                      : 'text-[#022B3A] hover:bg-[#E1E5F2]'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E1E5F2]">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
