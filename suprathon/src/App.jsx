import './App.css'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import ProfilePage from './components/ProfilePage'
import OrganizerPanel from './components/OrganizerPanel'
import UserSignup from './User-Signup'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'profile':
        return <ProfilePage />
      case 'organizer':
        return <OrganizerPanel />
      case 'signup':
        return <UserSignup />
      default:
        return (
          <div className="h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4" style={{ color: '#022B3A' }}>
                EduConnect Pro
              </h1>
              <p className="text-xl mb-8" style={{ color: '#1F7A8C' }}>
                Your Gateway to Learning Excellence
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                onClick={() => setCurrentPage('profile')}
                className="px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#022B3A', color: '#FFFFFF' }}
              >
                View Profile
              </Button>
              <Button 
                onClick={() => setCurrentPage('organizer')}
                className="px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#022B3A', color: '#FFFFFF' }}
              >
                Organizer Panel
              </Button>
              <Button 
                onClick={() => setCurrentPage('signup')}
                className="px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg border-2"
                style={{ borderColor: '#1F7A8C', color: '#1F7A8C', backgroundColor: 'transparent' }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="px-6 py-4 border-b" style={{ backgroundColor: '#FFFFFF', borderColor: '#BFDBF7' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1F7A8C' }}>
              <span className="text-white font-bold">E</span>
            </div>
            <span className="text-xl font-bold" style={{ color: '#022B3A' }}>EduConnect Pro</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'home' ? 'text-white' : 'hover:bg-gray-100'
              }`}
              style={{ 
                backgroundColor: currentPage === 'home' ? '#022B3A' : 'transparent',
                color: currentPage === 'home' ? '#FFFFFF' : '#022B3A'
              }}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('profile')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'profile' ? 'text-white' : 'hover:bg-gray-100'
              }`}
              style={{ 
                backgroundColor: currentPage === 'profile' ? '#022B3A' : 'transparent',
                color: currentPage === 'profile' ? '#FFFFFF' : '#022B3A'
              }}
            >
              Profile
            </button>
            <button 
              onClick={() => setCurrentPage('organizer')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'organizer' ? 'text-white' : 'hover:bg-gray-100'
              }`}
              style={{ 
                backgroundColor: currentPage === 'organizer' ? '#022B3A' : 'transparent',
                color: currentPage === 'organizer' ? '#FFFFFF' : '#022B3A'
              }}
            >
              Organizer Panel
            </button>
            <button 
              onClick={() => setCurrentPage('signup')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'signup' ? 'text-white' : 'hover:bg-gray-100'
              }`}
              style={{ 
                backgroundColor: currentPage === 'signup' ? '#022B3A' : 'transparent',
                color: currentPage === 'signup' ? '#FFFFFF' : '#022B3A'
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {renderPage()}
    </div>
  )
}

export default App
