import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Our Secret Sauce Recipe',
      description: 'Discover the ingredients that make our sauce unique.',
      image: '/images/secret-sauce.jpg',
    },
    {
      id: 2,
      title: 'Chef’s Special: Summer Salad',
      description: 'A refreshing salad perfect for the summer season.',
      image: '/images/summer-salad.jpg',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Restaurant Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
