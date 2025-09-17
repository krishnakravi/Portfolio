import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Download, ExternalLink, Copy, Check } from 'lucide-react'
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
      // Fallback for older browsers
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Instead of opening email client, copy message to clipboard
    const emailContent = `Subject: ${formData.subject || 'Portfolio Contact'}

Hi Krishna,

${formData.message}

Best regards,
${formData.name}
Email: ${formData.email}`

    try {
      await navigator.clipboard.writeText(emailContent)
      alert('Message copied to clipboard! You can now paste it in your preferred email client or messaging app.')
    } catch (err) {
      // Fallback: still provide mailto option
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
      const body = encodeURIComponent(`Hi Krishna,

${formData.message}

Best regards,
${formData.name}
${formData.email}`)
      
      if (confirm('Unable to copy to clipboard. Would you like to open your email client instead?')) {
        window.location.href = `mailto:krishnakravi007@gmail.com?subject=${subject}&body=${body}`
      }
    }
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishnakravi007@gmail.com",
      href: "mailto:krishnakravi007@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9606140554",
      href: "tel:+919606140554",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "https://maps.google.com/?q=Bangalore,India",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "krishnakravi",
      href: "https://github.com/krishnakravi",
      gradient: "from-gray-600 to-gray-800"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/krishnakravi",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/krishna-k-r-15b2a4214/",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "#contact",
      color: "hover:text-red-400"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "https://github.com/krishnakravi/Portfolio",
      color: "hover:text-purple-400"
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
    <section id="contact" className="py-20 relative">
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
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with fellow developers. 
                  Whether you have a project in mind, want to discuss technology, or just want to say hello, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  
                  // Special handling for email to add copy functionality
                  if (contact.label === "Email") {
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center p-4 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`bg-gradient-to-r ${contact.gradient} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-400">{contact.label}</p>
                          <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                            {contact.value}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <motion.button
                            onClick={copyEmailToClipboard}
                            className="p-2 bg-primary-500/20 hover:bg-primary-500/40 rounded-lg transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="Copy email address"
                          >
                            {copiedEmail ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-primary-400" />
                            )}
                          </motion.button>
                          <motion.a
                            href={contact.href}
                            className="p-2 bg-secondary-500/20 hover:bg-secondary-500/40 rounded-lg transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="Open in email client"
                          >
                            <ExternalLink className="w-4 h-4 text-secondary-400" />
                          </motion.a>
                        </div>
                      </motion.div>
                    )
                  }
                  
                  // Regular handling for other contacts
                  return (
                    <motion.a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center p-4 bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)"
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`bg-gradient-to-r ${contact.gradient} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{contact.label}</p>
                        <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    const isExternalLink = social.href.startsWith('http')
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target={isExternalLink ? "_blank" : undefined}
                        rel={isExternalLink ? "noopener noreferrer" : undefined}
                        className={`p-3 bg-dark-800/50 rounded-lg border border-gray-700 hover:border-primary-500/50 text-gray-400 ${social.color} transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="/Assets/Krishna_K_R_Resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500 to-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-secondary-600 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-secondary-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary-400" />
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="Your Name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="Project Discussion"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
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
            className="text-center mt-16 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-400">
              © 2025 Krishna K R. Built with React, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed with ❤️ and lots of coffee ☕
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
