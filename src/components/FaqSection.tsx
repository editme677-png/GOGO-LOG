import React, { useState } from 'react';
import { GOGO_LOG_CONFIG } from '../data/config';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("All");

  const categories = ["All", "General", "Daily Usage", "Subscription", "Installation"];

  const filteredFaqs = GOGO_LOG_CONFIG.faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === "All" || faq.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-transparent relative border-t border-red-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-emerald-400 text-xs font-semibold border border-white/10">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Everything you need to know about GOGO LOG, installing the application, and managing your staff records.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search question or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-red-500/25 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-xs"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-emerald-400 text-black font-bold'
                    : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List (9 explicit questions from Section 15) */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-black/40 backdrop-blur-md border-red-500/70 shadow-lg shadow-red-500/10 ring-1 ring-red-500/30' 
                    : 'bg-black/30 backdrop-blur-md border-red-500/20 hover:border-red-500/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-orange-500 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full shrink-0 transition-transform ${
                    isOpen ? 'bg-red-500 text-white rotate-180' : 'bg-white/5 text-zinc-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-300 leading-relaxed border-t border-white/10 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 text-zinc-400 text-sm">
              No questions found matching "{searchTerm}".
            </div>
          )}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div>
            <h4 className="font-bold text-yellow-400 text-sm sm:text-base">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Our team helps shop owners directly with setup and staff questions.
            </p>
          </div>
          <a
            href={GOGO_LOG_CONFIG.socialLinks.whatsapp || `https://wa.me/?text=Hello%20GOGO%20LOG`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs flex items-center gap-2 shrink-0 transition-colors shadow-xs animate-blink cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
