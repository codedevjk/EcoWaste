import React, { useState } from 'react';
import { QrCode, ArrowUpRight, ArrowDownLeft, Gift, Star, Users, TrendingUp, Clock, Award } from 'lucide-react';

interface Transaction {
  id: number;
  type: 'deposit' | 'withdrawal' | 'bonus';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending';
}

interface Reward {
  id: number;
  name: string;
  points: number;
  icon: string;
  description: string;
}

function Wallet() {
  const [activeTab, setActiveTab] = useState('transactions');
  const [showQR, setShowQR] = useState(false);

  const balance = 2500;
  const streak = 7;
  const totalEarned = 5000;
  const referrals = 3;

  const transactions: Transaction[] = [
    {
      id: 1,
      type: 'deposit',
      amount: 500,
      description: 'Waste Deposition - Plastic',
      date: '2024-03-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'bonus',
      amount: 200,
      description: '7 Day Streak Bonus',
      date: '2024-03-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'withdrawal',
      amount: 300,
      description: 'Amazon Voucher Redemption',
      date: '2024-03-13',
      status: 'completed'
    },
    {
      id: 4,
      type: 'deposit',
      amount: 400,
      description: 'Waste Deposition - Paper',
      date: '2024-03-12',
      status: 'completed'
    },
    {
      id: 5,
      type: 'bonus',
      amount: 100,
      description: 'Friend Referral Bonus',
      date: '2024-03-11',
      status: 'completed'
    }
  ];

  const rewards: Reward[] = [
    {
      id: 1,
      name: 'Amazon Voucher',
      points: 1000,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
      description: '₹500 Amazon Gift Card'
    },
    {
      id: 2,
      name: 'Zomato',
      points: 800,
      icon: 'https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png',
      description: '₹400 Food Delivery Credit'
    },
    {
      id: 3,
      name: 'Swiggy',
      points: 800,
      icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png',
      description: '₹400 Food Delivery Credit'
    },
    {
      id: 4,
      name: 'Domino\'s',
      points: 600,
      icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png',
      description: 'Free Medium Pizza'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Green Points Wallet</h1>
              <p className="text-gray-400">Your sustainable rewards balance</p>
            </div>
            <button
              onClick={() => setShowQR(!showQR)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors"
            >
              <QrCode className="h-5 w-5" />
              <span>Show QR</span>
            </button>
          </div>

          {showQR && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg text-center">
              <div className="w-48 h-48 mx-auto bg-white p-2 rounded-lg">
                {/* Dummy QR Code */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <QrCode className="h-32 w-32 text-gray-400" />
                </div>
              </div>
              <p className="text-gray-300 mt-2">Scan to receive Green Points</p>
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-700 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Available Balance</p>
              <p className="text-white text-2xl font-bold">{balance} GP</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Current Streak</p>
              <p className="text-white text-2xl font-bold">{streak} days</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Total Earned</p>
              <p className="text-white text-2xl font-bold">{totalEarned} GP</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Referrals</p>
              <p className="text-white text-2xl font-bold">{referrals}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'transactions'
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Transactions
          </button>
          <button
            onClick={() => setActiveTab('rewards')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'rewards'
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Rewards
          </button>
          <button
            onClick={() => setActiveTab('how-to')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'how-to'
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            How to Earn
          </button>
        </div>

        {/* Content */}
        {activeTab === 'transactions' && (
          <div className="space-y-4">
            {transactions.map(transaction => (
              <div key={transaction.id} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    transaction.type === 'deposit' ? 'bg-green-900' :
                    transaction.type === 'withdrawal' ? 'bg-red-900' :
                    'bg-blue-900'
                  }`}>
                    {transaction.type === 'deposit' ? (
                      <ArrowDownLeft className="h-6 w-6 text-green-400" />
                    ) : transaction.type === 'withdrawal' ? (
                      <ArrowUpRight className="h-6 w-6 text-red-400" />
                    ) : (
                      <Star className="h-6 w-6 text-blue-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">{transaction.description}</p>
                    <p className="text-gray-400 text-sm">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    transaction.type === 'deposit' ? 'text-green-400' :
                    transaction.type === 'withdrawal' ? 'text-red-400' :
                    'text-blue-400'
                  }`}>
                    {transaction.type === 'deposit' || transaction.type === 'bonus' ? '+' : '-'}
                    {transaction.amount} GP
                  </p>
                  <p className="text-gray-400 text-sm">{transaction.status}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map(reward => (
              <div key={reward.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <img src={reward.icon} alt={reward.name} className="h-12 w-12 object-contain" />
                  <div>
                    <h3 className="text-white font-medium">{reward.name}</h3>
                    <p className="text-gray-400 text-sm">{reward.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-green-400 font-medium">{reward.points} GP</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Redeem
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'how-to' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white text-lg font-medium mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                Waste Deposition Points
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <span className="text-green-400 font-medium">100 GP</span>
                  </div>
                  <p className="text-gray-300">Plastic Waste (1kg)</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <span className="text-green-400 font-medium">50 GP</span>
                  </div>
                  <p className="text-gray-300">Paper Waste (1kg)</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <span className="text-green-400 font-medium">75 GP</span>
                  </div>
                  <p className="text-gray-300">Glass Waste (1kg)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white text-lg font-medium mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-green-400" />
                Streak Bonuses
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <span className="text-green-400 font-medium">50 GP</span>
                  </div>
                  <p className="text-gray-300">3 Day Streak</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <span className="text-green-400 font-medium">100 GP</span>
                  </div>
                  <p className="text-gray-300">5 Day Streak</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <span className="text-green-400 font-medium">200 GP</span>
                  </div>
                  <p className="text-gray-300">7 Day Streak</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white text-lg font-medium mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-400" />
                Referral Program
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <span className="text-green-400 font-medium">100 GP</span>
                  </div>
                  <p className="text-gray-300">For each friend referred</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <span className="text-green-400 font-medium">50 GP</span>
                  </div>
                  <p className="text-gray-300">When referred friend makes first deposit</p>
                </div>
              </div>
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

export default Wallet;