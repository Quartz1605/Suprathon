import './App.css'
import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import LandingPage from './components/pages/LandingPage'
import CoursesListing from './components/pages/CoursesListing'
import EventsListing from './components/pages/EventsListing'
import UserProfile from './components/pages/UserProfile'
import CourseDetails from './components/pages/CourseDetails'
import InstitutesListing from './components/pages/InstitutesListing'
import Chatbot from './components/pages/Chatbot'
import AdminPanel from './components/pages/AdminPanel'
import Discussion from './components/pages/Discussion'
import UserSignup from './User-Signup'
import UserLogin from './User-Login'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [user, setUser] = useState(null) // You can set user data here when logged in

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <LandingPage setCurrentPage={setCurrentPage} />
      case 'courses':
        return <CoursesListing setCurrentPage={setCurrentPage} />
      case 'events':
        return <EventsListing setCurrentPage={setCurrentPage} />
      case 'institutes':
        return <InstitutesListing setCurrentPage={setCurrentPage} />
      case 'discussion':
        return <Discussion setCurrentPage={setCurrentPage} />
      case 'chatbot':
        return <Chatbot setCurrentPage={setCurrentPage} />
      case 'profile':
        return <UserProfile setCurrentPage={setCurrentPage} />
      case 'signup':
        return (
          <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2] flex items-center justify-center">
            <UserSignup />
          </div>
        )
      case 'login':
        return (
          <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2] flex items-center justify-center">
            <UserLogin setCurrentPage={setCurrentPage} />
          </div>
        )
      case 'course-details':
        return <CourseDetails setCurrentPage={setCurrentPage} />
      case 'event-details':
        return <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-[#022B3A]">Event Details Page Coming Soon</h1>
        </div>
      case 'organizer':
        return <AdminPanel setCurrentPage={setCurrentPage} />
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} user={user} />
      {renderPage()}
    </div>
  )
}

export default App
