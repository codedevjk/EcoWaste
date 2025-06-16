import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Truck, Recycle, Trophy, Wallet, Calendar, Package, CheckCircle, Award, Leaf, Clock, AlertTriangle, AlertCircle, Heart, Droplet, Bug, Flame, Trash2, Cloud } from 'lucide-react';
import Dashboard from '../components/Dashboard';

function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Mock data for demonstration
  const mockWasteData = Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    amount: Math.floor(Math.random() * 10) + 1
  }));

  const totalWasteReduced = mockWasteData.reduce((sum, data) => sum + data.amount, 0);
  const pollutionReduced = Math.round(totalWasteReduced * 2.5); // Rough estimate: 1kg waste ≈ 2.5kg CO2

  useEffect(() => {
    // Check if user is logged in
    const checkLoginStatus = () => {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        setUserName(userData.name);
        setIsLoggedIn(true);
      } else {
        setUserName(null);
        setIsLoggedIn(false);
      }
    };

    // Check if user just signed up
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
      setShowWelcome(true);
      // Clear the stored name after showing welcome message
      localStorage.removeItem('userName');
    }

    checkLoginStatus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Welcome Message */}
      {showWelcome && userName && (
        <div className="fixed top-4 right-4 bg-green-900 border border-green-700 text-green-100 px-4 py-3 rounded-lg shadow-lg z-50">
          <p className="font-semibold">Welcome, {userName}!</p>
          <p className="text-sm">Thank you for joining EcoWaste.</p>
        </div>
      )}

      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                Revolutionizing Waste Management for a Sustainable Future
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Join EcoWaste's innovative platform that connects communities, recyclers, and waste management services while rewarding sustainable practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-green-700 transition inline-flex w-fit">
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/schedule" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-700 transition inline-flex w-fit">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Your Waste</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Your Impact Dashboard</h2>
        <Dashboard 
          userName={userName}
          streak={7}
          wasteData={mockWasteData}
          totalWasteReduced={totalWasteReduced}
          pollutionReduced={pollutionReduced}
          isLoggedIn={isLoggedIn}
        />
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose EcoWaste?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our mission to create a cleaner, greener future through innovative waste management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] group">
              <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-800 transition-colors">
                <Truck className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Doorstep Collection</h3>
              <p className="text-gray-300">
                Schedule waste pickups at your convenience. Our eco-friendly vehicles will collect your waste from your doorstep.
              </p>
            </div>

            <div className="bg-gray-700 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-800 transition-colors">
                <Recycle className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Recycling</h3>
              <p className="text-gray-300">
                Our advanced recycling process ensures maximum waste recovery and minimal environmental impact.
              </p>
            </div>

            <div className="bg-gray-700 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] group">
              <div className="w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-800 transition-colors">
                <Trophy className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rewards Program</h3>
              <p className="text-gray-300">
                Earn Green Points for every waste collection. Redeem them for exciting rewards and discounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Making a Real Impact</h2>
              <p className="text-gray-300 mb-8">
                EcoWaste is building a sustainable future by revolutionizing waste management. Our platform connects communities, government bodies, and private recyclers to create a circular economy that benefits everyone.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/0 to-green-800/0 rounded-2xl transition-all duration-300 group-hover:from-green-900/30 group-hover:to-green-800/30"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center group-hover:bg-green-800 transition-colors">
                      <Flame className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Current Streak</p>
                      <p className="text-2xl font-bold text-white">7 Days</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div>
                </div>

                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 to-blue-800/0 rounded-2xl transition-all duration-300 group-hover:from-blue-900/30 group-hover:to-blue-800/30"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                      <Trash2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Waste Reduced</p>
                      <p className="text-2xl font-bold text-white">45 kg</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
                </div>

                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/0 to-purple-800/0 rounded-2xl transition-all duration-300 group-hover:from-purple-900/30 group-hover:to-purple-800/30"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center group-hover:bg-purple-800 transition-colors">
                      <Cloud className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">CO2 Reduced</p>
                      <p className="text-2xl font-bold text-white">120 kg</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" 
                alt="Environmental Impact" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join the Waste Management Revolution</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Start your journey towards a sustainable future. Sign up now to begin earning rewards while making a positive impact on the environment.
          </p>
          <Link to="/login" className="bg-white text-green-900 px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 hover:bg-green-50 transition">
            <span>Create Your Account</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Schedule Waste Section */}
      <section id="schedule-waste" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Waste Collection</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book a pickup for your waste and earn green points. Our team will collect your waste at your preferred time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] group">
              <div className="w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-800 transition-colors">
                <Calendar className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Choose Date & Time</h3>
              <p className="text-gray-400">
                Select your preferred date and time for waste collection. We offer flexible scheduling options.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-800 transition-colors">
                <Package className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Select Waste Type</h3>
              <p className="text-gray-400">
                Specify the type and quantity of waste. We handle all types of recyclable materials.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] group">
              <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-800 transition-colors">
                <Truck className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Track Collection</h3>
              <p className="text-gray-400">
                Get real-time updates on your waste collection status and earn points instantly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-900 rounded-xl group-hover:bg-green-800 transition-colors">
                    <Trophy className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Earn Green Points</h3>
                </div>
                <p className="text-gray-400">
                  Get rewarded for your eco-friendly actions. Earn points for every waste collection.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-900 rounded-xl group-hover:bg-blue-800 transition-colors">
                    <Leaf className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Eco-Friendly</h3>
                </div>
                <p className="text-gray-400">
                  Contribute to a cleaner environment. We ensure proper recycling of all collected waste.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-900 rounded-xl group-hover:bg-purple-800 transition-colors">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Flexible Timing</h3>
                </div>
                <p className="text-gray-400">
                  Choose a time that works for you. We offer collection slots throughout the day.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Pickup</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="block w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="block w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="wasteType" className="block text-sm font-medium text-gray-300 mb-2">
                    Waste Type
                  </label>
                  <select
                    id="wasteType"
                    className="block w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select waste type</option>
                    <option value="plastic">Plastic</option>
                    <option value="paper">Paper</option>
                    <option value="glass">Glass</option>
                    <option value="metal">Metal</option>
                    <option value="e-waste">E-Waste</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                    Collection Address
                  </label>
                  <textarea
                    id="address"
                    rows={3}
                    className="block w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your complete address"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors transform hover:scale-105"
                >
                  Schedule Pickup
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest News & Updates</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay informed about the latest developments in waste management and environmental conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" 
                alt="Plastic Ban" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-green-400 text-sm font-medium">March 15, 2024</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">Single-Use Plastic Ban Extended</h3>
                <p className="text-gray-400 mb-4">
                  Government extends single-use plastic ban to more cities. New guidelines for businesses and consumers.
                </p>
                <button className="text-green-400 hover:text-green-300 flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" 
                alt="Recycling Innovation" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-green-400 text-sm font-medium">March 14, 2024</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">New Recycling Technology</h3>
                <p className="text-gray-400 mb-4">
                  Breakthrough in plastic recycling technology promises 90% efficiency in waste processing.
                </p>
                <button className="text-green-400 hover:text-green-300 flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80" 
                alt="Community Initiative" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-green-400 text-sm font-medium">March 13, 2024</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">Community Clean-up Drive</h3>
                <p className="text-gray-400 mb-4">
                  Local communities join hands for massive clean-up drive. Over 1000 volunteers participate.
                </p>
                <button className="text-green-400 hover:text-green-300 flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Policies Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Government Policies & Penalties</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay compliant with waste management regulations and avoid penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-green-800 rounded-xl group-hover:bg-green-700 transition-colors">
                  <Leaf className="h-8 w-8 text-green-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Swachh Bharat Mission</h3>
                  <p className="text-green-200">Clean India, Green India</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Join the nationwide movement for cleanliness and proper waste management. Be a part of the change.
              </p>
              <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-800 rounded-xl group-hover:bg-blue-700 transition-colors">
                  <Recycle className="h-8 w-8 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Plastic Waste Management</h3>
                  <p className="text-blue-200">Reduce, Reuse, Recycle</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Support the government's initiative to reduce plastic waste and promote sustainable alternatives.
              </p>
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-red-800 rounded-xl group-hover:bg-red-700 transition-colors">
                  <AlertTriangle className="h-8 w-8 text-red-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Penalties & Fines</h3>
                  <p className="text-red-200">Know the Rules</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Understanding the penalties for improper waste disposal and how to avoid them.
              </p>
              <button className="bg-white text-red-800 px-6 py-3 rounded-lg font-medium hover:bg-red-100 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-purple-800 rounded-xl group-hover:bg-purple-700 transition-colors">
                  <Award className="h-8 w-8 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Rewards & Recognition</h3>
                  <p className="text-purple-200">Get Rewarded</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Learn about incentives and recognition programs for proper waste management.
              </p>
              <button className="bg-white text-purple-800 px-6 py-3 rounded-lg font-medium hover:bg-purple-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impacts Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Health Impacts of Improper Waste Management</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Understanding the health risks associated with improper waste disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] group">
              <div className="w-12 h-12 bg-yellow-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-800 transition-colors">
                <Heart className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Respiratory Diseases</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Asthma</li>
                <li>• Bronchitis</li>
                <li>• Lung infections</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] group">
              <div className="w-12 h-12 bg-red-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-800 transition-colors">
                <Droplet className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Water-borne Diseases</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Cholera</li>
                <li>• Typhoid</li>
                <li>• Hepatitis</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] group">
              <div className="w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-800 transition-colors">
                <Bug className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Vector-borne Diseases</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Dengue</li>
                <li>• Malaria</li>
                <li>• Leptospirosis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Government Policy Advertisements */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Government Initiatives</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Supporting and promoting government policies for a cleaner environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-green-800 rounded-xl group-hover:bg-green-700 transition-colors">
                  <Leaf className="h-8 w-8 text-green-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Swachh Bharat Mission</h3>
                  <p className="text-green-200">Clean India, Green India</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Join the nationwide movement for cleanliness and proper waste management. Be a part of the change.
              </p>
              <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-800 rounded-xl group-hover:bg-blue-700 transition-colors">
                  <Recycle className="h-8 w-8 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Plastic Waste Management</h3>
                  <p className="text-blue-200">Reduce, Reuse, Recycle</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Support the government's initiative to reduce plastic waste and promote sustainable alternatives.
              </p>
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-red-800 rounded-xl group-hover:bg-red-700 transition-colors">
                  <AlertTriangle className="h-8 w-8 text-red-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Penalties & Fines</h3>
                  <p className="text-red-200">Know the Rules</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Understanding the penalties for improper waste disposal and how to avoid them.
              </p>
              <button className="bg-white text-red-800 px-6 py-3 rounded-lg font-medium hover:bg-red-100 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-purple-800 rounded-xl group-hover:bg-purple-700 transition-colors">
                  <Award className="h-8 w-8 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Rewards & Recognition</h3>
                  <p className="text-purple-200">Get Rewarded</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Learn about incentives and recognition programs for proper waste management.
              </p>
              <button className="bg-white text-purple-800 px-6 py-3 rounded-lg font-medium hover:bg-purple-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Deposition Trend and Monthly Earnings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Waste Deposition Trend */}
        <div className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] group">
          <h3 className="text-2xl font-bold text-white mb-6">Waste Deposition Trend</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-300">Plastic</span>
              </div>
              <span className="text-white font-medium">45%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '45%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-300">Paper</span>
              </div>
              <span className="text-white font-medium">30%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '30%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Glass</span>
              </div>
              <span className="text-white font-medium">15%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '15%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-gray-300">Metal</span>
              </div>
              <span className="text-white font-medium">10%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>

        {/* Monthly Earnings Pie Chart */}
        <div className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group">
          <h3 className="text-2xl font-bold text-white mb-6">Monthly Earnings</h3>
          <div className="relative h-64 flex items-center justify-center">
            {/* Pie Chart */}
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-8 border-green-500 transform rotate-0"></div>
              <div className="absolute inset-0 rounded-full border-8 border-blue-500 transform rotate-[108deg]"></div>
              <div className="absolute inset-0 rounded-full border-8 border-purple-500 transform rotate-[216deg]"></div>
              <div className="absolute inset-0 rounded-full border-8 border-yellow-500 transform rotate-[324deg]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Total Earned</p>
                  <p className="text-2xl font-bold text-white">₹2,500</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-300">January</span>
              </div>
              <span className="text-white font-medium">₹800</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-300">February</span>
              </div>
              <span className="text-white font-medium">₹600</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">March</span>
              </div>
              <span className="text-white font-medium">₹700</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-gray-300">April</span>
              </div>
              <span className="text-white font-medium">₹400</span>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Section */}
      <section className="py-16 bg-gradient-to-br from-green-900 via-green-800 to-green-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Thank You for Choosing EcoWaste!</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Your trusted partner for sustainable waste management. Join our community today and make a difference.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="p-3 bg-green-400 rounded-full">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Special Joining Bonus!</h3>
              </div>
              <p className="text-green-100 text-lg mb-6">
                Get ₹100 additional bonus points when you join today! Use these points to redeem exciting rewards.
              </p>
              <button 
                onClick={() => navigate('/signup')}
                className="bg-white text-green-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-100 transition-colors transform hover:scale-105"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

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

export default Home;