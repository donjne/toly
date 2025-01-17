"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Menu, X, Home, BarChart2, History, Settings } from 'lucide-react';

interface ChatInterfaceProps {
  variant?: 'green' | 'purple';
  preloadedMessages?: Array<{
    user: boolean;
    text: string;
  }>;
  suggestions?: Array<{
    title: string;
    description: string;
  }>;
  initialPrompt?: string;
}

const Message = ({ text, isUser, accentColor }: { text: string; isUser: boolean; accentColor: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''}`}
  >
    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
      {isUser ? (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <span className="text-sm text-white">You</span>
        </div>
      ) : (
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: accentColor }}
        >
          <span className="text-sm">AI</span>
        </div>
      )}
    </div>
    <div className={`flex-1 max-w-[80%] ${isUser ? 'text-right' : ''}`}>
      <div 
        className={`inline-block rounded-lg p-3 text-sm
          ${isUser 
            ? 'bg-gray-800 text-gray-200' 
            : 'text-white'
          }`}
        style={{ 
          backgroundColor: isUser ? undefined : `${accentColor}20`,
          border: isUser ? undefined : `1px solid ${accentColor}40`
        }}
      >
        {text}
      </div>
    </div>
  </motion.div>
);

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  variant = 'green',
  preloadedMessages = [],
  suggestions = [],
  initialPrompt = ""
}) => {
  const [messages, setMessages] = useState(preloadedMessages);
  const [inputValue, setInputValue] = useState(initialPrompt);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const accentColor = variant === 'green' ? '#6FCB71' : '#C44FE2';

  return (
    <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 shadow-2xl w-full h-full">
      {/* Window Header */}
      <div className="flex items-center p-4 border-b border-white/10 bg-black/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-white/50 text-sm">toly.ai</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100%-3rem)]">
        {/* Sidebar */}
        <AnimatePresence>
          <motion.div 
            className={`w-64 bg-black/50 backdrop-blur-xl border-r border-white/10 ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 transition-transform duration-300`}
          >
            <div className="p-4 space-y-4">
              <div className="bg-[#1E1F24] rounded-lg p-2 text-gray-400 text-sm">
                🔍 Search...
              </div>
              <div className="space-y-2">
                {[
                  { icon: <Home />, label: 'Home' },
                  { icon: <BarChart2 />, label: 'Analytics' },
                  { icon: <History />, label: 'History' },
                  { icon: <Settings />, label: 'Settings' }
                ].map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <Message 
                key={idx}
                text={msg.text}
                isUser={msg.user}
                accentColor={accentColor}
              />
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-black/50 rounded-lg pl-4 pr-12 py-3 text-white placeholder-gray-500 border border-white/10 focus:border-[#61BDFF] focus:ring-1 focus:ring-[#61BDFF] transition-all duration-200"
              />
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {suggestions.map((suggestion, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 text-left"
                  >
                    <div className="text-white text-sm font-medium">{suggestion.title}</div>
                    <div className="text-gray-400 text-xs">{suggestion.description}</div>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;