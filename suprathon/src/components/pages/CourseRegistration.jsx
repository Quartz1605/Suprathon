import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Shield, CheckCircle, User, Mail, Phone, Calendar, Star, Clock, Users, BookOpen, Award } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const CourseRegistration = ({ setCurrentPage }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      education: '',
      experience: ''
    },
    preferences: {
      learningGoals: '',
      timeCommitment: '',
      priorExperience: '',
      preferredSchedule: ''
    },
    payment: {
      method: 'card',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      nameOnCard: ''
    }
  });

  const course = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    provider: "TechAcademy Pro",
    instructor: "John Smith",
    price: 7999,
    originalPrice: 12999,
    discount: "38% off",
    rating: 4.8,
    reviews: 2547,
    students: 45000,
    duration: "20 weeks",
    totalHours: "40 hours",
    level: "Beginner",
    language: "English",
    certificate: true,
    features: [
      "40+ hours of video content",
      "Hands-on projects and exercises",
      "Lifetime access to course materials",
      "Certificate of completion",
      "30-day money-back guarantee",
      "Direct access to instructor",
      "Community support",
      "Career guidance and job placement assistance"
    ]
  };

  const steps = [
    { id: 1, title: "Personal Information", description: "Tell us about yourself" },
    { id: 2, title: "Learning Preferences", description: "Customize your learning experience" },
    { id: 3, title: "Payment", description: "Complete your registration" },
    { id: 4, title: "Confirmation", description: "Registration complete" }
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically submit the registration data
    console.log('Registration data:', formData);
    setCurrentStep(4);
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              value={formData.personalInfo.firstName}
              onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              value={formData.personalInfo.lastName}
              onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.personalInfo.email}
              onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.personalInfo.phone}
              onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              value={formData.personalInfo.dateOfBirth}
              onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Education Level
            </label>
            <select
              value={formData.personalInfo.education}
              onChange={(e) => handleInputChange('personalInfo', 'education', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            >
              <option value="">Select education level</option>
              <option value="high-school">High School</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="phd">PhD</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work Experience
          </label>
          <select
            value={formData.personalInfo.experience}
            onChange={(e) => handleInputChange('personalInfo', 'experience', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
          >
            <option value="">Select experience level</option>
            <option value="fresher">Fresher (0 years)</option>
            <option value="1-2">1-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">Learning Preferences</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What are your learning goals for this course?
            </label>
            <textarea
              value={formData.preferences.learningGoals}
              onChange={(e) => handleInputChange('preferences', 'learningGoals', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
              rows="3"
              placeholder="Describe what you hope to achieve..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How much time can you dedicate per week?
            </label>
            <select
              value={formData.preferences.timeCommitment}
              onChange={(e) => handleInputChange('preferences', 'timeCommitment', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            >
              <option value="">Select time commitment</option>
              <option value="1-3">1-3 hours per week</option>
              <option value="4-6">4-6 hours per week</option>
              <option value="7-10">7-10 hours per week</option>
              <option value="10+">10+ hours per week</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prior experience in web development?
            </label>
            <select
              value={formData.preferences.priorExperience}
              onChange={(e) => handleInputChange('preferences', 'priorExperience', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            >
              <option value="">Select experience level</option>
              <option value="none">Complete beginner</option>
              <option value="basic">Some basic knowledge</option>
              <option value="intermediate">Intermediate level</option>
              <option value="advanced">Advanced (looking to upskill)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred learning schedule
            </label>
            <select
              value={formData.preferences.preferredSchedule}
              onChange={(e) => handleInputChange('preferences', 'preferredSchedule', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            >
              <option value="">Select preferred schedule</option>
              <option value="self-paced">Self-paced</option>
              <option value="weekdays">Weekday evenings</option>
              <option value="weekends">Weekends</option>
              <option value="flexible">Flexible timing</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">Payment Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => handleInputChange('payment', 'method', 'card')}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  formData.payment.method === 'card'
                    ? 'border-[#1F7A8C] bg-[#1F7A8C] text-white'
                    : 'border-gray-300 hover:border-[#1F7A8C]'
                }`}
              >
                <CreditCard className="w-5 h-5 mx-auto mb-1" />
                Credit/Debit Card
              </button>
              <button
                onClick={() => handleInputChange('payment', 'method', 'upi')}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  formData.payment.method === 'upi'
                    ? 'border-[#1F7A8C] bg-[#1F7A8C] text-white'
                    : 'border-gray-300 hover:border-[#1F7A8C]'
                }`}
              >
                <Phone className="w-5 h-5 mx-auto mb-1" />
                UPI
              </button>
              <button
                onClick={() => handleInputChange('payment', 'method', 'netbanking')}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  formData.payment.method === 'netbanking'
                    ? 'border-[#1F7A8C] bg-[#1F7A8C] text-white'
                    : 'border-gray-300 hover:border-[#1F7A8C]'
                }`}
              >
                <Shield className="w-5 h-5 mx-auto mb-1" />
                Net Banking
              </button>
            </div>
          </div>

          {formData.payment.method === 'card' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number *
                </label>
                <input
                  type="text"
                  value={formData.payment.cardNumber}
                  onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date *
                  </label>
                  <input
                    type="text"
                    value={formData.payment.expiryDate}
                    onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV *
                  </label>
                  <input
                    type="text"
                    value={formData.payment.cvv}
                    onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name on Card *
                </label>
                <input
                  type="text"
                  value={formData.payment.nameOnCard}
                  onChange={(e) => handleInputChange('payment', 'nameOnCard', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
                  required
                />
              </div>
            </div>
          )}

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm text-green-700">
                Your payment information is secure and encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#022B3A] mb-2">Registration Successful!</h3>
        <p className="text-gray-600">
          Welcome to {course.title}! You're all set to begin your learning journey.
        </p>
      </div>
      <div className="bg-[#E1E5F2] rounded-lg p-6 text-left">
        <h4 className="font-semibold text-[#022B3A] mb-3">What's Next?</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Check your email for course access details
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Join our community Discord server
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Download the course materials
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Attend the welcome session (details in email)
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={() => setCurrentPage('courses')}>
          Browse More Courses
        </Button>
        <Button variant="outline" onClick={() => setCurrentPage('profile')}>
          Go to Profile
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <button
            onClick={() => setCurrentPage('course-details')}
            className="flex items-center text-[#1F7A8C] hover:text-[#022B3A] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Course Details
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Progress Stepper */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          currentStep >= step.id
                            ? 'bg-[#1F7A8C] text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {currentStep > step.id ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          step.id
                        )}
                      </div>
                      <div className="ml-3 hidden sm:block">
                        <p
                          className={`text-sm font-medium ${
                            currentStep >= step.id ? 'text-[#1F7A8C]' : 'text-gray-500'
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500">{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${
                          currentStep > step.id ? 'bg-[#1F7A8C]' : 'bg-gray-200'
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <Card>
              <CardContent className="p-6">
                {currentStep === 1 && renderPersonalInfo()}
                {currentStep === 2 && renderPreferences()}
                {currentStep === 3 && renderPayment()}
                {currentStep === 4 && renderConfirmation()}

                {/* Navigation Buttons */}
                {currentStep < 4 && (
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={currentStep === 3 ? handleSubmit : handleNext}
                    >
                      {currentStep === 3 ? 'Complete Registration' : 'Next'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Course Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#022B3A] mb-2">{course.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {course.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Hours:</span>
                      <span className="font-medium">{course.totalHours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Level:</span>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-medium">{course.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certificate:</span>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-[#1F7A8C] mr-1" />
                        <span className="font-medium">Yes</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Original Price:</span>
                      <span className="line-through text-gray-500">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Discount:</span>
                      <span className="text-green-600 font-medium">{course.discount}</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-[#1F7A8C]">₹{course.price.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center text-sm text-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      30-day money-back guarantee
                    </div>
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

export default CourseRegistration;
