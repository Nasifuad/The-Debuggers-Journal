import { motion } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCode,
  FaBug,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  const topics = [
    { name: "Debugging Techniques", icon: <FaBug className="w-6 h-6" /> },
    { name: "Software Development", icon: <FaCode className="w-6 h-6" /> },
    { name: "Programming Languages", icon: <FaRocket className="w-6 h-6" /> },
    { name: "Code Optimization", icon: <FaLightbulb className="w-6 h-6" /> },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/debuggersjournal",
      color: "text-gray-800",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/debuggersjournal",
      color: "text-blue-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/debuggersjournal",
      color: "text-blue-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Debugging the Future
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering clarity in code through innovative solutions and
            community-driven knowledge sharing.
          </motion.p>
        </section>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/10"
          >
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Empowering developers worldwide with actionable insights,
              fostering innovation through collaborative learning and
              cutting-edge technical expertise.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/10"
          >
            <h2 className="text-3xl font-semibold text-cyan-400 mb-4">
              Our Philosophy
            </h2>
            <blockquote className="text-2xl italic text-gray-300">
              "Every bug is a lesson, every solution a story."
            </blockquote>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-gray-100">
            Core Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-white/10 flex items-center gap-4"
              >
                <div className="text-blue-400">{topic.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100">
                  {topic.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="text-center py-16 space-y-8">
          <h2 className="text-4xl font-bold text-gray-100">
            Join Our Community
          </h2>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className={`text-4xl p-4 rounded-full bg-gray-800/30 backdrop-blur-lg border border-white/10 hover:border-blue-400 transition-all ${link.color}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Debuggers Journal. Open source
            contributions welcomed.
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default About;
