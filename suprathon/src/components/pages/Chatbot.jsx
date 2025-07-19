import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MinusCircle, PlusCircle } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

const Chatbot = ({ setCurrentPage }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm EduBot, your learning assistant. How can I help you today? I can assist you with finding courses, events, or answer questions about our platform.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "Find programming courses",
    "Upcoming webinars",
    "Best rated institutes",
    "How to enroll?",
    "Career guidance",
    "Course certificates"
  ];

  const botResponses = {
    "find programming courses": "I found several excellent programming courses for you! We have Web Development Bootcamp, Python Programming, React Advanced Course, and more. Would you like me to show you the most popular ones?",
    "upcoming webinars": "Here are some upcoming webinars: 'Future of AI in Education' on July 25th, 'Digital Marketing Strategy' on July 26th, and 'Career Guidance for Tech' today. Would you like to register for any of these?",
    "best rated institutes": "Our top-rated institutes include DataLearn Academy (4.9⭐), TechAcademy Pro (4.8⭐), and Marketing Institute (4.7⭐). They offer excellent courses with industry-expert instructors.",
    "how to enroll": "Enrolling is easy! Just browse our courses, click on any course you like, and hit 'Enroll Now'. You can pay securely and get instant access to course materials.",
    "career guidance": "We offer comprehensive career guidance including resume reviews, interview preparation, and job placement assistance. Many of our partner institutes provide career support as part of their courses.",
    "course certificates": "Yes! Most of our courses provide certificates upon completion. These are industry-recognized and can boost your career prospects. Some courses also offer LinkedIn skill badges."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const lowerMessage = inputMessage.toLowerCase();
      let botResponse = "I understand you're asking about '" + inputMessage + "'. ";
      
      // Check for keyword matches
      for (const [key, response] of Object.entries(botResponses)) {
        if (lowerMessage.includes(key.split(' ')[0]) || lowerMessage.includes(key)) {
          botResponse = response;
          break;
        }
      }

      // Default responses for common patterns
      if (lowerMessage.includes('course') && !botResponse.includes('found')) {
        botResponse = "We have over 500+ courses across various categories including Technology, Business, Design, and Marketing. You can browse our courses page or tell me what specific topic interests you!";
      } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        botResponse = "Our courses range from ₹2,999 to ₹12,999 depending on the duration and complexity. Many courses offer significant discounts. Would you like me to show you some affordable options?";
      } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
        botResponse = "I'm here to help! I can assist you with finding courses, events, institute information, enrollment process, and general platform questions. What would you like to know?";
      } else if (!Object.values(botResponses).includes(botResponse.substring(botResponse.indexOf("'. ") + 3))) {
        botResponse += "I can help you find courses, events, institutes, or answer questions about our platform. Try asking about specific topics like 'web development courses' or 'upcoming events'.";
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#022B3A] mb-4">AI Learning Assistant</h1>
          <p className="text-xl text-[#1F7A8C]">
            Get instant help with courses, events, and platform guidance
          </p>
        </div>

        <Card className="h-[600px] flex flex-col">
          <CardHeader className="bg-[#1F7A8C] text-white rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-white">EduBot</CardTitle>
                <p className="text-white/90 text-sm">Always here to help</p>
              </div>
              <div className="ml-auto">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-white/90">Online</span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-[#022B3A] text-white' 
                      : 'bg-[#1F7A8C] text-white'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'text-right' : ''}`}>
                    <div className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#022B3A] text-white'
                        : 'bg-[#E1E5F2] text-[#022B3A]'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <p className="text-xs text-[#1F7A8C] mt-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#1F7A8C] rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#E1E5F2] text-[#022B3A] p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#1F7A8C] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#1F7A8C] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-[#1F7A8C] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="border-t border-[#E1E5F2] p-4">
              <p className="text-sm text-[#1F7A8C] mb-3">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-1 text-xs bg-[#BFDBF7] text-[#022B3A] rounded-full hover:bg-[#1F7A8C] hover:text-white transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-[#E1E5F2] p-4">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentPage('courses')}>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-[#1F7A8C] rounded-full flex items-center justify-center mx-auto mb-3">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#022B3A] mb-2">Browse Courses</h3>
              <p className="text-sm text-[#1F7A8C]">Explore our comprehensive course catalog</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentPage('events')}>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-[#1F7A8C] rounded-full flex items-center justify-center mx-auto mb-3">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#022B3A] mb-2">Upcoming Events</h3>
              <p className="text-sm text-[#1F7A8C]">Join live webinars and workshops</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentPage('institutes')}>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-[#1F7A8C] rounded-full flex items-center justify-center mx-auto mb-3">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#022B3A] mb-2">Find Institutes</h3>
              <p className="text-sm text-[#1F7A8C]">Discover top educational providers</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
