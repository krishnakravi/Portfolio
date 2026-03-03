import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: "ACL Digital",
      companyFull: "Alten Calsoft Labs",
      role: "Data Science Intern",
      duration: "Jun 2025 - Aug 2025",
      location: "Remote",
      logo: "/Assets/ACL_Digital_Logo.jpg",
      description: [
        "Built an AI-powered multi-agent conversational platform using Python, Azure OpenAI, LangGraph, and Streamlit for natural language database queries.",
        "Designed ReAct agents for domain-specific use cases with intelligent SQL generation and role-based access control (RBAC).",
        "Implemented agent orchestration for query routing, SQL execution management, and conversation memory.",
        "Created dynamic data visualizations with Plotly and responsive frontends with authentication.",
      ],
      technologies: ["Python", "Azure OpenAI", "LangGraph", "Streamlit", "Plotly", "RBAC"]
    },
    {
      company: "Zentree Labs",
      role: "Trainee",
      duration: "Jun 2024 - Aug 2024",
      location: "Bangalore, India",
      logo: "/Assets/Zentree Labs.png",
      description: [
        "Trained in Digital Image Processing fundamentals and advanced techniques.",
        "Applied image processing algorithms to develop production-ready company products.",
        "Gained expertise in computer vision pipelines and image analysis.",
      ],
      technologies: ["Python", "OpenCV", "Image Processing", "Computer Vision"]
    },
    {
      company: "CIE, PES University",
      role: "Tech Research Analyst",
      duration: "Jan 2023 - Apr 2023",
      location: "Bangalore, India",
      logo: "/Assets/CIE logo.jpg",
      description: [
        "Fine-tuned Mistral 7B on medical datasets using Google Colab for healthcare applications.",
        "Deployed local LLM inference with LM Studio and system terminal access via Open Interpreter.",
        "Conducted research on large language models and their real-world applications.",
      ],
      technologies: ["Python", "Mistral 7B", "Google Colab", "LM Studio", "LLMs"]
    },
    {
      company: "Greenifly",
      role: "Entrepreneur Buddy",
      duration: "Nov 2022 - Dec 2022",
      location: "Remote",
      logo: "/Assets/Greenifly.webp",
      description: [
        "Researched drone technology for agricultural applications and market viability.",
        "Leveraged social media for market expansion and sales agent recruitment.",
        "Developed product costing models and pricing strategies for business offerings.",
      ],
      technologies: ["Market Research", "Drone Tech", "Business Dev", "Strategy"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-16 lg:mb-20">
            <p className="text-primary-400 font-mono text-sm mb-3 tracking-wider">02 / EXPERIENCE</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Where I've Worked
            </h2>
            <p className="text-dark-400 text-lg leading-relaxed">
              Building real-world solutions across AI, security, and full-stack development.
            </p>
          </motion.div>

          {/* Experience cards */}
          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="card-premium hover:border-primary-500/15 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left: Company info */}
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.03] flex-shrink-0">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-white text-base">{exp.company}</h3>
                          {exp.companyFull && (
                            <p className="text-xs text-dark-500">{exp.companyFull}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-primary-400" />
                        <span className="text-sm font-medium text-primary-400">{exp.role}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Calendar className="w-3.5 h-3.5 text-dark-500" />
                        <span className="text-xs text-dark-500 font-mono">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-dark-500" />
                        <span className="text-xs text-dark-500">{exp.location}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-[1px] self-stretch bg-white/[0.06]" />

                    {/* Right: Description */}
                    <div className="flex-1 min-w-0">
                      <ul className="space-y-2.5 mb-5">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-dark-300 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-primary-500/60 mt-2 flex-shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium text-dark-300 rounded-md bg-white/[0.03] border border-white/[0.06] hover:border-primary-500/20 hover:text-primary-400 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
