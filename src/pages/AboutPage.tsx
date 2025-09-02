import React from 'react';

const AboutPage: React.FC = () => {
  const capabilities = [
    {
      icon: '📡',
      title: 'Real-time Monitoring',
      description: 'Continuous IoT sensor network providing live data on water levels, flow rates, and system performance across the entire stormwater infrastructure.',
      features: ['24/7 monitoring', 'Instant data updates', 'Multi-location coverage', 'High-precision sensors'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: '🤖',
      title: 'AI Prediction',
      description: 'Advanced machine learning algorithms analyze historical data and current conditions to predict potential overflow events before they occur.',
      features: ['Predictive analytics', 'Pattern recognition', 'Risk assessment', 'Forecasting models'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: '🚨',
      title: 'Smart Alerts',
      description: 'Intelligent notification system that automatically alerts municipal staff and emergency responders based on severity and risk levels.',
      features: ['Automated notifications', 'Escalation protocols', 'Multi-channel alerts', 'Priority-based routing'],
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and reporting tools providing insights into system performance, trends, and optimization opportunities.',
      features: ['Performance metrics', 'Trend analysis', 'Custom reports', 'Data visualization'],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: '🌱',
      title: 'Environmental Sustainability',
      description: 'Proactive stormwater management reduces pollution, protects water quality, and supports sustainable urban development goals.',
      features: ['Pollution prevention', 'Water quality protection', 'Regulatory compliance', 'Green infrastructure support'],
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    { number: '95%', label: 'Prediction Accuracy', gradient: 'from-cyan-400 to-blue-500' },
    { number: '60%', label: 'Reduction in Overflows', gradient: 'from-emerald-400 to-teal-500' },
    { number: '<5min', label: 'Response Time', gradient: 'from-rose-400 to-pink-500' },
    { number: '24/7', label: 'Monitoring Coverage', gradient: 'from-violet-400 to-purple-500' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI/ML, Environmental Engineering',
      bio: 'PhD in Environmental Engineering with 15+ years experience in IoT and machine learning for environmental monitoring.',
      avatar: '👩‍🔬',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      expertise: 'IoT Systems, Infrastructure',
      bio: 'Civil engineer specializing in smart city infrastructure with expertise in sensor networks and real-time monitoring systems.',
      avatar: '👨‍💻',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Sustainability Officer',
      expertise: 'Environmental Policy, SDGs',
      bio: 'Environmental scientist focused on sustainable development goals and regulatory compliance for water quality management.',
      avatar: '👩‍🌱',
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  const sdgs = [
    {
      goal: 'SDG 6',
      title: 'Clean Water & Sanitation',
      description: 'Ensure availability and sustainable management of water and sanitation for all',
      icon: '💧',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      goal: 'SDG 11',
      title: 'Sustainable Cities',
      description: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
      icon: '🏙️',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      goal: 'SDG 13',
      title: 'Climate Action',
      description: 'Take urgent action to combat climate change and its impacts',
      icon: '🌍',
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      goal: 'SDG 14',
      title: 'Life Below Water',
      description: 'Conserve and sustainably use the oceans, seas and marine resources',
      icon: '🐟',
      gradient: 'from-violet-500 to-purple-600'
    }
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
              About Flow Guard
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing stormwater management through cutting-edge IoT technology and artificial intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To protect our waterways and communities by preventing stormwater overflows through intelligent monitoring, 
              predictive analytics, and proactive response systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🛡️', title: 'Protect', description: 'Safeguard water quality and prevent environmental contamination through proactive monitoring', gradient: 'from-cyan-500 to-blue-600' },
              { icon: '🏘️', title: 'Preserve', description: 'Maintain infrastructure integrity and extend the lifespan of your stormwater systems', gradient: 'from-emerald-500 to-teal-600' },
              { icon: '🚀', title: 'Progress', description: 'Advance smart city technology and sustainable urban development practices', gradient: 'from-violet-500 to-purple-600' }
            ].map((item, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-rose-400 to-orange-500 bg-clip-text text-transparent">
              The Stormwater Challenge
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Urban areas face increasing challenges with stormwater management due to climate change, aging infrastructure, and growing populations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '💧', title: 'Storm Overflows', description: 'Heavy rainfall overwhelms drainage systems, causing untreated sewage to discharge into water bodies, leading to environmental contamination and public health risks.', gradient: 'from-rose-500 to-red-600' },
              { icon: '🏙️', title: 'Urban Flooding', description: 'Inadequate drainage capacity results in street flooding, property damage, and disruption to transportation networks during extreme weather events.', gradient: 'from-amber-500 to-yellow-600' },
              { icon: '🌍', title: 'Environmental Impact', description: 'Stormwater runoff carries pollutants, debris, and contaminants into natural water systems, degrading water quality and harming aquatic ecosystems.', gradient: 'from-orange-500 to-red-600' }
            ].map((item, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution Overview */}
      <div className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our AI-Powered Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Flow Guard combines IoT sensors, artificial intelligence, and automated systems to create a 
              comprehensive stormwater management platform that prevents overflows before they happen.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">How It Works</h3>
                <div className="space-y-8">
                  {[
                    { step: '1', title: 'IoT Sensor Network', description: 'Deploy intelligent sensors throughout the stormwater infrastructure to monitor water levels, flow rates, and system conditions in real-time.', gradient: 'from-cyan-500 to-blue-600' },
                    { step: '2', title: 'AI Analysis', description: 'Machine learning algorithms process sensor data, historical patterns, and weather forecasts to predict potential overflow events with high accuracy.', gradient: 'from-emerald-500 to-teal-600' },
                    { step: '3', title: 'Smart Response', description: 'Automated systems trigger preventive measures and alert municipal staff, enabling proactive response before critical situations develop.', gradient: 'from-rose-500 to-pink-600' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <span className="text-white font-bold text-lg">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-3xl p-8 border border-gray-600/30">
                <h4 className="text-xl font-bold text-white mb-6">Key Benefits</h4>
                <ul className="space-y-4">
                  {[
                    'Prevent environmental contamination',
                    'Reduce infrastructure damage costs',
                    'Improve public safety',
                    'Ensure regulatory compliance',
                    'Optimize maintenance schedules'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-emerald-400 text-lg">✓</span>
                      <span className="text-gray-200">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Infographic */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              Five Core Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flow Guard's comprehensive platform addresses every aspect of modern stormwater management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${capability.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-4xl">{capability.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{capability.description}</p>
                  
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <span className="text-cyan-400 text-sm">•</span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SDG Alignment */}
      <div className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our mission directly supports global efforts to create a more sustainable and resilient future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdgs.map((sdg, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br ${sdg.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl">{sdg.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{sdg.goal}</h3>
                <h4 className="text-lg font-medium text-cyan-400 mb-3">{sdg.title}</h4>
                <p className="text-sm text-gray-300">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              Flow Guard's impact on stormwater management
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-32 h-32 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experts in civil engineering, IoT technology, and artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-2">
                <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-4xl">{member.avatar}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-300 mb-4">{member.expertise}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-12 max-w-4xl mx-auto border border-gray-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Stormwater Management?
                </h3>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Join municipalities across the country who are already experiencing the benefits of 
                  AI-powered stormwater monitoring and prevention.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 text-lg">
                    Book a Demo
                  </button>
                  <button className="px-10 py-5 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-xl transition-all duration-300 text-lg">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
