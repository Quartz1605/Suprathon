import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Play, BookOpen, Clock, Users, Star, Calendar, Award, CheckCircle, Globe, Download, Share2, Heart, User, ChevronRight, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModule, setExpandedModule] = useState(null);

  const course = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    provider: "TechAcademy Pro",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop&crop=center",
    instructor: {
      name: "John Smith",
      title: "Senior Full Stack Developer",
      experience: "8+ years",
      rating: 4.9,
      students: 50000,
      courses: 12,
      bio: "John is a passionate educator and experienced developer who has worked with companies like Google and Facebook. He specializes in modern web technologies and has helped thousands of students launch successful careers in tech."
    },
    price: "₹7,999",
    originalPrice: "₹12,999",
    discount: "38% off",
    rating: 4.8,
    reviews: 2547,
    students: 45000,
    duration: "20 weeks",
    totalHours: "40 hours",
    level: "Beginner",
    language: "English",
    subtitles: ["Hindi", "English"],
    lastUpdated: "January 2025",
    category: "Programming",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "HTML", "CSS"],
    description: "Master web development with this comprehensive course covering frontend and backend technologies. Learn to build real-world projects and launch your career in tech.",
    longDescription: "This comprehensive web development bootcamp is designed to take you from complete beginner to job-ready developer. You'll learn the latest technologies including HTML5, CSS3, JavaScript ES6+, React, Node.js, MongoDB, and more. The course includes hands-on projects, real-world applications, and career guidance to help you succeed in the tech industry.",
    features: [
      "40+ hours of video content",
      "Hands-on projects and exercises",
      "Lifetime access to course materials",
      "Certificate of completion",
      "30-day money-back guarantee",
      "Direct access to instructor",
      "Community support",
      "Career guidance and job placement assistance"
    ],
    requirements: [
      "Basic computer skills",
      "No prior programming experience required",
      "Access to a computer with internet connection",
      "Willingness to learn and practice"
    ],
    learningOutcomes: [
      "Build responsive websites using HTML, CSS, and JavaScript",
      "Create dynamic web applications with React",
      "Develop backend APIs using Node.js and Express",
      "Work with databases using MongoDB",
      "Deploy applications to production",
      "Understand version control with Git",
      "Apply best practices for web development",
      "Build a portfolio of real-world projects"
    ],
    modules: [
      {
        id: 1,
        title: "Introduction to Web Development",
        duration: "2 hours",
        lessons: 8,
        topics: [
          "Course Introduction and Setup",
          "How the Web Works",
          "Development Environment Setup",
          "Introduction to HTML"
        ]
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        duration: "4 hours",
        lessons: 12,
        topics: [
          "HTML Structure and Syntax",
          "Working with Text and Links",
          "Lists and Tables",
          "Forms and Input Elements",
          "Semantic HTML5 Elements"
        ]
      },
      {
        id: 3,
        title: "CSS Styling and Layout",
        duration: "6 hours",
        lessons: 15,
        topics: [
          "CSS Basics and Selectors",
          "Box Model and Layout",
          "Flexbox and Grid",
          "Responsive Design",
          "CSS Animations and Transitions"
        ]
      },
      {
        id: 4,
        title: "JavaScript Fundamentals",
        duration: "8 hours",
        lessons: 20,
        topics: [
          "Variables and Data Types",
          "Functions and Scope",
          "DOM Manipulation",
          "Events and Event Handling",
          "Asynchronous JavaScript"
        ]
      },
      {
        id: 5,
        title: "React Development",
        duration: "10 hours",
        lessons: 18,
        topics: [
          "Introduction to React",
          "Components and JSX",
          "State and Props",
          "Hooks and Context",
          "React Router"
        ]
      },
      {
        id: 6,
        title: "Backend Development with Node.js",
        duration: "8 hours",
        lessons: 16,
        topics: [
          "Introduction to Node.js",
          "Express.js Framework",
          "RESTful APIs",
          "Authentication and Authorization",
          "Database Integration"
        ]
      },
      {
        id: 7,
        title: "Database with MongoDB",
        duration: "4 hours",
        lessons: 10,
        topics: [
          "NoSQL Databases",
          "MongoDB Basics",
          "Mongoose ODM",
          "Database Design"
        ]
      },
      {
        id: 8,
        title: "Deployment and Production",
        duration: "3 hours",
        lessons: 8,
        topics: [
          "Version Control with Git",
          "Deployment Strategies",
          "Production Best Practices",
          "Final Project"
        ]
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent course! John explains everything clearly and the projects are very practical. I landed my first developer job after completing this course.",
      helpful: 45
    },
    {
      id: 2,
      user: "Mike Chen",
      rating: 5,
      date: "1 month ago",
      comment: "Best web development course I've taken. The content is up-to-date and covers everything you need to know. Highly recommended!",
      helpful: 32
    },
    {
      id: 3,
      user: "Emily Davis",
      rating: 4,
      date: "3 weeks ago",
      comment: "Great course overall. The instructor is knowledgeable and the pace is perfect for beginners. Only wish there were more advanced topics.",
      helpful: 28
    }
  ];

  const relatedCourses = [
    {
      id: 2,
      title: "Advanced React Development",
      provider: "TechAcademy Pro",
      price: "₹5,999",
      rating: 4.7,
      students: 15000
    },
    {
      id: 3,
      title: "Node.js Masterclass",
      provider: "CodeMasters",
      price: "₹4,999",
      rating: 4.8,
      students: 12000
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const renderOverview = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">Course Description</h3>
        <p className="text-[#1F7A8C] leading-relaxed">{course.longDescription}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">What You'll Learn</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {course.learningOutcomes.map((outcome, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-[#022B3A]">{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">Requirements</h3>
        <ul className="space-y-2">
          {course.requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#1F7A8C] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#022B3A]">{requirement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">Course Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {course.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-[#022B3A]">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurriculum = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-[#022B3A] mb-2">Course Curriculum</h3>
        <p className="text-[#1F7A8C]">
          {course.modules.length} modules • {course.modules.reduce((acc, module) => acc + module.lessons, 0)} lessons • {course.totalHours} total
        </p>
      </div>

      {course.modules.map((module, index) => (
        <Card key={module.id} className="overflow-hidden">
          <div
            className="p-4 cursor-pointer hover:bg-[#E1E5F2] transition-colors"
            onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#1F7A8C] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-[#022B3A]">{module.title}</h4>
                  <p className="text-sm text-[#1F7A8C]">{module.lessons} lessons • {module.duration}</p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#1F7A8C] transition-transform ${
                  expandedModule === module.id ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>

          {expandedModule === module.id && (
            <div className="border-t border-[#E1E5F2] p-4 bg-[#E1E5F2]/30">
              <div className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center gap-3 py-2">
                    <Play className="w-4 h-4 text-[#1F7A8C]" />
                    <span className="text-[#022B3A]">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );

  const renderInstructor = () => (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-[#1F7A8C] rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {course.instructor.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#022B3A] mb-1">{course.instructor.name}</h3>
            <p className="text-[#1F7A8C] mb-4">{course.instructor.title}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#022B3A]">{course.instructor.rating}</div>
                <div className="text-sm text-[#1F7A8C]">Instructor Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#022B3A]">{course.instructor.students.toLocaleString()}</div>
                <div className="text-sm text-[#1F7A8C]">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#022B3A]">{course.instructor.courses}</div>
                <div className="text-sm text-[#1F7A8C]">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#022B3A]">{course.instructor.experience}</div>
                <div className="text-sm text-[#1F7A8C]">Experience</div>
              </div>
            </div>

            <p className="text-[#022B3A] leading-relaxed">{course.instructor.bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderReviews = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-[#022B3A] mb-2">{course.rating}</div>
            <div className="flex justify-center mb-2">{renderStars(course.rating)}</div>
            <div className="text-sm text-[#1F7A8C]">Course Rating</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-[#022B3A] mb-2">{course.reviews.toLocaleString()}</div>
            <div className="text-sm text-[#1F7A8C]">Reviews</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-[#022B3A] mb-2">{course.students.toLocaleString()}</div>
            <div className="text-sm text-[#1F7A8C]">Students</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1F7A8C] rounded-full flex items-center justify-center text-white font-semibold">
                  {review.user[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h4 className="font-semibold text-[#022B3A]">{review.user}</h4>
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-[#1F7A8C]">{review.date}</span>
                  </div>
                  <p className="text-[#022B3A] mb-3">{review.comment}</p>
                  <div className="flex items-center gap-4 text-sm text-[#1F7A8C]">
                    <button className="flex items-center gap-1 hover:text-[#022B3A]">
                      <Heart className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E1E5F2]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/courses')}
            className="flex items-center gap-2 text-[#1F7A8C] hover:text-[#022B3A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
                <Badge variant="success">Bestseller</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-[#022B3A] mb-4">{course.title}</h1>
              <p className="text-xl text-[#1F7A8C] mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-[#1F7A8C]">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-[#1F7A8C]" />
                  <span className="text-[#022B3A]">{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4 text-[#1F7A8C]" />
                  <span className="text-[#022B3A]">{course.instructor.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-[#1F7A8C]" />
                  <span className="text-[#022B3A]">Updated {course.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-[#1F7A8C]" />
                  <span className="text-[#022B3A]">{course.language}</span>
                </div>
              </div>
            </div>

            {/* Course Preview */}
            <Card className="mb-8">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-t-xl flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 backdrop-blur border-2 border-white/30 text-white hover:bg-white/30">
                    <Play className="w-6 h-6 mr-2" />
                    Preview Course
                  </Button>
                </div>
              </div>
            </Card>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-[#E1E5F2]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#1F7A8C] border-b-2 border-[#1F7A8C]'
                      : 'text-[#022B3A] hover:text-[#1F7A8C]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'curriculum' && renderCurriculum()}
              {activeTab === 'instructor' && renderInstructor()}
              {activeTab === 'reviews' && renderReviews()}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                {/* Course Preview */}
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-lg flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button variant="ghost" className="text-white hover:bg-white/20">
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#022B3A] mb-2">{course.price}</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    <Badge variant="danger">{course.discount}</Badge>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mb-6">
                  <Link to={`/course-registration/${id || course.id}`}>
                    <Button className="w-full" size="lg">
                      Enroll Now
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full">
                    Add to Wishlist
                  </Button>
                </div>

                {/* Course Info */}
                <div className="space-y-4 border-t border-[#E1E5F2] pt-6">
                  <div className="flex justify-between">
                    <span className="text-[#1F7A8C]">Duration:</span>
                    <span className="font-medium text-[#022B3A]">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1F7A8C]">Total Hours:</span>
                    <span className="font-medium text-[#022B3A]">{course.totalHours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1F7A8C]">Level:</span>
                    <span className="font-medium text-[#022B3A]">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1F7A8C]">Language:</span>
                    <span className="font-medium text-[#022B3A]">{course.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1F7A8C]">Certificate:</span>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-[#022B3A]">Yes</span>
                    </div>
                  </div>
                </div>

                {/* Share */}
                <div className="border-t border-[#E1E5F2] pt-6">
                  <Button variant="outline" className="w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Course
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Courses */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Related Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedCourses.map((relatedCourse) => (
                  <div key={relatedCourse.id} className="flex gap-3 p-3 bg-[#E1E5F2] rounded-lg cursor-pointer hover:bg-[#BFDBF7] transition-colors">
                    <div className="w-16 h-12 bg-[#1F7A8C] rounded flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#022B3A] text-sm line-clamp-2">{relatedCourse.title}</h4>
                      <p className="text-xs text-[#1F7A8C] mb-1">{relatedCourse.provider}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{relatedCourse.rating}</span>
                        </div>
                        <span className="text-sm font-bold text-[#022B3A]">{relatedCourse.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
