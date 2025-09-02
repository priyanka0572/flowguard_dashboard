export interface Sensor {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  status: 'safe' | 'warning' | 'critical';
  waterLevel: number;
  capacity: number;
  lastUpdated: string;
  riskPercentage: number;
}

export interface Alert {
  id: string;
  sensorId: string;
  sensorName: string;
  location: string;
  severity: 'normal' | 'warning' | 'critical';
  message: string;
  riskPercentage: number;
  timestamp: string;
  status: 'active' | 'resolved';
  coordinates: [number, number];
}

export interface Metric {
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

export interface WaterLevelData {
  timestamp: string;
  level: number;
  capacity: number;
}

export interface PredictionData {
  timestamp: string;
  predictedLevel: number;
  actualLevel: number | null;
  confidence: number;
}

// Mock sensor data
export const sensors: Sensor[] = [
  {
    id: 'S001',
    name: 'Downtown Main',
    location: 'Downtown District',
    coordinates: [40.7128, -74.0060],
    status: 'safe',
    waterLevel: 45,
    capacity: 100,
    lastUpdated: new Date().toISOString(),
    riskPercentage: 15
  },
  {
    id: 'S002',
    name: 'Harbor Basin',
    location: 'Waterfront Area',
    coordinates: [40.7089, -74.0090],
    status: 'warning',
    waterLevel: 78,
    capacity: 100,
    lastUpdated: new Date().toISOString(),
    riskPercentage: 65
  },
  {
    id: 'S003',
    name: 'Central Park',
    location: 'Central Park West',
    coordinates: [40.7829, -73.9654],
    status: 'critical',
    waterLevel: 92,
    capacity: 100,
    lastUpdated: new Date().toISOString(),
    riskPercentage: 88
  },
  {
    id: 'S004',
    name: 'Brooklyn Bridge',
    location: 'Brooklyn Heights',
    coordinates: [40.7061, -73.9969],
    status: 'safe',
    waterLevel: 32,
    capacity: 100,
    lastUpdated: new Date().toISOString(),
    riskPercentage: 8
  },
  {
    id: 'S005',
    name: 'Queens Expressway',
    location: 'Queens Boulevard',
    coordinates: [40.7282, -73.7949],
    status: 'warning',
    waterLevel: 71,
    capacity: 100,
    lastUpdated: new Date().toISOString(),
    riskPercentage: 52
  },
  {
    id: 'S006',
    name: 'Staten Island',
    location: 'Staten Island Ferry',
    coordinates: [40.6413, -74.0742],
    status: 'safe',
    waterLevel: 28,
    capacity: 100,
    lastUpdated: new Date().toISOString(),
    riskPercentage: 12
  }
];

// Mock alerts data
export const alerts: Alert[] = [
  {
    id: 'A001',
    sensorId: 'S003',
    sensorName: 'Central Park',
    location: 'Central Park West',
    severity: 'critical',
    message: 'Water level at 92% capacity. Immediate action required.',
    riskPercentage: 88,
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    status: 'active',
    coordinates: [40.7829, -73.9654]
  },
  {
    id: 'A002',
    sensorId: 'S002',
    sensorName: 'Harbor Basin',
    location: 'Waterfront Area',
    severity: 'warning',
    message: 'Water level approaching warning threshold.',
    riskPercentage: 65,
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    status: 'active',
    coordinates: [40.7089, -74.0090]
  },
  {
    id: 'A003',
    sensorId: 'S005',
    sensorName: 'Queens Expressway',
    location: 'Queens Boulevard',
    severity: 'warning',
    message: 'Moderate risk detected. Monitor closely.',
    riskPercentage: 52,
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    status: 'active',
    coordinates: [40.7282, -73.7949]
  },
  {
    id: 'A004',
    sensorId: 'S001',
    sensorName: 'Downtown Main',
    location: 'Downtown District',
    severity: 'normal',
    message: 'All systems operating normally.',
    riskPercentage: 15,
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    status: 'resolved',
    coordinates: [40.7128, -74.0060]
  }
];

// Mock metrics data
export const metrics: Metric[] = [
  {
    name: 'AI Prediction Accuracy',
    value: 94.2,
    unit: '%',
    trend: 'up',
    change: 2.1
  },
  {
    name: 'Current Overflow Risk',
    value: 23.5,
    unit: '%',
    trend: 'down',
    change: -5.2
  },
  {
    name: 'Average Response Time',
    value: 3.2,
    unit: 'min',
    trend: 'stable',
    change: 0.1
  },
  {
    name: 'Sensors Online',
    value: 98.7,
    unit: '%',
    trend: 'up',
    change: 1.3
  }
];

// Mock water level data for charts
export const waterLevelData: WaterLevelData[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: new Date(Date.now() - (23 - i) * 60 * 60 * 1000).toISOString(),
  level: Math.floor(Math.random() * 60) + 20,
  capacity: 100
}));

// Mock prediction data
export const predictionData: PredictionData[] = Array.from({ length: 12 }, (_, i) => ({
  timestamp: new Date(Date.now() + i * 30 * 60 * 1000).toISOString(),
  predictedLevel: Math.floor(Math.random() * 70) + 30,
  actualLevel: i < 6 ? Math.floor(Math.random() * 70) + 30 : null,
  confidence: Math.floor(Math.random() * 20) + 80
}));

// Generate real-time updates
export const generateRealTimeData = () => {
  return sensors.map(sensor => ({
    ...sensor,
    waterLevel: Math.max(0, Math.min(100, sensor.waterLevel + (Math.random() - 0.5) * 10)),
    riskPercentage: Math.max(0, Math.min(100, sensor.riskPercentage + (Math.random() - 0.5) * 15)),
    lastUpdated: new Date().toISOString()
  }));
};

// Get status color for sensors
export const getStatusColor = (status: string) => {
  switch (status) {
    case 'safe': return 'text-green-600 bg-green-100';
    case 'warning': return 'text-yellow-600 bg-yellow-100';
    case 'critical': return 'text-red-600 bg-red-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

// Get severity color for alerts
export const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'normal': return 'text-green-600 bg-green-100 border-green-200';
    case 'warning': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    case 'critical': return 'text-red-600 bg-red-100 border-red-200';
    default: return 'text-gray-600 bg-gray-100 border-gray-200';
  }
};
