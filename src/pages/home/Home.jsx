import React from "react";

const Home = () => {
  return (
    <div className="min-h-[70vh]">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Image Section */}
        <div className="mb-6">
          <img
            src="https://ziyouz.uz/wp-content/uploads/2017/01/osmon.jpg"
            alt="Home Banner"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Description Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 text-lg max-w-2xl">
            Welcome to our platform! We aim to provide you with the best
            services to meet your needs. Explore our features and enjoy a
            seamless experience designed just for you.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
