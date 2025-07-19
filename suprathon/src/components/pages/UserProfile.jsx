import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit3, Camera, Settings, Bell, Star, Clock, ChevronRight, Download } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const UserProfile = ({ setCurrentPage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [userProfile, setUserProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, India',
    joinDate: '2024-01-15',
    bio: 'Passionate learner and technology enthusiast with a keen interest in web development and data science.',
    interests: ['Web Development', 'Data Science', 'Machine Learning', 'Digital Marketing'],
    avatar: null
  });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      provider: "TechAcademy Pro",
      progress: 75,
      status: "In Progress",
      enrollDate: "2025-01-10",
      completionDate: null,
      rating: null,
      certificateEarned: false
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      provider: "Marketing Institute",
      progress: 100,
      status: "Completed",
      enrollDate: "2024-12-01",
      completionDate: "2025-01-15",
      rating: 5,
      certificateEarned: true
    },
    {
      id: 3,
      title: "Python for Data Analysis",
      provider: "CodeMasters",
      progress: 45,
      status: "In Progress",
      enrollDate: "2025-01-05",
      completionDate: null,
      rating: null,
      certificateEarned: false
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "Digital Marketing Mastery",
      provider: "Marketing Institute",
      issueDate: "2025-01-15",
      credentialId: "DM-2025-001234",
      status: "Valid"
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      provider: "TechAcademy Pro",
      issueDate: "2024-11-20",
      credentialId: "JS-2024-005678",
      status: "Valid"
    }
  ];

  const registeredEvents = [
    {
      id: 1,
      title: "Future of AI in Education",
      provider: "TechEd Institute",
      date: "2025-07-25",
      time: "10:00 AM",
      status: "Upcoming",
      type: "Webinar"
    },
    {
      id: 2,
      title: "Digital Marketing Strategy Workshop",
      provider: "Marketing Pro Academy",
      date: "2025-07-26",
      time: "2:00 PM",
      status: "Upcoming",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Career Guidance for Tech Professionals",
      provider: "Career Counselors Hub",
      date: "2025-07-20",
      time: "11:00 AM",
      status: "Attended",
      type: "Seminar"
    }
  ];

  const handleInputChange = (field, value) => {
    setUserProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const getProgressColor = (progress) => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Profile Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <BookOpen className="w-8 h-8 text-[#1F7A8C] mx-auto mb-2" />
            <div className="text-2xl font-bold text-[#022B3A]">{enrolledCourses.length}</div>
            <div className="text-sm text-[#1F7A8C]">Courses Enrolled</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="w-8 h-8 text-[#1F7A8C] mx-auto mb-2" />
            <div className="text-2xl font-bold text-[#022B3A]">{certificates.length}</div>
            <div className="text-sm text-[#1F7A8C]">Certificates Earned</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-[#1F7A8C] mx-auto mb-2" />
            <div className="text-2xl font-bold text-[#022B3A]">{registeredEvents.length}</div>
            <div className="text-sm text-[#1F7A8C]">Events Attended</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="w-8 h-8 text-[#1F7A8C] mx-auto mb-2" />
            <div className="text-2xl font-bold text-[#022B3A]">4.8</div>
            <div className="text-sm text-[#1F7A8C]">Avg. Rating Given</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-[#E1E5F2] rounded-lg">
              <Award className="w-6 h-6 text-[#1F7A8C]" />
              <div className="flex-1">
                <div className="font-medium text-[#022B3A]">Completed Digital Marketing Mastery</div>
                <div className="text-sm text-[#1F7A8C]">Earned certificate • 2 days ago</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-[#E1E5F2] rounded-lg">
              <BookOpen className="w-6 h-6 text-[#1F7A8C]" />
              <div className="flex-1">
                <div className="font-medium text-[#022B3A]">Started Python for Data Analysis</div>
                <div className="text-sm text-[#1F7A8C]">Enrolled in course • 5 days ago</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-[#E1E5F2] rounded-lg">
              <Calendar className="w-6 h-6 text-[#1F7A8C]" />
              <div className="flex-1">
                <div className="font-medium text-[#022B3A]">Registered for AI in Education Webinar</div>
                <div className="text-sm text-[#1F7A8C]">Event registration • 1 week ago</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      {enrolledCourses.map((course) => (
        <Card key={course.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#022B3A] mb-2">{course.title}</h3>
                <p className="text-[#1F7A8C] mb-2">{course.provider}</p>
                <div className="flex items-center gap-4 text-sm text-[#1F7A8C]">
                  <span>Enrolled: {new Date(course.enrollDate).toLocaleDateString()}</span>
                  {course.completionDate && (
                    <span>Completed: {new Date(course.completionDate).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
              <Badge variant={course.status === 'Completed' ? 'success' : 'secondary'}>
                {course.status}
              </Badge>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[#1F7A8C]">Progress</span>
                <span className="text-sm font-medium text-[#022B3A]">{course.progress}%</span>
              </div>
              <div className="w-full bg-[#E1E5F2] rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {course.certificateEarned && (
                  <Badge variant="warning" className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Certificate Earned
                  </Badge>
                )}
                {course.rating && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {course.rating}/5
                  </Badge>
                )}
              </div>
              <Button size="sm" variant="outline">
                {course.status === 'Completed' ? 'Review' : 'Continue'}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCertificates = () => (
    <div className="space-y-6">
      {certificates.map((certificate) => (
        <Card key={certificate.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#1F7A8C] rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#022B3A] mb-1">{certificate.title}</h3>
                  <p className="text-[#1F7A8C] mb-2">{certificate.provider}</p>
                  <div className="space-y-1 text-sm text-[#1F7A8C]">
                    <div>Issued: {new Date(certificate.issueDate).toLocaleDateString()}</div>
                    <div>Credential ID: {certificate.credentialId}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Badge variant="success">{certificate.status}</Badge>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  Download
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      {registeredEvents.map((event) => (
        <Card key={event.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#022B3A] mb-2">{event.title}</h3>
                <p className="text-[#1F7A8C] mb-2">{event.provider}</p>
                <div className="flex items-center gap-4 text-sm text-[#1F7A8C]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
              </div>
              <Badge variant={event.status === 'Attended' ? 'success' : 'secondary'}>
                {event.status}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account preferences and privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-[#022B3A]">Email Notifications</div>
              <div className="text-sm text-[#1F7A8C]">Receive notifications about course updates and events</div>
            </div>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-[#022B3A]">Marketing Emails</div>
              <div className="text-sm text-[#1F7A8C]">Receive promotional emails and course recommendations</div>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-[#022B3A]">Profile Visibility</div>
              <div className="text-sm text-[#1F7A8C]">Allow other users to see your profile and achievements</div>
            </div>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="danger" className="w-full">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-[#1F7A8C] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {userProfile.firstName[0]}{userProfile.lastName[0]}
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-[#022B3A] rounded-full text-white hover:bg-[#022B3A]/90 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        value={userProfile.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                      <Input
                        placeholder="Last Name"
                        value={userProfile.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                    </div>
                    <Input
                      placeholder="Email"
                      value={userProfile.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    <Input
                      placeholder="Phone"
                      value={userProfile.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                    <Input
                      placeholder="Location"
                      value={userProfile.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                    <textarea
                      className="w-full p-3 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none resize-none"
                      rows="3"
                      placeholder="Bio"
                      value={userProfile.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                    />
                    <div className="flex gap-2">
                      <Button onClick={handleSave}>Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h1 className="text-3xl font-bold text-[#022B3A]">
                        {userProfile.firstName} {userProfile.lastName}
                      </h1>
                      <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                    
                    <div className="space-y-2 text-[#1F7A8C] mb-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {userProfile.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {userProfile.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {userProfile.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Member since {new Date(userProfile.joinDate).toLocaleDateString()}
                      </div>
                    </div>

                    <p className="text-[#022B3A] mb-4">{userProfile.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {userProfile.interests.map((interest, index) => (
                        <Badge key={index} variant="outline">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
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
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'courses' && renderCourses()}
          {activeTab === 'certificates' && renderCertificates()}
          {activeTab === 'events' && renderEvents()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
