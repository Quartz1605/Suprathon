import { UserModel } from "../db/db.js";
import { InstituteModel } from "../db/db.js";
import { CourseModel } from "../db/db.js";
import { BookmarkModel } from "../db/db.js";
import { EventModel } from "../db/db.js";
import { RegistrationModel } from "../db/db.js";
import { ProfileModel } from "../db/db.js";



const fetchRegistrations = async (email) => {      // Call From Function in the bottom
  const registrations = await RegistrationModel.find({ userEmail: email });

  const registeredEventsIds = registrations
    .filter(r => r.type === "Event")
    .map(r => r.eventCourseId);

  const registeredCoursesIds = registrations
    .filter(r => r.type === "Course")
    .map(r => r.eventCourseId);

  const events = await EventModel.find({ _id: { $in: registeredEventsIds } });
  const courses = await CourseModel.find({ _id: { $in: registeredCoursesIds } });

  return { events, courses };
};

//Fetches bookmarked courses and events for a user
const fetchBookmarks = async (email) => {        // Call From Function in the bottom
  const bookmarks = await BookmarkModel.find({ emailId: email });

  const bookmarkedEventIds = bookmarks
    .filter(b => b.itemType === "event")
    .map(b => b.itemId);

  const bookmarkedCourseIds = bookmarks
    .filter(b => b.itemType === "course")
    .map(b => b.itemId);

  const events = await EventModel.find({ _id: { $in: bookmarkedEventIds } });
  const courses = await CourseModel.find({ _id: { $in: bookmarkedCourseIds } });

  return { events, courses };
};

// To get Profile Details
export const getProfile = async (req, res) => {
  try {
    const profile = await ProfileModel.findOne({ emailId: req.email });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: "Server Error: " + err.message });
  }
};

// Update Profile Details
export const updateProfile = async (req, res) => {
  const updates = req.body;

  try {
    const profile = await ProfileModel.findOneAndUpdate(
      { emailId: req.email },
      { $set: updates },
      { new: true, upsert: true } // Creates profile if not exists
    );

    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: "Update Error: " + err.message });
  }
}

// Adds fake progress to each course object
const simulateCourseProgress = (courses) => {         // Call From Function in the bottom
  return courses.map(course => ({
    ...course._doc,
    progress: Math.floor(Math.random() * 101) // 0 to 100%
  }));
};


// For Courses, Events, Bookmarks
export const getUserDashboard = async (req, res) => {    
  const email = req.email;

  try {
    const { events: registeredEvents, courses: registeredCourses } = await fetchRegistrations(email);
    const { events: bookmarkedEvents, courses: bookmarkedCourses } = await fetchBookmarks(email);
    const registeredCoursesWithProgress = simulateCourseProgress(registeredCourses);

    return res.status(200).json({
      registered: {
        events: registeredEvents,
        courses: registeredCoursesWithProgress
      },
      bookmarks: {
        events: bookmarkedEvents,
        courses: bookmarkedCourses
      }
    });
  } catch (e) {
    return res.status(500).json({ message: "Server Error", error: e.message });
  }
};
