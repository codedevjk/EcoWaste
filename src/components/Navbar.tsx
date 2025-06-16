import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Recycle, ShoppingBag, MapPin, Wallet, Trophy, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-8 w-8" />
            <span className="font-bold text-xl">EcoWaste</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="flex items-center space-x-1 hover:text-green-200 transition">
              <ShoppingBag className="h-5 w-5" />
              <span>Shop</span>
            </Link>
            <Link to="/tracking" className="flex items-center space-x-1 hover:text-green-200 transition">
              <MapPin className="h-5 w-5" />
              <span>Track</span>
            </Link>
            <Link to="/wallet" className="flex items-center space-x-1 hover:text-green-200 transition">
              <Wallet className="h-5 w-5" />
              <span>Wallet</span>
            </Link>
            <Link to="/leaderboard" className="flex items-center space-x-1 hover:text-green-200 transition">
              <Trophy className="h-5 w-5" />
              <span>Leaderboard</span>
            </Link>
            <button
              onClick={() => navigate('/signup')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/shop" 
                className="flex items-center space-x-2 hover:bg-green-700 px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Shop</span>
              </Link>
              <Link 
                to="/tracking" 
                className="flex items-center space-x-2 hover:bg-green-700 px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="h-5 w-5" />
                <span>Track</span>
              </Link>
              <Link 
                to="/wallet" 
                className="flex items-center space-x-2 hover:bg-green-700 px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wallet className="h-5 w-5" />
                <span>Wallet</span>
              </Link>
              <Link 
                to="/leaderboard" 
                className="flex items-center space-x-2 hover:bg-green-700 px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                <Trophy className="h-5 w-5" />
                <span>Leaderboard</span>
              </Link>
              <button
                onClick={() => navigate('/signup')}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;