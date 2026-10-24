import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { BLOG_POSTS } from '../../data/mockData';
import type { BlogPost } from '../../types';
import { Calendar, User, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { language } = useStore();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="py-8 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-6 md:p-8 text-white border border-purple-800/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Tech Insights & Buyer Guides</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {language === 'EN' ? 'Hardware Reviews & Buying Guides' : 'ব্লগ ও টেক গাইড'}
          </h1>
          <p className="text-xs text-purple-200/80 mt-1">
            Stay informed with detailed CPU comparisons, laptop benchmarks & tech tips in Bangladesh
          </p>
        </div>
      </div>

      {/* Main Blog Post Modal / Reader */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-8 border border-slate-200 shadow-2xl space-y-6 relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              ✕
            </button>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-2xl"
            />

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                {selectedPost.category}
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
                {selectedPost.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-y border-slate-200 py-3">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-blue-500" />
                  <strong className="text-slate-700">{selectedPost.author}</strong> ({selectedPost.authorRole})
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  {selectedPost.readTime}
                </span>
              </div>
            </div>

            <div className="prose max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
              <p className="font-semibold text-base text-slate-900">
                {selectedPost.excerpt}
              </p>
              <p>{selectedPost.content}</p>
              <p>
                When selecting hardware components in Bangladesh, factor in local warranty support, power supply fluctuations, ambient room temperatures, and upgrade scalability.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
              {selectedPost.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map(post => (
          <article
            key={post.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 line-clamp-2 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedPost(post)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-2"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
