import { CourseModel,EventModel } from "../db/db.js"; 
import natural from "natural"

const ChatbotController = async (req,res) => {

  const classifier = new natural.BayesClassifier();
  classifier.addDocument('courses', 'search_courses');
  classifier.addDocument('find courses', 'search_courses');
  classifier.addDocument('show me courses', 'search_courses');
  classifier.train();

  const { message } = req.body;
  if (!message) return res.status(400).json({ reply: 'Please provide a message' });

  const lowerMessage = message.toLowerCase();
  const intent = classifier.classify(lowerMessage);
  let reply = '';
  let courseArray = [];
  let eventArray = [];

  if (intent === 'search_courses') {
    // Extract keywords (words longer than 3 characters to avoid noise)
    const keywords = lowerMessage.split(' ').filter(word => word.length > 3);
    
    const courses = await CourseModel.find({
      $or: [
        { shortDesc: { $regex: keywords.join('|'), $options: 'i' } },
        { Title: { $regex: keywords.join('|'), $options: 'i' } },
      ],
    }).limit(5);

    const events = await EventModel.find({
      $or: [
        { Title: { $regex: keywords.join('|'), $options: 'i' } },
        { shortDesc: { $regex: keywords.join('|'), $options: 'i' } },
      ],
    }).limit(5)

    if(!courses && !!events){
      return res.status(400).json({"message" : "Couldn't fetch anything"})
    }

   

    if (courses.length > 0) {
      
      courses.map((course) => {
        courseArray.push(course)
      })

      events.map((event) => {
        eventArray.push(event)
      })
      
      reply = `Found ${courses.length} relevant courses: ${courses
        .map(c => `${c.Title} by ${c.CreatorName} `).join(', ')}. Would you like more details on any of these?`;
      } else {
      reply = `No courses or events found for "${keywords.join(' or ')}". Try another category or browse our full course catalog!`;
    }
    } else {
    reply = "I can help you find courses. Try asking something like 'Machine Learning courses' or 'Events related to Machine Learning.";

    
  }

  return res.status(200).json({"reply" : reply,"courses" : courseArray,"events" : eventArray});


}


export { ChatbotController }