import React, { useState } from 'react';
import { Menu, X, User, BookOpen, Calendar, MessageCircle, Bot, Search, Bell } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

const Navbar = ({ currentPage, setCurrentPage, user = null }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'institutes', label: 'Institutes', icon: User },
    { id: 'discussion', label: 'Discussion', icon: MessageCircle },
    { id: 'chatbot', label: 'AI Help', icon: Bot },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-[#E1E5F2] sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#022B3A] whitespace-nowrap">
                EduConnect Pro
              </div>
            </div>

            {/* Desktop Navigation - Full */}
            <div className="hidden xl:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      currentPage === item.id
                        ? "bg-[#1F7A8C] text-white"
                        : "text-[#022B3A] hover:bg-[#E1E5F2] hover:text-[#1F7A8C]"
                    )}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Large Desktop Navigation - Compact */}
            <div className="hidden lg:flex xl:hidden items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-200",
                      currentPage === item.id
                        ? "bg-[#1F7A8C] text-white"
                        : "text-[#022B3A] hover:bg-[#E1E5F2] hover:text-[#1F7A8C]"
                    )}
                    title={item.label}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    <span className="hidden lg:inline text-xs">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tablet Navigation - Icons Only */}
            <div className="hidden md:flex lg:hidden items-center space-x-1">
              {navItems.slice(0, 4).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={cn(
                      "flex items-center p-2 rounded-lg transition-colors duration-200",
                      currentPage === item.id
                        ? "bg-[#1F7A8C] text-white"
                        : "text-[#022B3A] hover:bg-[#E1E5F2] hover:text-[#1F7A8C]"
                    )}
                    title={item.label}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Section - Search, Notifications, User */}
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Search - Progressive Enhancement */}
            <div className="relative hidden xl:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses, events..."
                className="pl-10 pr-4 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none transition-colors w-48 lg:w-64 text-sm bg-white"
              />
            </div>
            
            {/* Search Icon for smaller screens */}
            <button 
              className="xl:hidden p-2 text-[#022B3A] hover:bg-[#E1E5F2] rounded-lg transition-colors" 
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            {/* Notifications */}
            <button 
              className="relative p-2 text-[#022B3A] hover:bg-[#E1E5F2] rounded-lg transition-colors" 
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                3
              </span>
            </button>

            {/* User Section */}
            {user ? (
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#1F7A8C] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <button
                  onClick={() => setCurrentPage('profile')}
                  className="hidden lg:flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-[#022B3A] hover:bg-[#E1E5F2] hover:text-[#1F7A8C]"
                >
                  Profile
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setCurrentPage('login')}
                  className="px-4 py-2 text-sm font-medium"
                >
                  Login
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-[#022B3A] hover:bg-[#E1E5F2] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-[#E1E5F2] py-4 px-4 bg-white shadow-lg">
            {/* Search Bar for Mobile */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses, events..."
                className="w-full pl-10 pr-4 py-3 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none transition-colors text-sm bg-white"
              />
            </div>

            {/* Navigation Items */}
            <div className="space-y-2 mb-4">
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
                      "flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors text-base font-medium",
                      currentPage === item.id
                        ? "bg-[#1F7A8C] text-white"
                        : "text-[#022B3A] hover:bg-[#E1E5F2]"
                    )}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
            </div>
            
            {/* Auth Section */}
            <div className="pt-4 border-t border-[#E1E5F2] space-y-3">
              {!user ? (
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => {
                    setCurrentPage('login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-base py-3"
                >
                  Login
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => {
                    setCurrentPage('profile');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-base py-3"
                >
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
