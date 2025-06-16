import React from 'react';
import { User, Award, Calendar, MapPin } from 'lucide-react';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-green-600 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-green-600" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-white">John Doe</h1>
                <p className="text-green-100">Eco Warrior Level 5</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-green-600">150</p>
              <p className="text-gray-600">Collections</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-green-600">45</p>
              <p className="text-gray-600">Day Streak</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-green-600">2,500</p>
              <p className="text-gray-600">Points</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-green-600">12</p>
              <p className="text-gray-600">Badges</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 border-t">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-medium">Earned "Consistent Recycler" Badge</p>
                  <p className="text-sm text-gray-600">2 days ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-medium">Completed 30 Day Streak</p>
                  <p className="text-sm text-gray-600">1 week ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-medium">New Collection Point Added</p>
                  <p className="text-sm text-gray-600">2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;