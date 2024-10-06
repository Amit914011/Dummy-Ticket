import React from 'react';
import { useParams } from 'react-router-dom';

// Blog data (can be fetched from API in real cases)
const blogs = [
  {
    id: 1,
    title: 'The Future of Technology',
    author: 'John Doe',
    date: 'Oct 1, 2024',
    description: 'Explore the upcoming trends in technology, from AI to Blockchain, and how they will reshape our world.',
    content: 'Here’s the full content of the blog about the future of technology...'
  },
  {
    id: 2,
    title: 'Understanding Climate Change',
    author: 'Jane Smith',
    date: 'Sep 25, 2024',
    description: 'A deep dive into climate change, its effects, and what we can do to mitigate the damage.',
    content: 'Here’s the full content of the blog about climate change...'
  },
  {
    id: 3,
    title: 'The Power of Mindfulness',
    author: 'Alice Johnson',
    date: 'Sep 15, 2024',
    description: 'How practicing mindfulness can improve your mental health and productivity in daily life.',
    content: 'Here’s the full content of the blog about mindfulness...'
  },
];

export default function SingleBlog() {
  const { id } = useParams(); // Get the blog id from the URL
  const blog = blogs.find(blog => blog.id === parseInt(id)); // Find the blog by ID

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Single Blog Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-8">
          By {blog.author} | {blog.date}
        </p>
        <p className="text-lg text-gray-700 mb-8">{blog.content}</p>
      </div>
    </div>
  );
}
