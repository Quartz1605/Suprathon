import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit3, Camera, Settings, Bell, Star, Clock, ChevronRight, Download, GraduationCap, Building2, Linkedin, Twitter, Github, Globe, Instagram, Facebook, TrendingUp, Target, Activity, Users, MessageSquare, Shield, Palette, Moon, Sun, CheckCircle, Eye, Share2 } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const UserProfile = ({ setCurrentPage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [userProfile, setUserProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, India',
    joinDate: '2024-01-15',
    bio: 'Passionate learner and technology enthusiast with a keen interest in web development and data science. Currently working on innovative projects that bridge the gap between technology and real-world solutions.',
    interests: ['Web Development', 'Data Science', 'Machine Learning', 'Digital Marketing', 'UI/UX Design', 'Cloud Computing'],
    skills: [
      { name: 'JavaScript', level: 90, category: 'Programming' },
      { name: 'Python', level: 85, category: 'Programming' },
      { name: 'React', level: 88, category: 'Frontend' },
      { name: 'Node.js', level: 80, category: 'Backend' },
      { name: 'Data Analysis', level: 75, category: 'Analytics' },
      { name: 'UI/UX Design', level: 70, category: 'Design' },
      { name: 'Digital Marketing', level: 90, category: 'Marketing' },
      { name: 'Project Management', level: 85, category: 'Management' }
    ],
    experience: [
      {
        company: 'Tech Innovations Pvt Ltd',
        position: 'Full Stack Developer Intern',
        duration: 'Jun 2023 - Dec 2023',
        description: 'Developed responsive web applications using React and Node.js'
      },
      {
        company: 'Digital Marketing Agency',
        position: 'Marketing Intern',
        duration: 'Jan 2023 - May 2023',
        description: 'Managed social media campaigns and analyzed digital marketing metrics'
      }
    ],
    avatar: null,
    // Education Information
    collegeName: 'Indian Institute of Technology, Mumbai',
    degree: 'Bachelor of Technology',
    fieldOfStudy: 'Computer Science and Engineering',
    graduationYear: '2023',
    currentYear: '4th Year',
    gpa: '8.5/10',
    // Social Links
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
      website: 'https://johndoe.dev',
      instagram: '',
      facebook: ''
    }
  });

  const tabs = [
    { id: 'profile', label: 'About Me', icon: User, description: 'Personal information and background' },
    { id: 'overview', label: 'Dashboard', icon: Activity, description: 'Overview of your learning journey' },
    { id: 'courses', label: 'My Courses', icon: BookOpen, description: 'Manage your enrolled courses' },
    { id: 'certificates', label: 'Certificates', icon: Award, description: 'View your achievements' },
    { id: 'events', label: 'Events', icon: Calendar, description: 'Upcoming and past events' },
    { id: 'social', label: 'Social Links', icon: Globe, description: 'Manage your social presence' },
    { id: 'achievements', label: 'Achievements', icon: Target, description: 'Badges and milestones' },
    { id: 'activity', label: 'Activity', icon: TrendingUp, description: 'Your learning activity' },
    { id: 'settings', label: 'Settings', icon: Settings, description: 'Account preferences' }
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
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setUserProfile(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setUserProfile(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const renderProfile = () => (
    <div className="space-y-8">
      {/* Personal Information Header */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-start gap-8">
            {/* Avatar Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  {userProfile.firstName[0]}{userProfile.lastName[0]}
                </div>
                <button className="absolute bottom-2 right-2 p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors shadow-lg">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {userProfile.firstName} {userProfile.lastName}
                  </h1>
                  <p className="text-xl text-blue-700 font-semibold">{userProfile.degree}</p>
                  <p className="text-lg text-gray-600">{userProfile.fieldOfStudy}</p>
                </div>
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{userProfile.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{userProfile.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{userProfile.location}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{userProfile.collegeName}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">Class of {userProfile.graduationYear}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">GPA: {userProfile.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About Me Section */}
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <User className="w-7 h-7 text-blue-600" />
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{userProfile.bio}</p>
          
          {/* Interests */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {userProfile.interests.map((interest, index) => (
                <Badge key={index} className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium border border-blue-200">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-200">
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <Target className="w-7 h-7 text-purple-600" />
            Skills & Expertise
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userProfile.skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-gray-900 text-lg">{skill.name}</span>
                    <Badge className="ml-3 bg-gray-100 text-gray-700 text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <span className="font-bold text-2xl text-purple-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                      skill.level >= 85 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                      skill.level >= 70 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                      skill.level >= 50 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                      'bg-gradient-to-r from-red-400 to-red-600'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {skill.level >= 85 ? 'Expert Level' : 
                   skill.level >= 70 ? 'Advanced' : 
                   skill.level >= 50 ? 'Intermediate' : 
                   'Beginner'}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <Building2 className="w-7 h-7 text-green-600" />
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            {userProfile.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-6 pb-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-lg font-semibold text-green-700">{exp.company}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 font-medium">
                      {exp.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Education Details */}
      <Card className="bg-white border-2 border-gray-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-200">
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <GraduationCap className="w-7 h-7 text-indigo-600" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{userProfile.degree}</h3>
                <p className="text-lg font-semibold text-indigo-700 mb-4">{userProfile.fieldOfStudy}</p>
                <p className="text-gray-700 font-medium">{userProfile.collegeName}</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-indigo-200">
                  <span className="font-medium text-gray-700">Graduation Year</span>
                  <span className="font-bold text-indigo-700">{userProfile.graduationYear}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-indigo-200">
                  <span className="font-medium text-gray-700">Current GPA</span>
                  <span className="font-bold text-indigo-700">{userProfile.gpa}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-indigo-200">
                  <span className="font-medium text-gray-700">Current Year</span>
                  <span className="font-bold text-indigo-700">{userProfile.currentYear}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Enhanced Profile Stats with Subtle Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="bg-gradient-to-br from-cyan-50 to-blue-100 border-2 border-cyan-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-15 transform -translate-x-2 translate-y-2"></div>
            <BookOpen className="w-16 h-16 text-blue-700 mx-auto mb-4 drop-shadow-sm" />
            <div className="text-5xl font-black text-blue-900 mb-2">{enrolledCourses.length}</div>
            <div className="text-lg font-bold text-blue-800">Courses Enrolled</div>
            <div className="text-sm text-blue-700 mt-2 font-bold bg-blue-100 rounded-full px-3 py-1 shadow-sm">
              {enrolledCourses.filter(c => c.status === 'Completed').length} completed
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-green-200 to-teal-300 rounded-full opacity-15 transform -translate-x-2 translate-y-2"></div>
            <Award className="w-16 h-16 text-emerald-700 mx-auto mb-4 drop-shadow-sm" />
            <div className="text-5xl font-black text-emerald-900 mb-2">{certificates.length}</div>
            <div className="text-lg font-bold text-emerald-800">Certificates Earned</div>
            <div className="text-sm text-emerald-700 mt-2 font-bold bg-emerald-100 rounded-full px-3 py-1 shadow-sm">
              100% verified
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-300 to-violet-400 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-violet-200 to-fuchsia-300 rounded-full opacity-15 transform -translate-x-2 translate-y-2"></div>
            <Calendar className="w-16 h-16 text-purple-700 mx-auto mb-4 drop-shadow-sm" />
            <div className="text-5xl font-black text-purple-900 mb-2">{registeredEvents.length}</div>
            <div className="text-lg font-bold text-purple-800">Events Registered</div>
            <div className="text-sm text-purple-700 mt-2 font-bold bg-purple-100 rounded-full px-3 py-1 shadow-sm">
              {registeredEvents.filter(e => e.status === 'Attended').length} attended
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-orange-200 to-red-300 rounded-full opacity-15 transform -translate-x-2 translate-y-2"></div>
            <Star className="w-16 h-16 text-amber-700 mx-auto mb-4 drop-shadow-sm" />
            <div className="text-5xl font-black text-amber-900 mb-2">4.8</div>
            <div className="text-lg font-bold text-amber-800">Avg. Rating Given</div>
            <div className="text-sm text-amber-700 mt-2 font-bold bg-amber-100 rounded-full px-3 py-1 shadow-sm">
              From {enrolledCourses.filter(c => c.rating).length} reviews
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Learning Progress Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-violet-50 to-purple-100 border-2 border-violet-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-t-lg shadow-md">
            <CardTitle className="flex items-center gap-3 font-bold text-xl">
              <TrendingUp className="w-8 h-8 text-white" />
              <span className="text-white">Learning Progress Analytics</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            <div className="space-y-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-900 text-lg">{course.title}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-2xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        {course.progress}%
                      </span>
                      <div className={`w-4 h-4 rounded-full ${
                        course.progress >= 90 ? 'bg-emerald-500' :
                        course.progress >= 70 ? 'bg-blue-500' :
                        course.progress >= 50 ? 'bg-amber-500' :
                        'bg-red-500'
                      } shadow-sm`}></div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6 shadow-inner mb-4">
                    <div
                      className={`h-6 rounded-full shadow-md transition-all duration-1000 ease-out ${
                        course.progress >= 90 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' :
                        course.progress >= 70 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                        course.progress >= 50 ? 'bg-gradient-to-r from-amber-400 to-amber-600' :
                        'bg-gradient-to-r from-red-400 to-red-600'
                      }`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-bold text-sm">{course.provider}</span>
                    <Badge className={`font-bold px-4 py-2 text-sm shadow-sm ${
                      course.status === 'Completed' ? 'bg-emerald-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {course.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Skills Visualization */}
        <Card className="bg-gradient-to-br from-cyan-50 to-blue-100 border-2 border-cyan-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg shadow-md">
            <CardTitle className="flex items-center gap-3 font-bold text-xl">
              <Target className="w-8 h-8 text-white" />
              <span className="text-white">Skills Mastery Dashboard</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            <div className="grid grid-cols-2 gap-6">
              {[
                { skill: 'Web Development', level: 85, color: '#FF6B35', bgColor: 'bg-orange-50', textColor: 'text-orange-800', borderColor: 'border-orange-200' },
                { skill: 'Data Science', level: 65, color: '#00D4AA', bgColor: 'bg-emerald-50', textColor: 'text-emerald-800', borderColor: 'border-emerald-200' },
                { skill: 'Digital Marketing', level: 90, color: '#8E44AD', bgColor: 'bg-purple-50', textColor: 'text-purple-800', borderColor: 'border-purple-200' },
                { skill: 'UI/UX Design', level: 70, color: '#E91E63', bgColor: 'bg-pink-50', textColor: 'text-pink-800', borderColor: 'border-pink-200' },
                { skill: 'Business Strategy', level: 55, color: '#FF9800', bgColor: 'bg-amber-50', textColor: 'text-amber-800', borderColor: 'border-amber-200' },
                { skill: 'Leadership', level: 75, color: '#2196F3', bgColor: 'bg-blue-50', textColor: 'text-blue-800', borderColor: 'border-blue-200' }
              ].map((skill, index) => (
                <div key={index} className={`text-center p-6 ${skill.bgColor} rounded-xl shadow-md border-2 ${skill.borderColor}`}>
                  <div className={`text-lg font-bold mb-4 ${skill.textColor}`}>{skill.skill}</div>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={skill.color}
                        strokeWidth="4"
                        strokeDasharray={`${skill.level}, 100`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-xl font-black ${skill.textColor}`}>{skill.level}%</span>
                    </div>
                  </div>
                  <div className={`text-sm font-bold ${skill.textColor} opacity-80`}>
                    {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Advanced' : skill.level >= 40 ? 'Intermediate' : 'Beginner'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Learning Analytics Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pie Chart for Course Categories */}
        <Card className="bg-gradient-to-br from-yellow-50 to-amber-100 border-2 border-yellow-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-t-lg shadow-md">
            <CardTitle className="flex items-center gap-3 font-bold text-lg">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-sm">📊</span>
              </div>
              <span className="text-white">Course Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 42 42">
                {/* Programming - 40% */}
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#FF6B35" strokeWidth="3" strokeDasharray="40 60" strokeDashoffset="0" />
                {/* Design - 30% */}
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#8E44AD" strokeWidth="3" strokeDasharray="30 70" strokeDashoffset="-40" />
                {/* Marketing - 30% */}
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#00D4AA" strokeWidth="3" strokeDasharray="30 70" strokeDashoffset="-70" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-md">
                  <div className="text-2xl font-black text-gray-800">{enrolledCourses.length}</div>
                  <div className="text-xs font-bold text-gray-600">Total</div>
                </div>
              </div>
            </div>
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-sm"></div>
                  <span className="font-bold text-gray-800">Programming</span>
                </div>
                <span className="font-black text-orange-600">40%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-purple-500 rounded-full shadow-sm"></div>
                  <span className="font-bold text-gray-800">Design</span>
                </div>
                <span className="font-black text-purple-600">30%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-sm"></div>
                  <span className="font-bold text-gray-800">Marketing</span>
                </div>
                <span className="font-black text-emerald-600">30%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Study Time Distribution */}
        <Card className="bg-gradient-to-br from-indigo-50 to-blue-100 border-2 border-indigo-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg shadow-md">
            <CardTitle className="flex items-center gap-3 font-bold text-lg">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">⏱️</span>
              </div>
              <span className="text-white">Study Time</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <div className="space-y-4">
              {[
                { period: 'Morning', hours: 45, color: 'from-yellow-400 to-orange-500', percentage: 35 },
                { period: 'Afternoon', hours: 52, color: 'from-blue-400 to-cyan-500', percentage: 40 },
                { period: 'Evening', hours: 30, color: 'from-purple-400 to-violet-500', percentage: 25 }
              ].map((time, index) => (
                <div key={index} className="space-y-2 bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">{time.period}</span>
                    <span className="font-black text-gray-900">{time.hours}h</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${time.color} shadow-md transition-all duration-1000 ease-out`}
                      style={{ width: `${time.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm font-bold text-gray-600">{time.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievement Breakdown */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg shadow-md">
            <CardTitle className="flex items-center gap-3 font-bold text-lg">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">🏆</span>
              </div>
              <span className="text-white">Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <div className="space-y-4">
              {[
                { type: 'Completed', count: 8, color: 'from-green-400 to-emerald-500', icon: '✅' },
                { type: 'In Progress', count: 3, color: 'from-blue-400 to-cyan-500', icon: '⏳' },
                { type: 'Badges', count: 12, color: 'from-yellow-400 to-orange-500', icon: '🎖️' },
                { type: 'Certificates', count: 5, color: 'from-purple-400 to-violet-500', icon: '📜' }
              ].map((achievement, index) => (
                <div key={index} className={`p-4 bg-gradient-to-r ${achievement.color} rounded-xl shadow-md text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <span className="font-bold">{achievement.type}</span>
                    </div>
                    <span className="text-3xl font-black">{achievement.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Weekly Performance Line Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-teal-50 to-cyan-100 border-2 border-teal-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-t-lg shadow-md">
            <CardTitle className="flex items-center gap-3 font-bold text-xl">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-teal-600 text-sm">📈</span>
              </div>
              <span className="text-white">Weekly Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14B8A6" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>
                
                {/* Grid lines */}
                <g stroke="#E5E7EB" strokeWidth="1" opacity="0.5">
                  {[40, 80, 120, 160].map(y => (
                    <line key={y} x1="40" y1={y} x2="360" y2={y} />
                  ))}
                  {[80, 120, 160, 200, 240, 280, 320].map(x => (
                    <line key={x} x1={x} y1="40" x2={x} y2="160" />
                  ))}
                </g>
                
                {/* Performance line */}
                <polyline
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  points="40,120 80,100 120,90 160,75 200,85 240,65 280,55 320,45 360,40"
                />
                
                {/* Data points */}
                {[
                  {x: 40, y: 120, value: 65},
                  {x: 80, y: 100, value: 72},
                  {x: 120, y: 90, value: 78},
                  {x: 160, y: 75, value: 85},
                  {x: 200, y: 85, value: 80},
                  {x: 240, y: 65, value: 88},
                  {x: 280, y: 55, value: 92},
                  {x: 320, y: 45, value: 95},
                  {x: 360, y: 40, value: 98}
                ].map((point, index) => (
                  <g key={index}>
                    <circle cx={point.x} cy={point.y} r="4" fill="#14B8A6" stroke="white" strokeWidth="2" />
                    <text x={point.x} y={point.y-10} textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">
                      {point.value}%
                    </text>
                  </g>
                ))}
                
                {/* X-axis labels */}
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <text key={day} x={80 + index * 40} y="180" textAnchor="middle" fontSize="12" fill="#6B7280" fontWeight="bold">
                    {day}
                  </text>
                ))}
              </svg>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center bg-teal-50 p-3 rounded-lg border border-teal-200">
                <div className="text-2xl font-black text-teal-700">📊</div>
                <div className="text-sm font-bold text-teal-600">Avg Score</div>
                <div className="text-xl font-black text-teal-800">82%</div>
              </div>
              <div className="text-center bg-cyan-50 p-3 rounded-lg border border-cyan-200">
                <div className="text-2xl font-black text-cyan-700">📈</div>
                <div className="text-sm font-bold text-cyan-600">Improvement</div>
                <div className="text-xl font-black text-cyan-800">+15%</div>
              </div>
              <div className="text-center bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="text-2xl font-black text-blue-700">🎯</div>
                <div className="text-sm font-bold text-blue-600">Best Day</div>
                <div className="text-xl font-black text-blue-800">Sun</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Study Hours Bar Chart */}
        <Card className="bg-gradient-to-br from-rose-50 to-pink-100 border-2 border-rose-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-t-lg shadow-md">
            <CardTitle className="flex items-center gap-3 font-bold text-xl">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-rose-600 text-sm">📊</span>
              </div>
              <span className="text-white">Monthly Study Hours</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F43F5E" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient id="barGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#D946EF" />
                  </linearGradient>
                </defs>
                
                {/* Grid lines */}
                <g stroke="#E5E7EB" strokeWidth="1" opacity="0.5">
                  {[40, 80, 120, 160].map(y => (
                    <line key={y} x1="40" y1={y} x2="360" y2={y} />
                  ))}
                </g>
                
                {/* Bars */}
                {[
                  {x: 60, height: 80, month: 'Jan', hours: 45},
                  {x: 100, height: 100, month: 'Feb', hours: 52},
                  {x: 140, height: 60, month: 'Mar', hours: 38},
                  {x: 180, height: 110, month: 'Apr', hours: 58},
                  {x: 220, height: 90, month: 'May', hours: 48},
                  {x: 260, height: 120, month: 'Jun', hours: 62},
                  {x: 300, height: 95, month: 'Jul', hours: 50}
                ].map((bar, index) => (
                  <g key={index}>
                    <rect
                      x={bar.x - 15}
                      y={160 - bar.height}
                      width="30"
                      height={bar.height}
                      fill={index % 2 === 0 ? "url(#barGradient1)" : "url(#barGradient2)"}
                      rx="4"
                      className="shadow-md"
                    />
                    <text x={bar.x} y={150 - bar.height} textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
                      {bar.hours}h
                    </text>
                    <text x={bar.x} y="180" textAnchor="middle" fontSize="12" fill="#6B7280" fontWeight="bold">
                      {bar.month}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center bg-rose-50 p-3 rounded-lg border border-rose-200">
                <div className="text-2xl font-black text-rose-700">⏰</div>
                <div className="text-sm font-bold text-rose-600">Total Hours</div>
                <div className="text-xl font-black text-rose-800">353h</div>
              </div>
              <div className="text-center bg-pink-50 p-3 rounded-lg border border-pink-200">
                <div className="text-2xl font-black text-pink-700">📈</div>
                <div className="text-sm font-bold text-pink-600">Best Month</div>
                <div className="text-xl font-black text-pink-800">Jun</div>
              </div>
              <div className="text-center bg-purple-50 p-3 rounded-lg border border-purple-200">
                <div className="text-2xl font-black text-purple-700">🎯</div>
                <div className="text-sm font-bold text-purple-600">Avg/Month</div>
                <div className="text-xl font-black text-purple-800">50h</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Performance Metrics with Visual Charts */}
      <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-2 border-emerald-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg shadow-md">
          <CardTitle className="flex items-center gap-3 font-bold text-xl">
            <Activity className="w-8 h-8 text-white" />
            <span className="text-white">Performance Analytics Dashboard</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 bg-white">
          {/* Quick Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { label: 'Hours', value: '156', change: '+25.8%', color: 'from-orange-400 to-red-500', icon: '⏰' },
              { label: 'Courses', value: '3', change: '+50%', color: 'from-blue-400 to-cyan-500', icon: '📚' },
              { label: 'Avg Score', value: '87%', change: '+6.1%', color: 'from-green-400 to-emerald-500', icon: '🎯' },
              { label: 'Streak', value: '15', change: '+25%', color: 'from-purple-400 to-violet-500', icon: '🔥' },
              { label: 'Assignments', value: '12', change: '-20%', color: 'from-pink-400 to-rose-500', icon: '📝' }
            ].map((stat, index) => (
              <div key={index} className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-md text-white text-center`}>
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-black">{stat.value}</div>
                <div className="text-xs font-bold opacity-90">{stat.label}</div>
                <div className={`text-xs font-bold mt-1 px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-white/20' : 'bg-black/20'}`}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Performance Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-6 font-bold text-gray-800 text-lg border-b border-gray-300">📊 Metric</th>
                  <th className="text-center p-6 font-bold text-gray-800 text-lg border-b border-gray-300">📈 Current</th>
                  <th className="text-center p-6 font-bold text-gray-800 text-lg border-b border-gray-300">📉 Previous</th>
                  <th className="text-center p-6 font-bold text-gray-800 text-lg border-b border-gray-300">🚀 Growth</th>
                  <th className="text-center p-6 font-bold text-gray-800 text-lg border-b border-gray-300">📊 Trend</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Hours Studied', current: '156', previous: '124', growth: '+25.8%', trend: 'up', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
                  { metric: 'Courses Completed', current: '3', previous: '2', growth: '+50%', trend: 'up', color: 'text-blue-600', bgColor: 'bg-blue-50' },
                  { metric: 'Avg. Quiz Score', current: '87%', previous: '82%', growth: '+6.1%', trend: 'up', color: 'text-purple-600', bgColor: 'bg-purple-50' },
                  { metric: 'Study Streak', current: '15 days', previous: '12 days', growth: '+25%', trend: 'up', color: 'text-orange-600', bgColor: 'bg-orange-50' },
                  { metric: 'Assignments Submitted', current: '12', previous: '15', growth: '-20%', trend: 'down', color: 'text-red-600', bgColor: 'bg-red-50' }
                ].map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="p-6 font-bold text-gray-900 border-b border-gray-200 text-lg">{row.metric}</td>
                    <td className="p-6 text-center font-black text-gray-900 border-b border-gray-200 text-xl">{row.current}</td>
                    <td className="p-6 text-center font-semibold text-gray-600 border-b border-gray-200 text-lg">{row.previous}</td>
                    <td className={`p-6 text-center font-black border-b border-gray-200 text-lg ${row.color}`}>{row.growth}</td>
                    <td className="p-6 text-center border-b border-gray-200">
                      {row.trend === 'up' ? (
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 shadow-sm">
                          <TrendingUp className="w-5 h-5 mr-2" />
                          <span className="font-bold text-sm">Rising 📈</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 shadow-sm">
                          <TrendingUp className="w-5 h-5 mr-2 transform rotate-180" />
                          <span className="font-bold text-sm">Declining 📉</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Recent Activity with Subtle Colors */}
      <Card className="bg-gradient-to-br from-rose-50 to-pink-100 border-2 border-rose-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-t-lg shadow-md">
          <CardTitle className="flex items-center gap-3 font-bold text-xl">
            <Clock className="w-8 h-8 text-white" />
            <span className="text-white">Recent Learning Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 bg-white">
          <div className="space-y-6">
            {[
              { icon: Award, title: "Completed Digital Marketing Mastery", subtitle: "Earned certificate with 95% score", time: "2 days ago", color: "from-yellow-400 to-orange-500", bgColor: "bg-yellow-50", textColor: "text-orange-800", borderColor: "border-yellow-200", emoji: "🏆" },
              { icon: BookOpen, title: "Started Python for Data Analysis", subtitle: "Enrolled in advanced course", time: "5 days ago", color: "from-blue-400 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-800", borderColor: "border-blue-200", emoji: "📚" },
              { icon: Users, title: "Joined Study Group", subtitle: "Machine Learning Enthusiasts", time: "1 week ago", color: "from-purple-400 to-violet-500", bgColor: "bg-purple-50", textColor: "text-purple-800", borderColor: "border-purple-200", emoji: "👥" },
              { icon: Calendar, title: "Registered for AI Webinar", subtitle: "Future of AI in Education", time: "1 week ago", color: "from-green-400 to-emerald-500", bgColor: "bg-green-50", textColor: "text-green-800", borderColor: "border-green-200", emoji: "🎯" }
            ].map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className={`flex items-start gap-6 p-6 ${activity.bgColor} rounded-xl border-2 ${activity.borderColor} shadow-md`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center shadow-md relative`}>
                    <Icon className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute -top-1 -right-1 text-lg">{activity.emoji}</div>
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold text-xl mb-2 ${activity.textColor}`}>{activity.title}</div>
                    <div className="text-gray-700 font-semibold mb-2">{activity.subtitle}</div>
                    <div className="text-gray-600 text-sm font-bold flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                      {activity.time}
                    </div>
                  </div>
                  <div className="text-right">
                    <ChevronRight className={`w-6 h-6 ${activity.textColor}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-8">
      {/* Enhanced Course Statistics Dashboard with Subtle Colors */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Card className="bg-gradient-to-br from-cyan-50 to-blue-100 border-2 border-cyan-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-300 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-blue-300 rounded-full opacity-15 transform -translate-x-2 translate-y-2"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-black text-blue-900 mb-3">{enrolledCourses.length}</div>
            <div className="text-lg font-bold text-blue-800">Total Enrolled</div>
            <div className="text-sm text-blue-700 mt-3 font-bold bg-blue-100 rounded-full px-4 py-2 shadow-sm">
              Active Learning
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-300 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-green-300 rounded-full opacity-15 transform -translate-x-2 translate-y-2"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-black text-emerald-900 mb-3">
              {enrolledCourses.filter(c => c.status === 'Completed').length}
            </div>
            <div className="text-lg font-bold text-emerald-800">Completed</div>
            <div className="text-sm text-emerald-700 mt-3 font-bold bg-emerald-100 rounded-full px-4 py-2 shadow-sm">
              Achievement Unlocked
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-300 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-violet-300 rounded-full opacity-15 transform -translate-x-2 translate-y-2"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-black text-purple-900 mb-3">
              {Math.round(enrolledCourses.reduce((sum, c) => sum + c.progress, 0) / enrolledCourses.length)}%
            </div>
            <div className="text-lg font-bold text-purple-800">Avg Progress</div>
            <div className="text-sm text-purple-700 mt-3 font-bold bg-purple-100 rounded-full px-4 py-2 shadow-sm">
              Trending Up
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-300 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-orange-300 rounded-full opacity-15 transform -translate-x-2 translate-y-2"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-black text-amber-900 mb-3">127</div>
            <div className="text-lg font-bold text-amber-800">Hours Studied</div>
            <div className="text-sm text-amber-700 mt-3 font-bold bg-amber-100 rounded-full px-4 py-2 shadow-sm">
              Time Investment
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Course Cards with Subtle Styling and Improved Text Visibility */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {enrolledCourses.map((course) => (
          <Card key={course.id} className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
            <CardContent className="p-8 relative">
              {/* Subtle Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 rounded-2xl"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-100 rounded-full opacity-20"></div>
              
              {/* Status Badge with better visibility */}
              <div className="absolute top-6 right-6">
                <Badge className={`font-bold text-sm px-4 py-2 shadow-md border ${
                  course.status === 'Completed' ? 'bg-emerald-500 text-white border-emerald-600' :
                  course.status === 'In Progress' ? 'bg-blue-500 text-white border-blue-600' :
                  'bg-gray-500 text-white border-gray-600'
                }`}>
                  {course.status === 'Completed' ? '✅' : course.status === 'In Progress' ? '⏳' : '⏸️'} {course.status}
                </Badge>
              </div>

              {/* Course Header with White Background for Better Text Visibility */}
              <div className="relative z-10 mb-8 bg-white/90 p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-md ${
                    course.status === 'Completed' ? 'bg-emerald-500' :
                    course.status === 'In Progress' ? 'bg-blue-500' :
                    'bg-gray-500'
                  }`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{course.title}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="px-3 py-1 bg-indigo-100 rounded-full border border-indigo-200">
                        <p className="text-indigo-800 font-bold text-sm">{course.provider}</p>
                      </div>
                      {course.certificateEarned && (
                        <div className="px-3 py-1 bg-emerald-100 rounded-full border border-emerald-200">
                          <p className="text-emerald-800 font-bold text-sm">Certified</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="text-blue-600 font-bold mb-1">Enrolled</div>
                    <div className="text-blue-900 font-black text-base">{new Date(course.enrollDate).toLocaleDateString()}</div>
                  </div>
                  {course.completionDate ? (
                    <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                      <div className="text-emerald-600 font-bold mb-1">Completed</div>
                      <div className="text-emerald-900 font-black text-base">{new Date(course.completionDate).toLocaleDateString()}</div>
                    </div>
                  ) : (
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <div className="text-amber-600 font-bold mb-1">Duration</div>
                      <div className="text-amber-900 font-black text-base">{Math.ceil((Date.now() - new Date(course.enrollDate)) / (1000 * 60 * 60 * 24))} days</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="relative z-10 mb-8 bg-white/95 p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-gray-900 text-xl">Learning Progress</span>
                  <div className="text-right">
                    <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {course.progress}%
                    </div>
                    <div className="text-sm font-bold text-gray-600">Completion</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={course.progress >= 90 ? '#10B981' : course.progress >= 70 ? '#3B82F6' : course.progress >= 50 ? '#F59E0B' : '#EF4444'}
                        strokeWidth="4"
                        strokeDasharray={`${course.progress}, 100`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-black text-gray-800">{course.progress}%</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-6 shadow-inner mb-4">
                      <div
                        className={`h-6 rounded-full shadow-md transition-all duration-1000 ease-out ${
                          course.progress >= 90 ? 'bg-emerald-500' :
                          course.progress >= 70 ? 'bg-blue-500' :
                          course.progress >= 50 ? 'bg-amber-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-bold text-sm">
                        {course.progress >= 90 ? 'Expert Level' : 
                         course.progress >= 70 ? 'Advanced' : 
                         course.progress >= 50 ? 'Intermediate' : 
                         'Beginner'}
                      </span>
                      <span className="text-gray-600 font-bold text-sm">{100 - course.progress}% remaining</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Action Section */}
              <div className="flex justify-end items-center relative z-10 gap-3 bg-white/95 p-6 rounded-xl shadow-sm border border-gray-100">
                {course.rating && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-gray-700 text-sm">{course.rating}/5</span>
                  </div>
                )}
                <Button 
                  size="lg" 
                  className={`font-semibold px-8 py-3 text-base shadow-md transition-all duration-200 ${
                    course.status === 'Completed' 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {course.status === 'Completed' ? 'Review Course' : 'Continue Learning'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCertificates = () => (
    <div className="space-y-8">
      {/* Professional Certificate Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-blue-900 mb-3">{certificates.length}</div>
            <div className="text-lg font-semibold text-blue-800">Total Certificates</div>
            <div className="text-sm text-blue-700 mt-3 font-medium bg-blue-100 rounded-lg px-3 py-1">
              Professional Credentials
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-emerald-900 mb-3">100%</div>
            <div className="text-lg font-semibold text-emerald-800">Completion Rate</div>
            <div className="text-sm text-emerald-700 mt-3 font-medium bg-emerald-100 rounded-lg px-3 py-1">
              High Achievement
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-purple-900 mb-3">95</div>
            <div className="text-lg font-semibold text-purple-800">Average Score</div>
            <div className="text-sm text-purple-700 mt-3 font-medium bg-purple-100 rounded-lg px-3 py-1">
              Excellence Standard
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-50 to-slate-100 border-2 border-gray-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gray-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Download className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3">{certificates.length * 2}</div>
            <div className="text-lg font-semibold text-gray-800">Downloads</div>
            <div className="text-sm text-gray-700 mt-3 font-medium bg-gray-100 rounded-lg px-3 py-1">
              Digital Copies
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Professional Certificate Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {certificates.map((certificate, index) => (
          <Card key={certificate.id} className="bg-white border-2 border-gray-200 rounded-xl shadow-lg">
            <CardContent className="p-8 relative">
              {/* Subtle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 rounded-xl"></div>
              
              {/* Professional Header */}
              <div className="relative z-10 mb-8 bg-white/90 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${
                    index % 4 === 0 ? 'bg-blue-500' :
                    index % 4 === 1 ? 'bg-emerald-500' :
                    index % 4 === 2 ? 'bg-purple-500' :
                    'bg-gray-500'
                  } rounded-lg flex items-center justify-center shadow-md`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{certificate.title}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-indigo-100 rounded-lg border border-indigo-200">
                        <p className="text-indigo-800 font-semibold text-sm">{certificate.provider}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="relative z-10 mb-8 bg-white/90 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-blue-600 font-semibold mb-2 text-sm">Issue Date</div>
                    <div className="text-blue-900 font-bold text-lg">{new Date(certificate.issueDate).toLocaleDateString()}</div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="text-purple-600 font-semibold mb-2 text-sm">Credential ID</div>
                    <div className="text-purple-900 font-bold text-base">{certificate.credentialId}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end items-center relative z-10 gap-3 bg-white/90 p-6 rounded-lg shadow-sm border border-gray-100">
                <Button 
                  size="md"
                  variant="outline"
                  className="font-semibold px-4 py-2 shadow-sm bg-white hover:bg-gray-50 border border-gray-300 text-gray-700"
                  onClick={() => window.open(`/certificate-preview/${certificate.id}`, '_blank')}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button 
                  size="md"
                  className="font-semibold px-6 py-2 shadow-sm bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => {
                    // Create a download link for the certificate
                    const link = document.createElement('a');
                    link.href = `/api/certificates/${certificate.id}/download`;
                    link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  size="md"
                  variant="outline"
                  className="font-semibold px-4 py-2 shadow-sm bg-white hover:bg-gray-50 border border-gray-300 text-gray-700"
                  onClick={() => {
                    // Share functionality
                    if (navigator.share) {
                      navigator.share({
                        title: `${certificate.title} Certificate`,
                        text: `I've earned a certificate in ${certificate.title} from ${certificate.provider}!`,
                        url: window.location.href
                      });
                    } else {
                      // Fallback: copy to clipboard
                      navigator.clipboard.writeText(`I've earned a certificate in ${certificate.title} from ${certificate.provider}! View it at: ${window.location.href}`);
                      // You could show a toast notification here
                    }
                  }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-8">
      {/* Professional Event Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Card className="bg-gradient-to-br from-indigo-50 to-blue-100 border-2 border-indigo-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-indigo-900 mb-3">{registeredEvents.length}</div>
            <div className="text-lg font-semibold text-indigo-800">Total Events</div>
            <div className="text-sm text-indigo-700 mt-3 font-medium bg-indigo-100 rounded-lg px-3 py-1">
              Event Registrations
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-emerald-900 mb-3">
              {registeredEvents.filter(e => e.status === 'Attended').length}
            </div>
            <div className="text-lg font-semibold text-emerald-800">Attended</div>
            <div className="text-sm text-emerald-700 mt-3 font-medium bg-emerald-100 rounded-lg px-3 py-1">
              Successfully Completed
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-amber-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-amber-900 mb-3">
              {registeredEvents.filter(e => e.status === 'Upcoming').length}
            </div>
            <div className="text-lg font-semibold text-amber-800">Upcoming</div>
            <div className="text-sm text-amber-700 mt-3 font-medium bg-amber-100 rounded-lg px-3 py-1">
              Future Scheduled
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-200 shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-purple-900 mb-3">85</div>
            <div className="text-lg font-semibold text-purple-800">Attendance Rate</div>
            <div className="text-sm text-purple-700 mt-3 font-medium bg-purple-100 rounded-lg px-3 py-1">
              Excellent Performance
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Professional Event Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {registeredEvents.map((event) => (
          <Card key={event.id} className="bg-white border-2 border-gray-200 rounded-xl shadow-lg">
            <CardContent className="p-8 relative">
              {/* Subtle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 rounded-xl"></div>
              
              {/* Professional Status Badge */}
              <div className="absolute top-6 right-6 z-10">
                <Badge className={`font-semibold text-sm px-4 py-2 shadow-sm ${
                  event.status === 'Attended' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                  event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                  'bg-gray-100 text-gray-800 border border-gray-200'
                }`}>
                  {event.status}
                </Badge>
              </div>

              {/* Event Header */}
              <div className="relative z-10 mb-8 bg-white/90 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center shadow-md ${
                    event.type === 'Webinar' ? 'bg-blue-500' :
                    event.type === 'Workshop' ? 'bg-purple-500' :
                    event.type === 'Seminar' ? 'bg-emerald-500' :
                    'bg-gray-500'
                  }`}>
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{event.title}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-indigo-100 rounded-lg border border-indigo-200">
                        <p className="text-indigo-800 font-semibold text-sm">{event.provider}</p>
                      </div>
                      <Badge className={`font-semibold px-3 py-1 shadow-sm ${
                        event.type === 'Webinar' ? 'bg-blue-500 text-white' :
                        event.type === 'Workshop' ? 'bg-purple-500 text-white' :
                        event.type === 'Seminar' ? 'bg-emerald-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="relative z-10 mb-8 bg-white/90 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <div className="text-blue-600 font-semibold text-sm">Date</div>
                    </div>
                    <div className="text-blue-900 font-bold text-lg">{new Date(event.date).toLocaleDateString()}</div>
                    <div className="text-blue-700 font-medium text-xs mt-1">
                      {new Date(event.date) > new Date() ? 'Future Event' : 'Past Event'}
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <div className="text-purple-600 font-semibold text-sm">Time</div>
                    </div>
                    <div className="text-purple-900 font-bold text-lg">{event.time}</div>
                    <div className="text-purple-700 font-medium text-xs mt-1">Duration: 2-3 Hours</div>
                  </div>
                </div>
              </div>

              {/* Event Progress */}
              <div className="relative z-10 mb-8 bg-white/90 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-gray-900 text-lg">Event Status</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full shadow-sm ${
                      event.status === 'Attended' ? 'bg-emerald-500' :
                      event.status === 'Upcoming' ? 'bg-blue-500' :
                      'bg-gray-500'
                    }`}></div>
                    <span className="font-semibold text-gray-800">{event.status}</span>
                  </div>
                </div>
                
                {/* Status Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner mb-3">
                  <div className={`h-3 rounded-full relative overflow-hidden ${
                    event.status === 'Attended' ? 'bg-gradient-to-r from-emerald-400 to-emerald-600 w-full' :
                    event.status === 'Upcoming' ? 'bg-gradient-to-r from-blue-400 to-blue-600 w-3/4' :
                    'bg-gradient-to-r from-gray-400 to-gray-600 w-1/2'
                  }`}>
                  </div>
                </div>
                <div className="text-gray-700 font-medium text-sm">
                  {event.status === 'Attended' ? 'Successfully Completed - Certificate Available' :
                   event.status === 'Upcoming' ? 'Reminder Set - Calendar Updated' :
                   'Registration Confirmed'}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end items-center relative z-10 gap-3 bg-white/90 p-6 rounded-lg shadow-sm border border-gray-100">
                {event.status === 'Upcoming' && (
                  <Button 
                    size="md"
                    variant="outline"
                    className="font-semibold px-4 py-2 shadow-sm bg-white hover:bg-gray-50 border border-gray-300 text-gray-700"
                  >
                    Add to Calendar
                  </Button>
                )}
                <Button 
                  size="md"
                  className={`font-semibold px-6 py-2 shadow-sm text-white ${
                    event.status === 'Attended' ? 'bg-emerald-500 hover:bg-emerald-600' :
                    event.status === 'Upcoming' ? 'bg-blue-500 hover:bg-blue-600' :
                    'bg-gray-500 hover:bg-gray-600'
                  }`}
                >
                  {event.status === 'Attended' ? 'View Certificate' : 
                   event.status === 'Upcoming' ? 'Join Event' : 
                   'View Details'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
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

  const renderSocialLinks = () => {
    const socialPlatforms = [
      { 
        key: 'linkedin', 
        label: 'LinkedIn', 
        icon: Linkedin, 
        color: 'text-blue-600',
        bgColor: 'from-blue-50 to-indigo-50',
        borderColor: 'border-blue-200',
        placeholder: 'https://linkedin.com/in/username',
        description: 'Professional Network'
      },
      { 
        key: 'github', 
        label: 'GitHub', 
        icon: Github, 
        color: 'text-gray-800',
        bgColor: 'from-gray-50 to-slate-50',
        borderColor: 'border-gray-200',
        placeholder: 'https://github.com/username',
        description: 'Code Repository'
      },
      { 
        key: 'website', 
        label: 'Portfolio Website', 
        icon: Globe, 
        color: 'text-emerald-600',
        bgColor: 'from-emerald-50 to-green-50',
        borderColor: 'border-emerald-200',
        placeholder: 'https://yourportfolio.com',
        description: 'Personal Website'
      },
      { 
        key: 'twitter', 
        label: 'Twitter/X', 
        icon: Twitter, 
        color: 'text-slate-600',
        bgColor: 'from-slate-50 to-gray-50',
        borderColor: 'border-slate-200',
        placeholder: 'https://twitter.com/username',
        description: 'Professional Updates'
      }
    ];

    return (
      <div className="space-y-8">
        {/* Professional Social Links Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 shadow-lg">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-3">
                {Object.values(userProfile.socialLinks).filter(link => link).length}
              </div>
              <div className="text-lg font-semibold text-blue-800">Connected Platforms</div>
              <div className="text-sm text-blue-700 mt-3 font-medium bg-blue-100 rounded-lg px-3 py-1">
                Professional Links
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 shadow-lg">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-emerald-900 mb-3">2.5K</div>
              <div className="text-lg font-semibold text-emerald-800">Network Reach</div>
              <div className="text-sm text-emerald-700 mt-3 font-medium bg-emerald-100 rounded-lg px-3 py-1">
                Professional Network
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-200 shadow-lg">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-900 mb-3">89%</div>
              <div className="text-lg font-semibold text-purple-800">Profile Complete</div>
              <div className="text-sm text-purple-700 mt-3 font-medium bg-purple-100 rounded-lg px-3 py-1">
                Verification Status
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-200 shadow-lg">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-200 rounded-full opacity-20 transform translate-x-4 -translate-y-4"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-amber-900 mb-3">4.9</div>
              <div className="text-lg font-semibold text-amber-800">Professional Score</div>
              <div className="text-sm text-amber-700 mt-3 font-medium bg-amber-100 rounded-lg px-3 py-1">
                Industry Rating
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Social Links Management */}
        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-lg">
          <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-t-xl shadow-md">
            <CardTitle className="flex items-center gap-3 font-bold text-xl">
              <Globe className="w-8 h-8 text-white" />
              <span className="text-white">Professional Links</span>
            </CardTitle>
            <CardDescription className="text-gray-300 font-medium text-base mt-2">
              Connect and manage your professional online presence
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <div key={platform.key} className={`flex items-center gap-6 p-6 bg-gradient-to-r ${platform.bgColor} rounded-xl border-2 ${platform.borderColor} shadow-md`}>
                    <div className="flex items-center gap-4 w-64">
                      <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border ${platform.borderColor}`}>
                        <Icon className={`w-6 h-6 ${platform.color}`} />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">{platform.label}</span>
                        <div className="text-sm font-medium text-gray-600">{platform.description}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <Input
                        placeholder={platform.placeholder}
                        value={userProfile.socialLinks[platform.key]}
                        onChange={(e) => handleInputChange(`socialLinks.${platform.key}`, e.target.value)}
                        className="w-full text-base font-medium border-2 border-gray-200 shadow-sm focus:shadow-md transition-shadow bg-white"
                      />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {userProfile.socialLinks[platform.key] && (
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-sm"></div>
                          <span className="text-emerald-700 font-medium text-sm">Connected</span>
                        </div>
                      )}
                      {userProfile.socialLinks[platform.key] ? (
                        <a
                          href={userProfile.socialLinks[platform.key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:bg-blue-600"
                        >
                          <ChevronRight className="w-4 h-4" />
                          Visit
                        </a>
                      ) : (
                        <div className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium">
                          Not Connected
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Professional Profile Preview */}
        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-xl shadow-md">
            <CardTitle className="flex items-center gap-3 font-bold text-xl">
              <Eye className="w-8 h-8 text-white" />
              <span className="text-white">Public Profile Preview</span>
            </CardTitle>
            <CardDescription className="text-indigo-100 font-medium text-base mt-2">
              How your professional links appear to others
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                const link = userProfile.socialLinks[platform.key];
                if (!link) return null;
                
                return (
                  <a
                    key={platform.key}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 px-6 py-4 rounded-xl border-2 ${platform.borderColor} hover:shadow-md transition-all duration-200 bg-gradient-to-r ${platform.bgColor}`}
                  >
                    <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border ${platform.borderColor}`}>
                      <Icon className={`w-5 h-5 ${platform.color}`} />
                    </div>
                    <div className="flex-1">
                      <span className="text-base font-bold text-gray-900">{platform.label}</span>
                      <div className="text-sm font-medium text-gray-600">{platform.description}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
            {Object.values(userProfile.socialLinks).every(link => !link) && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Globe className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-gray-600 font-semibold text-lg">Add your professional links to see the preview</p>
                <p className="text-gray-500 font-medium text-sm mt-2">Connect your professional networks and showcase your online presence</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderAchievements = () => {
    const achievements = [
      {
        id: 1,
        title: "First Course Completed",
        description: "Completed your first course successfully",
        icon: BookOpen,
        earnedDate: "2025-01-15",
        rarity: "Common",
        color: "bg-gradient-to-br from-blue-400 to-blue-600",
        points: 100,
        category: "Learning"
      },
      {
        id: 2,
        title: "Certificate Collector",
        description: "Earned 5 certificates",
        icon: Award,
        earnedDate: "2025-01-10",
        rarity: "Rare",
        color: "bg-gradient-to-br from-purple-400 to-purple-600",
        points: 500,
        category: "Achievement"
      },
      {
        id: 3,
        title: "Social Butterfly",
        description: "Connected all social profiles",
        icon: Users,
        earnedDate: "2025-01-08",
        rarity: "Uncommon",
        color: "bg-gradient-to-br from-green-400 to-green-600",
        points: 250,
        category: "Social"
      },
      {
        id: 4,
        title: "Early Bird",
        description: "Completed 10 morning sessions",
        icon: Sun,
        earnedDate: "2025-01-05",
        rarity: "Epic",
        color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
        points: 750,
        category: "Dedication"
      },
      {
        id: 5,
        title: "Marathon Learner",
        description: "Studied for 50+ hours straight",
        icon: Target,
        earnedDate: "2025-01-03",
        rarity: "Legendary",
        color: "bg-gradient-to-br from-red-400 to-red-600",
        points: 1000,
        category: "Excellence"
      },
      {
        id: 6,
        title: "Night Owl",
        description: "Completed 15 midnight sessions",
        icon: Moon,
        earnedDate: "2025-01-01",
        rarity: "Epic",
        color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
        points: 750,
        category: "Dedication"
      }
    ];

    return (
      <div className="space-y-8">
        {/* Ultra-Enhanced Achievement Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-200 border-2 border-yellow-300 hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-3xl">
            <CardContent className="p-8 text-center relative z-10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30 transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-amber-300 to-red-400 rounded-full opacity-20 transform -translate-x-3 translate-y-3"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Award className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <div className="text-5xl font-black text-orange-900 mb-3 drop-shadow-lg">{achievements.length}</div>
              <div className="text-lg font-black text-orange-800 drop-shadow-sm">Total Achievements</div>
              <div className="text-sm text-orange-700 mt-3 font-bold bg-orange-100 rounded-full px-4 py-2 shadow-md">
                🏆 Unlocked
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-200 border-2 border-purple-300 hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-3xl">
            <CardContent className="p-8 text-center relative z-10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full opacity-30 transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-violet-300 to-fuchsia-400 rounded-full opacity-20 transform -translate-x-3 translate-y-3"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Star className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <div className="text-5xl font-black text-purple-900 mb-3 drop-shadow-lg">
                {achievements.filter(a => a.rarity === 'Epic' || a.rarity === 'Legendary').length}
              </div>
              <div className="text-lg font-black text-purple-800 drop-shadow-sm">Rare Achievements</div>
              <div className="text-sm text-purple-700 mt-3 font-bold bg-purple-100 rounded-full px-4 py-2 shadow-md">
                ✨ Legendary
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-green-100 to-teal-200 border-2 border-emerald-300 hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-3xl">
            <CardContent className="p-8 text-center relative z-10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-30 transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-green-300 to-teal-400 rounded-full opacity-20 transform -translate-x-3 translate-y-3"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <TrendingUp className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <div className="text-5xl font-black text-emerald-900 mb-3 drop-shadow-lg">
                {achievements.reduce((sum, a) => sum + a.points, 0)}
              </div>
              <div className="text-lg font-black text-emerald-800 drop-shadow-sm">Achievement Points</div>
              <div className="text-sm text-emerald-700 mt-3 font-bold bg-emerald-100 rounded-full px-4 py-2 shadow-md">
                🎯 Total Score
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200 border-2 border-cyan-300 hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-3xl">
            <CardContent className="p-8 text-center relative z-10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-20 transform -translate-x-3 translate-y-3"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Target className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <div className="text-5xl font-black text-blue-900 mb-3 drop-shadow-lg">#47</div>
              <div className="text-lg font-black text-blue-800 drop-shadow-sm">Global Rank</div>
              <div className="text-sm text-blue-700 mt-3 font-bold bg-blue-100 rounded-full px-4 py-2 shadow-md">
                🌍 Worldwide
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ultra-Enhanced Achievement Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <Card key={achievement.id} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 transform bg-white border-4 border-gray-200 hover:border-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-600 rounded-3xl shadow-xl">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Subtle Background Effects - reduced opacity for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/10 via-orange-50/10 to-red-50/10"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-300/5 to-orange-400/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-300/5 to-red-400/5 rounded-full blur-lg"></div>
                  
                  {/* Achievement Rarity Badge - better positioning */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className={`font-black text-xs px-4 py-2 shadow-2xl border-2 border-white transition-transform duration-300 hover:scale-110 ${
                      achievement.rarity === 'Legendary' ? 'bg-gradient-to-r from-red-500 via-pink-600 to-red-700 text-white' :
                      achievement.rarity === 'Epic' ? 'bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700 text-white' :
                      achievement.rarity === 'Rare' ? 'bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-700 text-white' :
                      achievement.rarity === 'Uncommon' ? 'bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 text-white' :
                      'bg-gradient-to-r from-gray-500 via-slate-600 to-gray-700 text-white'
                    }`}>
                      {achievement.rarity === 'Legendary' ? '💎' :
                       achievement.rarity === 'Epic' ? '⭐' :
                       achievement.rarity === 'Rare' ? '🔷' :
                       achievement.rarity === 'Uncommon' ? '🟢' : '⚪'} {achievement.rarity}
                    </Badge>
                  </div>

                  {/* Achievement Icon & Header - better contrast */}
                  <div className="relative z-10 mb-6">
                    <div className="text-center mb-6">
                      <div className={`w-24 h-24 ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-12 h-12 text-white drop-shadow-lg relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-xs">
                            {achievement.category === 'Learning' ? '📚' :
                             achievement.category === 'Achievement' ? '🏆' :
                             achievement.category === 'Social' ? '👥' :
                             achievement.category === 'Dedication' ? '💪' :
                             achievement.category === 'Excellence' ? '⭐' : '🎯'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Better text contrast with background */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                        <h3 className="text-xl font-black text-slate-900 mb-2">{achievement.title}</h3>
                        <p className="text-slate-700 font-bold text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Achievement Details - improved readability */}
                  <div className="relative z-10 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border-2 border-blue-200 shadow-lg">
                        <div className="text-blue-600 font-bold mb-1 text-xs">📅 Earned</div>
                        <div className="text-blue-900 font-black text-sm">{new Date(achievement.earnedDate).toLocaleDateString()}</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl border-2 border-purple-200 shadow-lg">
                        <div className="text-purple-600 font-bold mb-1 text-xs">🎯 Points</div>
                        <div className="text-purple-900 font-black text-sm">{achievement.points.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>

                  {/* Achievement Progress/Rarity Indicator - better visibility */}
                  <div className="relative z-10 mb-6">
                    <div className="bg-white p-4 rounded-xl border-2 border-emerald-200 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-black text-emerald-900 text-sm">🏷️ Category</span>
                        <div className="px-3 py-1 bg-emerald-100 rounded-full">
                          <span className="font-black text-emerald-800 text-xs">{achievement.category}</span>
                        </div>
                      </div>
                      
                      {/* Rarity Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner mb-2">
                        <div className={`h-3 rounded-full shadow-lg ${
                          achievement.rarity === 'Legendary' ? 'bg-gradient-to-r from-red-400 via-pink-500 to-red-600 w-full' :
                          achievement.rarity === 'Epic' ? 'bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 w-4/5' :
                          achievement.rarity === 'Rare' ? 'bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 w-3/5' :
                          achievement.rarity === 'Uncommon' ? 'bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 w-2/5' :
                          'bg-gradient-to-r from-gray-400 via-slate-500 to-gray-600 w-1/5'
                        }`}></div>
                      </div>
                      <div className="text-emerald-700 font-bold text-xs">✨ Achievement Unlocked</div>
                    </div>
                  </div>

                  {/* Achievement Actions - better spacing */}
                  <div className="flex justify-between items-center relative z-10 gap-3">
                    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-2 rounded-lg border-2 border-amber-200 shadow-lg">
                      <span className="font-black text-amber-800 text-xs">🌟 Featured</span>
                    </div>
                    
                    <Button 
                      size="sm"
                      className="font-black px-6 py-2 text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-700 hover:from-blue-600 hover:via-cyan-700 hover:to-blue-800 text-white border-2 border-white/20"
                    >
                      📋 View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Achievement Progress Analytics */}
        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-t-lg shadow-lg">
            <CardTitle className="flex items-center gap-3 font-black text-xl">
              <Activity className="w-8 h-8 drop-shadow-lg" />
              Achievement Progress Analytics Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Enhanced Pie Chart for Rarity Distribution */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-gray-100">
                  <h3 className="text-xl font-black text-slate-800 mb-6 text-center">🏆 Achievement Rarity Analysis</h3>
                  
                  {/* Circular Progress Chart */}
                  <div className="relative w-64 h-64 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="8"/>
                      
                      {/* Achievement rarity segments */}
                      {['Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'].map((rarity, index) => {
                        const count = achievements.filter(a => a.rarity === rarity).length;
                        const percentage = (count / achievements.length) * 100;
                        const colors = {
                          'Legendary': '#ef4444',
                          'Epic': '#8b5cf6', 
                          'Rare': '#06b6d4',
                          'Uncommon': '#10b981',
                          'Common': '#6b7280'
                        };
                        
                        const circumference = 2 * Math.PI * 40;
                        const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                        const rotation = index * (360 / 5);
                        
                        return count > 0 ? (
                          <circle
                            key={rarity}
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={colors[rarity]}
                            strokeWidth="8"
                            strokeDasharray={strokeDasharray}
                            strokeLinecap="round"
                            style={{ 
                              transformOrigin: '50px 50px',
                              transform: `rotate(${rotation}deg)`
                            }}
                            className="transition-all duration-1000 ease-out"
                          />
                        ) : null;
                      })}
                      
                      {/* Center text */}
                      <text x="50" y="45" textAnchor="middle" className="text-2xl font-black fill-slate-800" transform="rotate(90 50 50)">
                        {achievements.length}
                      </text>
                      <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-slate-600" transform="rotate(90 50 50)">
                        Total
                      </text>
                    </svg>
                  </div>

                  {/* Enhanced Legend with better spacing */}
                  <div className="space-y-3">
                    {['Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'].map((rarity, index) => {
                      const count = achievements.filter(a => a.rarity === rarity).length;
                      const percentage = (count / achievements.length) * 100;
                      const colors = {
                        'Legendary': 'bg-red-500',
                        'Epic': 'bg-purple-500', 
                        'Rare': 'bg-cyan-500',
                        'Uncommon': 'bg-emerald-500',
                        'Common': 'bg-gray-500'
                      };
                      
                      return (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full ${colors[rarity]} shadow-md`}></div>
                            <span className="font-bold text-slate-800 text-sm">{rarity}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-slate-900 text-lg">{count}</span>
                            <span className="text-sm font-bold text-slate-600 bg-white px-2 py-1 rounded-full">
                              {percentage.toFixed(0)}%
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Enhanced Bar Chart for Monthly Progress */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-gray-100">
                  <h3 className="text-xl font-black text-slate-800 mb-6 text-center">📈 Monthly Achievement Trends</h3>
                  
                  {/* Bar Chart */}
                  <div className="mb-6">
                    <div className="flex items-end justify-between h-48 bg-gradient-to-t from-gray-50 to-white p-4 rounded-xl border-2 border-gray-100">
                      {[
                        { month: 'Jan 2025', achievements: 6, points: achievements.reduce((sum, a) => sum + a.points, 0) },
                        { month: 'Dec 2024', achievements: 4, points: 800 },
                        { month: 'Nov 2024', achievements: 3, points: 400 }
                      ].map((month, index) => {
                        const maxAchievements = 6;
                        const height = (month.achievements / maxAchievements) * 100;
                        const colors = ['bg-gradient-to-t from-blue-400 to-blue-600', 'bg-gradient-to-t from-purple-400 to-purple-600', 'bg-gradient-to-t from-emerald-400 to-emerald-600'];
                        
                        return (
                          <div key={index} className="flex flex-col items-center gap-2 flex-1">
                            <div className="relative w-16 bg-gray-200 rounded-t-lg overflow-hidden shadow-md" style={{ height: '120px' }}>
                              <div 
                                className={`${colors[index]} w-full rounded-t-lg transition-all duration-2000 ease-out shadow-lg relative overflow-hidden`}
                                style={{ height: `${height}%`, marginTop: `${100 - height}%` }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/30"></div>
                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-black text-sm">
                                  {month.achievements}
                                </div>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs font-bold text-slate-800 whitespace-nowrap">{month.month}</div>
                              <div className="text-xs font-black text-blue-600">{month.points.toLocaleString()} pts</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Enhanced Statistics Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border-2 border-blue-200 text-center">
                      <div className="text-blue-600 font-bold text-xs mb-1">🏆 This Month</div>
                      <div className="text-blue-900 font-black text-xl">6</div>
                      <div className="text-blue-700 font-bold text-xs">Achievements</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border-2 border-purple-200 text-center">
                      <div className="text-purple-600 font-bold text-xs mb-1">⭐ Total Points</div>
                      <div className="text-purple-900 font-black text-xl">{achievements.reduce((sum, a) => sum + a.points, 0).toLocaleString()}</div>
                      <div className="text-purple-700 font-bold text-xs">Earned</div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border-2 border-emerald-200 text-center">
                      <div className="text-emerald-600 font-bold text-xs mb-1">📊 Average</div>
                      <div className="text-emerald-900 font-black text-xl">{Math.round(achievements.reduce((sum, a) => sum + a.points, 0) / achievements.length)}</div>
                      <div className="text-emerald-700 font-bold text-xs">Per Achievement</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    };

  const renderActivity = () => {
    const activityData = [
      { date: "2025-01-15", activity: "Completed Digital Marketing Mastery", type: "completion", icon: Award, points: 250 },
      { date: "2025-01-14", activity: "Started Python for Data Analysis", type: "enrollment", icon: BookOpen, points: 50 },
      { date: "2025-01-12", activity: "Earned Certificate in JavaScript", type: "certificate", icon: Award, points: 100 },
      { date: "2025-01-10", activity: "Registered for AI Webinar", type: "event", icon: Calendar, points: 25 },
      { date: "2025-01-08", activity: "Updated Social Links", type: "profile", icon: User, points: 10 },
      { date: "2025-01-06", activity: "Joined Study Group", type: "social", icon: Users, points: 30 },
      { date: "2025-01-04", activity: "Achieved Night Owl Badge", type: "achievement", icon: Moon, points: 150 },
      { date: "2025-01-02", activity: "Completed UI/UX Fundamentals", type: "completion", icon: Award, points: 200 }
    ];

    const typeColors = {
      completion: { bg: 'from-emerald-400 to-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-800' },
      enrollment: { bg: 'from-blue-400 to-blue-600', light: 'bg-blue-50', text: 'text-blue-800' },
      certificate: { bg: 'from-yellow-400 to-yellow-600', light: 'bg-yellow-50', text: 'text-yellow-800' },
      event: { bg: 'from-purple-400 to-purple-600', light: 'bg-purple-50', text: 'text-purple-800' },
      profile: { bg: 'from-gray-400 to-gray-600', light: 'bg-gray-50', text: 'text-gray-800' },
      social: { bg: 'from-pink-400 to-pink-600', light: 'bg-pink-50', text: 'text-pink-800' },
      achievement: { bg: 'from-orange-400 to-orange-600', light: 'bg-orange-50', text: 'text-orange-800' }
    };

    return (
      <div className="space-y-8">
        {/* Download Options Section */}
        <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-blue-200 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Activity Reports & Downloads</h3>
                <p className="text-gray-600">Export your learning activity data in various formats</p>
              </div>
              <div className="flex items-center gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Complete Report (PDF)
                </Button>
                <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                  <Download className="w-4 h-4 mr-2" />
                  Data Export (CSV)
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">Activity Timeline</div>
                    <div className="text-sm text-gray-600">Detailed activity log</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">Progress Analytics</div>
                    <div className="text-sm text-gray-600">Charts and metrics</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">Performance Summary</div>
                    <div className="text-sm text-gray-600">Key insights report</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-blue-800 mb-1">{activityData.length}</div>
              <div className="text-sm font-bold text-blue-700">Recent Activities</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-green-800 mb-1">
                {activityData.reduce((sum, item) => sum + item.points, 0)}
              </div>
              <div className="text-sm font-bold text-green-700">Points Earned</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-purple-800 mb-1">
                {activityData.filter(a => a.type === 'completion').length}
              </div>
              <div className="text-sm font-bold text-purple-700">Completions</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-amber-800 mb-1">15</div>
              <div className="text-sm font-bold text-amber-700">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Timeline */}
        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
          <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 font-black text-xl text-white">
                <Activity className="w-8 h-8 text-white" />
                Learning Activity Timeline
              </CardTitle>
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {activityData.map((item, index) => {
                const Icon = item.icon;
                const colors = typeColors[item.type];
                return (
                  <div key={index} className={`flex items-start gap-6 p-6 ${colors.light} rounded-xl border border-opacity-30 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg`}>
                    {/* Timeline Connector */}
                    <div className="relative">
                      <div className={`w-14 h-14 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center shadow-xl relative z-10`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {index < activityData.length - 1 && (
                        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-slate-300 to-transparent"></div>
                      )}
                    </div>
                    
                    {/* Activity Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-black text-slate-800 text-lg">{item.activity}</h3>
                        <div className="flex items-center gap-2">
                          <Badge className={`${colors.text} bg-white/80 font-black px-3 py-1 shadow-sm`}>
                            +{item.points} pts
                          </Badge>
                          <Badge variant="outline" className="font-bold text-slate-600 border-slate-300">
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-slate-600 font-semibold mb-3">
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          weekday: 'long',
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      
                      {/* Activity Type Specific Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 bg-gradient-to-br ${colors.bg} rounded-full`}></div>
                          <span className="font-bold text-slate-700">
                            {item.type === 'completion' ? 'Course Finished' :
                             item.type === 'enrollment' ? 'New Enrollment' :
                             item.type === 'certificate' ? 'Certificate Earned' :
                             item.type === 'event' ? 'Event Registration' :
                             item.type === 'achievement' ? 'Badge Unlocked' :
                             'Profile Update'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span className="text-slate-600 font-medium">
                            {Math.floor(Math.random() * 12) + 1} days ago
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-slate-600 font-medium">Impact Score: {item.points}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Activity Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Activity Type Distribution with Donut Chart */}
          <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-indigo-800 to-indigo-700 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 font-black text-white">
                  <Target className="w-6 h-6 text-white" />
                  Activity Distribution Analytics
                </CardTitle>
                <Button 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export Chart
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Donut Chart */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-48 h-48 mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#e2e8f0" strokeWidth="10"/>
                    
                    {/* Activity type segments */}
                    {Object.entries(
                      activityData.reduce((acc, item) => {
                        acc[item.type] = (acc[item.type] || 0) + 1;
                        return acc;
                      }, {})
                    ).map(([type, count], index) => {
                      const percentage = (count / activityData.length) * 100;
                      const colors = {
                        completion: '#10b981',
                        enrollment: '#3b82f6',
                        certificate: '#f59e0b',
                        event: '#8b5cf6',
                        profile: '#6b7280',
                        social: '#ec4899',
                        achievement: '#f97316'
                      };
                      
                      const circumference = 2 * Math.PI * 35;
                      const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                      const rotation = index * (360 / Object.keys(typeColors).length);
                      
                      return (
                        <circle
                          key={type}
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke={colors[type]}
                          strokeWidth="10"
                          strokeDasharray={strokeDasharray}
                          strokeLinecap="round"
                          style={{ 
                            transformOrigin: '50px 50px',
                            transform: `rotate(${rotation}deg)`
                          }}
                          className="transition-all duration-1000 ease-out"
                        />
                      );
                    })}
                    
                    {/* Center text */}
                    <text x="50" y="45" textAnchor="middle" className="text-lg font-black fill-indigo-800" transform="rotate(90 50 50)">
                      {activityData.length}
                    </text>
                    <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-indigo-600" transform="rotate(90 50 50)">
                      Activities
                    </text>
                  </svg>
                </div>
              </div>

              {/* Enhanced Legend */}
              <div className="space-y-3">
                {Object.entries(
                  activityData.reduce((acc, item) => {
                    acc[item.type] = (acc[item.type] || 0) + 1;
                    return acc;
                  }, {})
                ).map(([type, count]) => {
                  const percentage = Math.round((count / activityData.length) * 100);
                  const legendColors = {
                    completion: 'bg-emerald-500',
                    enrollment: 'bg-blue-500',
                    certificate: 'bg-yellow-500',
                    event: 'bg-purple-500',
                    profile: 'bg-gray-500',
                    social: 'bg-pink-500',
                    achievement: 'bg-orange-500'
                  };
                  
                  return (
                    <div key={type} className="flex items-center justify-between p-3 bg-white rounded-lg border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${legendColors[type]} shadow-md`}></div>
                        <span className="font-bold text-slate-800 capitalize text-sm">{type.replace('_', ' ')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900 text-lg">{count}</span>
                        <span className="text-sm font-bold text-slate-600 bg-gray-100 px-2 py-1 rounded-full">
                          {percentage}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Weekly Progress with Line Chart */}
          <Card className="bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200">
            <CardHeader className="bg-gradient-to-r from-rose-800 to-rose-700 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 font-black text-white">
                  <TrendingUp className="w-6 h-6 text-white" />
                  Weekly Progress Analytics
                </CardTitle>
                <Button 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Line Chart */}
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 mb-6">
                <h4 className="text-lg font-black text-slate-800 mb-4 text-center">📊 Activity Trend Line</h4>
                <div className="relative h-32 bg-gradient-to-t from-gray-50 to-white border-2 border-gray-100 rounded-lg p-4">
                  <svg className="w-full h-full" viewBox="0 0 300 100">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="60" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Data points and line */}
                    {[
                      { week: '3 Weeks', activities: 4, x: 50 },
                      { week: '2 Weeks', activities: 2, x: 125 },
                      { week: 'Last Week', activities: 5, x: 200 },
                      { week: 'This Week', activities: 3, x: 275 }
                    ].map((point, index, array) => {
                      const y = 80 - (point.activities / 6) * 60; // Scale to chart height
                      const nextPoint = array[index + 1];
                      
                      return (
                        <g key={index}>
                          {/* Line to next point */}
                          {nextPoint && (
                            <line
                              x1={point.x}
                              y1={y}
                              x2={nextPoint.x}
                              y2={80 - (nextPoint.activities / 6) * 60}
                              stroke="#ef4444"
                              strokeWidth="3"
                              className="drop-shadow-sm"
                            />
                          )}
                          
                          {/* Data point */}
                          <circle
                            cx={point.x}
                            cy={y}
                            r="6"
                            fill="#ef4444"
                            stroke="#ffffff"
                            strokeWidth="2"
                            className="drop-shadow-md"
                          />
                          
                          {/* Value label */}
                          <text
                            x={point.x}
                            y={y - 12}
                            textAnchor="middle"
                            className="text-xs font-black fill-slate-800"
                          >
                            {point.activities}
                          </text>
                        </g>
                      );
                    })}
                    
                    {/* Week labels */}
                    {[
                      { label: '3W', x: 50 },
                      { label: '2W', x: 125 },
                      { label: '1W', x: 200 },
                      { label: 'Now', x: 275 }
                    ].map((label, index) => (
                      <text
                        key={index}
                        x={label.x}
                        y={95}
                        textAnchor="middle"
                        className="text-xs font-bold fill-slate-600"
                      >
                        {label.label}
                      </text>
                    ))}
                  </svg>
                </div>
              </div>

              {/* Enhanced Weekly Cards */}
              <div className="space-y-3">
                {[
                  { week: 'This Week', activities: 3, points: 320, color: 'from-rose-400 to-rose-600', trend: '↗️' },
                  { week: 'Last Week', activities: 5, points: 545, color: 'from-blue-400 to-blue-600', trend: '📈' },
                  { week: '2 Weeks Ago', activities: 2, points: 200, color: 'from-purple-400 to-purple-600', trend: '📉' },
                  { week: '3 Weeks Ago', activities: 4, points: 420, color: 'from-green-400 to-green-600', trend: '📊' }
                ].map((week, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-gray-100">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{week.trend}</span>
                        <span className="font-black text-slate-800">{week.week}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 px-3 py-1 rounded-full">
                          <span className="text-sm font-black text-blue-700">{week.activities} 📊</span>
                        </div>
                        <div className="bg-yellow-100 px-3 py-1 rounded-full">
                          <span className="text-sm font-black text-yellow-700">{week.points} ⭐</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-2 shadow-inner">
                      <div
                        className={`h-4 rounded-full bg-gradient-to-r ${week.color} transition-all duration-2000 ease-out shadow-lg relative overflow-hidden`}
                        style={{ width: `${Math.min((week.activities / 6) * 100, 100)}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-slate-600 font-bold">
                        Avg: {Math.round(week.points / week.activities)} pts/activity
                      </div>
                      <div className="text-xs font-black text-slate-800 bg-gray-100 px-2 py-1 rounded-full">
                        {Math.round((week.activities / 6) * 100)}% of target
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#E1E5F2]">
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-xl border-r border-[#E1E5F2] min-h-screen sticky top-0">
          <div className="p-6">
            {/* Profile Header in Sidebar */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {userProfile.firstName[0]}{userProfile.lastName[0]}
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-[#022B3A] rounded-full text-white hover:bg-[#022B3A]/90 transition-colors shadow-lg">
                  <Camera className="w-3 h-3" />
                </button>
              </div>
              <h2 className="text-xl font-bold text-[#022B3A] mt-4">
                {userProfile.firstName} {userProfile.lastName}
              </h2>
              <p className="text-sm text-[#1F7A8C] mb-2">{userProfile.email}</p>
              <div className="flex flex-col gap-2">
                <Badge variant="outline" className="text-xs">
                  <GraduationCap className="w-3 h-3 mr-1" />
                  {userProfile.currentYear}, {userProfile.fieldOfStudy}
                </Badge>
                <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                  <Building2 className="w-3 h-3 mr-1" />
                  {userProfile.collegeName.split(',')[0]}
                </Badge>
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                  <Star className="w-3 h-3 mr-1" />
                  GPA: {userProfile.gpa}
                </Badge>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{enrolledCourses.length}</div>
                <div className="text-xs text-blue-700 font-medium">Courses</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">{certificates.length}</div>
                <div className="text-xs text-green-700 font-medium">Certificates</div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Top Skills
              </h3>
              <div className="space-y-2">
                {userProfile.skills.slice(0, 3).map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs font-bold text-blue-600">{skill.level}%</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setActiveTab('profile')}
                className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-2 block"
              >
                View all skills →
              </button>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#1F7A8C] to-[#022B3A] text-white shadow-lg transform scale-105'
                        : 'text-[#022B3A] hover:bg-[#E1E5F2] hover:scale-105'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-[#1F7A8C] group-hover:text-[#022B3A]'}`} />
                    <div className="flex-1">
                      <div className="font-medium">{tab.label}</div>
                      <div className={`text-xs ${activeTab === tab.id ? 'text-white/80' : 'text-[#1F7A8C]'}`}>
                        {tab.description}
                      </div>
                    </div>
                    {activeTab === tab.id && (
                      <ChevronRight className="w-4 h-4 text-white" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Social Links Preview */}
            <div className="mt-8 p-4 bg-gradient-to-br from-[#E1E5F2] to-[#F1F5F9] rounded-lg">
              <h3 className="text-sm font-semibold text-[#022B3A] mb-3">Connect With Me</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(userProfile.socialLinks).map(([platform, link]) => {
                  if (!link) return null;
                  const icons = { linkedin: Linkedin, twitter: Twitter, github: Github, website: Globe, instagram: Instagram, facebook: Facebook };
                  const Icon = icons[platform];
                  const colors = { linkedin: 'text-blue-600', twitter: 'text-blue-400', github: 'text-gray-800', website: 'text-green-600', instagram: 'text-pink-600', facebook: 'text-blue-700' };
                  return (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 ${colors[platform]}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header with Edit Button */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                {(() => {
                  const currentTab = tabs.find(tab => tab.id === activeTab);
                  const Icon = currentTab?.icon;
                  return (
                    <>
                      {Icon && <Icon className="w-8 h-8 text-blue-600" />}
                      <h1 className="text-4xl font-bold text-[#022B3A]">
                        {currentTab?.label}
                      </h1>
                    </>
                  );
                })()}
              </div>
              <p className="text-lg text-[#1F7A8C] mb-4">
                {tabs.find(tab => tab.id === activeTab)?.description}
              </p>
              
              {/* Contextual Info Based on Active Tab */}
              {activeTab === 'profile' && (
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Joined {new Date(userProfile.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {userProfile.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    {userProfile.skills.length} Skills
                  </span>
                </div>
              )}
              
              {activeTab === 'overview' && (
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {enrolledCourses.length} Active Courses
                  </span>
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {certificates.length} Certificates
                  </span>
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {Math.round(enrolledCourses.reduce((sum, c) => sum + c.progress, 0) / enrolledCourses.length)}% Avg Progress
                  </span>
                </div>
              )}
              
              {activeTab === 'courses' && (
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {enrolledCourses.length} Total Enrolled
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {enrolledCourses.filter(c => c.status === 'Completed').length} Completed
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    127 Hours Studied
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex gap-3">
              {activeTab === 'profile' && (
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab('social')}
                  className="flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Globe className="w-4 h-4" />
                  Social Links
                </Button>
              )}
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[600px]">
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'courses' && renderCourses()}
            {activeTab === 'certificates' && renderCertificates()}
            {activeTab === 'events' && renderEvents()}
            {activeTab === 'social' && renderSocialLinks()}
            {activeTab === 'achievements' && renderAchievements()}
            {activeTab === 'activity' && renderActivity()}
            {activeTab === 'settings' && renderSettings()}
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#022B3A] mb-6">Edit Profile</h2>
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
                {/* Education Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="College/University Name"
                    value={userProfile.collegeName}
                    onChange={(e) => handleInputChange('collegeName', e.target.value)}
                  />
                  <Input
                    placeholder="Degree"
                    value={userProfile.degree}
                    onChange={(e) => handleInputChange('degree', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Field of Study"
                    value={userProfile.fieldOfStudy}
                    onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)}
                  />
                  <Input
                    placeholder="Graduation Year"
                    value={userProfile.graduationYear}
                    onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Current Year (e.g., 4th Year)"
                    value={userProfile.currentYear}
                    onChange={(e) => handleInputChange('currentYear', e.target.value)}
                  />
                  <Input
                    placeholder="GPA (e.g., 8.5/10)"
                    value={userProfile.gpa}
                    onChange={(e) => handleInputChange('gpa', e.target.value)}
                  />
                </div>
                <textarea
                  className="w-full p-3 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none resize-none"
                  rows="4"
                  placeholder="Bio - Tell us about yourself, your interests, and goals..."
                  value={userProfile.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                />
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSave} className="flex-1">Save Changes</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)} className="flex-1">Cancel</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
