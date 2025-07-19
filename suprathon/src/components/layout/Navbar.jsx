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
    <nav className="bg-white shadow-lg border-b-2 border-[#E1E5F2] sticky top-0 z-50 w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-[#022B3A] hover:bg-[#E1E5F2] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center cursor-pointer flex-1 md:flex-none justify-center md:justify-start" onClick={() => setCurrentPage('home')}>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#022B3A] truncate">
              EduConnect Pro
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-1 justify-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={cn(
                    "flex items-center px-2 lg:px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                    currentPage === item.id
                      ? "bg-[#1F7A8C] text-white"
                      : "text-[#022B3A] hover:bg-[#E1E5F2] hover:text-[#1F7A8C]"
                  )}
                >
                  <Icon className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  <span className="hidden lg:inline">{item.label}</span>
                  <span className="lg:hidden text-xs">{item.label.charAt(0)}</span>
                </button>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Search - Hidden on small screens */}
            <div className="hidden lg:flex relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-2 border border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none transition-colors text-sm w-32"
              />
            </div>
            
            {/* Notifications - Hidden on mobile */}
            <button className="hidden sm:flex relative p-2 text-[#022B3A] hover:bg-[#E1E5F2] rounded-lg transition-colors">
              <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-[10px]">
                3
              </span>
            </button>

            {/* Login Button */}
            {user ? (
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#1F7A8C] rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage('profile')}
                  className="text-[#022B3A] text-xs lg:text-sm px-2 lg:px-3"
                >
                  Profile
                </Button>
              </div>
            ) : (
              <button
                onClick={() => setCurrentPage('login')}
                className="flex items-center px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-colors duration-200 text-white bg-[#1F7A8C] hover:bg-[#022B3A] whitespace-nowrap"
              >
                <User className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                Login
              </button>
            )}
          </div>
        </div>
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
