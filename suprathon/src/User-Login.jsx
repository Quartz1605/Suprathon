import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
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
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Login successful!');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Base dark background */}
        <div className="w-full h-full bg-slate-900"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating shapes */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          
          {/* Geometric grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        {/* Minimalist floating elements */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-indigo-400/50 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-cyan-400/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-purple-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        
        {/* Subtle floating squares */}
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-blue-400/30 rotate-45 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-violet-400/30 rotate-45 animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Main Login Container */}
      <div className="relative z-20 w-full max-w-md">
        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full mb-6 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/30">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-white/70">
              Sign in to your EduConnect account
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-indigo-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all duration-200 text-white placeholder-white/50 ${
                    errors.email 
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' 
                      : 'hover:border-white/30 hover:bg-white/15'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-indigo-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-12 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all duration-200 text-white placeholder-white/50 ${
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
                    <EyeOff className="h-5 w-5 text-indigo-400 hover:text-white transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-indigo-400 hover:text-white transition-colors" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/30 bg-white/10 text-indigo-500 focus:ring-2 focus:ring-indigo-500/50"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-white/80">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-600 hover:to-cyan-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/5 text-white/60">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-200 text-white/80 hover:text-white"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-200 text-white/80 hover:text-white"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-white/70">
                Don't have an account?{' '}
                <a href="#" className="font-medium hover:underline text-indigo-400 hover:text-indigo-300">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;