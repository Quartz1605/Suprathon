import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, Lock, CheckCircle, X } from 'lucide-react';

const UserSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Account created successfully!');
    setIsSubmitting(false);
  };

  const InputField = ({  label, name, type = 'text', placeholder, value, onChange, error, rightIcon }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/90">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-blue-400" />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 text-white placeholder-white/50 ${
            error 
              ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' 
              : 'hover:border-white/30 hover:bg-white/15'
          }`}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-500 flex items-center gap-1">
          <X size={14} />
          {error}
        </p>
      )}
    </div>
  );

  const PasswordStrengthIndicator = ({ password }) => {
    const getStrength = () => {
      if (password.length === 0) return 0;
      if (password.length < 6) return 1;
      if (password.length < 8) return 2;
      if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) return 4;
      return 3;
    };

    const strength = getStrength();
    const colors = ['#ef4444', '#f59e0b', '#eab308', '#22c55e', '#16a34a'];
    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];

    if (password.length === 0) return null;

    return (
      <div className="mt-2">
        <div className="flex space-x-1">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="h-2 flex-1 rounded-full"
              style={{
                backgroundColor: level <= strength ? colors[strength] : 'rgba(255,255,255,0.2)'
              }}
            />
          ))}
        </div>
        <p className="text-sm mt-1 text-white/70">
          Password strength: {labels[strength]}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Base dark background */}
        <div className="w-full h-full bg-slate-900"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating shapes */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          
          {/* Geometric grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
            </svg>
          </div>
        </div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNCIvPgo8L3N2Zz4K')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        {/* Modern floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-teal-400/60 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-indigo-400/60 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        
        {/* Floating squares */}
        <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-cyan-400/40 rotate-45 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/5 right-1/5 w-4 h-4 bg-pink-400/40 rotate-45 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/5 left-1/2 w-2 h-2 bg-green-400/40 rotate-45 animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* Main Form Container */}
      <div className="relative z-20 w-full max-w-md">
        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30">
              <User className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Join EduConnect
            </h2>
            <p className="text-white/80">
              Create your account to discover amazing courses and events
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                icon={User}
                label="First Name"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
              />
              <InputField
                icon={User}
                label="Last Name"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
              />
            </div>

            {/* Phone Number */}
            <InputField
              icon={Phone}
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
            />

            {/* Email */}
            <InputField
              icon={Mail}
              label="Email Address"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-12 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200 text-white placeholder-white/50 ${
                    errors.password 
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' 
                      : 'hover:border-white/30 hover:bg-white/15'
                  }`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-blue-400 hover:text-white transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-blue-400 hover:text-white transition-colors" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <X size={14} />
                  {errors.password}
                </p>
              )}
              <PasswordStrengthIndicator password={formData.password} />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-white/30 bg-white/10 text-blue-500 focus:ring-2 focus:ring-blue-500/50"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-white/90">
                I agree to the{' '}
                <a href="#" className="font-medium hover:underline text-blue-400 hover:text-blue-300">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium hover:underline text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-sm text-white/70">
                Already have an account?{' '}
                <a href="#" className="font-medium hover:underline text-blue-400 hover:text-blue-300">
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default UserSignup;