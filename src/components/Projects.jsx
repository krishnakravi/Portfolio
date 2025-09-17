import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Brain, Shield, Smartphone, Calendar, Star, Award } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Smart Diet and Fitness Planner",
      description: "An all-in-one mobile application that tracks user's diet using Image Recognition/User Input. Capable of creating both diet and exercise plans personalized to the user's needs. Can connect to WearOS based watches to extract health information and make custom health inferences.",
      technologies: ["Python", "Flutter", "Groq API", "Gemini API", "HealthConnect"],
      status: "Ongoing",
      type: "Capstone Project",
      features: [
        "AI-powered diet tracking with image recognition",
        "Personalized meal and exercise planning",
        "WearOS integration for health data",
        "Custom health analytics and insights"
      ],
      icon: Smartphone,
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "HoneyShield",
      description: "An IoT security anomaly detection system that uses a realistic honeypot to simulate devices. The system achieved an accuracy rate of around 90% in identifying malicious traffic with real-time analysis and IP blacklisting.",
      technologies: ["Python", "Machine Learning", "IoT Security", "Network Analysis"],
      github: "https://github.com/krishnakravi/IOT",
      type: "Security Project",
      features: [
        "Realistic IoT device honeypot simulation",
        "90% accuracy in threat detection",
        "Real-time traffic analysis",
        "Automated IP blacklisting and response"
      ],
      icon: Shield,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Mental Health Support Chatbot with RAG",
      description: "Weal is an AI-powered mental health support assistant that combines voice stress analysis with conversational AI to provide personalized mental health support using advanced RAG techniques.",
      technologies: ["Python", "LangChain", "FAISS", "RAG", "Voice Analysis"],
      github: "https://github.com/krishnakravi/Weal_chatbot/tree/main",
      type: "AI/ML Project",
      features: [
        "Voice stress analysis integration",
        "Conversational AI with RAG",
        "Personalized mental health support",
        "Real-time emotional state assessment"
      ],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Personalized Exercise Recommendation System",
      description: "Advanced NLP-powered system that provides personalized exercise recommendations using prompt engineering techniques. Analyzes exercise data and matches exercises to user profiles for custom workout plans.",
      technologies: ["Python", "FAISS", "Gensim", "NLP", "RAG"],
      github: "https://github.com/krishnakravi/GenAI_Project",
      type: "AI/ML Project",
      features: [
        "Advanced NLP analysis of exercise data",
        "Personalized workout plan generation",
        "Equipment and experience level matching",
        "Goal-oriented fitness recommendations"
      ],
      icon: Database,
      gradient: "from-blue-500 to-cyan-500"
    }
  ]

  const hackathons = [
    { name: "SAP Hackfest", achievement: "Participant" },
    { name: "Smart India Hackathon (SIH)", achievement: "Participant" },
    { name: "TATA Imagination Challenge 2025", achievement: "Participant" },
    { name: "PESU's Terrathon 4.0", achievement: "Top 10 Finish" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions showcasing expertise in AI/ML, cybersecurity, and full-stack development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                  }}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-primary-400 text-sm font-semibold">{project.type}</p>
                      </div>
                    </div>
                    
                    {project.status && (
                      <motion.span
                        className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 px-3 py-1 rounded-full text-xs border border-green-500/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.status}
                      </motion.span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-secondary-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="text-gray-400 text-sm flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <Star className="w-3 h-3 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-secondary-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className={`bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white px-3 py-1 rounded-full text-xs border border-white/20`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-dark-700 hover:bg-dark-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 border border-gray-600 hover:border-primary-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.a>
                    )}
                    
                    <motion.a
                      href={`https://www.google.com/search?q=${encodeURIComponent(project.technologies.join(' ') + ' tutorial guide documentation')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg text-sm hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Learn More
                    </motion.a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Hackathons Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
                Hackathon Achievements
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 text-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-full w-fit mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{hackathon.name}</h4>
                  <p className="text-primary-400 text-sm font-medium">{hackathon.achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/krishnakravi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
