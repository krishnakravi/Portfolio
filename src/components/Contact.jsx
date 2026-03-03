import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('krishnakravi007@gmail.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      const textArea = document.createElement('textarea')
      textArea.value = 'krishnakravi007@gmail.com'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    const emailContent = `Subject: ${formData.subject || 'Portfolio Contact'}\n\nHi Krishna,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`

    try {
      await navigator.clipboard.writeText(emailContent)
      alert('Message copied to clipboard! Paste it in your preferred email client.')
    } catch (err) {
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
      const body = encodeURIComponent(`Hi Krishna,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`)
      if (confirm('Unable to copy to clipboard. Open your email client instead?')) {
        window.location.href = `mailto:krishnakravi007@gmail.com?subject=${subject}&body=${body}`
      }
    }

    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactLinks = [
    { icon: Mail, label: "Email", value: "krishnakravi007@gmail.com", href: "mailto:krishnakravi007@gmail.com", copyable: true },
    { icon: Phone, label: "Phone", value: "+91 9606140554", href: "tel:+919606140554" },
    { icon: MapPin, label: "Location", value: "Bangalore, India" },
  ]

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/krishnakravi" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/krishna-k-r-15b2a4214/" },
    { icon: Mail, label: "Email", href: "mailto:krishnakravi007@gmail.com" },
  ]

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
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-16 lg:mb-20">
            <p className="text-primary-400 font-mono text-sm mb-3 tracking-wider">04 / CONTACT</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-dark-400 text-lg leading-relaxed">
              Have a project in mind or want to discuss technology? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Contact details */}
              <div className="space-y-4">
                {contactLinks.map((link, i) => {
                  const Icon = link.icon
                  return (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-primary-500/20 transition-all">
                        <Icon className="w-4 h-4 text-dark-400 group-hover:text-primary-400 transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-dark-500 mb-0.5">{link.label}</p>
                        {link.href ? (
                          <a href={link.href} className="text-sm text-dark-300 hover:text-white transition-colors truncate block">
                            {link.value}
                          </a>
                        ) : (
                          <p className="text-sm text-dark-300">{link.value}</p>
                        )}
                      </div>
                      {link.copyable && (
                        <button
                          onClick={copyEmailToClipboard}
                          className="p-2 rounded-lg hover:bg-white/[0.04] transition-all"
                          title="Copy email"
                        >
                          {copiedEmail ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-dark-500 hover:text-dark-300" />
                          )}
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs text-dark-500 mb-3 uppercase tracking-wider font-medium">Connect</p>
                <div className="flex gap-2">
                  {socials.map((social, i) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-dark-400 hover:text-white hover:border-primary-500/20 hover:bg-white/[0.06] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Resume CTA */}
              <motion.a
                href="/Assets/Krishna_K_R_Resume.pdf"
                target="_blank"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                whileHover={{ x: 4 }}
              >
                Download Resume
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="card-premium">
                <h3 className="font-display text-lg font-bold text-white mb-6">Send a message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-dark-500 mb-2 uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/40 focus:ring-1 focus:ring-primary-500/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-dark-500 mb-2 uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/40 focus:ring-1 focus:ring-primary-500/20 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-dark-500 mb-2 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/40 focus:ring-1 focus:ring-primary-500/20 transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-dark-500 mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/40 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm rounded-xl transition-all duration-300 shadow-glow-sm hover:shadow-glow"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-24 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-dark-600">
              &copy; {new Date().getFullYear()} Krishna K R
            </p>
            <p className="text-xs text-dark-600">
              Built with React, Tailwind CSS &amp; Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
