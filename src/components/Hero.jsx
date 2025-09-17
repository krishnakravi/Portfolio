import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-48 h-48 mx-auto lg:mx-0 mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full p-1 animate-pulse-slow">
                <div className="w-full h-full bg-dark-900 rounded-full p-2">
                  <img
                    src="/Assets/insta_pfp.jpeg"
                    alt="Krishna K R"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating icons around profile */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary-500 p-2 rounded-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Github className="w-6 h-6" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary-500 p-2 rounded-full"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Mail className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-secondary-400 bg-clip-text text-transparent">
                Krishna K R
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl lg:text-2xl text-gray-300 mb-6"
            >
              <span className="font-mono text-primary-400">&lt;</span>
              Software Engineer & Tech Enthusiast
              <span className="font-mono text-primary-400">/&gt;</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              Passionate about cybersecurity, AI/ML, and full-stack development. 
              Building innovative solutions with cutting-edge technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.a>
              
              <motion.a
                href="/Assets/Krishna_K_R_Resume.pdf"
                target="_blank"
                className="border border-secondary-500 text-secondary-400 hover:bg-secondary-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex gap-6 justify-center lg:justify-start mt-8"
            >
              <motion.a
                href="https://github.com/krishnakravi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/krishna-k-r-15b2a4214/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#contact"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="tel:+919606140554"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <Phone className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">krishna.js</span>
              </div>
              <div className="font-mono text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="text-purple-400"
                >
                  <span className="text-blue-400">const</span> <span className="text-yellow-400">developer</span> = {'{'}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                  className="ml-4 text-gray-300"
                >
                  name: <span className="text-green-400">"Krishna K R"</span>,
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                  className="ml-4 text-gray-300"
                >
                  skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"AI/ML"</span>],
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                  className="ml-4 text-gray-300"
                >
                  passion: <span className="text-green-400">"Building innovative solutions"</span>,
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3, duration: 0.5 }}
                  className="ml-4 text-gray-300"
                >
                  coffee: <span className="text-orange-400">true</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                  className="text-purple-400"
                >
                  {'}'}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
