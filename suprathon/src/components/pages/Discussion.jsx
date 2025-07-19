import React, { useState } from 'react';
import { MessageCircle, Heart, Reply, MoreHorizontal, Search, Filter, Plus, User, Clock, ThumbsUp, ThumbsDown, Flag, Share2 } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const Discussion = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [newPost, setNewPost] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'all', label: 'All Discussions' },
    { id: 'questions', label: 'Questions' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'general', label: 'General' },
    { id: 'my-posts', label: 'My Posts' }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best practices for React state management in 2025?",
      content: "I'm working on a large React application and struggling with state management. What are the current best practices? Should I use Redux, Zustand, or stick with Context API?",
      author: "John Developer",
      authorAvatar: "JD",
      timeAgo: "2 hours ago",
      category: "Programming",
      type: "Question",
      likes: 15,
      dislikes: 2,
      replies: 8,
      tags: ["React", "State Management", "Redux"],
      isAnswered: false,
      isTrending: true
    },
    {
      id: 2,
      title: "New Course Launch: Advanced Machine Learning",
      content: "We're excited to announce our new Advanced Machine Learning course starting next month! This course covers deep learning, neural networks, and practical AI implementations.",
      author: "DataLearn Academy",
      authorAvatar: "DA",
      timeAgo: "5 hours ago",
      category: "Announcements",
      type: "Announcement",
      likes: 42,
      dislikes: 0,
      replies: 12,
      tags: ["Machine Learning", "Course", "AI"],
      isAnswered: false,
      isTrending: false,
      isPinned: true
    },
    {
      id: 3,
      title: "How to transition from frontend to full-stack development?",
      content: "I've been working as a frontend developer for 2 years and want to become a full-stack developer. What backend technologies should I learn first?",
      author: "Sarah Frontend",
      authorAvatar: "SF",
      timeAgo: "1 day ago",
      category: "Career",
      type: "Question",
      likes: 28,
      dislikes: 1,
      replies: 15,
      tags: ["Career", "Full-stack", "Backend"],
      isAnswered: true,
      isTrending: false
    },
    {
      id: 4,
      title: "Study group for Python Data Science course",
      content: "Looking for fellow students taking the Python Data Science course to form a study group. We can meet weekly to discuss concepts and work on projects together.",
      author: "Mike Learner",
      authorAvatar: "ML",
      timeAgo: "2 days ago",
      category: "Study Groups",
      type: "General",
      likes: 19,
      dislikes: 0,
      replies: 6,
      tags: ["Python", "Data Science", "Study Group"],
      isAnswered: false,
      isTrending: false
    },
    {
      id: 5,
      title: "Digital Marketing trends for 2025",
      content: "What are the biggest digital marketing trends we should be aware of in 2025? I'm particularly interested in AI-driven marketing and privacy-first strategies.",
      author: "Emma Marketing",
      authorAvatar: "EM",
      timeAgo: "3 days ago",
      category: "Marketing",
      type: "Question",
      likes: 33,
      dislikes: 3,
      replies: 20,
      tags: ["Digital Marketing", "Trends", "AI"],
      isAnswered: true,
      isTrending: true
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'questions') return matchesSearch && discussion.type === 'Question';
    if (activeTab === 'announcements') return matchesSearch && discussion.type === 'Announcement';
    if (activeTab === 'general') return matchesSearch && discussion.type === 'General';
    if (activeTab === 'my-posts') return matchesSearch && discussion.author === 'John Developer'; // Mock user
    
    return matchesSearch;
  });

  const handleCreatePost = () => {
    if (!newPost.trim()) return;
    // Here you would typically send the post to the backend
    console.log('Creating new post:', newPost);
    setNewPost('');
  };

  const formatTimeAgo = (timeAgo) => {
    return timeAgo;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1E5F2]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#022B3A] mb-4">Community Discussion</h1>
          <p className="text-xl text-[#1F7A8C] max-w-2xl mx-auto">
            Connect with fellow learners, ask questions, and share knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  New Discussion
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  My Posts
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Saved Posts
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Python', 'AI', 'Career', 'JavaScript', 'Data Science', 'Marketing', 'Web Dev'].map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-[#1F7A8C] hover:text-white transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F7A8C] w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-[#E1E5F2] pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#1F7A8C] text-white'
                      : 'bg-white text-[#022B3A] hover:bg-[#E1E5F2]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Create New Post */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#1F7A8C] rounded-full flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  <div className="flex-1">
                    <textarea
                      className="w-full p-3 border-2 border-[#BFDBF7] rounded-lg focus:border-[#1F7A8C] focus:outline-none resize-none"
                      rows="3"
                      placeholder="Start a new discussion..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                    />
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex gap-2">
                        <select className="px-3 py-1 border border-[#BFDBF7] rounded text-sm">
                          <option>Question</option>
                          <option>General</option>
                          <option>Help</option>
                        </select>
                        <select className="px-3 py-1 border border-[#BFDBF7] rounded text-sm">
                          <option>Select Category</option>
                          <option>Programming</option>
                          <option>Career</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                      <Button size="sm" onClick={handleCreatePost} disabled={!newPost.trim()}>
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Discussions List */}
            <div className="space-y-6">
              {filteredDiscussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#1F7A8C] rounded-full flex items-center justify-center text-white font-semibold">
                          {discussion.authorAvatar}
                        </div>
                      </div>

                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {discussion.isPinned && (
                                <Badge variant="warning" className="text-xs">📌 Pinned</Badge>
                              )}
                              {discussion.isTrending && (
                                <Badge variant="danger" className="text-xs">🔥 Trending</Badge>
                              )}
                              <Badge variant="outline" className="text-xs">{discussion.type}</Badge>
                              <Badge variant="secondary" className="text-xs">{discussion.category}</Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-[#022B3A] hover:text-[#1F7A8C] cursor-pointer transition-colors">
                              {discussion.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-[#1F7A8C] mt-1">
                              <span>by {discussion.author}</span>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {formatTimeAgo(discussion.timeAgo)}
                              </div>
                            </div>
                          </div>
                          <button className="p-1 hover:bg-[#E1E5F2] rounded">
                            <MoreHorizontal className="w-4 h-4 text-[#1F7A8C]" />
                          </button>
                        </div>

                        {/* Content */}
                        <p className="text-[#022B3A] mb-4 line-clamp-3">{discussion.content}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {discussion.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-[#1F7A8C] hover:text-white transition-colors">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-sm text-[#1F7A8C] hover:text-[#022B3A] transition-colors">
                              <ThumbsUp className="w-4 h-4" />
                              {discussion.likes}
                            </button>
                            <button className="flex items-center gap-1 text-sm text-[#1F7A8C] hover:text-[#022B3A] transition-colors">
                              <ThumbsDown className="w-4 h-4" />
                              {discussion.dislikes}
                            </button>
                            <button className="flex items-center gap-1 text-sm text-[#1F7A8C] hover:text-[#022B3A] transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              {discussion.replies} replies
                            </button>
                            {discussion.isAnswered && (
                              <Badge variant="success" className="text-xs">✓ Answered</Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-[#E1E5F2] rounded transition-colors">
                              <Share2 className="w-4 h-4 text-[#1F7A8C]" />
                            </button>
                            <button className="p-1 hover:bg-[#E1E5F2] rounded transition-colors">
                              <Heart className="w-4 h-4 text-[#1F7A8C]" />
                            </button>
                            <button className="p-1 hover:bg-[#E1E5F2] rounded transition-colors">
                              <Flag className="w-4 h-4 text-[#1F7A8C]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredDiscussions.length === 0 && (
              <div className="text-center py-16">
                <MessageCircle className="w-16 h-16 text-[#1F7A8C] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#022B3A] mb-2">No discussions found</h3>
                <p className="text-[#1F7A8C] mb-4">Try adjusting your search or be the first to start a discussion!</p>
                <Button onClick={() => setActiveTab('all')}>
                  View All Discussions
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredDiscussions.length > 0 && (
              <div className="text-center py-8">
                <Button variant="outline" size="lg" className="px-8">
                  Load More Discussions
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
