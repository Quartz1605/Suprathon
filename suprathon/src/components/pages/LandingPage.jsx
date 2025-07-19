import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Users, Star, TrendingUp, Award, ChevronRight, Clock, MapPin, User } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const LandingPage = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      provider: "TechAcademy Pro",
      price: "₹4,999",
      rating: 4.8,
      students: 1250,
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&crop=center",
      category: "Programming",
      level: "Advanced"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      provider: "Marketing Institute",
      price: "₹3,499",
      rating: 4.9,
      students: 890,
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      category: "Marketing",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      provider: "DataLearn Academy",
      price: "₹6,999",
      rating: 4.7,
      students: 2100,
      duration: "16 weeks",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      category: "Data Science",
      level: "Beginner"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Education Webinar",
      date: "2025-07-25",
      time: "10:00 AM",
      provider: "FutureEd Institute",
      type: "Webinar",
      attendees: 500,
      isLive: true
    },
    {
      id: 2,
      title: "Career Guidance Seminar",
      date: "2025-07-28",
      time: "2:00 PM",
      provider: "Career Counselors",
      type: "Seminar",
      attendees: 200,
      isLive: false
    },
    {
      id: 3,
      title: "Coding Bootcamp Info Session",
      date: "2025-08-02",
      time: "6:00 PM",
      provider: "CodeMasters",
      type: "Info Session",
      attendees: 150,
      isLive: false
    }
  ];

  const stats = [
    { label: "Active Courses", value: "500+", icon: BookOpen },
    { label: "Live Events", value: "50+", icon: Calendar },
    { label: "Partner Institutes", value: "100+", icon: Users },
    { label: "Success Stories", value: "10K+", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#E1E5F2] to-[#BFDBF7]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <Badge variant="secondary" className="mb-3 sm:mb-4 px-4 sm:px-6 py-2 text-xs sm:text-sm">
              🚀 Join 10,000+ Students Learning Online
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#022B3A] mb-4 sm:mb-6 leading-tight">
              Your Gateway to
              <span className="text-[#1F7A8C] block">Learning Excellence</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1F7A8C] mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">{/* Rest of content */}
              Connect with top institutes, discover amazing courses, attend live events, and accelerate your learning journey with personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/courses">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 group"
                >
                  Explore Courses
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/events">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View Events
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-20 left-10 hidden lg:block animate-float">
          <Card className="w-48 bg-white/80 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-[#1F7A8C]" />
                <div>
                  <div className="font-semibold text-[#022B3A]">Live Course</div>
                  <div className="text-sm text-[#1F7A8C]">Starting Now</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="absolute top-40 right-10 hidden lg:block animate-float-delayed">
          <Card className="w-52 bg-white/80 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-8 h-8 text-[#1F7A8C]" />
                <div>
                  <div className="font-semibold text-[#022B3A]">AI Webinar</div>
                  <div className="text-sm text-[#1F7A8C]">Tomorrow 10 AM</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#1F7A8C] rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#022B3A] mb-2">{stat.value}</div>
                  <div className="text-[#1F7A8C] font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 sm:py-16 bg-[#E1E5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#022B3A] mb-3 sm:mb-4">Featured Courses</h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#1F7A8C] max-w-2xl mx-auto px-4">
              Discover our most popular courses from top-rated institutes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <div className="w-full h-48 bg-gray-200 rounded-t-xl overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback gradient with icon */}
                    <div className="w-full h-full bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-t-xl flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                      <BookOpen className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <Badge
                    variant="success"
                    className="absolute top-4 right-4"
                  >
                    {course.level}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {course.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-[#1F7A8C] transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {course.provider}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4 text-sm text-[#1F7A8C]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#022B3A]">{course.price}</div>
                  </div>
                  
                  <Link to={`/course-registration/${course.id}`}>
                    <Button
                      className="w-full group"
                    >
                      Enroll Now
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button
                variant="outline"
                size="lg"
                className="px-8"
              >
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#022B3A] mb-4">Upcoming Events</h2>
            <p className="text-xl text-[#1F7A8C] max-w-2xl mx-auto">
              Don't miss out on these exciting webinars and seminars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant={event.isLive ? "danger" : "secondary"}
                      className="text-xs"
                    >
                      {event.isLive ? "🔴 LIVE" : event.type}
                    </Badge>
                    <div className="text-right text-sm text-[#1F7A8C]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {event.provider}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1 text-sm text-[#1F7A8C]">
                      <Users className="w-4 h-4" />
                      {event.attendees} attending
                    </div>
                  </div>
                  
                  <Link to={`/event-registration/${event.id}`}>
                    <Button
                      variant={event.isLive ? "default" : "outline"}
                      className="w-full"
                    >
                      {event.isLive ? "Join Now" : "Register"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events">
              <Button
                variant="outline"
                size="lg"
                className="px-8"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#022B3A] to-[#1F7A8C]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already advancing their careers with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#022B3A] px-8"
              >
                Get Started Today
              </Button>
            </Link>
            <Link to="/institutes">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 px-8"
              >
                For Institutes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
