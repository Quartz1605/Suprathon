import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Users, Star, TrendingUp, User, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const CoursesListing = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = ['All', 'Programming', 'Data Science', 'Design', 'Marketing', 'Business', 'Languages', 'Personal Development'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      provider: "TechAcademy Pro",
      price: "₹7,999",
      originalPrice: "₹12,999",
      rating: 4.8,
      reviews: 2547,
      students: 45000,
      duration: "20 weeks",
      category: "Programming",
      level: "Beginner",
      tags: ["JavaScript", "React", "Node.js", "MongoDB"],
      description: "Master web development with this comprehensive course covering frontend and backend technologies.",
      instructor: "John Smith",
      lastUpdated: "2025-01-15",
      bestseller: true,
      features: ["Lifetime Access", "Certificate", "30-day Money Back"]
    },
    {
      id: 2,
      title: "Machine Learning A-Z",
      provider: "DataLearn Academy",
      price: "₹9,999",
      originalPrice: "₹15,999",
      rating: 4.9,
      reviews: 1823,
      students: 32000,
      duration: "16 weeks",
      category: "Data Science",
      level: "Intermediate",
      tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      description: "Comprehensive machine learning course with hands-on projects and real-world applications.",
      instructor: "Dr. Sarah Johnson",
      lastUpdated: "2025-01-10",
      bestseller: false,
      features: ["Hands-on Projects", "Certificate", "Career Support"]
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      provider: "Marketing Institute",
      price: "₹5,499",
      originalPrice: "₹8,999",
      rating: 4.7,
      reviews: 987,
      students: 18500,
      duration: "12 weeks",
      category: "Marketing",
      level: "Beginner",
      tags: ["SEO", "Social Media", "Google Ads", "Analytics"],
      description: "Learn digital marketing strategies to grow your business and career in the digital age.",
      instructor: "Mark Wilson",
      lastUpdated: "2025-01-08",
      bestseller: true,
      features: ["Live Sessions", "Certificate", "Job Assistance"]
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      provider: "Design Studio",
      price: "₹6,999",
      originalPrice: "₹10,999",
      rating: 4.6,
      reviews: 1245,
      students: 15000,
      duration: "10 weeks",
      category: "Design",
      level: "Beginner",
      tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "Create stunning user interfaces and experiences with modern design principles.",
      instructor: "Emma Davis",
      lastUpdated: "2025-01-12",
      bestseller: false,
      features: ["Design Resources", "Portfolio Review", "Certificate"]
    },
    {
      id: 5,
      title: "Python for Data Analysis",
      provider: "CodeMasters",
      price: "₹4,999",
      originalPrice: "₹7,999",
      rating: 4.8,
      reviews: 1567,
      students: 22000,
      duration: "8 weeks",
      category: "Data Science",
      level: "Intermediate",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
      description: "Master Python for data analysis with practical projects and real datasets.",
      instructor: "Alex Chen",
      lastUpdated: "2025-01-14",
      bestseller: true,
      features: ["Real Projects", "Code Reviews", "Certificate"]
    },
    {
      id: 6,
      title: "Business Strategy & Leadership",
      provider: "Business School Pro",
      price: "₹8,999",
      originalPrice: "₹13,999",
      rating: 4.7,
      reviews: 876,
      students: 12000,
      duration: "14 weeks",
      category: "Business",
      level: "Advanced",
      tags: ["Strategy", "Leadership", "Management", "Case Studies"],
      description: "Develop strategic thinking and leadership skills for business success.",
      instructor: "Robert Taylor",
      lastUpdated: "2025-01-09",
      bestseller: false,
      features: ["Case Studies", "Mentorship", "Certificate"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return parseInt(a.price.replace(/[₹,]/g, '')) - parseInt(b.price.replace(/[₹,]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[₹,]/g, '')) - parseInt(a.price.replace(/[₹,]/g, ''));
      case 'newest':
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-[#E1E5F2]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#022B3A] mb-4">Discover Amazing Courses</h1>
            <p className="text-xl text-[#1F7A8C] max-w-2xl mx-auto">
              Learn from industry experts and advance your career with our comprehensive course catalog
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-5 h-5" />
              <Input
                type="text"
                placeholder="Search courses, instructors, or topics..."
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
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A]"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A]"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-[#1F7A8C]">
            Showing {sortedCourses.length} courses {searchTerm && `for "${searchTerm}"`}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-t-xl flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {course.bestseller && (
                    <Badge variant="warning" className="bg-yellow-500 text-white">
                      ⭐ Bestseller
                    </Badge>
                  )}
                  <Badge variant="outline" className="bg-white/90 backdrop-blur">
                    {course.level}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">
                    {course.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-sm">{course.rating}</span>
                    <span className="text-sm text-[#1F7A8C]">({course.reviews})</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                
                <CardTitle className="text-lg group-hover:text-[#1F7A8C] transition-colors line-clamp-2">
                  {course.title}
                </CardTitle>
                
                <CardDescription className="flex items-center gap-1 mb-2">
                  <User className="w-4 h-4" />
                  {course.provider}
                </CardDescription>

                <p className="text-sm text-[#1F7A8C] line-clamp-2">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {course.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{course.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Course Info */}
                <div className="flex justify-between items-center mb-4 text-sm text-[#1F7A8C]">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.features.map((feature, index) => (
                    <Badge key={index} variant="success" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-[#022B3A]">{course.price}</div>
                    {course.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="group"
                    onClick={() => setCurrentPage('course-details')}
                  >
                    View Details
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedCourses.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-[#1F7A8C] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#022B3A] mb-2">No courses found</h3>
            <p className="text-[#1F7A8C] mb-4">Try adjusting your search criteria or filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedLevel('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Load More */}
      {sortedCourses.length > 0 && (
        <div className="text-center py-8">
          <Button variant="outline" size="lg" className="px-8">
            Load More Courses
          </Button>
        </div>
      )}
    </div>
  );
};

export default CoursesListing;
