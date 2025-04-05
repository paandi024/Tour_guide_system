import React from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your AI travel assistant. I can help you plan your trip, suggest destinations, and answer any travel-related questions. How can I assist you today?"
    }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('santorini')) {
      return "Santorini is a beautiful Greek island known for its stunning sunsets, white-washed buildings, and crystal-clear waters. The best time to visit is between June and September. Don't miss the sunset in Oia, wine tasting in local vineyards, and exploring the ancient ruins of Akrotiri!";
    }
    
    if (lowercaseMessage.includes('best time') || lowercaseMessage.includes('when')) {
      return "The best time to travel depends on your destination. Generally:\n\n- Europe: May-September for warm weather\n- Southeast Asia: November-February for dry season\n- Caribbean: December-April to avoid hurricanes\n\nLet me know your specific destination, and I can provide more detailed information!";
    }
    
    if (lowercaseMessage.includes('budget') || lowercaseMessage.includes('cost')) {
      return "Here are some budget travel tips:\n\n1. Book flights in advance\n2. Travel during off-peak seasons\n3. Stay in hostels or use home-sharing services\n4. Use public transportation\n5. Cook some meals yourself\n6. Get a travel rewards credit card\n\nWould you like specific budget recommendations for a particular destination?";
    }

    return "I can help you with destination recommendations, travel planning, budgeting, and local tips. What specific information are you looking for?";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="bg-blue-600 p-4">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <Bot className="h-6 w-6 mr-2" />
              AI Travel Assistant
            </h1>
          </div>

          <div
            ref={chatContainerRef}
            className="h-[600px] overflow-y-auto p-4 space-y-4"
          >
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Bot className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg p-4 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <ReactMarkdown className="prose prose-sm max-w-none">
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2 text-gray-500"
              >
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </motion.div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about travel..."
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}