import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
  // Temporarily set user as logged in admin to test admin dashboard
  const [user, setUser] = useState({
    id: 1,
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@educonnect.com',
    isAdmin: true
  })

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursesListing />} />
          <Route path="/events" element={<EventsListing />} />
          <Route path="/institutes" element={<InstitutesListing />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route 
            path="/signup" 
            element={
              <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2] flex items-center justify-center">
                <UserSignup />
              </div>
            } 
          />
          <Route 
            path="/login" 
            element={
              <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2] flex items-center justify-center">
                <UserLogin />
              </div>
            } 
          />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/institute-profile" element={<InstituteProfile />} />
          <Route path="/institute-profile/:id" element={<InstituteProfile />} />
          <Route path="/course-registration" element={<CourseRegistration />} />
          <Route path="/course-registration/:id" element={<CourseRegistration />} />
          <Route path="/event-registration" element={<EventRegistration />} />
          <Route path="/event-registration/:id" element={<EventRegistration />} />
          <Route path="/organizer" element={<AdminPanel />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/chart-demo" element={<ChartDemo />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
