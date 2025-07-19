import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Clock, MapPin, Users, Eye, Star, User, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const EventsListing = () => {
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
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
      isLive: true,
      tags: ["AI", "Education", "Technology"]
    },
    {
      id: 2,
      title: "Digital Marketing Strategies 2024",
      provider: "Marketing Masters",
      type: "Seminar",
      category: "Marketing",
      date: "2025-07-28",
      time: "2:00 PM - 4:00 PM",
      timezone: "IST",
      duration: "2 hours",
      attendees: 890,
      maxAttendees: 1500,
      price: "₹299",
      originalPrice: "₹499",
      rating: 4.9,
      reviews: 203,
      description: "Master the latest digital marketing trends and strategies that are driving success in 2024.",
      speaker: "Mark Thompson",
      speakerTitle: "Digital Marketing Expert",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      isLive: false,
      tags: ["Marketing", "Digital", "Strategy"]
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || event.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#E1E5F2] to-[#BFDBF7] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#022B3A] mb-4">
            Discover Events
          </h1>
          <p className="text-xl text-[#1F7A8C] max-w-3xl mx-auto">
            Join webinars, seminars, and workshops from top institutes and industry experts
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            >
              {eventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Date Filter */}
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            >
              {dateFilters.map(filter => (
                <option key={filter} value={filter}>{filter}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <div className="w-full h-48 bg-gray-200 rounded-t-xl overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-t-xl flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                    <Calendar className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {event.isLive && (
                  <Badge variant="danger" className="absolute top-4 left-4">
                    🔴 LIVE
                  </Badge>
                )}
                
                <Badge variant="outline" className="absolute top-4 right-4">
                  {event.type}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {event.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{event.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-[#1F7A8C] transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {event.provider}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-[#1F7A8C]">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#1F7A8C]">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#1F7A8C]">
                    <Users className="w-4 h-4" />
                    {event.attendees} attending
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-xl font-bold text-[#022B3A]">{event.price}</div>
                    {event.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{event.originalPrice}</div>
                    )}
                  </div>
                  <Link to="/event-details">
                    <Button
                      size="sm"
                      variant={event.isLive ? "default" : "outline"}
                      className="group"
                    >
                      {event.isLive ? "Join Now" : "View Details"}
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsListing;
