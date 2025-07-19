import React, { useState } from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Star, Users, Calendar, BookOpen, Award, CheckCircle, Building, MessageCircle, Share2, Heart } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const InstituteProfile = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [isFollowing, setIsFollowing] = useState(false);

  const institute = {
    id: 1,
    name: "TechCorp Innovation Hub",
    description: "Leading technology company focused on innovation and skill development",
    address: "Bandra-Kurla Complex, Mumbai, Maharashtra 400051",
    contactEmail: "contact@techcorp.com",
    phone: "+91 98765 43210",
    website: "https://techcorp.com",
    establishedYear: "2015",
    type: "Private Technology Company",
    rating: 4.8,
    reviews: 1247,
    followers: 15000,
    coursesOffered: 45,
    eventsHosted: 78,
    studentsEnrolled: 25000,
    instructors: 120,
    bio: "TechCorp Innovation Hub is a leading technology company dedicated to fostering innovation and skill development in the tech industry. Since our establishment in 2015, we have been at the forefront of technological advancement, offering world-class courses and organizing prestigious events that bring together the brightest minds in technology.",
    specializations: [
      "Artificial Intelligence & Machine Learning",
      "Web Development",
      "Mobile App Development",
      "Data Science & Analytics",
      "Cybersecurity",
      "Cloud Computing",
      "DevOps & Infrastructure",
      "Blockchain Technology"
    ],
    achievements: [
      "Best Technology Training Institute 2024",
      "Innovation Excellence Award 2023",
      "Top Employer for Tech Talent 2023",
      "Most Trusted Ed-Tech Platform 2022",
      "Excellence in Online Education 2022"
    ],
    facilities: [
      "State-of-the-art computer labs",
      "Modern classrooms with smart boards",
      "High-speed internet connectivity",
      "24/7 library and study areas",
      "Industry-standard development environments",
      "Virtual reality learning pods",
      "Maker space with 3D printers",
      "Conference and seminar halls"
    ],
    partnerships: [
      "Microsoft",
      "Google",
      "Amazon Web Services",
      "IBM",
      "Oracle",
      "Salesforce",
      "Adobe",
      "GitHub"
    ],
    recentCourses: [
      {
        id: 1,
        title: "Complete Full Stack Development",
        price: 7999,
        rating: 4.9,
        students: 2500,
        image: "/api/placeholder/300/200"
      },
      {
        id: 2,
        title: "AI/ML Fundamentals",
        price: 9999,
        rating: 4.8,
        students: 1800,
        image: "/api/placeholder/300/200"
      },
      {
        id: 3,
        title: "Mobile App Development with React Native",
        price: 6999,
        rating: 4.7,
        students: 1200,
        image: "/api/placeholder/300/200"
      }
    ],
    upcomingEvents: [
      {
        id: 1,
        title: "National Hackathon 2025",
        date: "2025-03-15",
        participants: 2500,
        type: "Competition"
      },
      {
        id: 2,
        title: "Tech Talk: Future of AI",
        date: "2025-02-20",
        participants: 500,
        type: "Workshop"
      },
      {
        id: 3,
        title: "Web Development Bootcamp",
        date: "2025-04-10",
        participants: 300,
        type: "Training"
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Rahul Sharma",
        role: "Software Engineer at Google",
        content: "TechCorp's courses helped me land my dream job at Google. The curriculum is industry-relevant and the instructors are top-notch.",
        rating: 5
      },
      {
        id: 2,
        name: "Priya Patel",
        role: "Data Scientist at Microsoft",
        content: "The AI/ML course at TechCorp was comprehensive and practical. I learned so much and was able to apply it immediately in my work.",
        rating: 5
      },
      {
        id: 3,
        name: "Amit Kumar",
        role: "Full Stack Developer at Startup",
        content: "Excellent learning environment and great support from instructors. The projects were challenging and helped build my portfolio.",
        rating: 4
      }
    ]
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <button
            onClick={() => setCurrentPage('institutes')}
            className="flex items-center text-[#1F7A8C] hover:text-[#022B3A] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Institutes
          </button>
        </div>

        {/* Institute Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#1F7A8C] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Building className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-[#022B3A] mb-2">
                    {institute.name}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 mb-4">
                    {institute.description}
                  </CardDescription>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Mumbai, India
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Est. {institute.establishedYear}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {institute.rating} ({institute.reviews} reviews)
                    </div>
                  </div>
                  <Badge variant="secondary" className="px-3 py-1">
                    {institute.type}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  onClick={handleFollow}
                  className={isFollowing ? 'bg-[#1F7A8C] text-white' : ''}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
                <Button variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1F7A8C] mb-1">
              {institute.followers.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Followers</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1F7A8C] mb-1">
              {institute.coursesOffered}
            </div>
            <p className="text-sm text-gray-600">Courses</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1F7A8C] mb-1">
              {institute.eventsHosted}
            </div>
            <p className="text-sm text-gray-600">Events</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1F7A8C] mb-1">
              {institute.studentsEnrolled.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Students</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="mb-6">
              <div className="border-b border-gray-200 overflow-x-auto">
                <nav className="-mb-px flex space-x-8">
                  {['about', 'courses', 'events', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                        activeTab === tab
                          ? 'border-[#1F7A8C] text-[#1F7A8C]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <Card>
              <CardContent className="p-6">
                {activeTab === 'about' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#022B3A] mb-3">About {institute.name}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{institute.bio}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#022B3A] mb-3">Specializations</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {institute.specializations.map((spec, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#022B3A] mb-3">Achievements</h3>
                      <div className="space-y-3">
                        {institute.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center">
                            <Award className="w-5 h-5 text-[#1F7A8C] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#022B3A] mb-3">Facilities</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {institute.facilities.map((facility, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#022B3A] mb-3">Industry Partners</h3>
                      <div className="flex flex-wrap gap-3">
                        {institute.partnerships.map((partner, index) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'courses' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#022B3A]">Popular Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {institute.recentCourses.map((course) => (
                        <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                          <div className="h-48 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-t-lg"></div>
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-[#022B3A] mb-2">{course.title}</h4>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-lg font-bold text-[#1F7A8C]">₹{course.price.toLocaleString()}</span>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                <span className="text-sm">{course.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="w-4 h-4 mr-1" />
                              {course.students.toLocaleString()} students
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setCurrentPage('courses')}
                    >
                      View All Courses
                    </Button>
                  </div>
                )}

                {activeTab === 'events' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#022B3A]">Upcoming Events</h3>
                    <div className="space-y-4">
                      {institute.upcomingEvents.map((event) => (
                        <Card key={event.id} className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div>
                                <h4 className="font-semibold text-[#022B3A] mb-1">{event.title}</h4>
                                <div className="flex items-center text-sm text-gray-600 mb-2">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {formatDate(event.date)}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                  <Users className="w-4 h-4 mr-1" />
                                  {event.participants} participants
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Badge variant="outline">{event.type}</Badge>
                                <Button size="sm">View Details</Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setCurrentPage('events')}
                    >
                      View All Events
                    </Button>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#022B3A]">Student Reviews</h3>
                    <div className="space-y-6">
                      {institute.testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#1F7A8C] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-semibold">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold text-[#022B3A]">{testimonial.name}</h4>
                                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                                <div className="flex items-center">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700">{testimonial.content}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-[#1F7A8C] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{institute.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#1F7A8C] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{institute.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#1F7A8C] mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{institute.contactEmail}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-[#1F7A8C] mr-3 flex-shrink-0" />
                    <a href={institute.website} className="text-sm text-[#1F7A8C] hover:underline">
                      Visit Website
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Instructors:</span>
                    <span className="font-medium">{institute.instructors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Courses:</span>
                    <span className="font-medium">{institute.coursesOffered}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Events Hosted:</span>
                    <span className="font-medium">{institute.eventsHosted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students Enrolled:</span>
                    <span className="font-medium">{institute.studentsEnrolled.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Explore Courses
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteProfile;
