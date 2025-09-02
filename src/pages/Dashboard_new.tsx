import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { sensors, alerts, metrics, waterLevelData, predictionData, generateRealTimeData } from '../data/mockData';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Dashboard: React.FC = () => {
  const [currentSensors, setCurrentSensors] = useState(sensors);
  const [currentAlerts] = useState(alerts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedSensor, setSelectedSensor] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState('24h');

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedSensors = generateRealTimeData();
      setCurrentSensors(updatedSensors);
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const getMarkerIcon = (status: string) => {
    const color = status === 'safe' ? '#10b981' : status === 'warning' ? '#f59e0b' : '#ef4444';
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid #1f2937; box-shadow: 0 4px 12px rgba(0,0,0,0.5);"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      default: return '→';
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      safe: 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
      warning: 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30',
      critical: 'bg-gradient-to-r from-rose-500/20 to-red-500/20 text-rose-300 border-rose-500/30'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${colors[status as keyof typeof colors]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };
  
  const getSeverityBadge = (severity: string) => {
    const colors = {
      normal: 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
      warning: 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30',
      critical: 'bg-gradient-to-r from-rose-500/20 to-red-500/20 text-rose-300 border-rose-500/30'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${colors[severity as keyof typeof colors]}`}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-300 text-lg">
            Real-time monitoring and AI-powered predictions for your stormwater infrastructure
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((metric, index) => {
            const gradients = [
              'from-cyan-500 to-blue-600',
              'from-emerald-500 to-teal-600',
              'from-violet-500 to-purple-600',
              'from-rose-500 to-pink-600'
            ];
            
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">{getTrendIcon(metric.trend)}</span>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${metric.change > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {metric.change > 0 ? '+' : ''}{metric.change}{metric.unit}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-400 mb-2">{metric.name}</p>
                  <p className="text-3xl font-bold text-white">
                    {metric.value}{metric.unit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map and Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Interactive Map */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Sensor Locations</h3>
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-2 px-3 py-1 bg-emerald-500/20 rounded-full">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-300 text-sm">Safe</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-amber-500/20 rounded-full">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-amber-300 text-sm">Warning</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-rose-500/20 rounded-full">
                    <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                    <span className="text-rose-300 text-sm">Critical</span>
                  </div>
                </div>
              </div>
              
              <div className="h-80 rounded-2xl overflow-hidden border border-gray-600/50">
                <MapContainer
                  center={[40.7128, -74.0060]}
                  zoom={11}
                  style={{ height: '100%', width: '100%' }}
                  className="z-0"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {currentSensors.map((sensor) => (
                    <Marker
                      key={sensor.id}
                      position={[sensor.coordinates[0], sensor.coordinates[1]]}
                      icon={getMarkerIcon(sensor.status)}
                      eventHandlers={{
                        click: () => setSelectedSensor(sensor.id)
                      }}
                    >
                      <Popup className="dark-popup">
                        <div className="p-4 min-w-[200px]">
                          <h4 className="font-bold text-gray-900 mb-2">{sensor.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{sensor.location}</p>
                          <div className="mb-3">
                            {getStatusBadge(sensor.status)}
                          </div>
                          <div className="space-y-2 text-sm">
                            <p>Water Level: <span className="font-semibold text-blue-600">{sensor.waterLevel}%</span></p>
                            <p>Risk: <span className="font-semibold text-rose-600">{sensor.riskPercentage}%</span></p>
                            <p>Last Updated: <span className="font-semibold">{formatTime(sensor.lastUpdated)}</span></p>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>

          {/* Water Level Chart */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Water Levels</h3>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-gray-700/50 border border-gray-600 text-white rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="1h">Last Hour</option>
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                </select>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={waterLevelData}>
                    <defs>
                      <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="timestamp" 
                      stroke="#9ca3af"
                      fontSize={12}
                      tickFormatter={(value) => formatTime(value)}
                    />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '12px',
                        color: '#ffffff'
                      }}
                      labelFormatter={(value) => `Time: ${formatTime(value)}`}
                    />
                    <Area
                      type="monotone"
                      dataKey="level"
                      stroke="#06b6d4"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#waterGradient)"
                    />
                    <Line
                      type="monotone"
                      dataKey="capacity"
                      stroke="#ef4444"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* AI Predictions */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl mb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Predictions</h3>
                <p className="text-gray-400">Machine learning forecasts for the next 24 hours</p>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-violet-500/30">
                <span className="text-violet-300 font-medium">94% Accuracy</span>
              </div>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="timestamp" 
                    stroke="#9ca3af"
                    fontSize={12}
                    tickFormatter={(value) => formatTime(value)}
                  />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151',
                      borderRadius: '12px',
                      color: '#ffffff'
                    }}
                    labelFormatter={(value) => `Time: ${formatTime(value)}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="predictedLevel"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                    name="Predicted Level"
                  />
                  <Line
                    type="monotone"
                    dataKey="actualLevel"
                    stroke="#06b6d4"
                    strokeWidth={2}
                    dot={{ fill: '#06b6d4', strokeWidth: 2, r: 3 }}
                    name="Actual Level"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Recent Alerts</h3>
              <Link
                to="/alerts"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
              >
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {currentAlerts.slice(0, 3).map((alert) => (
                <div key={alert.id} className="p-6 bg-gray-700/30 rounded-2xl border border-gray-600/50 hover:bg-gray-700/50 transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-white">{alert.sensorName}</h4>
                        {getSeverityBadge(alert.severity)}
                      </div>
                      <p className="text-gray-300 mb-2">{alert.message}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>📍 {alert.location}</span>
                        <span>⚠️ Risk: {alert.riskPercentage}%</span>
                        <span>🕒 {formatTime(alert.timestamp)}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Risk Level</div>
                      <div className={`text-lg font-bold ${
                        alert.riskPercentage > 80 ? 'text-red-400' :
                        alert.riskPercentage > 60 ? 'text-amber-400' :
                        'text-emerald-400'
                      }`}>
                        {alert.riskPercentage}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
