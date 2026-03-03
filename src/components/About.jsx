import { motion } from 'framer-motion'
import { Code, Database, Server, Brain, GraduationCap, Sparkles } from 'lucide-react'

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "C/C++", "Java", "JavaScript", "SQL", "Assembly"],
      icon: Code,
      color: "primary"
    },
    {
      category: "Frameworks",
      items: ["React.js", "LangGraph", "FastAPI", "Spring Boot", "Tailwind CSS", "Node.js"],
      icon: Server,
      color: "secondary"
    },
    {
      category: "Databases & Tools",
      items: ["PostgreSQL", "MySQL", "Linux", "Docker", "Git", "Azure"],
      icon: Database,
      color: "accent"
    },
    {
      category: "Specializations",
      items: ["AI/ML", "Cybersecurity", "Full-Stack Development", "Cloud Computing", "LLMs", "RAG"],
      icon: Brain,
      color: "primary"
    }
  ]

  const coursework = [
    "Data Structures", "Software Engineering", "Cloud Computing", "Applied Cryptography",
    "Computer Networks", "Web Technologies", "Machine Learning", "Information Security",
    "Enterprise Business Systems", "Large Language Models"
  ]

  const colorMap = {
    primary: { bg: 'bg-primary-500/10', border: 'border-primary-500/20', text: 'text-primary-400', dot: 'bg-primary-400' },
    secondary: { bg: 'bg-secondary-500/10', border: 'border-secondary-500/20', text: 'text-secondary-400', dot: 'bg-secondary-400' },
    accent: { bg: 'bg-accent-500/10', border: 'border-accent-500/20', text: 'text-accent-400', dot: 'bg-accent-400' },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="about" className="section-padding relative">
      {/* Section ambient */}
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
            <p className="text-primary-400 font-mono text-sm mb-3 tracking-wider">01 / ABOUT</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Background &amp; Skills
            </h2>
            <p className="text-dark-400 text-lg leading-relaxed">
              Final-year Computer Science student at PES University with a strong foundation in AI/ML,
              cybersecurity, and full-stack development. Driven by curiosity and a passion for building
              systems that make a real impact.
            </p>
          </motion.div>

          {/* Education card */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="card-premium">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
                    <GraduationCap className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">PES University</h3>
                    <p className="text-dark-400">B.Tech in Computer Science and Engineering</p>
                  </div>
                </div>
                <div className="sm:ml-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                    CGPA: 8.06
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium text-dark-300 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-primary-500/20 hover:text-primary-400 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    viewport={{ once: true }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-secondary-400" />
              <h3 className="font-display text-2xl font-bold text-white">Technical Skills</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon
                const colors = colorMap[skillGroup.color]
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group card-premium p-5"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                        <IconComponent className={`w-4 h-4 ${colors.text}`} />
                      </div>
                      <h4 className="text-sm font-semibold text-white tracking-wide uppercase">{skillGroup.category}</h4>
                    </div>

                    <div className="space-y-2.5">
                      {skillGroup.items.map((skill, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2.5"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-1 h-1 rounded-full ${colors.dot}`} />
                          <span className="text-sm text-dark-300 group-hover:text-dark-200 transition-colors">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
