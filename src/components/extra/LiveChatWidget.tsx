import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: 'Hello! Welcome to My Computer Support. How can I assist you with PC builds, laptops, or EMI options today?',
      time: 'Just now'
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let botResponse = 'Thank you for contacting My Computer. An expert technician will connect with you shortly.';
      const lower = currentInput.toLowerCase();
      if (lower.includes('emi') || lower.includes('bank')) {
        botResponse = 'We support 0% interest EMI for up to 36 months with City Bank, BRAC Bank, EBL, and DBBL for orders over ৳10,000!';
      } else if (lower.includes('delivery') || lower.includes('dhaka')) {
        botResponse = 'Inside Dhaka Metro delivery takes 24 hours (৳120). Outside Dhaka delivery takes 48 hours via Courier (৳200).';
      } else if (lower.includes('build') || lower.includes('pc')) {
        botResponse = 'You can use our interactive PC Builder tool in the top menu to check CPU & Motherboard socket compatibility in real time!';
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl hover:scale-105 transition-all flex items-center justify-center relative group"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      ) : (
        <div className="bg-white w-80 sm:w-96 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[480px] animate-fadeIn">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 to-blue-950 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 p-1 flex items-center justify-center flex-shrink-0">
                <img src="/logo-icon.png" alt="My Computer" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-xs">My Computer Support AI</h4>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
                </span>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 overflow-y-auto flex-1 space-y-3 bg-slate-50 text-xs">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-slate-950 border border-slate-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about laptops, EMI, stock..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-100 text-slate-950 text-xs font-medium focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
