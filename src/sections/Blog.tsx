import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  image: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
    author: 'Senthil Kumar',
    date: 'March 10, 2025',
    title: 'Construction of a Premium Villa Project in Chennai',
    excerpt: "We are proud to announce the commencement of our latest residential project in the heart of Chennai's growing suburbs.",
    category: 'Company',
    readTime: '5 min read',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
    author: 'Karthik Nathan',
    date: 'Feb 12, 2024',
    title: 'Building Resilient Infrastructure for Modern Developments in Tamil Nadu',
    excerpt: "Discover how Nexus Construction is implementing innovative engineering solutions to build sustainable urban infrastructure.",
    category: 'Infrastructure',
    readTime: '8 min read',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
    author: 'Ram Prasad',
    date: 'Feb 15, 2024',
    title: 'Modern Materials and Sustainable Design in Local Architecture',
    excerpt: "Exploring the shift towards eco-friendly construction materials in our latest residential and commercial projects.",
    category: 'Architecture',
    readTime: '6 min read',
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-tnexus">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-subtitle flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              UPDATES
            </span>
            <h2 className="section-title mt-4">
              Articles & blog posts with<br />useful information
            </h2>
          </motion.div>

          <motion.a
            href="/blog"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="btn-primary mt-4 md:mt-0 inline-flex"
          >
            View All Post
            <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="blog-card group"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark/40" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                  <a
                    href="#"
                    className="w-8 h-8 bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
