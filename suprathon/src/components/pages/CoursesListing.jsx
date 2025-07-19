import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Clock, Users, Star, TrendingUp, User, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const CoursesListing = () => {
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
      features: ["Lifetime Access", "Certificate", "30-day Money Back"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center"
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
      features: ["Hands-on Projects", "Certificate", "Career Support"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center"
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
      features: ["Live Sessions", "Certificate", "Job Assistance"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop&crop=center"
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
      features: ["Design Resources", "Portfolio Review", "Certificate"],
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=400&fit=crop&crop=center"
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
      features: ["Real Projects", "Code Reviews", "Certificate"],
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop&crop=center"
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
      features: ["Case Studies", "Mentorship", "Certificate"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center"
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
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2] overflow-x-hidden">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-[#E1E5F2] w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 lg:py-8">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#022B3A] mb-2 sm:mb-4 px-2">
              Discover Amazing Courses
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-[#1F7A8C] max-w-2xl mx-auto px-4">
              Learn from industry experts and advance your career with our comprehensive course catalog
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full">
            <div className="relative w-full max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-12 w-full text-sm sm:text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-4xl mx-auto w-full">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A] text-sm w-full"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A] text-sm w-full"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none bg-white text-[#022B3A] text-sm w-full"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#1F7A8C] text-center">
            Showing {sortedCourses.length} courses {searchTerm && `for "${searchTerm}"`}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sortedCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full w-full max-w-full">
                <div className="relative w-full">
                  <div className="w-full h-36 sm:h-44 md:h-48 bg-gray-200 rounded-t-xl overflow-hidden">
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
                    <div className="w-full h-full bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-t-xl flex items-center justify-center" style={{display: 'none'}}>
                      <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {course.bestseller && (
                      <Badge variant="warning" className="bg-yellow-500 text-white text-xs px-1 py-0.5">
                        ⭐ Bestseller
                      </Badge>
                    )}
                    <Badge variant="outline" className="bg-white/90 backdrop-blur text-xs px-1 py-0.5">
                      {course.level}
                    </Badge>
                  </div>

                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs px-1 py-0.5">
                      {course.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="flex-1 p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-xs sm:text-sm">{course.rating}</span>
                      <span className="text-xs text-[#1F7A8C]">({course.reviews})</span>
                    </div>
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  </div>
                  
                  <CardTitle className="text-sm sm:text-base md:text-lg group-hover:text-[#1F7A8C] transition-colors line-clamp-2 mb-2">
                    {course.title}
                  </CardTitle>
                  
                  <CardDescription className="flex items-center gap-1 mb-2 text-xs sm:text-sm">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">{course.provider}</span>
                  </CardDescription>

                  <p className="text-xs sm:text-sm text-[#1F7A8C] line-clamp-2">
                    {course.description}
                  </p>
                </CardHeader>

                <CardContent className="p-3 sm:p-4 pt-0">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {course.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs px-1 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                    {course.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs px-1 py-0.5">
                        +{course.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Course Info */}
                  <div className="flex justify-between items-center mb-3 text-xs sm:text-sm text-[#1F7A8C]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{course.duration.split(' ')[0]}w</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{(course.students / 1000).toFixed(0)}k</span>
                    </div>
                  </div>

                  {/* Features - Only on larger screens */}
                  <div className="hidden md:flex flex-wrap gap-1 mb-3">
                    {course.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="success" className="text-xs px-1 py-0.5">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-base sm:text-lg md:text-xl font-bold text-[#022B3A]">{course.price}</div>
                      {course.originalPrice && (
                        <div className="text-xs text-gray-500 line-through">{course.originalPrice}</div>
                      )}
                    </div>
                    <Link to={`/course-registration/${course.id}`}>
                      <Button
                        size="sm"
                        className="group text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                      >
                        Enroll Now
                        <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
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
      </div>

      {/* Load More */}
      {sortedCourses.length > 0 && (
        <div className="text-center py-6 sm:py-8">
          <Button variant="outline" size="lg" className="px-6 sm:px-8">
            Load More Courses
          </Button>
        </div>
      )}
    </div>
  );
};export default CoursesListing;
