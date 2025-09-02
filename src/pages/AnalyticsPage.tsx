import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Define extended interfaces for analytics
interface HistoricalData {
  timestamp: string;
  waterLevel: number;
  flowRate: number;
  rainfall: number;
  temperature: number;
}

interface ExtendedPredictionData {
  timestamp: string;
  predicted: number;
  confidence: number;
  riskLevel: 'low' | 'medium' | 'high';
}

const AnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('waterLevel');
  const [analyticsData, setAnalyticsData] = useState<{
    historical: HistoricalData[];
    predictions: ExtendedPredictionData[];
    kpis: {
      avgResponseTime: string;
      overflowPrevention: string;
      eventsPredicted: string;
      systemUptime: string;
    };
  }>({
    historical: [],
    predictions: [],
    kpis: {
      avgResponseTime: '4.2',
      overflowPrevention: '87',
      eventsPredicted: '156',
      systemUptime: '99.8'
    }
  });

  // Generate additional analytics data
  const generateAnalyticsData = (): { historical: HistoricalData[]; predictions: ExtendedPredictionData[] } => {
    const now = new Date();
    const historical: HistoricalData[] = [];
    const predictions: ExtendedPredictionData[] = [];

    // Historical data (last 30 days)
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      historical.push({
        timestamp: date.toISOString().split('T')[0],
        waterLevel: 40 + Math.sin(i * 0.2) * 20 + Math.random() * 10,
        flowRate: 60 + Math.cos(i * 0.15) * 15 + Math.random() * 8,
        rainfall: Math.max(0, Math.sin(i * 0.3) * 30 + Math.random() * 20),
        temperature: 20 + Math.sin(i * 0.1) * 10 + Math.random() * 5
      });
    }

    // Prediction data (next 7 days)
    for (let i = 1; i <= 7; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() + i);
      const predictedLevel = 45 + Math.sin(i * 0.3) * 15 + Math.random() * 8;
      predictions.push({
        timestamp: date.toISOString().split('T')[0],
        predicted: predictedLevel,
        confidence: 85 + Math.random() * 10,
        riskLevel: (predictedLevel > 70 ? 'high' : predictedLevel > 50 ? 'medium' : 'low') as 'low' | 'medium' | 'high'
      });
    }

    return { historical, predictions };
  };

  useEffect(() => {
    const { historical, predictions } = generateAnalyticsData();
    setAnalyticsData(prev => ({
      ...prev,
      historical,
      predictions
    }));
  }, [timeRange]);

  const kpiCards = [
    {
      title: 'Avg Response Time',
      value: analyticsData.kpis.avgResponseTime,
      unit: 'min',
      trend: 'down',
      trendValue: '12%',
      description: 'Time from alert to response',
      gradient: 'from-cyan-500 to-blue-600',
      icon: '⚡'
    },
    {
      title: 'Overflow Prevention Rate',
      value: analyticsData.kpis.overflowPrevention,
      unit: '%',
      trend: 'up',
      trendValue: '5%',
      description: 'Successfully prevented overflows',
      gradient: 'from-emerald-500 to-teal-600',
      icon: '🛡️'
    },
    {
      title: 'Events Predicted',
      value: analyticsData.kpis.eventsPredicted,
      unit: '',
      trend: 'up',
      trendValue: '23%',
      description: 'AI predictions this month',
      gradient: 'from-violet-500 to-purple-600',
      icon: '🎯'
    },
    {
      title: 'System Uptime',
      value: analyticsData.kpis.systemUptime,
      unit: '%',
      trend: 'stable',
      trendValue: '0.1%',
      description: 'Network reliability',
      gradient: 'from-rose-500 to-pink-600',
      icon: '📡'
    }
  ];

  const severityData = [
    { name: 'Low Risk', value: 65, color: '#10b981' },
    { name: 'Medium Risk', value: 25, color: '#f59e0b' },
    { name: 'High Risk', value: 10, color: '#ef4444' }
  ];

  const filteredHistoricalData = analyticsData.historical.slice(
    timeRange === '7d' ? -7 : timeRange === '30d' ? -30 : 0
  );

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-emerald-400';
      case 'down': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl border-b border-gray-700/50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Analytics Dashboard
              </h1>
              <p className="text-gray-300 mt-1">Historical trends and AI-powered predictions</p>
            </div>
            
            {/* Time Range Selector */}
            <div className="flex items-center space-x-3">
              {['7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    timeRange === range
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : '90 Days'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {kpiCards.map((kpi, index) => (
            <div key={index} className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${kpi.gradient} rounded-xl flex items-center justify-center`}>
                    <span className="text-white text-xl">{kpi.icon}</span>
                  </div>
                  <div className={`text-sm font-medium ${getTrendColor(kpi.trend)}`}>
                    {getTrendIcon(kpi.trend)} {kpi.trendValue}
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-400 mb-2">{kpi.title}</p>
                <p className="text-3xl font-bold text-white mb-1">
                  {kpi.value}{kpi.unit}
                </p>
                <p className="text-xs text-gray-400">{kpi.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Historical Water Level Trends */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Historical Water Level Trends</h3>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-3 py-2 bg-gray-800/50 text-white text-sm rounded-xl border border-gray-600 focus:ring-2 focus:ring-violet-500/50"
              >
                <option value="waterLevel">Water Level</option>
                <option value="flowRate">Flow Rate</option>
                <option value="rainfall">Rainfall</option>
                <option value="temperature">Temperature</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredHistoricalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="timestamp" 
                    stroke="#9ca3af"
                    fontSize={12}
                    tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '12px',
                      color: '#f9fafb'
                    }}
                    labelFormatter={(value) => new Date(value).toLocaleDateString()}
                  />
                  <Line 
                    type="monotone" 
                    dataKey={selectedMetric}
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Event Severity Distribution */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Event Severity Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={severityData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {severityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '12px',
                      color: '#f9fafb'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* AI Predictions */}
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">AI Predictions - Next 7 Days</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
              <span>Prediction Confidence: 90%+</span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.predictions}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="timestamp" 
                  stroke="#9ca3af"
                  fontSize={12}
                  tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { weekday: 'short' })}
                />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '12px',
                    color: '#f9fafb'
                  }}
                  labelFormatter={(value) => new Date(value).toLocaleDateString()}
                  formatter={(value: any, name: string) => [
                    `${value.toFixed(1)}%`,
                    name === 'predicted' ? 'Predicted Water Level' : name
                  ]}
                />
                <Bar 
                  dataKey="predicted" 
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                  name="Predicted Level"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Prediction Risk Table */}
        <div className="mt-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-6">Prediction Risk Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Date</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Predicted Level</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Risk Level</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Confidence</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Recommended Action</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.predictions.map((prediction, index) => (
                  <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors">
                    <td className="py-3 px-4 text-white">
                      {new Date(prediction.timestamp).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </td>
                    <td className="py-3 px-4 text-white font-medium">
                      {prediction.predicted.toFixed(1)}%
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        prediction.riskLevel === 'high' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                        prediction.riskLevel === 'medium' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                        'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {prediction.riskLevel.charAt(0).toUpperCase() + prediction.riskLevel.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-white">
                      {prediction.confidence.toFixed(1)}%
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      {prediction.riskLevel === 'high' ? 'Pre-position resources' :
                       prediction.riskLevel === 'medium' ? 'Monitor closely' :
                       'Normal operations'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
