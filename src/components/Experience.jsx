import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: "ACL Digital (Alten Calsoft Labs)",
      role: "Data Science Intern",
      duration: "June 2025 - Aug 2025",
      location: "Remote",
      logo: "/Assets/ACL_Digital_Logo.jpg",
      description: [
        "Developed an AI-powered multi-agent conversational platform using Python, Azure OpenAI, LangGraph, and Streamlit for natural language queries over enterprise- and university-scale databases.",
        "Designed and customized ReAct agents for domain-specific use cases, enabling intelligent SQL query generation and secure role-based access control (RBAC).",
        "Implemented agent orchestration for query routing, SQL execution management, and conversation memory handling.",
        "Built dynamic data visualizations with Plotly and developed responsive Streamlit/Tailwind frontends with authentication and session management.",
        "Explored secure database connectivity techniques (including SQLite), demonstrating expertise in LLM integration, database security, and full-stack development."
      ],
      technologies: ["Python", "Azure OpenAI", "LangGraph", "Streamlit", "Plotly", "SQLite", "RBAC"]
    },
    {
      company: "Zentree Labs",
      role: "Trainee",
      duration: "June 2024 - Aug 2024",
      location: "Bangalore, India",
      logo: "/Assets/Zentree Labs.png",
      description: [
        "Trained on Digital Image Processing from the ground up.",
        "Applied coding implementation of digital image processing concepts to help develop company products.",
        "Gained hands-on experience with image processing algorithms and computer vision techniques."
      ],
      technologies: ["Python", "OpenCV", "Digital Image Processing", "Computer Vision"]
    },
    {
      company: "CIE, PES University",
      role: "Tech Research Analyst",
      duration: "Jan 2023 - April 2023",
      location: "Bangalore, India",
      logo: "/Assets/CIE logo.jpg",
      description: [
        "Developed a prototype of a fine-tuned Mistral 7b model that has been trained using a medical dataset using Google Colab.",
        "Ran Google Gemini 2b model locally using LM studio and gave it access to system terminal using Open Interpreter (open source GitHub project).",
        "Conducted research on large language models and their applications in healthcare."
      ],
      technologies: ["Python", "Mistral 7B", "Google Colab", "LM Studio", "Open Interpreter", "LLMs"]
    },
    {
      company: "Greenifly",
      role: "Entrepreneur Buddy",
      duration: "Nov 2022 - Dec 2022",
      location: "Remote",
      logo: "/Assets/Greenifly.webp",
      description: [
        "Researched technical aspects of drone making for the agriculture industry.",
        "Used social media to expand market reach and facilitate sales agent recruitment.",
        "Computed costs for products and services, established mark-up and set pricing for business offerings."
      ],
      technologies: ["Market Research", "Drone Technology", "Business Development", "Social Media Marketing"]
    }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A journey through innovative projects and cutting-edge technologies
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-900 z-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                {/* Experience Card */}
                <motion.div
                  className={`w-full lg:w-5/12 ml-16 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <motion.div
                          className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary-500/30"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                          <p className="text-primary-400 font-semibold">{exp.role}</p>
                        </div>
                      </div>
                      <motion.div
                        className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 p-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Briefcase className="w-5 h-5 text-primary-400" />
                      </motion.div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-secondary-400" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-secondary-400" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <motion.li
                            key={descIndex}
                            className="text-gray-300 text-sm leading-relaxed flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: descIndex * 0.1 }}
                          >
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {desc}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <p className="text-sm font-semibold text-secondary-400 mb-2">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 px-3 py-1 rounded-full text-xs border border-primary-500/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(59, 130, 246, 0.3)"
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              Let's Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
