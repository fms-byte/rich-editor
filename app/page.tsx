import React from 'react'
import Form from './components/Form';

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="w-4/5 min-w-2xl p-4">
        <p className="text-2xl font-bold text-center mb-8">Welcome to Farhan's Blog</p>
        <Form />
      </div>

      {/* <div className="w-full max-w-2xl mt-8">
        <p className="text-xl font-semibold mb-4">Posts</p>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <p className="text-xl font-semibold">{post.title}</p>
              <p className="text-lg mt-2" dangerouslySetInnerHTML={{ __html: post.description }}></p>
            </div>
          ))}
        </div>
      </div> */}
    </main>
  );
}

export default Home