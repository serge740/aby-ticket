import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../../stores/blogsData';

const FeaturedArticle = ({ image, title, date, id,content2 }) => {
  const navigate = useNavigate();
  
  const formatDate = (dateInput) => {
    const d = new Date(dateInput);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div 
      className="relative h-full rounded-3xl overflow-hidden cursor-pointer group"
      onClick={() => navigate(`/blog/${id}`)}
      data-aos="fade-right"
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt={title}
        className="w-full h-full  object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        {/* Date */}
        <div className="flex items-center gap-2 text-white/90 mb-4">
          <Calendar className="w-5 h-5" />
          <span className="text-sm font-medium">{formatDate(date)}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-white text-3xl font-bold mb-6 leading-tight">
          {title}
        </h3>

         <p className='text-gray-200 line-clamp-1 '>{content2}</p>
        
        {/* Arrow Button */}
        <button className="w-14 h-14 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

const SmallArticle = ({ image, title, date, id, delay = 0 ,content2 }) => {
  const navigate = useNavigate();
  
  const formatDate = (dateInput) => {
    const d = new Date(dateInput);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div 
      className="flex gap-4 cursor-pointer group"
      onClick={() => navigate(`/blog/${id}`)}
      data-aos="fade-left"
      data-aos-delay={delay}
    >
      {/* Image */}
      <div className="w-48 h-40 flex-shrink-0 rounded-2xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col justify-between py-2">
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{formatDate(date)}</span>
        </div>
        
        {/* Title */}
        <h4 className="text-gray-900 text-lg font-bold leading-snug mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
          {title}
        </h4>

        <p className='text-gray-500 line-clamp-2 '>{content2}</p>
        
        {/* Read More */}
        <button className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
          Read Story
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const BlogLatest = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  // Get first 4 posts
  const [featuredPost, ...smallPosts] = blogPosts.slice(0, 4);

  return (
    <section className="w-full py-4 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary-600 rounded-full" data-aos="fade" data-aos-delay="200"></div>
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-primary-600 rounded-full" data-aos="fade" data-aos-delay="400"></div>
      
      <div className=" mx-auto px-4 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-primary-600 text-xl">✱</span>
            <span className="text-primary-600 font-semibold">Latest Articles</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Stay informed and inspired for<br />your next journey
          </h2>
        </div>

        {/* Articles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article - Left Side */}
          <div className="lg:row-span-3 h-[600px]">
            {featuredPost && (
              <FeaturedArticle {...featuredPost} />
            )}
          </div>
          
          {/* Small Articles - Right Side */}
          <div className="flex flex-col gap-8">
            {smallPosts.map((post, index) => (
              <SmallArticle 
                key={post.id} 
                {...post}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLatest;