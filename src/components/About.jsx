import { motion } from 'framer-motion'
import { Code, Database, Server, Smartphone, Brain, Shield, GraduationCap, Award } from 'lucide-react'

const About = () => {
  const skills = [
    { category: "Programming Languages", items: ["Python", "C/C++", "Java", "JavaScript", "HTML", "SQL", "Assembly"], icon: Code },
    { category: "Frameworks", items: ["React.js", "LangGraph", "FastAPI", "Spring Boot", "Tailwind CSS", "Node.js"], icon: Server },
    { category: "Additional Skills", items: ["PostgreSQL", "MySQL", "Linux", "LangGraph"], icon: Database },
    { category: "Specializations", items: ["AI/ML", "Cybersecurity", "Full-Stack Development", "Cloud Computing"], icon: Brain }
  ]

  const education = {
    institution: "PES University",
    degree: "Bachelor of Technology in Computer Science",
    cgpa: "8.06 (As of 6th Semester)",
    coursework: [
      "Data Structures", "Software Engineering", "Cloud Computing", "Applied Cryptography",
      "Computer Networks", "Web Technologies", "Machine Learning", "Information Security",
      "Enterprise Business Systems", "Large Language Models"
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 relative">
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
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate software engineer with expertise in cybersecurity, AI/ML, and full-stack development
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg mr-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{education.institution}</h3>
                  <p className="text-primary-400 text-lg">{education.degree}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-4">
                    <Award className="w-5 h-5 text-secondary-400 mr-2" />
                    <span className="text-lg font-semibold">CGPA: {education.cgpa}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary-400">Key Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, index) => (
                      <motion.span
                        key={index}
                        className="bg-dark-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg mr-3">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{skillGroup.category}</h4>
                    </div>
                    
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                        >
                          <span className="text-gray-300 text-sm">{skill}</span>
                          <motion.div
                            className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 + 0.2 }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { label: "Years of Learning", value: "4+" },
              { label: "Projects Completed", value: "10+" },
              { label: "Technologies Mastered", value: "15+" },
              { label: "Hackathons Participated", value: "5+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-dark-800/30 to-dark-700/30 rounded-xl border border-gray-700"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
