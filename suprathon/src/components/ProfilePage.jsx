import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  Settings, 
  Edit3, 
  Camera, 
  Save, 
  X,
  Bell,
  Shield,
  Heart,
  Star,
  TrendingUp,
  Download,
  Share2,
  Link,
  Github,
  Linkedin,
  Twitter,
  Globe
} from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer passionate about creating innovative solutions. Love learning new technologies and sharing knowledge with the community.',
    joinDate: 'January 2024',
    institution: 'Stanford University',
    role: 'Student',
    skills: ['React', 'Node.js', 'Python', 'MongoDB', 'TypeScript'],
    socialLinks: {
      github: 'https://github.com/alexjohnson',
      linkedin: 'https://linkedin.com/in/alexjohnson',
      twitter: 'https://twitter.com/alexjohnson',
      website: 'https://alexjohnson.dev'
    }
  });

  const [stats] = useState({
    coursesCompleted: 12,
    eventsAttended: 8,
    certificatesEarned: 5,
    hoursLearned: 150
  });

  const [courses] = useState([
    { id: 1, name: 'Advanced React Development', progress: 85, instructor: 'Dr. Sarah Wilson' },
    { id: 2, name: 'Machine Learning Fundamentals', progress: 60, instructor: 'Prof. Mike Chen' },
    { id: 3, name: 'Web Design Principles', progress: 100, instructor: 'Lisa Rodriguez' }
  ]);

  const [achievements] = useState([
    { id: 1, name: 'Course Completion Master', icon: '🎓', date: '2024-01-15' },
    { id: 2, name: 'Event Enthusiast', icon: '🎪', date: '2024-02-20' },
    { id: 3, name: 'Knowledge Seeker', icon: '📚', date: '2024-03-10' }
  ]);

  const [events] = useState([
    { id: 1, name: 'Web Development Workshop', date: '2025-07-25', time: '10:00 AM', location: 'Online', status: 'upcoming', organizer: 'TechCorp', description: 'Learn modern web development techniques' },
    { id: 2, name: 'AI & Machine Learning Summit', date: '2025-08-02', time: '2:00 PM', location: 'San Francisco, CA', status: 'upcoming', organizer: 'AI Institute', description: 'Explore the latest in AI and ML technologies' },
    { id: 3, name: 'React.js Masterclass', date: '2025-07-20', time: '9:00 AM', location: 'Online', status: 'completed', organizer: 'DevAcademy', description: 'Advanced React concepts and best practices' },
    { id: 4, name: 'Data Science Bootcamp', date: '2025-08-15', time: '1:00 PM', location: 'New York, NY', status: 'registered', organizer: 'DataLab', description: 'Comprehensive data science training program' }
  ]);

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    profileVisibility: true,
    showActivity: true
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Saving profile data:', profileData);
  };

  const handleSettingToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#022B3A' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10"></div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-white/5 to-transparent transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gradient-to-tr from-teal-400/10 to-transparent transform -translate-x-24 translate-y-24"></div>
        
        <div className="relative px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold text-white drop-shadow-lg tracking-tight">Profile</h1>
              <div className="flex items-center gap-4">
                <button className="p-3 rounded-xl bg-gradient-to-r from-white/15 to-white/5 hover:from-white/25 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg">
                  <Bell className="w-5 h-5 text-white" />
                </button>
                <button className="p-3 rounded-xl bg-gradient-to-r from-white/15 to-white/5 hover:from-white/25 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            
            {/* Profile Header */}
            <div className="flex items-start gap-8">
              <div className="relative">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-teal-400/30 via-blue-400/20 to-purple-400/30 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/90 to-white/70 flex items-center justify-center backdrop-blur-sm">
                    <User className="w-16 h-16 text-gray-600" />
                  </div>
                </div>
                <button className="absolute -bottom-2 -right-2 p-3 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Camera className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="text-4xl font-bold bg-white/15 text-white px-4 py-2 rounded-xl border border-white/30 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm tracking-tight"
                      style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
                    />
                  ) : (
                    <h2 className="text-4xl font-bold text-white drop-shadow-lg tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{profileData.name}</h2>
                  )}
                  <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className="p-3 rounded-xl bg-gradient-to-r from-white/15 to-white/5 hover:from-white/25 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {isEditing ? <Save className="w-5 h-5 text-white" /> : <Edit3 className="w-5 h-5 text-white" />}
                  </button>
                  {isEditing && (
                    <button
                      onClick={() => setIsEditing(false)}
                      className="p-3 rounded-xl bg-gradient-to-r from-red-500/20 to-red-600/10 hover:from-red-500/30 hover:to-red-600/20 transition-all duration-300 backdrop-blur-sm border border-red-400/30 shadow-lg"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  )}
                </div>
                
                <div className="flex items-center gap-6 mb-6 text-white/90">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <MapPin className="w-4 h-4 text-teal-300" />
                    <span className="font-medium">{profileData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <Calendar className="w-4 h-4 text-teal-300" />
                    <span className="font-medium">Joined {profileData.joinDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <a href={profileData.socialLinks.github} className="p-3 rounded-xl bg-gradient-to-r from-white/15 to-white/5 hover:from-white/25 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a href={profileData.socialLinks.linkedin} className="p-3 rounded-xl bg-gradient-to-r from-white/15 to-white/5 hover:from-white/25 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href={profileData.socialLinks.twitter} className="p-3 rounded-xl bg-gradient-to-r from-white/15 to-white/5 hover:from-white/25 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a href={profileData.socialLinks.website} className="p-3 rounded-xl bg-gradient-to-r from-white/15 to-white/5 hover:from-white/25 hover:to-white/15 transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Globe className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b-2 shadow-sm" style={{ borderColor: '#1F7A8C', backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-4 border-b-3 font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'border-current text-current shadow-lg'
                      : 'border-transparent hover:border-current/50 hover:bg-gray-50'
                  }`}
                  style={{ 
                    color: activeTab === tab.id ? '#1F7A8C' : '#022B3A',
                    borderColor: activeTab === tab.id ? '#1F7A8C' : 'transparent',
                    backgroundColor: activeTab === tab.id ? '#E6F7FF' : 'transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: activeTab === tab.id ? '600' : '500'
                  }}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stats Cards */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Courses Completed</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{stats.coursesCompleted}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Events Attended</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{stats.eventsAttended}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Certificates</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{stats.certificatesEarned}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Hours Learned</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{stats.hoursLearned}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>About</h3>
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="w-full p-4 rounded-xl border-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#BFDBF7', color: '#022B3A', fontFamily: 'Inter, sans-serif' }}
                    rows="4"
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{profileData.bio}</p>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-teal-50 border border-teal-100 shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{profileData.email}</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{profileData.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{profileData.location}</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-purple-50 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {profileData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-105 shadow-md"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>My Courses</h3>
              <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ fontFamily: 'Inter, sans-serif' }}>
                Browse More
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{course.name}</h4>
                  <p className="text-sm mb-4 text-gray-600 font-medium">by {course.instructor}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-600">Progress</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">{course.progress}%</span>
                    </div>
                    <div className="w-full rounded-full h-3 bg-gradient-to-r from-gray-200 to-gray-300 shadow-inner">
                      <div 
                        className="h-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 shadow-sm transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Continue
                    </button>
                    {course.progress === 100 && (
                      <button className="p-3 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <Download className="w-5 h-5 text-green-600" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>My Events</h3>
              <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ fontFamily: 'Inter, sans-serif' }}>
                Find Events
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <div key={event.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-purple-50 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-gray-800" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>{event.name}</h4>
                      <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{event.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.status === 'upcoming' 
                        ? 'bg-blue-100 text-blue-800' 
                        : event.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{event.date}</p>
                        <p className="text-xs text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{event.location}</p>
                        <p className="text-xs text-gray-600">by {event.organizer}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {event.status === 'upcoming' && (
                      <button className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Join Event
                      </button>
                    )}
                    {event.status === 'completed' && (
                      <button className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        View Certificate
                      </button>
                    )}
                    {event.status === 'registered' && (
                      <button className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        View Details
                      </button>
                    )}
                    <button className="p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Achievements</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="p-8 rounded-2xl text-center bg-gradient-to-br from-white to-purple-50 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-6xl mb-6 filter drop-shadow-lg">{achievement.icon}</div>
                  <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{achievement.name}</h4>
                  <p className="text-sm text-gray-600 font-medium bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full inline-block">Earned on {achievement.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Settings</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Notifications</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100">
                    <span className="text-gray-700 font-semibold">Email notifications</span>
                    <button 
                      onClick={() => handleSettingToggle('emailNotifications')}
                      className={`relative w-14 h-7 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${
                        settings.emailNotifications 
                          ? 'bg-gradient-to-r from-teal-500 to-blue-600' 
                          : 'bg-gradient-to-r from-gray-300 to-gray-400'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        settings.emailNotifications ? 'translate-x-7' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100">
                    <span className="text-gray-700 font-semibold">Push notifications</span>
                    <button 
                      onClick={() => handleSettingToggle('pushNotifications')}
                      className={`relative w-14 h-7 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${
                        settings.pushNotifications 
                          ? 'bg-gradient-to-r from-teal-500 to-blue-600' 
                          : 'bg-gradient-to-r from-gray-300 to-gray-400'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        settings.pushNotifications ? 'translate-x-7' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-purple-50 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Privacy</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
                    <span className="text-gray-700 font-semibold">Profile visibility</span>
                    <button 
                      onClick={() => handleSettingToggle('profileVisibility')}
                      className={`relative w-14 h-7 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${
                        settings.profileVisibility 
                          ? 'bg-gradient-to-r from-teal-500 to-blue-600' 
                          : 'bg-gradient-to-r from-gray-300 to-gray-400'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        settings.profileVisibility ? 'translate-x-7' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
                    <span className="text-gray-700 font-semibold">Show activity</span>
                    <button 
                      onClick={() => handleSettingToggle('showActivity')}
                      className={`relative w-14 h-7 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${
                        settings.showActivity 
                          ? 'bg-gradient-to-r from-teal-500 to-blue-600' 
                          : 'bg-gradient-to-r from-gray-300 to-gray-400'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        settings.showActivity ? 'translate-x-7' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
