import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { sensors } from '../data/mockData';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const EventMapPage: React.FC = () => {
  const [currentSensors, setCurrentSensors] = useState(sensors);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSensor, setSelectedSensor] = useState<any>(null);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSensors(prevSensors =>
        prevSensors.map(sensor => ({
          ...sensor,
          waterLevel: Math.max(10, Math.min(95, sensor.waterLevel + (Math.random() - 0.5) * 5)),
          lastUpdated: new Date().toISOString(),
          status: sensor.waterLevel > 80 ? 'critical' : sensor.waterLevel > 60 ? 'warning' : 'safe'
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getMarkerIcon = (status: string) => {
    const colors = {
      safe: '#10b981',
      warning: '#f59e0b', 
      critical: '#ef4444'
    };
    const color = colors[status as keyof typeof colors] || '#6b7280';
    
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${color}; 
          width: 20px; 
          height: 20px; 
          border-radius: 50%; 
          border: 3px solid white; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
            opacity: ${status === 'critical' ? '1' : '0.8'};
            animation: ${status === 'critical' ? 'pulse 1s infinite' : 'none'};
          "></div>
        </div>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  const filteredSensors = currentSensors.filter(sensor => {
    if (selectedFilter === 'all') return true;
    return sensor.status === selectedFilter;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      safe: 'badge-safe bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      warning: 'badge-warning bg-amber-500/20 text-amber-300 border-amber-500/30',
      critical: 'badge-critical bg-red-500/20 text-red-300 border-red-500/30'
    };
    
    return `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles]}`;
  };

  const getStatusCounts = () => {
    const safe = currentSensors.filter(s => s.status === 'safe').length;
    const warning = currentSensors.filter(s => s.status === 'warning').length;
    const critical = currentSensors.filter(s => s.status === 'critical').length;
    return { safe, warning, critical, total: currentSensors.length };
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl border-b border-gray-700/50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Event Map
              </h1>
              <p className="text-gray-300 mt-1">Real-time sensor monitoring across the network</p>
            </div>
            
            {/* Status Summary */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{statusCounts.safe}</div>
                <div className="text-xs text-gray-300">Normal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">{statusCounts.warning}</div>
                <div className="text-xs text-gray-300">Warning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{statusCounts.critical}</div>
                <div className="text-xs text-gray-300">Critical</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Filters</h3>
              
              <div className="space-y-3">
                {[
                  { id: 'all', name: 'All Sensors', count: statusCounts.total, color: 'text-gray-300' },
                  { id: 'safe', name: 'Normal', count: statusCounts.safe, color: 'text-emerald-400' },
                  { id: 'warning', name: 'Warning', count: statusCounts.warning, color: 'text-amber-400' },
                  { id: 'critical', name: 'Critical', count: statusCounts.critical, color: 'text-red-400' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      selectedFilter === filter.id
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="font-medium">{filter.name}</span>
                    <span className={`font-bold ${filter.color}`}>{filter.count}</span>
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Map Legend</h4>
                <div className="space-y-3">
                  {[
                    { status: 'safe', label: 'Normal (0-60%)', color: '#10b981' },
                    { status: 'warning', label: 'Warning (60-80%)', color: '#f59e0b' },
                    { status: 'critical', label: 'Critical (80%+)', color: '#ef4444' }
                  ].map((item) => (
                    <div key={item.status} className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Sensor Details */}
            {selectedSensor && (
              <div className="mt-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">Sensor Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Sensor ID:</span>
                    <p className="text-white font-medium">{selectedSensor.id}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Location:</span>
                    <p className="text-white font-medium">{selectedSensor.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Water Level:</span>
                    <p className="text-white font-medium">{selectedSensor.waterLevel.toFixed(1)}%</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Status:</span>
                    <div className="mt-1">
                      <span className={getStatusBadge(selectedSensor.status)}>
                        {selectedSensor.status.charAt(0).toUpperCase() + selectedSensor.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Last Updated:</span>
                    <p className="text-white font-medium">
                      {new Date(selectedSensor.lastUpdated).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Interactive Sensor Map</h3>
                <div className="text-sm text-gray-400">
                  Showing {filteredSensors.length} of {currentSensors.length} sensors
                </div>
              </div>
              
              <div className="h-[600px] rounded-xl overflow-hidden border border-gray-700/50">
                <MapContainer
                  center={[40.7128, -74.0060]}
                  zoom={11}
                  style={{ height: '100%', width: '100%' }}
                  className="dark-map"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {filteredSensors.map((sensor) => (
                    <Marker
                      key={sensor.id}
                      position={[sensor.coordinates[0], sensor.coordinates[1]]}
                      icon={getMarkerIcon(sensor.status)}
                      eventHandlers={{
                        click: () => setSelectedSensor(sensor)
                      }}
                    >
                      <Popup className="dark-popup">
                        <div className="p-3 min-w-[200px]">
                          <h4 className="font-bold text-gray-900 mb-2">{sensor.name}</h4>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-medium">Sensor ID:</span> {sensor.id}
                            </div>
                            <div>
                              <span className="font-medium">Water Level:</span> {sensor.waterLevel.toFixed(1)}%
                            </div>
                            <div>
                              <span className="font-medium">Status:</span>
                              <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                                sensor.status === 'safe' ? 'bg-emerald-100 text-emerald-800' :
                                sensor.status === 'warning' ? 'bg-amber-100 text-amber-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {sensor.status.charAt(0).toUpperCase() + sensor.status.slice(1)}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium">Last Updated:</span>
                              <br />
                              {new Date(sensor.lastUpdated).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .dark-map {
          filter: hue-rotate(180deg) invert(1);
        }
        .dark-popup .leaflet-popup-content-wrapper {
          background: white !important;
          color: black !important;
        }
      `}</style>
    </div>
  );
};

export default EventMapPage;
