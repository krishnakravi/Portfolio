import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary-600/[0.07] rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-secondary-600/[0.05] rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-600/[0.03] rounded-full blur-[150px]" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <motion.div style={{ y, opacity }} className="w-full relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Main content */}
            <motion.div
              className="lg:col-span-7 text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Status badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-light">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-sm text-dark-300 font-medium">Available for opportunities</span>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
              >
                <span className="text-white">Krishna</span>
                <br />
                <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
                  K R
                </span>
              </motion.h1>

              {/* Title */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-dark-400 font-light max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed"
              >
                Software Engineer crafting intelligent systems at the intersection of
                <span className="text-primary-400 font-normal"> AI/ML</span>,
                <span className="text-secondary-400 font-normal"> Cybersecurity</span>, and
                <span className="text-accent-400 font-normal"> Full-Stack Development</span>.
              </motion.p>

              {/* Location */}
              <motion.p
                variants={itemVariants}
                className="text-sm text-dark-500 mb-8 font-mono"
              >
                Bangalore, India &bull; PES University &bull; B.Tech CSE
              </motion.p>

              {/* Action buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
              >
                <motion.a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all duration-300 shadow-glow-sm hover:shadow-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  Get in touch
                </motion.a>

                <motion.a
                  href="/Assets/Krishna_K_R_Resume.pdf"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-dark-300 hover:text-white font-medium rounded-xl border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Resume
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </motion.div>

              {/* Social links */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                {[
                  { icon: Github, href: "https://github.com/krishnakravi", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/krishna-k-r-15b2a4214/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:krishnakravi007@gmail.com", label: "Email" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2.5 rounded-lg text-dark-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Code card */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                {/* Card glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/10 to-accent-500/20 rounded-2xl blur-xl opacity-50" />

                {/* Code card */}
                <div className="relative glass rounded-2xl overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.04]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-[#ff5f57] rounded-full" />
                      <div className="w-2.5 h-2.5 bg-[#febc2e] rounded-full" />
                      <div className="w-2.5 h-2.5 bg-[#28c840] rounded-full" />
                    </div>
                    <span className="text-dark-500 text-xs font-mono ml-3">krishna.config.ts</span>
                  </div>

                  {/* Code content */}
                  <div className="p-5 font-mono text-[13px] leading-relaxed">
                    {[
                      { delay: 0.8, content: <><span className="text-secondary-400">interface</span> <span className="text-accent-300">Developer</span> {'{'}</> },
                      { delay: 1.0, content: <span className="ml-4"><span className="text-dark-400">name</span>: <span className="text-emerald-400">"Krishna K R"</span></span> },
                      { delay: 1.2, content: <span className="ml-4"><span className="text-dark-400">role</span>: <span className="text-emerald-400">"Software Engineer"</span></span> },
                      { delay: 1.4, content: <span className="ml-4"><span className="text-dark-400">stack</span>: [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"AI/ML"</span>]</span> },
                      { delay: 1.6, content: <span className="ml-4"><span className="text-dark-400">focus</span>: [<span className="text-emerald-400">"Security"</span>, <span className="text-emerald-400">"LLMs"</span>, <span className="text-emerald-400">"Cloud"</span>]</span> },
                      { delay: 1.8, content: <span className="ml-4"><span className="text-dark-400">building</span>: <span className="text-orange-400">true</span></span> },
                      { delay: 2.0, content: <>{'}'}</> },
                    ].map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: line.delay, duration: 0.5, ease: "easeOut" }}
                        className="text-dark-300"
                      >
                        {line.content}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats row below code card */}
                <motion.div
                  className="grid grid-cols-3 gap-3 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                >
                  {[
                    { value: "4+", label: "Years" },
                    { value: "10+", label: "Projects" },
                    { value: "5+", label: "Hackathons" },
                  ].map((stat, i) => (
                    <div key={i} className="glass-light rounded-xl p-3 text-center">
                      <div className="text-lg font-display font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-dark-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-dark-500 font-mono tracking-wider uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-dark-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
