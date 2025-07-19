import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, MapPin, Trophy, Star, Share2, Heart, User, CheckCircle, DollarSign, Globe, Award, Timer } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const EventDetails = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRegistered, setIsRegistered] = useState(false);

  const event = {
    id: 1,
    title: "National Hackathon 2025",
    organizer: "TechCorp",
    organizerProfile: {
      name: "TechCorp Innovation Hub",
      type: "Technology Company",
      rating: 4.8,
      eventsHosted: 25,
      followers: 15000,
      bio: "Leading technology company focused on innovation and skill development. We organize world-class events to foster talent and creativity in the tech community."
    },
    category: "Competition",
    eventTypeMode: "Hybrid",
    eventTypeMember: "Team",
    price: 500,
    prizePool: 100000,
    endDate: "2025-03-15",
    startDate: "2025-03-10",
    location: "Mumbai, India",
    venue: "TechCorp Innovation Center",
    duration: "5 days",
    rating: 4.9,
    reviews: 342,
    participants: 2500,
    maxParticipants: 3000,
    teamSize: "2-4 members",
    shortDesc: "India's premier hackathon bringing together the brightest minds to solve real-world problems with cutting-edge technology.",
    longDescription: "Join India's most prestigious hackathon where innovation meets opportunity. Over 5 intense days, teams will compete to solve real-world challenges using the latest technologies. With mentorship from industry experts, workshops, and networking opportunities, this event is perfect for students and professionals looking to showcase their skills and win amazing prizes.",
    features: [
      "24/7 mentorship support",
      "Workshops by industry experts",
      "Free meals and accommodation",
      "Networking opportunities",
      "Certificate of participation",
      "Access to exclusive job opportunities",
      "Tech talks and keynote sessions",
      "Team matching assistance"
    ],
    requirements: [
      "Basic programming knowledge",
      "Team of 2-4 members (team formation help available)",
      "Laptop with development environment",
      "Valid student/professional ID",
      "Age 16+ years"
    ],
    schedule: [
      {
        day: "Day 1",
        date: "March 10, 2025",
        events: [
          { time: "09:00 AM", activity: "Registration & Check-in" },
          { time: "10:00 AM", activity: "Opening Ceremony & Keynote" },
          { time: "11:30 AM", activity: "Problem Statement Release" },
          { time: "12:00 PM", activity: "Team Formation & Networking" },
          { time: "01:00 PM", activity: "Lunch Break" },
          { time: "02:00 PM", activity: "Hacking Begins" },
          { time: "06:00 PM", activity: "Mentor Sessions" },
          { time: "08:00 PM", activity: "Dinner & Networking" }
        ]
      },
      {
        day: "Day 2-4",
        date: "March 11-13, 2025",
        events: [
          { time: "09:00 AM", activity: "Daily Standup" },
          { time: "10:00 AM", activity: "Continued Development" },
          { time: "12:00 PM", activity: "Tech Talks & Workshops" },
          { time: "01:00 PM", activity: "Lunch Break" },
          { time: "02:00 PM", activity: "Development Continues" },
          { time: "04:00 PM", activity: "Mentor Check-ins" },
          { time: "08:00 PM", activity: "Dinner & Entertainment" }
        ]
      },
      {
        day: "Day 5",
        date: "March 15, 2025",
        events: [
          { time: "09:00 AM", activity: "Final Development Hours" },
          { time: "12:00 PM", activity: "Submission Deadline" },
          { time: "01:00 PM", activity: "Lunch Break" },
          { time: "02:00 PM", activity: "Project Presentations" },
          { time: "05:00 PM", activity: "Judging & Evaluation" },
          { time: "07:00 PM", activity: "Award Ceremony" },
          { time: "08:30 PM", activity: "Closing Ceremony" }
        ]
      }
    ],
    prizes: [
      { position: "1st Place", amount: "₹50,000", description: "Cash prize + Job opportunities + Incubation support" },
      { position: "2nd Place", amount: "₹30,000", description: "Cash prize + Internship opportunities" },
      { position: "3rd Place", amount: "₹20,000", description: "Cash prize + Mentorship program" },
      { position: "Special Categories", amount: "₹10,000 each", description: "Best Innovation, Best Design, Best Social Impact" }
    ],
    tags: ["Hackathon", "Programming", "Innovation", "Technology", "Competition"],
    sponsors: ["Microsoft", "Google", "AWS", "GitHub", "Intel"]
  };

  const handleRegistration = () => {
    setCurrentPage('event-registration');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const daysUntilEvent = Math.ceil((new Date(event.startDate) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <button
            onClick={() => setCurrentPage('events')}
            className="flex items-center text-[#1F7A8C] hover:text-[#022B3A] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Header */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-[#022B3A] mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 mb-4">
                      {event.shortDesc}
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        By {event.organizer}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {event.rating} ({event.reviews} reviews)
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {event.participants.toLocaleString()} participants
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Event Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-[#1F7A8C] mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Start Date</p>
                    <p className="font-semibold text-[#022B3A]">{formatDate(event.startDate)}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center">
                  <Timer className="w-5 h-5 text-[#1F7A8C] mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-[#022B3A]">{event.duration}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#1F7A8C] mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-[#022B3A]">{event.location}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-[#1F7A8C] mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Prize Pool</p>
                    <p className="font-semibold text-[#022B3A]">₹{event.prizePool.toLocaleString()}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Tabs */}
            <div className="mb-6">
              <div className="border-b border-gray-200 overflow-x-auto">
                <nav className="-mb-px flex space-x-8">
                  {['overview', 'schedule', 'prizes', 'requirements'].map((tab) => (
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
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#022B3A] mb-3">About This Event</h3>
                      <p className="text-gray-700 leading-relaxed">{event.longDescription}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#022B3A] mb-3">What You'll Get</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {event.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#022B3A] mb-3">Sponsors</h3>
                      <div className="flex flex-wrap gap-3">
                        {event.sponsors.map((sponsor, index) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1">
                            {sponsor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'schedule' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#022B3A]">Event Schedule</h3>
                    {event.schedule.map((day, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-[#1F7A8C] mb-3">
                          {day.day} - {day.date}
                        </h4>
                        <div className="space-y-2">
                          {day.events.map((eventItem, eventIndex) => (
                            <div key={eventIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="font-medium text-sm">{eventItem.time}</span>
                              </div>
                              <span className="text-gray-700 text-sm">{eventItem.activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'prizes' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#022B3A]">Prize Distribution</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {event.prizes.map((prize, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-2">
                            <Award className="w-5 h-5 text-[#1F7A8C] mr-2" />
                            <h4 className="font-semibold text-[#022B3A]">{prize.position}</h4>
                          </div>
                          <p className="text-2xl font-bold text-[#1F7A8C] mb-1">{prize.amount}</p>
                          <p className="text-sm text-gray-600">{prize.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#022B3A]">Requirements</h3>
                    <div className="space-y-3">
                      {event.requirements.map((requirement, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{requirement}</span>
                        </div>
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
              {/* Registration Card */}
              <Card>
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#022B3A]">
                      ₹{event.price.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600">Registration Fee</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {daysUntilEvent > 0 ? (
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700">
                        Registration opens in <span className="font-semibold">{daysUntilEvent} days</span>
                      </p>
                    </div>
                  ) : (
                    <Button 
                      onClick={handleRegistration}
                      className="w-full"
                      disabled={isRegistered}
                    >
                      {isRegistered ? 'Already Registered' : 'Register Now'}
                    </Button>
                  )}
                  
                  <div className="text-center text-sm text-gray-600">
                    <p>{event.maxParticipants - event.participants} spots remaining</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-[#1F7A8C] h-2 rounded-full" 
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Event Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Event Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mode:</span>
                    <span className="font-medium">{event.eventTypeMode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Team Size:</span>
                    <span className="font-medium">{event.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Venue:</span>
                    <span className="font-medium text-right">{event.venue}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Organizer */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Organizer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-[#1F7A8C] rounded-full flex items-center justify-center mr-3">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#022B3A]">{event.organizerProfile.name}</h4>
                      <p className="text-sm text-gray-600">{event.organizerProfile.type}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span>{event.organizerProfile.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Events:</span>
                      <span>{event.organizerProfile.eventsHosted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Followers:</span>
                      <span>{event.organizerProfile.followers.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => setCurrentPage('institute-profile')}
                  >
                    View Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
