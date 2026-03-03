import { motion } from 'framer-motion'
import { Github, ArrowUpRight, Smartphone, Shield, Brain, Database, Trophy } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Smart Diet & Fitness Planner",
      description: "AI-powered mobile app tracking diet via image recognition, generating personalized meal/exercise plans, and integrating with WearOS for real-time health insights.",
      technologies: ["Python", "Flutter", "Groq API", "Gemini API", "HealthConnect"],
      status: "In Progress",
      type: "Capstone Project",
      features: [
        "AI diet tracking with image recognition",
        "Personalized meal & exercise planning",
        "WearOS health data integration",
        "Custom health analytics & insights"
      ],
      icon: Smartphone,
      accent: "primary"
    },
    {
      title: "HoneyShield",
      description: "IoT security system using realistic honeypots to detect anomalies. Achieved 90% accuracy in identifying malicious traffic with real-time analysis and automated IP blacklisting.",
      technologies: ["Python", "ML", "IoT Security", "Network Analysis"],
      github: "https://github.com/krishnakravi/IOT",
      type: "Security",
      features: [
        "Realistic IoT device honeypot",
        "90% threat detection accuracy",
        "Real-time traffic analysis",
        "Automated IP blacklisting"
      ],
      icon: Shield,
      accent: "secondary"
    },
    {
      title: "Weal - Mental Health Chatbot",
      description: "AI mental health assistant combining voice stress analysis with RAG-powered conversational AI for personalized, context-aware emotional support.",
      technologies: ["Python", "LangChain", "FAISS", "RAG", "Voice Analysis"],
      github: "https://github.com/krishnakravi/Weal_chatbot/tree/main",
      type: "AI/ML",
      features: [
        "Voice stress analysis integration",
        "Conversational AI with RAG",
        "Personalized support responses",
        "Real-time emotional assessment"
      ],
      icon: Brain,
      accent: "accent"
    },
    {
      title: "Exercise Recommendation System",
      description: "NLP-powered system using prompt engineering and vector search to match exercises to user profiles, generating custom workout plans based on goals and equipment.",
      technologies: ["Python", "FAISS", "Gensim", "NLP", "RAG"],
      github: "https://github.com/krishnakravi/GenAI_Project",
      type: "AI/ML",
      features: [
        "NLP-based exercise analysis",
        "Personalized workout generation",
        "Equipment & level matching",
        "Goal-oriented recommendations"
      ],
      icon: Database,
      accent: "primary"
    }
  ]

  const hackathons = [
    { name: "SAP Hackfest", result: "Participant" },
    { name: "Smart India Hackathon", result: "Participant" },
    { name: "TATA Imagination Challenge", result: "Participant" },
    { name: "PESU Terrathon 4.0", result: "Top 10 Finish", highlight: true },
  ]

  const accentColors = {
    primary: { icon: 'text-primary-400', bg: 'bg-primary-500/10', border: 'border-primary-500/20', glow: 'group-hover:shadow-glow-sm' },
    secondary: { icon: 'text-secondary-400', bg: 'bg-secondary-500/10', border: 'border-secondary-500/20', glow: 'group-hover:shadow-glow-purple' },
    accent: { icon: 'text-accent-400', bg: 'bg-accent-500/10', border: 'border-accent-500/20', glow: 'group-hover:shadow-glow-accent' },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-16 lg:mb-20">
            <p className="text-primary-400 font-mono text-sm mb-3 tracking-wider">03 / PROJECTS</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Featured Work
            </h2>
            <p className="text-dark-400 text-lg leading-relaxed">
              A selection of projects spanning AI/ML, cybersecurity, and full-stack development.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-5 mb-20">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              const colors = accentColors[project.accent]
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group card-premium ${colors.glow} transition-all duration-500`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${colors.bg} border ${colors.border}`}>
                        <IconComponent className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-lg">{project.title}</h3>
                        <p className="text-xs text-dark-500 font-mono">{project.type}</p>
                      </div>
                    </div>

                    {project.status && (
                      <span className="px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-dark-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-dark-300">
                        <span className={`w-1 h-1 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/[0.04]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 text-[11px] font-medium text-dark-400 rounded bg-white/[0.03] border border-white/[0.05]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-dark-400 hover:text-white transition-colors ml-4 flex-shrink-0"
                        whileHover={{ x: 2 }}
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                        <ArrowUpRight className="w-3 h-3" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Hackathons */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-8">
              <Trophy className="w-5 h-5 text-secondary-400" />
              <h3 className="font-display text-2xl font-bold text-white">Hackathons</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {hackathons.map((hack, i) => (
                <motion.div
                  key={i}
                  className={`card-premium p-5 text-center ${hack.highlight ? 'border-primary-500/20' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-display font-semibold text-white text-sm mb-2">{hack.name}</h4>
                  <p className={`text-xs font-medium ${hack.highlight ? 'text-primary-400' : 'text-dark-500'}`}>
                    {hack.result}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View all CTA */}
          <motion.div variants={itemVariants} className="flex justify-center mt-14">
            <motion.a
              href="https://github.com/krishnakravi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-dark-300 hover:text-white border border-white/[0.08] hover:border-white/[0.15] rounded-xl hover:bg-white/[0.03] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              View all projects on GitHub
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
