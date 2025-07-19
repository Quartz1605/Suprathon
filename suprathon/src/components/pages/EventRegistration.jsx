import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Trophy, Calendar, MapPin, CreditCard, Shield, CheckCircle, User, Mail, Phone, Star, Clock, Award } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const EventRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [teamMembers, setTeamMembers] = useState([{ name: '', email: '', skills: '' }]);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      organization: '',
      designation: '',
      experience: ''
    },
    teamInfo: {
      teamName: '',
      teamSize: 1,
      teamDescription: '',
      previousExperience: ''
    },
    preferences: {
      programmingLanguages: [],
      interests: [],
      motivation: '',
      expectations: ''
    },
    payment: {
      method: 'card',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      nameOnCard: ''
    }
  });

  const event = {
    id: 1,
    title: "National Hackathon 2025",
    organizer: "TechCorp Innovation Hub",
    category: "Competition",
    eventTypeMode: "Hybrid",
    eventTypeMember: "Team",
    price: 500,
    prizes: 100000,
    startDate: "2025-03-10",
    endDate: "2025-03-15",
    location: "Mumbai, India",
    venue: "TechCorp Innovation Center",
    duration: "5 days",
    rating: 4.9,
    reviews: 342,
    participants: 2500,
    maxParticipants: 3000,
    teamSize: "2-4 members",
    features: [
      "24/7 mentorship support",
      "Workshops by industry experts",
      "Free meals and accommodation",
      "Networking opportunities",
      "Certificate of participation",
      "Access to exclusive job opportunities",
      "Tech talks and keynote sessions",
      "Team matching assistance"
    ]
  };

  const steps = [
    { id: 1, title: "Personal Info", description: "Tell us about yourself" },
    { id: 2, title: "Team Details", description: "Form your team" },
    { id: 3, title: "Preferences", description: "Your interests & skills" },
    { id: 4, title: "Payment", description: "Complete registration" },
    { id: 5, title: "Confirmation", description: "Registration complete" }
  ];

  const programmingLanguages = [
    'JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 
    'Flutter', 'Swift', 'Kotlin', 'Go', 'Rust', 'PHP'
  ];

  const interestAreas = [
    'Web Development', 'Mobile Apps', 'AI/ML', 'Blockchain', 
    'IoT', 'Cybersecurity', 'Data Science', 'Game Development',
    'AR/VR', 'FinTech', 'HealthTech', 'EdTech'
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

  const handleArrayChange = (section, field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: checked 
          ? [...prev[section][field], value]
          : prev[section][field].filter(item => item !== value)
      }
    }));
  };

  const addTeamMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([...teamMembers, { name: '', email: '', skills: '' }]);
    }
  };

  const removeTeamMember = (index) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  const updateTeamMember = (index, field, value) => {
    const updated = teamMembers.map((member, i) => 
      i === index ? { ...member, [field]: value } : member
    );
    setTeamMembers(updated);
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const registrationData = {
      ...formData,
      teamMembers,
      eventId: event.id
    };
    console.log('Registration data:', registrationData);
    setCurrentStep(5);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              Organization/University
            </label>
            <input
              type="text"
              value={formData.personalInfo.organization}
              onChange={(e) => handleInputChange('personalInfo', 'organization', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Designation/Role
            </label>
            <input
              type="text"
              value={formData.personalInfo.designation}
              onChange={(e) => handleInputChange('personalInfo', 'designation', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
              placeholder="e.g., Student, Developer, Designer"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Programming Experience
          </label>
          <select
            value={formData.personalInfo.experience}
            onChange={(e) => handleInputChange('personalInfo', 'experience', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
          >
            <option value="">Select experience level</option>
            <option value="beginner">Beginner (0-1 years)</option>
            <option value="intermediate">Intermediate (1-3 years)</option>
            <option value="advanced">Advanced (3-5 years)</option>
            <option value="expert">Expert (5+ years)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderTeamInfo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">Team Information</h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm text-blue-700">
              This is a team event. You can register alone and we'll help you find teammates, or register with your existing team.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Team Name
            </label>
            <input
              type="text"
              value={formData.teamInfo.teamName}
              onChange={(e) => handleInputChange('teamInfo', 'teamName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
              placeholder="Enter your team name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Team Size (including you)
            </label>
            <select
              value={formData.teamInfo.teamSize}
              onChange={(e) => {
                const size = parseInt(e.target.value);
                handleInputChange('teamInfo', 'teamSize', size);
                // Adjust team members array
                if (size > teamMembers.length) {
                  const newMembers = [...teamMembers];
                  while (newMembers.length < size - 1) {
                    newMembers.push({ name: '', email: '', skills: '' });
                  }
                  setTeamMembers(newMembers);
                } else if (size < teamMembers.length + 1) {
                  setTeamMembers(teamMembers.slice(0, size - 1));
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            >
              <option value={1}>1 (Looking for teammates)</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>

        {formData.teamInfo.teamSize > 1 && (
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#022B3A]">Team Members</h4>
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-medium text-gray-900">Member {index + 2}</h5>
                  {teamMembers.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeTeamMember(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={member.email}
                      onChange={(e) => updateTeamMember(index, 'email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills/Expertise
                  </label>
                  <input
                    type="text"
                    value={member.skills}
                    onChange={(e) => updateTeamMember(index, 'skills', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
                    placeholder="e.g., Frontend Developer, UI/UX Designer"
                  />
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Description (Optional)
          </label>
          <textarea
            value={formData.teamInfo.teamDescription}
            onChange={(e) => handleInputChange('teamInfo', 'teamDescription', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            rows="3"
            placeholder="Tell us about your team's strengths and what you hope to achieve..."
          />
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">Skills & Preferences</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Programming Languages/Technologies (Select all that apply)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {programmingLanguages.map((lang) => (
              <label key={lang} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.preferences.programmingLanguages.includes(lang)}
                  onChange={(e) => handleArrayChange('preferences', 'programmingLanguages', lang, e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">{lang}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Areas of Interest (Select all that apply)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {interestAreas.map((area) => (
              <label key={area} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.preferences.interests.includes(area)}
                  onChange={(e) => handleArrayChange('preferences', 'interests', area, e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">{area}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What motivates you to participate in this hackathon?
          </label>
          <textarea
            value={formData.preferences.motivation}
            onChange={(e) => handleInputChange('preferences', 'motivation', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            rows="3"
            placeholder="Share your motivation and goals..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What do you expect to learn or achieve?
          </label>
          <textarea
            value={formData.preferences.expectations}
            onChange={(e) => handleInputChange('preferences', 'expectations', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#1F7A8C] focus:outline-none"
            rows="3"
            placeholder="Describe your expectations from this event..."
          />
        </div>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-[#022B3A] mb-4">Payment Information</h3>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <Trophy className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="text-sm text-yellow-700">
              Registration fee is per team. Total prize pool: ₹{event.prizes.toLocaleString()}
            </span>
          </div>
        </div>

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
          Welcome to {event.title}! Get ready for an amazing hackathon experience.
        </p>
      </div>
      <div className="bg-[#E1E5F2] rounded-lg p-6 text-left">
        <h4 className="font-semibold text-[#022B3A] mb-3">What's Next?</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Check your email for event details and confirmation
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Join our Discord server for updates and team coordination
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Download the event toolkit and resources
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            Prepare for the pre-event briefing session
          </div>
          {formData.teamInfo.teamSize === 1 && (
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              We'll help you find teammates through our matching system
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={() => navigate('/events')}>
          Browse More Events
        </Button>
        <Button variant="outline" onClick={() => navigate('/profile')}>
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
            onClick={() => navigate(`/event-details/${id}`)}
            className="flex items-center text-[#1F7A8C] hover:text-[#022B3A] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Event Details
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Progress Stepper */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex items-center justify-between min-w-full">
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
                      <div className="ml-3 hidden lg:block">
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
                        className={`w-8 lg:w-16 h-0.5 mx-2 lg:mx-4 ${
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
                {currentStep === 2 && renderTeamInfo()}
                {currentStep === 3 && renderPreferences()}
                {currentStep === 4 && renderPayment()}
                {currentStep === 5 && renderConfirmation()}

                {/* Navigation Buttons */}
                {currentStep < 5 && (
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={currentStep === 4 ? handleSubmit : handleNext}
                    >
                      {currentStep === 4 ? 'Complete Registration' : 'Next'}
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
                  <CardTitle className="text-lg">Event Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#022B3A] mb-2">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">by {event.organizer}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {event.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {event.participants.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Start Date:</span>
                      <span className="font-medium">{formatDate(event.startDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{event.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Team Size:</span>
                      <span className="font-medium">{event.teamSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <Badge variant="secondary">{event.eventTypeMode}</Badge>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Prize Pool:</span>
                      <span className="font-bold text-green-600">₹{event.prizes.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Registration Fee:</span>
                      <span className="text-[#1F7A8C]">₹{event.price.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">*Per team registration</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-center text-sm text-blue-700">
                      <Trophy className="w-4 h-4 mr-2" />
                      Exciting prizes and networking opportunities await!
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

export default EventRegistration;
