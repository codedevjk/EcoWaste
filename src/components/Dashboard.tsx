import React, { useEffect, useRef } from 'react';
import { Flame, Mountain, Leaf } from 'lucide-react';
import { Chart } from 'chart.js/auto';

interface DashboardProps {
  userName: string | null;
  streak: number;
  wasteData: {
    date: string;
    amount: number;
  }[];
  totalWasteReduced: number;
  pollutionReduced: number;
  isLoggedIn: boolean;
}

function Dashboard({ userName, streak, wasteData, totalWasteReduced, pollutionReduced, isLoggedIn }: DashboardProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: wasteData.map(d => d.date),
            datasets: [{
              label: 'Waste Deposited (kg)',
              data: wasteData.map(d => d.amount),
              borderColor: '#34D399',
              backgroundColor: 'rgba(52, 211, 153, 0.1)',
              tension: 0.4,
              fill: true
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: '#9CA3AF'
                }
              },
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: '#9CA3AF'
                }
              }
            },
            animation: {
              duration: 2000,
              easing: 'easeInOutQuart'
            }
          }
        });
      }
    }
  }, [wasteData]);

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Welcome to EcoWaste, {userName || 'Guest'}!
        </h2>
        <p className="text-gray-300 mt-2">
          {isLoggedIn 
            ? "Track your environmental impact and continue your sustainable journey."
            : "This is a preview of your potential impact. Sign in to start tracking your actual contributions!"}
        </p>
        {!isLoggedIn && (
          <div className="mt-4 bg-yellow-900/50 border border-yellow-700 rounded-lg p-4">
            <p className="text-yellow-200 text-sm">
              Note: This dashboard shows dummy data. Sign in to view your actual impact and start earning rewards!
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Streak Card */}
        <div className="bg-gray-700 rounded-lg p-6 flex items-center space-x-4">
          <div className="bg-orange-900/50 p-3 rounded-full">
            <Flame className="h-6 w-6 text-orange-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Current Streak</h3>
            <p className="text-2xl font-bold text-orange-400">{streak} days</p>
          </div>
        </div>

        {/* Waste Reduced Card */}
        <div className="bg-gray-700 rounded-lg p-6 flex items-center space-x-4">
          <div className="bg-green-900/50 p-3 rounded-full">
            <Mountain className="h-6 w-6 text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Waste Reduced</h3>
            <p className="text-2xl font-bold text-green-400">{totalWasteReduced} kg</p>
          </div>
        </div>

        {/* Pollution Reduced Card */}
        <div className="bg-gray-700 rounded-lg p-6 flex items-center space-x-4">
          <div className="bg-blue-900/50 p-3 rounded-full">
            <Leaf className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200">CO₂ Reduced</h3>
            <p className="text-2xl font-bold text-blue-400">{pollutionReduced} kg</p>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Waste Deposition Trend</h3>
        <div className="h-64">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 