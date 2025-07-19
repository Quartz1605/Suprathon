# EduConnect Pro - Frontend Pages Documentation

## Overview
EduConnect Pro is a comprehensive educational platform that connects students, educators, and institutions. This documentation covers all the landing pages and their interconnections.

## Pages Structure

### 1. Landing Pages (Main Navigation)
- **Home** (`/`) - Main landing page with overview
- **Courses** (`/courses`) - Browse and discover courses
- **Events** (`/events`) - Browse and discover events
- **Institutes** (`/institutes`) - Browse educational institutions
- **Discussion** (`/discussion`) - Community discussions
- **AI Help** (`/chatbot`) - AI-powered assistance

### 2. Detail Pages
- **Course Details** (`/course-details`) - Detailed course information
- **Event Details** (`/event-details`) - Detailed event information
- **Institute Profile** (`/institute-profile`) - Detailed institute information

### 3. Registration Pages
- **Course Registration** (`/course-registration`) - Multi-step course enrollment
- **Event Registration** (`/event-registration`) - Multi-step event registration

### 4. User Pages
- **User Profile** (`/profile`) - User dashboard and settings
- **User Login** (`/login`) - Authentication
- **User Signup** (`/signup`) - User registration

### 5. Admin Pages
- **Admin Panel** (`/organizer`) - Institute/organizer dashboard (existing)
- **Admin Dashboard** (`/admin-dashboard`) - Comprehensive admin analytics and management

## Page Navigation Flow

### Course Flow
```
Courses Listing → Course Details → Course Registration → User Profile
     ↓               ↓               ↓
Institute Profile ← Instructor Profile ← Payment Success
```

### Event Flow
```
Events Listing → Event Details → Event Registration → User Profile
     ↓              ↓              ↓
Institute Profile ← Organizer Profile ← Payment Success
```

### Institute Flow
```
Institutes Listing → Institute Profile → Course/Event Listings
     ↓                    ↓                    ↓
Contact Institute ← View Courses/Events ← Registration
```

## Page Features & Responsiveness

### 1. Event Details Page
**File:** `src/components/pages/EventDetails.jsx`

**Features:**
- Complete event information display
- Interactive tabs (Overview, Schedule, Prizes, Requirements)
- Registration CTA with availability tracking
- Organizer profile section
- Social sharing and bookmarking
- Prize distribution details
- Event schedule timeline
- Requirements checklist

**Responsive Design:**
- Mobile-first design with collapsible sections
- Touch-friendly navigation tabs
- Optimized card layouts for different screen sizes
- Sticky sidebar on desktop, stacked on mobile

**Database Integration:**
- Pulls data based on EventSchema from backend
- Displays event details, organizer info, pricing, and schedule
- Handles registration status and participant count

### 2. Institute Profile Page
**File:** `src/components/pages/InstituteProfile.jsx`

**Features:**
- Comprehensive institute information
- Multi-tab interface (About, Courses, Events, Reviews)
- Follow/unfollow functionality
- Contact information and social links
- Featured courses and upcoming events
- Student testimonials and ratings
- Industry partnerships display
- Facilities and achievements showcase

**Responsive Design:**
- Responsive grid layouts
- Mobile-optimized navigation tabs
- Flexible card components
- Scalable typography and icons

**Database Integration:**
- Based on InstituteSchema from backend
- Displays institute details, courses offered, events hosted
- Shows ratings, reviews, and follower count

### 3. Course Registration Page
**File:** `src/components/pages/CourseRegistration.jsx`

**Features:**
- Multi-step registration process (4 steps)
- Personal information collection
- Learning preferences customization
- Multiple payment options (Card, UPI, Net Banking)
- Course summary sidebar
- Progress indicator
- Form validation and security

**Steps:**
1. **Personal Information** - Basic user details
2. **Learning Preferences** - Goals and schedule preferences
3. **Payment** - Secure payment processing
4. **Confirmation** - Registration success and next steps

**Responsive Design:**
- Mobile-optimized form layouts
- Progressive stepper navigation
- Adaptive form fields
- Secure payment interface

**Database Integration:**
- Creates user registration record
- Links to CourseSchema and UserSchema
- Handles payment processing integration

### 4. Event Registration Page
**File:** `src/components/pages/EventRegistration.jsx`

**Features:**
- Multi-step registration process (5 steps)
- Team formation and management
- Skills and preferences selection
- Payment processing
- Team member coordination

**Steps:**
1. **Personal Information** - Individual participant details
2. **Team Details** - Team formation (solo or team registration)
3. **Preferences** - Skills, interests, and motivations
4. **Payment** - Secure payment processing
5. **Confirmation** - Registration success and team coordination

**Responsive Design:**
- Dynamic team member forms
- Mobile-friendly multi-step process
- Touch-optimized input fields
- Responsive payment interface

**Database Integration:**
- Creates event registration record
- Handles team member data
- Links to EventSchema and UserSchema
- Supports team vs individual registration

### 5. Enhanced User Profile Page
**File:** `src/components/pages/UserProfile.jsx` (existing, enhanced)

**Features:**
- Comprehensive user dashboard
- Course progress tracking
- Event participation history
- Certificates and achievements
- Account settings and preferences

### 6. Admin Dashboard Page
**File:** `src/components/pages/AdminDashboard.jsx`

**Features:**
- Comprehensive analytics dashboard with real-time insights
- Multi-tab interface (Overview, Event Management, Analytics, Institutes)
- Event approval workflow (approve/reject pending events)
- Live event monitoring with registration tracking
- Revenue and growth analytics
- Institute performance management
- User activity monitoring
- Quick action buttons for common admin tasks

**Responsive Design:**
- Mobile-optimized admin interface
- Touch-friendly controls for tablets
- Responsive charts and analytics displays
- Adaptive layout for different screen sizes

**Database Integration:**
- Real-time event management linked to EventSchema
- User analytics from UserSchema
- Institute performance from InstituteSchema
- Registration tracking from RegistrationSchema

**Admin Access:**
- Only visible to users with `isAdmin: true` flag
- Secure admin-only navigation
- Role-based feature access

## Database Schema Integration

### Course Registration Data Flow
```javascript
// Frontend → Backend
{
  personalInfo: {
    firstName, lastName, email, phone,
    dateOfBirth, education, experience
  },
  preferences: {
    learningGoals, timeCommitment,
    priorExperience, preferredSchedule
  },
  courseId: ObjectId,
  paymentDetails: { ... }
}

// Maps to RegistrationSchema
{
  eventCourseId: ObjectId,
  userEmail: String,
  type: "Course",
  certificateIssued: Boolean
}
```

### Event Registration Data Flow
```javascript
// Frontend → Backend
{
  personalInfo: { ... },
  teamInfo: {
    teamName, teamSize, teamDescription,
    teamMembers: [{ name, email, skills }]
  },
  preferences: {
    programmingLanguages: Array,
    interests: Array,
    motivation, expectations
  },
  eventId: ObjectId,
  paymentDetails: { ... }
}

// Maps to RegistrationSchema
{
  eventCourseId: ObjectId,
  userEmail: String,
  type: "Event",
  certificateIssued: Boolean
}
```

## Responsive Design Standards

### Breakpoints
- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md, lg)
- **Desktop:** > 1024px (xl)

### Design Principles
1. **Mobile-First:** All pages start with mobile design
2. **Progressive Enhancement:** Features add complexity on larger screens
3. **Touch-Friendly:** Minimum 44px touch targets
4. **Performance:** Optimized images and lazy loading
5. **Accessibility:** ARIA labels and keyboard navigation

### Common Responsive Patterns
- **Cards:** Stack on mobile, grid on desktop
- **Navigation:** Hamburger menu on mobile, full nav on desktop
- **Forms:** Single column on mobile, multi-column on desktop
- **Sidebars:** Bottom placement on mobile, sticky sidebar on desktop

## Navigation Integration

### setCurrentPage Function
All pages use the `setCurrentPage` function for navigation:

```javascript
// Navigate to specific pages
setCurrentPage('course-details')    // Course details
setCurrentPage('event-details')     // Event details
setCurrentPage('institute-profile') // Institute profile
setCurrentPage('course-registration') // Course registration
setCurrentPage('event-registration')  // Event registration
setCurrentPage('profile')           // User profile
setCurrentPage('admin-dashboard')   // Admin dashboard (admin only)
```

### Admin Dashboard Access
**For Admin Users:**
1. **Desktop Navigation:** Look for the "Admin" button with gear icon in the main navigation
2. **Mobile Navigation:** Access through the hamburger menu → "Admin" option
3. **Direct Navigation:** Use `setCurrentPage('admin-dashboard')`

**Admin User Setup:**
```javascript
// In App.jsx, set user as admin
const [user, setUser] = useState({
  id: 1,
  firstName: 'Admin',
  lastName: 'User',
  email: 'admin@educonnect.com',
  isAdmin: true  // This flag enables admin features
})
```

## Charts and Analytics

### Available Chart Types
Your platform now includes comprehensive analytics with beautiful, responsive charts powered by **Recharts** library:

#### 📊 Chart Components Available:
1. **LiveActivityChart** - Real-time platform activity (Area Chart)
2. **PerformanceRadarChart** - Performance metrics across multiple dimensions
3. **RevenueChart** - Revenue trends over time (Stacked Area Chart)
4. **UserGrowthChart** - User acquisition and growth patterns

#### 🎯 Chart Locations:
- **Admin Dashboard Overview Tab**: All 4 main charts for quick insights
- **Admin Dashboard Analytics Tab**: Enhanced detailed analytics with additional charts
- **Chart Demo Page** (`/chart-demo`): Complete showcase of all available chart types

#### 📈 Supported Chart Types:
- **Area Charts**: Perfect for trends over time with filled areas
- **Line Charts**: Clean multi-series comparisons
- **Bar Charts**: Category comparisons and grouped data
- **Radar Charts**: Performance across multiple dimensions
- **Pie Charts**: Proportional data visualization
- **Composed Charts**: Combine different chart types (bar + line)

#### 💻 Quick Access:
```javascript
// Navigate to chart demo
setCurrentPage('chart-demo')

// Navigate to admin dashboard
setCurrentPage('admin-dashboard')
```

#### 🎨 Chart Features:
- **Responsive Design**: Auto-adapts to all screen sizes
- **Interactive Tooltips**: Hover for detailed information  
- **Custom Styling**: Matches your platform's color scheme
- **Animation Effects**: Smooth transitions and loading states
- **Mobile Optimized**: Touch-friendly on tablets and phones

#### 📱 Mobile Optimization:
- Responsive containers that adapt to screen size
- Touch-friendly interactive elements
- Optimized font sizes for mobile devices
- Horizontal layouts for better mobile viewing

### Cross-Page Data Flow
- Course/Event IDs passed through URL params or state
- User authentication state maintained globally
- Registration data persisted through multi-step forms
- Navigation breadcrumbs for better UX

## Development Setup

### Prerequisites
- Node.js 16+
- npm or yarn
- React 19
- Vite build tool

### Installation
```bash
cd suprathon
npm install
npm run dev
```

### File Structure
```
src/
├── components/
│   ├── layout/
│   │   └── Navbar-New.jsx
│   ├── pages/
│   │   ├── EventDetails.jsx
│   │   ├── InstituteProfile.jsx
│   │   ├── CourseRegistration.jsx
│   │   ├── EventRegistration.jsx
│   │   └── UserProfile.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       └── Input.jsx
├── lib/
│   └── utils.js
└── App.jsx
```

## Future Enhancements

### Planned Features
1. **Real-time Chat** - Direct messaging between users and institutes
2. **Video Conferencing** - Integrated video calls for courses/events
3. **Advanced Search** - Filters, sorting, and AI-powered recommendations
4. **Mobile App** - React Native mobile application
5. **Analytics Dashboard** - Detailed progress and performance metrics

### Performance Optimizations
1. **Code Splitting** - Lazy load components
2. **Image Optimization** - WebP format and responsive images
3. **Caching** - Service worker for offline functionality
4. **API Optimization** - GraphQL integration for efficient data fetching

## Conclusion

The EduConnect Pro platform now includes all major landing pages with seamless navigation and responsive design. Each page is optimized for different screen sizes and integrates properly with the backend database schema. The multi-step registration processes provide a smooth user experience while collecting necessary information for course and event participation.
