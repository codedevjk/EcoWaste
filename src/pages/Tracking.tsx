import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Truck, History, Plus, CheckCircle2, AlertCircle } from 'lucide-react';

interface CollectionHistory {
  id: number;
  date: string;
  time: string;
  wasteType: string;
  weight: string;
  points: number;
  status: 'completed' | 'pending';
}

interface ScheduledPickup {
  id: number;
  date: string;
  time: string;
  wasteType: string;
  address: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

function Tracking() {
  const [activeTab, setActiveTab] = useState('live');
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedWasteType, setSelectedWasteType] = useState('');

  // Dummy data for collection history
  const collectionHistory: CollectionHistory[] = [
    {
      id: 1,
      date: '2024-03-15',
      time: '10:30 AM',
      wasteType: 'Plastic',
      weight: '2.5 kg',
      points: 250,
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-03-14',
      time: '2:15 PM',
      wasteType: 'Paper',
      weight: '3.0 kg',
      points: 150,
      status: 'completed'
    },
    {
      id: 3,
      date: '2024-03-13',
      time: '11:00 AM',
      wasteType: 'Glass',
      weight: '1.5 kg',
      points: 112,
      status: 'completed'
    }
  ];

  // Dummy data for scheduled pickups
  const scheduledPickups: ScheduledPickup[] = [
    {
      id: 1,
      date: '2024-03-16',
      time: '11:00 AM',
      wasteType: 'Plastic',
      address: '123, Sector 4, Vasundhara, Ghaziabad',
      status: 'scheduled'
    },
    {
      id: 2,
      date: '2024-03-17',
      time: '2:00 PM',
      wasteType: 'Paper',
      address: '123, Sector 4, Vasundhara, Ghaziabad',
      status: 'scheduled'
    }
  ];

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowScheduleForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Waste Collection Tracking</h1>
              <p className="text-gray-400">Track your waste collection in real-time</p>
            </div>
            <button
              onClick={() => setShowScheduleForm(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Schedule Pickup</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'live'
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Live Tracking
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'history'
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Collection History
          </button>
          <button
            onClick={() => setActiveTab('scheduled')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'scheduled'
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Scheduled Pickups
          </button>
        </div>

        {/* Content */}
        {activeTab === 'live' && (
          <div className="space-y-6">
            {/* Map Container */}
            <div className="bg-gray-800 rounded-xl p-4 h-[500px] relative">
              {/* Dummy Map - Replace with actual map integration */}
              <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-400">Map Integration Coming Soon</p>
                  <p className="text-gray-500 text-sm mt-2">Live tracking of collection vehicles in Ghaziabad</p>
                </div>
              </div>
              
              {/* Live Status Overlay */}
              <div className="absolute top-4 right-4 bg-gray-900/90 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Truck className="h-5 w-5 text-green-400" />
                  <span className="text-white font-medium">Vehicle Status</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Vehicle Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300">ETA: 15 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Collection Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-900 rounded-lg">
                    <Truck className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Current Location</p>
                    <p className="text-white font-medium">Sector 3, Vasundhara</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-900 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Next Pickup</p>
                    <p className="text-white font-medium">Sector 4, Vasundhara</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-900 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Today's Collections</p>
                    <p className="text-white font-medium">12/15 Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            {collectionHistory.map(collection => (
              <div key={collection.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-900 rounded-lg">
                      <History className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{collection.wasteType} Collection</p>
                      <p className="text-gray-400 text-sm">{collection.date} at {collection.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-medium">+{collection.points} GP</p>
                    <p className="text-gray-400 text-sm">{collection.weight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'scheduled' && (
          <div className="space-y-4">
            {scheduledPickups.map(pickup => (
              <div key={pickup.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-900 rounded-lg">
                      <Calendar className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{pickup.wasteType} Pickup</p>
                      <p className="text-gray-400 text-sm">{pickup.date} at {pickup.time}</p>
                      <p className="text-gray-400 text-sm">{pickup.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      pickup.status === 'scheduled' ? 'bg-blue-900 text-blue-400' :
                      pickup.status === 'completed' ? 'bg-green-900 text-green-400' :
                      'bg-red-900 text-red-400'
                    }`}>
                      {pickup.status.charAt(0).toUpperCase() + pickup.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Schedule Pickup Modal */}
        {showScheduleForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full">
              <h2 className="text-xl font-bold text-white mb-4">Schedule Waste Pickup</h2>
              <form onSubmit={handleScheduleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Time</label>
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Waste Type</label>
                  <select
                    value={selectedWasteType}
                    onChange={(e) => setSelectedWasteType(e.target.value)}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select waste type</option>
                    <option value="plastic">Plastic</option>
                    <option value="paper">Paper</option>
                    <option value="glass">Glass</option>
                    <option value="metal">Metal</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Schedule Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowScheduleForm(false)}
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Made with <span className="text-red-500">❤️</span> by Vivaan & Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Tracking;