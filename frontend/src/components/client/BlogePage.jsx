import React from 'react';
import { useParams } from 'react-router-dom';

// Blog data (can be fetched from API in real cases)
const blogs = [
  {
    id: 1,
    title: 'Dummy Ticket : Understanding Their Purpose and Usage',
    author: 'Aman',
    date: 'Oct 1, 2024',
    content: 'The term “dummy ticket” can make people curious. It stands for a real airline ticket. This helps meet visa or travel proof needs without actually booking a flight. A dummy ticket looks like a real one, with details like the traveler’s name and flight info. While it’s not against the law, it might break airline rules. Some people use dummy tickets to follow the immigration rules. Sites like Onward Ticket offer real bookings that airlines and borders can check. This makes sure everyone is playing by the rules. ',
  },
  {
    id: 2,
    title: 'How can I make dummy flight ticket online?',
    author: 'Saurabh Smith',
    date: 'Sep 25, 2024',
    content: 'In today’s world of travel planning, the essentials of having a confirmed flight ticket for visa applications or Travel itinerary requirements is disputed. However, sometimes, securing an actual flight ticket isn’t feasible or necessary. This is the point at which you can book a dummy flight ticket online. We’ll take you step-by-step through the easy process of getting flight ticket in this post.ng a dummy'
  },
  {
    id: 3,
    title: 'Dummy Hotel Booking for Visa Application | Dummy-Tickets',
    author: 'Alice Johnson',
    date: 'Sep 15, 2024',
    content: "A dummy hotel booking for a visa application is a reservation made at a hotel for the purpose of obtaining a visa. This type of booking is typically made without the intention of actually staying at the hotel. It’s often required by visa authorities as part of the application process to demonstrate proof of accommodation during the intended stay in the destination country.It’s essential to note that while dummy hotel bookings are sometimes accepted during the visa application process, it’s not advisable to provide false information or misrepresent your intentions. Some countries have strict regulations regarding visa applications, and providing false information could lead to visa denial or even legal consequences. "
  },
];

export default function SingleBlog() {
  const { id } = useParams(); // Get the blog id from the URL
  const blog = blogs.find(blog => blog.id === parseInt(id)); // Find the blog by ID

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16 pt-28">
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
