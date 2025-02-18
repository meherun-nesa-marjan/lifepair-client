import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "💍 5 Tips for a Successful Marriage",
      summary: "A happy marriage requires effort and commitment. In this article, we discuss five key strategies to ensure a healthy and long-lasting relationship.",
      date: "February 18, 2025",
      author: "Admin",
    },
    {
      id: 2,
      title: "❤️ How to Know If You're Ready for Marriage",
      summary: "Marriage is a big step, and being truly ready goes beyond love. Learn about the emotional, financial, and personal signs that indicate you’re prepared.",
      date: "February 10, 2025",
      author: "Admin",
    },
    {
      id: 3,
      title: "🔑 Building Trust in a Relationship",
      summary: "Trust is the foundation of any strong relationship. This guide explores common trust issues, how to overcome them, and ways to build a lasting bond.",
      date: "January 25, 2025",
      author: "Admin",
    },
  ];

  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center dark:text-slate-300 text-gray-800 mb-8">📚 Latest Blog Articles</h2>
      <p className="text-center text-gray-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
        Explore expert advice on love, relationships, and marriage. Stay informed with our latest insights.
      </p>
      <div className="max-w-7xl mx-auto px-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-8 border-b pb-6">
            <p className="text-sm text-gray-500">{blog.date} • {blog.author}</p>
            <h3
              className="text-2xl font-semibold text-gray-800 dark:text-slate-400 mt-2 cursor-pointer hover:text-pink-500 transition duration-300"
              onClick={() => navigate(`/blogs/${blog.id}`)}
            >
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-slate-400 mt-2">{blog.summary}</p>
            <button
              onClick={() => navigate('/Blogs')}
              className="text-pink-500 font-medium mt-2 hover:underline"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
