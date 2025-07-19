import React, { useState } from 'react';
import { Menu, X, User, BookOpen, Calendar, MessageCircle, Bot, Search, Bell, Home, Building } from 'lucide-react';
import { cn } from '../../lib/utils';

const Navbar = ({ currentPage, setCurrentPage, user = null }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'institutes', label: 'Institutes', icon: Building },
    { id: 'discussion', label: 'Discussion', icon: MessageCircle },
    { id: 'chatbot', label: 'AI Help', icon: Bot },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-[#E1E5F2] sticky top-0 z-50 w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center h-16 gap-2 sm:gap-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-[#022B3A] hover:bg-[#E1E5F2] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center cursor-pointer flex-shrink-0" onClick={() => setCurrentPage('home')}>
            <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#022B3A] whitespace-nowrap">
              EduConnect Pro
            </div>
          </div>

          {/* Desktop Navigation - Show on medium screens and above */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-1 justify-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={cn(
                    "flex items-center px-2 lg:px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                    currentPage === item.id
                      ? "bg-[#1F7A8C] text-white shadow-md"
                      : "text-[#022B3A] hover:bg-[#E1E5F2] hover:text-[#1F7A8C]"
                  )}
                  title={item.label}
                >
                  <Icon className="w-4 h-4" />
                  <span className="ml-2 hidden lg:inline text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar - Always visible but responsive width */}
          <div className="flex-1 md:flex-none md:w-32 lg:w-48 xl:w-56 mx-2 md:mx-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 border border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none transition-colors text-sm"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Notifications - Hidden on mobile */}
            <button className="hidden sm:flex relative p-2 text-[#022B3A] hover:bg-[#E1E5F2] rounded-lg transition-colors" aria-label="Notifications">
              <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-[10px]">
                3
              </span>
            </button>

            {/* Login/Profile Button */}
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#1F7A8C] rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
                <button
                  onClick={() => setCurrentPage('profile')}
                  className="hidden md:block text-[#022B3A] text-sm px-3 py-2 hover:bg-[#E1E5F2] rounded-lg transition-colors font-medium whitespace-nowrap"
                >
                  Profile
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCurrentPage('login')}
                className="flex items-center px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-white bg-[#1F7A8C] hover:bg-[#022B3A] whitespace-nowrap shadow-md flex-shrink-0"
              >
                <User className="w-4 h-4 mr-1 lg:mr-2" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#E1E5F2] py-4 px-4 bg-white">
            {/* Navigation Items */}
            <div className="space-y-1 mb-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors text-sm font-medium",
                      currentPage === item.id
                        ? "bg-[#1F7A8C] text-white shadow-md"
                        : "text-[#022B3A] hover:bg-[#E1E5F2]"
                    )}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
            </div>
            
            {/* Notifications for Mobile */}
            <button className="flex items-center w-full px-4 py-3 rounded-lg text-[#022B3A] hover:bg-[#E1E5F2] font-medium text-sm mb-4">
              <Bell className="w-5 h-5 mr-3" />
              Notifications
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            {/* Auth Section */}
            <div className="pt-4 border-t border-[#E1E5F2]">
              {!user ? (
                <button
                  onClick={() => {
                    setCurrentPage('login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-[#1F7A8C] text-white font-medium text-sm shadow-md"
                >
                  <User className="w-5 h-5 mr-3" />
                  Login
                </button>
              ) : (
                <button
                  onClick={() => {
                    setCurrentPage('profile');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-3 rounded-lg text-[#022B3A] hover:bg-[#E1E5F2] font-medium text-sm"
                >
                  <div className="w-6 h-6 bg-[#1F7A8C] rounded-full flex items-center justify-center mr-3">
                    <User className="w-3 h-3 text-white" />
                  </div>
                  View Profile
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
