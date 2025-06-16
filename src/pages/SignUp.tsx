import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Lock, CheckCircle } from 'lucide-react';
import { signUp, supabase } from '../services/auth';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');

    try {
      // First sign up the user
      const { data: authData, error: authError } = await signUp(formData.email, formData.password);
      if (authError) throw authError;

      if (!authData?.user) {
        throw new Error('User creation failed');
      }

      // Then store additional user data in the profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: authData.user.id,
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            created_at: new Date().toISOString()
          }
        ]);

      if (profileError) {
        // If profile creation fails, delete the auth user
        await supabase.auth.admin.deleteUser(authData.user.id);
        throw profileError;
      }
      
      // Store user data in localStorage for welcome message
      localStorage.setItem('userName', formData.fullName);
      
      // Redirect to home page
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      console.error('Signup error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during signup');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Join Clean India Movement
          </h2>
          <p className="text-gray-400">
            Take a step towards a sustainable future with EcoWaste
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
          {error && (
            <div className="mb-4 p-4 bg-red-900/50 rounded-xl text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Choose a password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-green-400 hover:text-green-300">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md mx-4 transform transition-all">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-900 rounded-full p-3">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-2">
              Thank You!
            </h3>
            <p className="text-gray-300 text-center">
              You've taken a step towards a sustainable future. Welcome to EcoWaste!
            </p>
          </div>
        </div>
      )}

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
};

export default SignUp; 