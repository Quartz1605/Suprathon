import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Star, Users, BookOpen, Calendar, Award, Building, ChevronRight, Filter, Search } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const InstitutesListing = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');

  const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing', 'Health', 'Education', 'Engineering'];
  const locations = ['All', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata'];
  const ratings = ['All', '4.5+', '4.0+', '3.5+', '3.0+'];

  const institutes = [
    {
      id: 1,
      name: "TechAcademy Pro",
      category: "Technology",
      location: "Mumbai, India",
      rating: 4.8,
      reviews: 1250,
      students: 45000,
      courses: 25,
      events: 12,
      established: "2018",
      description: "Leading technology education institute specializing in web development, data science, and AI/ML courses.",
      specializations: ["Web Development", "Data Science", "AI/ML", "Mobile Development"],
      contact: {
        phone: "+91 98765 43210",
        email: "info@techacademy.com",
        website: "www.techacademy.com"
      },
      verified: true,
      premium: true,
      featuredCourses: [
        { title: "Complete Web Development Bootcamp", students: 5000, rating: 4.8 },
        { title: "Machine Learning Fundamentals", students: 3500, rating: 4.7 },
        { title: "React Advanced Course", students: 2800, rating: 4.9 }
      ],
      upcomingEvents: [
        { title: "AI in Web Development", date: "2025-07-25", type: "Webinar" },
        { title: "Career Guidance Session", date: "2025-07-28", type: "Seminar" }
      ]
    },
    {
      id: 2,
      name: "Marketing Institute",
      category: "Marketing",
      location: "Delhi, India",
      rating: 4.7,
      reviews: 890,
      students: 28000,
      courses: 18,
      events: 8,
      established: "2019",
      description: "Premier digital marketing institute offering comprehensive courses in SEO, social media, and growth marketing.",
      specializations: ["Digital Marketing", "SEO", "Social Media", "Content Marketing"],
      contact: {
        phone: "+91 87654 32109",
        email: "hello@marketinginstitute.com",
        website: "www.marketinginstitute.com"
      },
      verified: true,
      premium: false,
      featuredCourses: [
        { title: "Digital Marketing Mastery", students: 4200, rating: 4.8 },
        { title: "SEO Optimization Course", students: 3100, rating: 4.6 },
        { title: "Social Media Strategy", students: 2900, rating: 4.7 }
      ],
      upcomingEvents: [
        { title: "Digital Marketing Strategy Workshop", date: "2025-07-26", type: "Workshop" },
        { title: "SEO Best Practices", date: "2025-07-30", type: "Webinar" }
      ]
    },
    {
      id: 3,
      name: "DataLearn Academy",
      category: "Technology",
      location: "Bangalore, India",
      rating: 4.9,
      reviews: 1567,
      students: 35000,
      courses: 22,
      events: 15,
      established: "2017",
      description: "Specialized data science and analytics institute with industry-grade curriculum and hands-on projects.",
      specializations: ["Data Science", "Analytics", "Big Data", "Business Intelligence"],
      contact: {
        phone: "+91 76543 21098",
        email: "contact@datalearn.com",
        website: "www.datalearn.com"
      },
      verified: true,
      premium: true,
      featuredCourses: [
        { title: "Data Science Bootcamp", students: 6000, rating: 4.9 },
        { title: "Python for Data Analysis", students: 4500, rating: 4.8 },
        { title: "Advanced Analytics", students: 3200, rating: 4.7 }
      ],
      upcomingEvents: [
        { title: "Data Science Career Fair", date: "2025-08-01", type: "Conference" },
        { title: "Big Data Technologies", date: "2025-08-05", type: "Seminar" }
      ]
    },
    {
      id: 4,
      name: "Design Studio Pro",
      category: "Design",
      location: "Chennai, India",
      rating: 4.6,
      reviews: 678,
      students: 15000,
      courses: 16,
      events: 6,
      established: "2020",
      description: "Creative design institute focusing on UI/UX, graphic design, and digital art with industry mentorship.",
      specializations: ["UI/UX Design", "Graphic Design", "Motion Graphics", "Digital Art"],
      contact: {
        phone: "+91 65432 10987",
        email: "info@designstudio.com",
        website: "www.designstudio.com"
      },
      verified: true,
      premium: false,
      featuredCourses: [
        { title: "UI/UX Design Masterclass", students: 2800, rating: 4.8 },
        { title: "Graphic Design Fundamentals", students: 2200, rating: 4.6 },
        { title: "Advanced Prototyping", students: 1900, rating: 4.7 }
      ],
      upcomingEvents: [
        { title: "Design Thinking Workshop", date: "2025-07-29", type: "Workshop" },
        { title: "Portfolio Review Session", date: "2025-08-02", type: "Seminar" }
      ]
    },
    {
      id: 5,
      name: "Business School Pro",
      category: "Business",
      location: "Hyderabad, India",
      rating: 4.5,
      reviews: 456,
      students: 12000,
      courses: 14,
      events: 10,
      established: "2019",
      description: "Professional business education institute offering MBA preparation, leadership, and entrepreneurship courses.",
      specializations: ["Business Strategy", "Leadership", "Entrepreneurship", "Finance"],
      contact: {
        phone: "+91 54321 09876",
        email: "admin@businessschool.com",
        website: "www.businessschool.com"
      },
      verified: true,
      premium: true,
      featuredCourses: [
        { title: "Business Strategy & Leadership", students: 1800, rating: 4.7 },
        { title: "Entrepreneurship Bootcamp", students: 1500, rating: 4.5 },
        { title: "Financial Management", students: 1200, rating: 4.6 }
      ],
      upcomingEvents: [
        { title: "Startup Funding Workshop", date: "2025-08-05", type: "Workshop" },
        { title: "Leadership Excellence", date: "2025-08-08", type: "Conference" }
      ]
    },
    {
      id: 6,
      name: "CodeMasters",
      category: "Technology",
      location: "Pune, India",
      rating: 4.7,
      reviews: 923,
      students: 22000,
      courses: 20,
      events: 9,
      established: "2018",
      description: "Coding bootcamp and programming institute with focus on practical skills and job placement assistance.",
      specializations: ["Programming", "Software Development", "DevOps", "Cloud Computing"],
      contact: {
        phone: "+91 43210 98765",
        email: "support@codemasters.com",
        website: "www.codemasters.com"
      },
      verified: true,
      premium: false,
      featuredCourses: [
        { title: "Full Stack Development", students: 3800, rating: 4.8 },
        { title: "Python Programming", students: 3200, rating: 4.7 },
        { title: "DevOps Engineering", students: 2500, rating: 4.6 }
      ],
      upcomingEvents: [
        { title: "Coding Competition", date: "2025-07-27", type: "Competition" },
        { title: "Tech Talk Series", date: "2025-08-03", type: "Webinar" }
      ]
    }
  ];

  const filteredInstitutes = institutes.filter(institute => {
    const matchesSearch = institute.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institute.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institute.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || institute.category === selectedCategory;
    const matchesLocation = locationFilter === 'All' || institute.location.includes(locationFilter);
    
    let matchesRating = true;
    if (ratingFilter !== 'All') {
      const minRating = parseFloat(ratingFilter.replace('+', ''));
      matchesRating = institute.rating >= minRating;
    }
    
    return matchesSearch && matchesCategory && matchesLocation && matchesRating;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-[#E1E5F2]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#022B3A] mb-4">Partner Institutes</h1>
            <p className="text-xl text-[#1F7A8C] max-w-2xl mx-auto">
              Discover top-rated institutes and training providers offering quality education
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-5 h-5" />
              <Input
                type="text"
                placeholder="Search institutes, specializations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
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
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A]"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>

              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="px-4 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A]"
              >
                {ratings.map(rating => (
                  <option key={rating} value={rating}>{rating === 'All' ? 'All Ratings' : `${rating} Stars`}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-[#1F7A8C]">
            Showing {filteredInstitutes.length} institutes {searchTerm && `for "${searchTerm}"`}
          </div>
        </div>
      </div>

      {/* Institutes Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredInstitutes.map((institute) => (
            <Card key={institute.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-[#1F7A8C] rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-[#022B3A] group-hover:text-[#1F7A8C] transition-colors">
                          {institute.name}
                        </h3>
                        {institute.verified && (
                          <Badge variant="success" className="text-xs">✓ Verified</Badge>
                        )}
                        {institute.premium && (
                          <Badge variant="warning" className="text-xs">⭐ Premium</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4 text-[#1F7A8C]" />
                        <span className="text-sm text-[#1F7A8C]">{institute.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{institute.category}</Badge>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(institute.rating)}
                    <span className="font-medium text-sm ml-1">{institute.rating}</span>
                    <span className="text-sm text-[#1F7A8C]">({institute.reviews})</span>
                  </div>
                  <div className="text-sm text-[#1F7A8C]">
                    Est. {institute.established}
                  </div>
                </div>

                <p className="text-[#022B3A] mb-4 line-clamp-2">{institute.description}</p>

                {/* Specializations */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {institute.specializations.map((spec, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#022B3A]">{institute.students.toLocaleString()}</div>
                    <div className="text-xs text-[#1F7A8C]">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#022B3A]">{institute.courses}</div>
                    <div className="text-xs text-[#1F7A8C]">Courses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#022B3A]">{institute.events}</div>
                    <div className="text-xs text-[#1F7A8C]">Events</div>
                  </div>
                </div>

                {/* Featured Courses */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#022B3A] mb-3">Featured Courses</h4>
                  <div className="space-y-2">
                    {institute.featuredCourses.slice(0, 2).map((course, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-[#E1E5F2] rounded">
                        <div>
                          <div className="text-sm font-medium text-[#022B3A]">{course.title}</div>
                          <div className="text-xs text-[#1F7A8C]">{course.students} students</div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{course.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#022B3A] mb-3">Upcoming Events</h4>
                  <div className="space-y-2">
                    {institute.upcomingEvents.slice(0, 2).map((event, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-[#BFDBF7] rounded">
                        <div>
                          <div className="text-sm font-medium text-[#022B3A]">{event.title}</div>
                          <div className="text-xs text-[#1F7A8C]">{new Date(event.date).toLocaleDateString()}</div>
                        </div>
                        <Badge variant="outline" className="text-xs">{event.type}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-[#E1E5F2] pt-4 mb-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#1F7A8C]" />
                      <span className="text-[#022B3A]">{institute.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#1F7A8C]" />
                      <span className="text-[#022B3A]">{institute.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#1F7A8C]" />
                      <span className="text-[#022B3A]">{institute.contact.website}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    className="flex-1 group"
                    onClick={() => setCurrentPage('institute-profile')}
                  >
                    View Profile
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredInstitutes.length === 0 && (
          <div className="text-center py-16">
            <Building className="w-16 h-16 text-[#1F7A8C] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#022B3A] mb-2">No institutes found</h3>
            <p className="text-[#1F7A8C] mb-4">Try adjusting your search criteria or filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setLocationFilter('All');
                setRatingFilter('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Load More */}
      {filteredInstitutes.length > 0 && (
        <div className="text-center py-8">
          <Button variant="outline" size="lg" className="px-8">
            Load More Institutes
          </Button>
        </div>
      )}
    </div>
  );
};

export default InstitutesListing;
