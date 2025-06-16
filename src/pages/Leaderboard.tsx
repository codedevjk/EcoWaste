import React, { useState } from 'react';
import { Trophy, Medal, Star, TrendingUp, Users, Award } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  streak: number;
  wasteCollected: number;
  isCurrentUser: boolean;
}

function Leaderboard() {
  const [timeFrame, setTimeFrame] = useState('weekly');

  const weeklyData: LeaderboardEntry[] = [
    {
      rank: 1,
      name: "Vivaan Sharma",
      points: 2500,
      streak: 15,
      wasteCollected: 45,
      isCurrentUser: false
    },
    {
      rank: 2,
      name: "Jagmohan Singh",
      points: 2200,
      streak: 12,
      wasteCollected: 38,
      isCurrentUser: false
    },
    {
      rank: 3,
      name: "Shubhas Kumar",
      points: 2000,
      streak: 10,
      wasteCollected: 35,
      isCurrentUser: true
    },
    {
      rank: 4,
      name: "Chivi Patel",
      points: 1800,
      streak: 8,
      wasteCollected: 30,
      isCurrentUser: false
    },
    {
      rank: 5,
      name: "Animay Gupta",
      points: 1500,
      streak: 7,
      wasteCollected: 25,
      isCurrentUser: false
    }
  ];

  const monthlyData: LeaderboardEntry[] = [
    {
      rank: 1,
      name: "Vivaan Sharma",
      points: 8500,
      streak: 28,
      wasteCollected: 150,
      isCurrentUser: false
    },
    {
      rank: 2,
      name: "Jagmohan Singh",
      points: 7800,
      streak: 25,
      wasteCollected: 130,
      isCurrentUser: false
    },
    {
      rank: 3,
      name: "Shubhas Kumar",
      points: 7200,
      streak: 22,
      wasteCollected: 120,
      isCurrentUser: true
    },
    {
      rank: 4,
      name: "Chivi Patel",
      points: 6800,
      streak: 20,
      wasteCollected: 110,
      isCurrentUser: false
    },
    {
      rank: 5,
      name: "Animay Gupta",
      points: 6500,
      streak: 18,
      wasteCollected: 105,
      isCurrentUser: false
    }
  ];

  const allTimeData: LeaderboardEntry[] = [
    {
      rank: 1,
      name: "Vivaan Sharma",
      points: 25000,
      streak: 60,
      wasteCollected: 450,
      isCurrentUser: false
    },
    {
      rank: 2,
      name: "Jagmohan Singh",
      points: 22800,
      streak: 55,
      wasteCollected: 420,
      isCurrentUser: false
    },
    {
      rank: 3,
      name: "Shubhas Kumar",
      points: 20000,
      streak: 50,
      wasteCollected: 380,
      isCurrentUser: true
    },
    {
      rank: 4,
      name: "Chivi Patel",
      points: 18800,
      streak: 45,
      wasteCollected: 350,
      isCurrentUser: false
    },
    {
      rank: 5,
      name: "Animay Gupta",
      points: 17500,
      streak: 40,
      wasteCollected: 320,
      isCurrentUser: false
    }
  ];

  const leaderboardData = timeFrame === 'weekly' ? weeklyData : timeFrame === 'monthly' ? monthlyData : allTimeData;

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Leaderboard</h1>
          <p className="text-gray-400">Compete with others and climb the ranks</p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setTimeFrame('weekly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                timeFrame === 'weekly'
                  ? 'bg-green-600 text-white hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeFrame('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                timeFrame === 'monthly'
                  ? 'bg-green-600 text-white hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeFrame('allTime')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                timeFrame === 'allTime'
                  ? 'bg-green-600 text-white hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All Time
            </button>
          </div>

          <div className="space-y-4">
            {leaderboardData.map((entry) => (
              <div
                key={entry.rank}
                className={`bg-gray-700 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 ${
                  entry.isCurrentUser
                    ? 'border-2 border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]'
                    : 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      entry.rank === 1
                        ? 'bg-yellow-500'
                        : entry.rank === 2
                        ? 'bg-gray-400'
                        : entry.rank === 3
                        ? 'bg-amber-700'
                        : 'bg-gray-600'
                    }`}>
                      {entry.rank === 1 ? (
                        <Trophy className="h-6 w-6 text-yellow-900" />
                      ) : entry.rank === 2 ? (
                        <Medal className="h-6 w-6 text-gray-700" />
                      ) : entry.rank === 3 ? (
                        <Star className="h-6 w-6 text-amber-900" />
                      ) : (
                        <span className="text-white font-bold">{entry.rank}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{entry.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <TrendingUp className="h-4 w-4" />
                        <span>{entry.streak} day streak</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">{entry.points} pts</div>
                    <div className="text-sm text-gray-400">
                      {entry.wasteCollected} kg collected
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center group-hover:bg-green-800 transition-colors">
                <Trophy className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Your Rank</h3>
                <p className="text-green-400">#3</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Total Participants</h3>
                <p className="text-blue-400">1,234</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center group-hover:bg-purple-800 transition-colors">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Your Points</h3>
                <p className="text-purple-400">2,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 mt-12">
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

export default Leaderboard;