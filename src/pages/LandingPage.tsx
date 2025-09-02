import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: '📡',
      title: 'Real-Time Monitoring',
      description: '24/7 surveillance of water levels across your entire stormwater network with IoT sensors',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: '🤖',
      title: 'AI Predictions',
      description: 'Advanced machine learning models predict overflow risks with 94%+ accuracy',
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      icon: '🚨',
      title: 'Smart Alerts',
      description: 'Instant notifications via SMS, push, and email when risks are detected',
      gradient: 'from-rose-400 to-pink-500'
    },
    {
      icon: '📊',
      title: 'Live Dashboard',
      description: 'Interactive maps and real-time graphs for comprehensive monitoring',
      gradient: 'from-violet-400 to-purple-500'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Prevent pollution and protect waterways with proactive management',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '💰',
      title: 'Cost Savings',
      description: 'Avoid expensive emergency repairs and regulatory fines',
      gradient: 'from-amber-400 to-orange-500'
    }
  ];

  const useCases = [
    {
      title: 'Municipal Authorities',
      description: 'Wastewater management for cities and towns',
      icon: '🏛️',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Flood-Prone Areas',
      description: 'Residential communities at risk',
      icon: '🏘️',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Industrial Facilities',
      description: 'Compliance and environmental protection',
      icon: '🏭',
      gradient: 'from-slate-500 to-gray-600'
    },
    {
      title: 'Environmental Agencies',
      description: 'Water quality monitoring and protection',
      icon: '🌍',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    { number: '95%', label: 'Prediction Accuracy', gradient: 'from-cyan-400 to-blue-500' },
    { number: '60%', label: 'Reduction in Overflows', gradient: 'from-emerald-400 to-teal-500' },
    { number: '<5min', label: 'Response Time', gradient: 'from-rose-400 to-pink-500' },
    { number: '24/7', label: 'Monitoring Coverage', gradient: 'from-violet-400 to-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                🚀 AI-Powered Stormwater Management
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Flow Guard
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Prevent storm overflows before they happen with IoT sensors and AI predictions
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
              Real-time monitoring, predictive analytics, and smart alerts to protect water quality and prevent environmental damage
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Book a Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/dashboard"
                className="group px-10 py-5 border-2 border-gray-400 text-gray-200 hover:border-cyan-400 hover:text-cyan-300 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              System Performance
            </h2>
            <p className="text-lg text-gray-300">Real-time insights from our municipal partners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Active Sensors', 
                value: '247', 
                unit: '', 
                description: 'Monitoring water levels',
                gradient: 'from-cyan-500 to-blue-600',
                icon: '📡'
              },
              { 
                title: 'Active Alerts', 
                value: '12', 
                unit: '', 
                description: 'Current system warnings',
                gradient: 'from-amber-500 to-orange-600',
                icon: '🚨'
              },
              { 
                title: 'Events Prevented', 
                value: '1,234', 
                unit: '', 
                description: 'This year through early warning',
                gradient: 'from-emerald-500 to-teal-600',
                icon: '🛡️'
              },
              { 
                title: 'Prediction Accuracy', 
                value: '94.7', 
                unit: '%', 
                description: 'AI model performance',
                gradient: 'from-violet-500 to-purple-600',
                icon: '🎯'
              }
            ].map((stat, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl">{stat.icon}</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}{stat.unit}
                  </div>
                  <div className="text-xl font-semibold text-gray-300 mb-3">{stat.title}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Problem Statement */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                The Stormwater Crisis
              </h2>
              <div className="space-y-8">
                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-red-900/20 to-red-800/20 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">💧</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Storm Overflows</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Heavy rainfall overwhelms drainage systems, causing untreated sewage to discharge into water bodies, 
                      leading to environmental contamination and public health risks.
                    </p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🏙️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Urban Flooding</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Inadequate drainage capacity results in street flooding, property damage, and disruption to 
                      transportation networks during extreme weather events.
                    </p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Environmental Impact</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Stormwater runoff carries pollutants, debris, and contaminants into natural water systems, 
                      degrading water quality and harming aquatic ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Overview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-8">How Flow Guard Solves It</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">IoT Sensor Network</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Deploy intelligent sensors throughout the stormwater infrastructure to monitor water levels, 
                        flow rates, and system conditions in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">AI Analysis</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Machine learning algorithms process sensor data, historical patterns, and weather forecasts 
                        to predict potential overflow events with high accuracy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Smart Response</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Automated systems trigger preventive measures and alert municipal staff, enabling 
                        proactive response before critical situations develop.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Comprehensive Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for modern stormwater management in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Who Uses Flow Guard?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by municipalities, industrial facilities, and environmental agencies nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2">
                <div className={`w-24 h-24 bg-gradient-to-br ${useCase.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{useCase.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
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
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Why Municipalities Choose Flow Guard
              </h2>
              <div className="space-y-6">
                {[
                  'Reduce Environmental Impact',
                  'Lower Infrastructure Costs',
                  'Improve Public Safety',
                  'Regulatory Compliance'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{benefit}</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {benefit === 'Reduce Environmental Impact' && 'Prevent pollution and protect local waterways with proactive overflow management'}
                        {benefit === 'Lower Infrastructure Costs' && 'Avoid expensive emergency repairs and extend the lifespan of your stormwater systems'}
                        {benefit === 'Improve Public Safety' && 'Minimize flood risks and ensure community safety during severe weather events'}
                        {benefit === 'Regulatory Compliance' && 'Meet environmental standards and avoid costly fines with comprehensive monitoring'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Join leading municipalities in revolutionizing stormwater management with AI-powered insights.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
