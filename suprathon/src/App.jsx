import './App.css'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import ProfilePage from './components/ProfilePage'
import OrganizerPanel from './components/OrganizerPanel'
import UserSignup from './User-Signup'
import UserLogin from './User-Login'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'profile':
        return <ProfilePage />
      case 'organizer':
        return <OrganizerPanel />
      case 'signup':
        return (
          <div>
            <h1>Testing Signup Page</h1>
            <UserSignup />
          </div>
        )
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
      <UserSignup/>
  )
}

export default App
