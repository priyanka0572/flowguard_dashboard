import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company/Organization is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitSuccess(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'info@flowguard.ai',
      description: 'For partnerships and pilots',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9AM-6PM EST',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: '🏢',
      title: 'Office',
      content: 'New York, NY',
      description: 'Headquarters and main operations',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#', gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Twitter', icon: '🐦', url: '#', gradient: 'from-sky-500 to-blue-600' },
    { name: 'YouTube', icon: '📺', url: '#', gradient: 'from-red-500 to-pink-600' }
  ];

  const partnershipBenefits = [
    'Custom implementation planning',
    'Technical training and support',
    'Ongoing maintenance and updates',
    'Performance analytics and reporting',
    '24/7 customer support',
    'Regular feature updates'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Ready to revolutionize your stormwater management? Let's discuss how Flow Guard can help your municipality.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 md:p-12 border border-gray-700/50 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Send us a Message
              </h2>
              
              {submitSuccess ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300 text-lg">
                    Thank you for contacting Flow Guard. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 bg-gray-800/50 text-white placeholder-gray-400 ${
                        errors.name ? 'border-rose-500/50 bg-rose-500/10' : 'border-gray-600/50'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-rose-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 bg-gray-800/50 text-white placeholder-gray-400 ${
                        errors.email ? 'border-rose-500/50 bg-rose-500/10' : 'border-gray-600/50'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-rose-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-3">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 bg-gray-800/50 text-white placeholder-gray-400 ${
                        errors.company ? 'border-rose-500/50 bg-rose-500/10' : 'border-gray-600/50'
                      }`}
                      placeholder="Enter your company or organization name"
                    />
                    {errors.company && (
                      <p className="mt-2 text-sm text-rose-400">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 bg-gray-800/50 text-white placeholder-gray-400 resize-none ${
                        errors.message ? 'border-rose-500/50 bg-rose-500/10' : 'border-gray-600/50'
                      }`}
                      placeholder="Tell us about your stormwater management needs and how we can help..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 text-white font-semibold rounded-2xl transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500/50 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Contact Information
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                For partnerships, pilot programs, and general inquiries, we're here to help you 
                implement the future of stormwater management.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-cyan-400 font-medium text-xl mb-2">{info.content}</p>
                    <p className="text-gray-300">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-14 h-14 bg-gradient-to-br ${social.gradient} text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Partnership Opportunities */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4">Partnership Opportunities</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We're actively seeking municipal partners for pilot programs and full-scale deployments. 
                  Our team provides comprehensive support including:
                </p>
                <ul className="space-y-3 text-gray-300">
                  {partnershipBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-cyan-400 text-lg">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Response Guarantee */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">⚡</span>
                  <h3 className="text-xl font-semibold text-white">Quick Response Guarantee</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We respond to all inquiries within 24 hours. For urgent matters, 
                  call us directly at +1 (555) 123-4567.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
