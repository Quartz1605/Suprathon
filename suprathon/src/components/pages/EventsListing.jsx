import React, { useState } from 'react';
import { Search, Calendar, Clock, MapPin, Users, Video, Star, Filter, User, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const EventsListing = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');

  const eventTypes = ['All', 'Webinar', 'Seminar', 'Workshop', 'Conference', 'Bootcamp', 'Masterclass'];
  const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing', 'Data Science', 'Education', 'Career'];
  const dateFilters = ['All', 'Today', 'This Week', 'This Month', 'Upcoming'];

  const events = [
    {
      id: 1,
      title: "Future of AI in Education",
      provider: "TechEd Institute",
      type: "Webinar",
      category: "Technology",
      date: "2025-07-25",
      time: "10:00 AM - 11:30 AM",
      timezone: "IST",
      duration: "1.5 hours",
      attendees: 1250,
      maxAttendees: 2000,
      price: "Free",
      rating: 4.8,
      reviews: 156,
      description: "Explore how artificial intelligence is transforming the education landscape and learn about cutting-edge AI tools for learning.",
      speaker: "Dr. Sarah Johnson",
      speakerTitle: "AI Research Director",
      topics: ["Machine Learning", "Educational Technology", "AI Tools", "Future Trends"],
      isLive: false,
      isRecorded: true,
      certificateProvided: true,
      level: "Beginner",
      language: "English",
      platform: "Zoom"
    },
    {
      id: 2,
      title: "Digital Marketing Strategy Workshop",
      provider: "Marketing Pro Academy",
      type: "Workshop",
      category: "Marketing",
      date: "2025-07-26",
      time: "2:00 PM - 5:00 PM",
      timezone: "IST",
      duration: "3 hours",
      attendees: 450,
      maxAttendees: 500,
      price: "₹999",
      originalPrice: "₹1,999",
      rating: 4.9,
      reviews: 89,
      description: "Hands-on workshop covering modern digital marketing strategies, tools, and implementation techniques.",
      speaker: "Mark Wilson",
      speakerTitle: "Digital Marketing Expert",
      topics: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      isLive: false,
      isRecorded: false,
      certificateProvided: true,
      level: "Intermediate",
      language: "English",
      platform: "Google Meet"
    },
    {
      id: 3,
      title: "Career Guidance for Tech Professionals",
      provider: "Career Counselors Hub",
      type: "Seminar",
      category: "Career",
      date: "2025-07-25",
      time: "11:00 AM - 12:00 PM",
      timezone: "IST",
      duration: "1 hour",
      attendees: 890,
      maxAttendees: 1000,
      price: "Free",
      rating: 4.7,
      reviews: 234,
      description: "Get insights into career growth, skill development, and job market trends in the technology sector.",
      speaker: "Alex Chen",
      speakerTitle: "Career Coach",
      topics: ["Career Growth", "Skill Development", "Job Market", "Networking"],
      isLive: true,
      isRecorded: true,
      certificateProvided: false,
      level: "All",
      language: "English",
      platform: "YouTube Live"
    },
    {
      id: 4,
      title: "UX Design Masterclass",
      provider: "Design Studio Pro",
      type: "Masterclass",
      category: "Design",
      date: "2025-07-28",
      time: "3:00 PM - 6:00 PM",
      timezone: "IST",
      duration: "3 hours",
      attendees: 320,
      maxAttendees: 400,
      price: "₹1,499",
      originalPrice: "₹2,999",
      rating: 4.8,
      reviews: 67,
      description: "Deep dive into user experience design principles, methodologies, and real-world application techniques.",
      speaker: "Emma Davis",
      speakerTitle: "Senior UX Designer",
      topics: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
      isLive: false,
      isRecorded: true,
      certificateProvided: true,
      level: "Advanced",
      language: "English",
      platform: "Custom Platform"
    },
    {
      id: 5,
      title: "Data Science Bootcamp Orientation",
      provider: "DataLearn Academy",
      type: "Bootcamp",
      category: "Data Science",
      date: "2025-08-01",
      time: "9:00 AM - 12:00 PM",
      timezone: "IST",
      duration: "3 hours",
      attendees: 150,
      maxAttendees: 200,
      price: "Free",
      rating: 4.9,
      reviews: 45,
      description: "Introduction to our comprehensive data science bootcamp program with live demonstrations and Q&A.",
      speaker: "Dr. Robert Taylor",
      speakerTitle: "Data Science Lead",
      topics: ["Python", "Machine Learning", "Statistics", "Career Path"],
      isLive: false,
      isRecorded: true,
      certificateProvided: false,
      level: "Beginner",
      language: "English",
      platform: "Zoom"
    },
    {
      id: 6,
      title: "Entrepreneurship and Startup Funding",
      provider: "Business Incubator",
      type: "Conference",
      category: "Business",
      date: "2025-08-05",
      time: "10:00 AM - 4:00 PM",
      timezone: "IST",
      duration: "6 hours",
      attendees: 75,
      maxAttendees: 100,
      price: "₹2,999",
      originalPrice: "₹4,999",
      rating: 4.8,
      reviews: 23,
      description: "Full-day conference covering entrepreneurship, startup strategies, funding options, and networking opportunities.",
      speaker: "Multiple Speakers",
      speakerTitle: "Industry Experts",
      topics: ["Startup Strategy", "Funding", "Business Models", "Networking"],
      isLive: false,
      isRecorded: false,
      certificateProvided: true,
      level: "Intermediate",
      language: "English",
      platform: "In-Person + Online"
    }
  ];

  const isEventToday = (eventDate) => {
    const today = new Date().toISOString().split('T')[0];
    return eventDate === today;
  };

  const isEventThisWeek = (eventDate) => {
    const today = new Date();
    const eventDateTime = new Date(eventDate);
    const daysDiff = Math.ceil((eventDateTime - today) / (1000 * 60 * 60 * 24));
    return daysDiff >= 0 && daysDiff <= 7;
  };

  const isEventThisMonth = (eventDate) => {
    const today = new Date();
    const eventDateTime = new Date(eventDate);
    return eventDateTime.getMonth() === today.getMonth() && 
           eventDateTime.getFullYear() === today.getFullYear() &&
           eventDateTime >= today;
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'All' || event.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    
    let matchesDate = true;
    if (dateFilter === 'Today') {
      matchesDate = isEventToday(event.date);
    } else if (dateFilter === 'This Week') {
      matchesDate = isEventThisWeek(event.date);
    } else if (dateFilter === 'This Month') {
      matchesDate = isEventThisMonth(event.date);
    } else if (dateFilter === 'Upcoming') {
      matchesDate = new Date(event.date) >= new Date();
    }
    
    return matchesSearch && matchesType && matchesCategory && matchesDate;
  });

  const getEventStatus = (event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    
    if (event.isLive) {
      return { status: 'live', label: '🔴 LIVE NOW', variant: 'danger' };
    } else if (eventDate.toDateString() === today.toDateString()) {
      return { status: 'today', label: '📅 Today', variant: 'warning' };
    } else if (eventDate > today) {
      return { status: 'upcoming', label: '⏰ Upcoming', variant: 'secondary' };
    } else {
      return { status: 'past', label: '✅ Completed', variant: 'success' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-[#E1E5F2]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#022B3A] mb-4">Upcoming Events & Webinars</h1>
            <p className="text-xl text-[#1F7A8C] max-w-2xl mx-auto">
              Join live sessions, workshops, and seminars led by industry experts
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-5 h-5" />
              <Input
                type="text"
                placeholder="Search events, speakers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A]"
              >
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="px-4 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A]"
              >
                {dateFilters.map(filter => (
                  <option key={filter} value={filter}>{filter}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-[#1F7A8C]">
            Showing {filteredEvents.length} events {searchTerm && `for "${searchTerm}"`}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            const eventStatus = getEventStatus(event);
            return (
              <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-t-xl flex items-center justify-center">
                    {event.type === 'Webinar' && <Video className="w-16 h-16 text-white" />}
                    {event.type === 'Workshop' && <Users className="w-16 h-16 text-white" />}
                    {event.type === 'Seminar' && <User className="w-16 h-16 text-white" />}
                    {!['Webinar', 'Workshop', 'Seminar'].includes(event.type) && <Calendar className="w-16 h-16 text-white" />}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant={eventStatus.variant}>
                      {eventStatus.label}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 backdrop-blur">
                      {event.type}
                    </Badge>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4">
                    <Badge variant={event.price === 'Free' ? 'success' : 'secondary'}>
                      {event.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">
                      {event.category}
                    </Badge>
                    {event.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{event.rating}</span>
                        <span className="text-sm text-[#1F7A8C]">({event.reviews})</span>
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-[#1F7A8C] transition-colors line-clamp-2">
                    {event.title}
                  </CardTitle>
                  
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {event.provider}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time} ({event.timezone})
                    </div>
                  </CardDescription>

                  <p className="text-sm text-[#1F7A8C] line-clamp-2 mt-2">
                    {event.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Speaker Info */}
                  <div className="mb-4 p-3 bg-[#E1E5F2] rounded-lg">
                    <div className="text-sm font-medium text-[#022B3A]">{event.speaker}</div>
                    <div className="text-xs text-[#1F7A8C]">{event.speakerTitle}</div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#1F7A8C]">Duration:</span>
                      <span className="text-[#022B3A] font-medium">{event.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1F7A8C]">Attendees:</span>
                      <span className="text-[#022B3A] font-medium">{event.attendees}/{event.maxAttendees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1F7A8C]">Level:</span>
                      <span className="text-[#022B3A] font-medium">{event.level}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.isRecorded && (
                      <Badge variant="outline" className="text-xs">📹 Recorded</Badge>
                    )}
                    {event.certificateProvided && (
                      <Badge variant="outline" className="text-xs">🏆 Certificate</Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {event.platform}
                    </Badge>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.topics.slice(0, 2).map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {event.topics.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{event.topics.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xl font-bold text-[#022B3A]">{event.price}</div>
                      {event.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{event.originalPrice}</div>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant={event.isLive ? "default" : "outline"}
                      className="group"
                      onClick={() => setCurrentPage('event-details')}
                    >
                      {event.isLive ? "Join Now" : "Register"}
                      <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-[#1F7A8C] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#022B3A] mb-2">No events found</h3>
            <p className="text-[#1F7A8C] mb-4">Try adjusting your search criteria or filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedType('All');
                setSelectedCategory('All');
                setDateFilter('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Load More */}
      {filteredEvents.length > 0 && (
        <div className="text-center py-8">
          <Button variant="outline" size="lg" className="px-8">
            Load More Events
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventsListing;
