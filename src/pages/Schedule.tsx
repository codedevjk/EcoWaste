import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Package, CheckCircle } from 'lucide-react';

function Schedule() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedWasteType, setSelectedWasteType] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ selectedDate, selectedTime, selectedWasteType, address });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Schedule Your Waste Pickup</h1>
          <p className="text-gray-400">Choose a convenient time for waste collection</p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <Calendar className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Time</label>
                <div className="relative">
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <Clock className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Waste Type</label>
              <div className="relative">
                <select
                  value={selectedWasteType}
                  onChange={(e) => setSelectedWasteType(e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                  required
                >
                  <option value="">Select waste type</option>
                  <option value="plastic">Plastic Waste</option>
                  <option value="paper">Paper Waste</option>
                  <option value="glass">Glass Waste</option>
                  <option value="metal">Metal Waste</option>
                  <option value="ewaste">E-Waste</option>
                </select>
                <Package className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Address</label>
              <div className="relative">
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                  required
                />
                <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle className="h-5 w-5" />
              Schedule Pickup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Schedule; 