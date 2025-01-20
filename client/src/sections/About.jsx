const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
      {/* Header Section */}
      <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Debuggers Journal
        </h1>
        <p className="text-gray-600 text-lg">
          Welcome to{" "}
          <span className="text-blue-500 font-semibold">Debuggers Journal</span>
          , your go-to platform for in-depth articles, tutorials, and insights
          into the world of programming, debugging, and cutting-edge tech
          trends.
        </p>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-4xl bg-blue-100 shadow-lg rounded-lg p-6 mt-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg">
          At Debuggers Journal, our mission is to empower developers and tech
          enthusiasts with actionable knowledge and best practices, fostering
          growth and innovation in the ever-evolving tech ecosystem.
        </p>
      </section>

      {/* Motto Section */}
      <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Motto</h2>
        <p className="text-gray-700 italic text-xl">
          Breaking bugs, building futures.
        </p>
      </section>

      {/* Topics Covered */}
      <section className="w-full max-w-4xl bg-gray-50 shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Topics We Cover
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 font-medium">
            Debugging Techniques
          </li>
          <li className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 font-medium">
            Software Development
          </li>
          <li className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 font-medium">
            Programming Languages
          </li>
          <li className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 font-medium">
            Code Optimization
          </li>
          <li className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 font-medium">
            Tech Trends
          </li>
          <li className="bg-gray-200 px-4 py-2 rounded-md text-gray-700 font-medium">
            Best Practices
          </li>
        </ul>
      </section>

      {/* Social Media Section */}
      <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Follow Us</h2>
        <p className="text-gray-600 mb-4">
          Stay updated with our latest articles, tips, and tech news.
        </p>
        <div className="flex justify-center space-x-6">
          {/* Social Media Icons */}
          <a
            href="https://github.com/debuggersjournal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-3xl transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/debuggersjournal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 text-3xl transition"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com/in/debuggersjournal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-3xl transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600">
        <p>
          © 2025 Debuggers Journal. All rights reserved. Built with ❤️ by the
          Debuggers Journal Team.
        </p>
      </footer>
    </div>
  );
};

export default About;
