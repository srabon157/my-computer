import React from 'react';
import { useStore } from '../../context/StoreContext';
import { BLOG_POSTS } from '../../data/mockData';
import { Clock, ChevronRight, BookOpen } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { setCurrentView, language } = useStore();

  return (
    <section className="py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {language === 'EN' ? 'Latest Technology Blog & Guides' : 'প্রযুক্তি খবর ও বায়িং গাইড'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            PC build tutorials, laptop reviews, and buying guides tailored for BD users
          </p>
        </div>

        <button
          onClick={() => setCurrentView('blog')}
          className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-orange-500 flex items-center gap-1 transition-colors"
        >
          <span>{language === 'EN' ? 'View All Articles' : 'সকল আর্টিকেলে যান'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map(post => (
          <div
            key={post.id}
            onClick={() => setCurrentView('blog')}
            className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-bold text-orange-500 uppercase">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-orange-500">
              <span>Read Full Guide</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
