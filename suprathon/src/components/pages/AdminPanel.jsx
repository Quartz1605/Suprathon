import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Eye, Users, BookOpen, Calendar, Award, TrendingUp, BarChart3, Settings, Bell, Search, Filter, Download, Upload } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const AdminPanel = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const stats = [
    { label: 'Total Students', value: '45,230', change: '+12%', color: 'text-green-600' },
    { label: 'Active Courses', value: '125', change: '+5%', color: 'text-green-600' },
    { label: 'Live Events', value: '18', change: '+8%', color: 'text-green-600' },
    { label: 'Revenue', value: '₹12.5L', change: '+15%', color: 'text-green-600' }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Smith",
      students: 5000,
      rating: 4.8,
      status: "Active",
      revenue: "₹2.5L",
      lastUpdated: "2025-01-15"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Mark Wilson",
      students: 4200,
      rating: 4.7,
      status: "Active",
      revenue: "₹1.8L",
      lastUpdated: "2025-01-12"
    },
    {
      id: 3,
      title: "Python Data Analysis",
      instructor: "Alex Chen",
      students: 3800,
      rating: 4.9,
      status: "Draft",
      revenue: "₹1.2L",
      lastUpdated: "2025-01-10"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Future of AI in Education",
      date: "2025-07-25",
      time: "10:00 AM",
      attendees: 1250,
      maxAttendees: 2000,
      status: "Upcoming",
      type: "Webinar"
    },
    {
      id: 2,
      title: "Digital Marketing Workshop",
      date: "2025-07-26",
      time: "2:00 PM",
      attendees: 450,
      maxAttendees: 500,
      status: "Upcoming",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Career Guidance Seminar",
      date: "2025-07-20",
      time: "11:00 AM",
      attendees: 890,
      maxAttendees: 1000,
      status: "Completed",
      type: "Seminar"
    }
  ];

  const students = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      courses: 3,
      events: 5,
      joinDate: "2024-12-15",
      status: "Active"
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@example.com",
      courses: 2,
      events: 3,
      joinDate: "2025-01-05",
      status: "Active"
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily@example.com",
      courses: 4,
      events: 7,
      joinDate: "2024-11-20",
      status: "Inactive"
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#1F7A8C] mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-[#022B3A]">{stat.value}</p>
                  <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                </div>
                <TrendingUp className="w-8 h-8 text-[#1F7A8C]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Course Enrollments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.slice(0, 3).map((course) => (
                <div key={course.id} className="flex items-center justify-between p-3 bg-[#E1E5F2] rounded-lg">
                  <div>
                    <p className="font-medium text-[#022B3A]">{course.title}</p>
                    <p className="text-sm text-[#1F7A8C]">{course.students} students</p>
                  </div>
                  <Badge variant={course.status === 'Active' ? 'success' : 'secondary'}>
                    {course.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.filter(e => e.status === 'Upcoming').map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 bg-[#BFDBF7] rounded-lg">
                  <div>
                    <p className="font-medium text-[#022B3A]">{event.title}</p>
                    <p className="text-sm text-[#1F7A8C]">{event.date} at {event.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#022B3A]">{event.attendees}/{event.maxAttendees}</p>
                    <p className="text-xs text-[#1F7A8C]">registered</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Input type="text" placeholder="Search courses..." className="w-64" />
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-[#022B3A]">{course.title}</h3>
                    <Badge variant={course.status === 'Active' ? 'success' : 'secondary'}>
                      {course.status}
                    </Badge>
                  </div>
                  <p className="text-[#1F7A8C] mb-4">Instructor: {course.instructor}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-[#1F7A8C]">Students</p>
                      <p className="font-semibold text-[#022B3A]">{course.students.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#1F7A8C]">Rating</p>
                      <p className="font-semibold text-[#022B3A]">{course.rating}⭐</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#1F7A8C]">Revenue</p>
                      <p className="font-semibold text-[#022B3A]">{course.revenue}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#1F7A8C]">Last Updated</p>
                      <p className="font-semibold text-[#022B3A]">{new Date(course.lastUpdated).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit3 className="w-4 h-4" />
                  </Button>
                  <Button variant="danger" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Input type="text" placeholder="Search events..." className="w-64" />
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-[#022B3A]">{event.title}</h3>
                    <Badge variant={event.status === 'Upcoming' ? 'secondary' : event.status === 'Completed' ? 'success' : 'warning'}>
                      {event.status}
                    </Badge>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-[#1F7A8C]">Date</p>
                      <p className="font-semibold text-[#022B3A]">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#1F7A8C]">Time</p>
                      <p className="font-semibold text-[#022B3A]">{event.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#1F7A8C]">Attendees</p>
                      <p className="font-semibold text-[#022B3A]">{event.attendees}/{event.maxAttendees}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#1F7A8C]">Fill Rate</p>
                      <p className="font-semibold text-[#022B3A]">{Math.round((event.attendees / event.maxAttendees) * 100)}%</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit3 className="w-4 h-4" />
                  </Button>
                  <Button variant="danger" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Input type="text" placeholder="Search students..." className="w-64" />
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#E1E5F2]">
                <tr>
                  <th className="text-left p-4 font-semibold text-[#022B3A]">Student</th>
                  <th className="text-left p-4 font-semibold text-[#022B3A]">Email</th>
                  <th className="text-left p-4 font-semibold text-[#022B3A]">Courses</th>
                  <th className="text-left p-4 font-semibold text-[#022B3A]">Events</th>
                  <th className="text-left p-4 font-semibold text-[#022B3A]">Join Date</th>
                  <th className="text-left p-4 font-semibold text-[#022B3A]">Status</th>
                  <th className="text-left p-4 font-semibold text-[#022B3A]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-[#E1E5F2]">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#1F7A8C] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {student.name[0]}
                        </div>
                        <span className="font-medium text-[#022B3A]">{student.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#1F7A8C]">{student.email}</td>
                    <td className="p-4 text-[#022B3A]">{student.courses}</td>
                    <td className="p-4 text-[#022B3A]">{student.events}</td>
                    <td className="p-4 text-[#022B3A]">{new Date(student.joinDate).toLocaleDateString()}</td>
                    <td className="p-4">
                      <Badge variant={student.status === 'Active' ? 'success' : 'secondary'}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit3 className="w-3 h-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-[#E1E5F2] rounded-lg flex items-center justify-center">
              <p className="text-[#1F7A8C]">Revenue Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Student Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-[#BFDBF7] rounded-lg flex items-center justify-center">
              <p className="text-[#1F7A8C]">Growth Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Popular Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div key={course.id} className="flex items-center justify-between p-3 bg-[#E1E5F2] rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#1F7A8C] rounded-full flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-[#022B3A]">{course.title}</p>
                    <p className="text-sm text-[#1F7A8C]">{course.students} students</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#022B3A]">{course.revenue}</p>
                  <p className="text-sm text-[#1F7A8C]">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Platform Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#022B3A] mb-2">Platform Name</label>
            <Input type="text" defaultValue="EduConnect Pro" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#022B3A] mb-2">Contact Email</label>
            <Input type="email" defaultValue="admin@educonnect.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#022B3A] mb-2">Support Phone</label>
            <Input type="tel" defaultValue="+91 98765 43210" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[#022B3A]">Auto-approve new institutes</p>
              <p className="text-sm text-[#1F7A8C]">Automatically approve new institute registrations</p>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[#022B3A]">Email notifications</p>
              <p className="text-sm text-[#1F7A8C]">Send email notifications for important events</p>
            </div>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button>Save Changes</Button>
        <Button variant="outline">Reset to Defaults</Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#022B3A] mb-4">Admin Dashboard</h1>
          <p className="text-xl text-[#1F7A8C]">Manage your educational platform</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#E1E5F2] pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#1F7A8C] text-white'
                    : 'bg-white text-[#022B3A] hover:bg-[#E1E5F2]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'courses' && renderCourses()}
          {activeTab === 'events' && renderEvents()}
          {activeTab === 'students' && renderStudents()}
          {activeTab === 'analytics' && renderAnalytics()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
