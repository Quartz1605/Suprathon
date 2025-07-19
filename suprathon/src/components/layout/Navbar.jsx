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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="text-2xl font-bold text-[#022B3A]">
              EduConnect Pro
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
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

          {/* Right side - Search, Notifications, User */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none transition-colors"
              />
            </div>
            
            <button className="relative p-2 text-[#022B3A] hover:bg-[#E1E5F2] rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {user ? (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#1F7A8C] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage('profile')}
                  className="text-[#022B3A]"
                >
                  Profile
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage('login')}
                >
                  Login
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setCurrentPage('signup')}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-[#022B3A] hover:bg-[#E1E5F2] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#E1E5F2] py-4 space-y-2">
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
                    "flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors",
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
            
            <div className="pt-4 border-t border-[#E1E5F2] space-y-2">
              {!user && (
                <>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setCurrentPage('login');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => {
                      setCurrentPage('signup');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
