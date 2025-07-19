import './App.css'
import { useState } from 'react'
import Navbar from './components/layout/Navbar-New'
import LandingPage from './components/pages/LandingPage'
import CoursesListing from './components/pages/CoursesListing'
import EventsListing from './components/pages/EventsListing'
import UserProfile from './components/pages/UserProfile'
import CourseDetails from './components/pages/CourseDetails'
import EventDetails from './components/pages/EventDetails'
import InstitutesListing from './components/pages/InstitutesListing'
import InstituteProfile from './components/pages/InstituteProfile'
import CourseRegistration from './components/pages/CourseRegistration'
import EventRegistration from './components/pages/EventRegistration'
import Chatbot from './components/pages/Chatbot'
import AdminPanel from './components/pages/AdminPanel'
import AdminDashboard from './components/pages/AdminDashboard'
import ChartDemo from './components/pages/ChartDemo'
import Discussion from './components/pages/Discussion'
import UserSignup from './User-Signup'
import UserLogin from './User-Login'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  // Temporarily set user as logged in admin to test admin dashboard
  const [user, setUser] = useState({
    id: 1,
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@educonnect.com',
    isAdmin: true
  })

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
        return <EventDetails setCurrentPage={setCurrentPage} />
      case 'institute-profile':
        return <InstituteProfile setCurrentPage={setCurrentPage} />
      case 'course-registration':
        return <CourseRegistration setCurrentPage={setCurrentPage} />
      case 'event-registration':
        return <EventRegistration setCurrentPage={setCurrentPage} />
      case 'organizer':
        return <AdminPanel setCurrentPage={setCurrentPage} />
      case 'admin-dashboard':
        return <AdminDashboard setCurrentPage={setCurrentPage} />
      case 'chart-demo':
        return <ChartDemo setCurrentPage={setCurrentPage} />
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
