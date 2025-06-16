import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Heart, ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  category: string;
}

function Shop() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'Recycled Paper Notebook',
      price: '₹199',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80',
      description: 'Eco-friendly notebook made from 100% recycled paper. Perfect for sustainable note-taking.',
      category: 'stationery'
    },
    {
      id: 2,
      name: 'Eco-Friendly Water Bottle',
      price: '₹499',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80',
      description: 'Reusable water bottle made from recycled materials. Keeps drinks cold for 24 hours.',
      category: 'accessories'
    },
    {
      id: 3,
      name: 'Bamboo Cutlery Set',
      price: '₹299',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80',
      description: 'Sustainable cutlery set made from bamboo. Includes fork, knife, spoon, and chopsticks.',
      category: 'kitchen'
    },
    {
      id: 4,
      name: 'Recycled Tote Bag',
      price: '₹399',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&q=80',
      description: 'Stylish tote bag made from recycled materials. Perfect for shopping and daily use.',
      category: 'accessories'
    },
    {
      id: 5,
      name: 'Recycled Glass Vase',
      price: '₹599',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80',
      description: 'Beautiful vase made from recycled glass. Adds elegance to any room.',
      category: 'home'
    },
    {
      id: 6,
      name: 'Eco-Friendly Phone Case',
      price: '₹349',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80',
      description: 'Phone case made from recycled materials. Provides protection while being eco-friendly.',
      category: 'accessories'
    }
  ];

  const categories = ['all', 'stationery', 'accessories', 'kitchen', 'home'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productId: number) => {
    setCart(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">Eco-Friendly Shop</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 flex items-center">
            <ShoppingBag className="h-8 w-8 text-green-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Total Products</p>
              <p className="text-white text-xl font-semibold">{products.length}</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 flex items-center">
            <Heart className="h-8 w-8 text-red-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Wishlist Items</p>
              <p className="text-white text-xl font-semibold">{wishlist.length}</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 flex items-center">
            <ShoppingCart className="h-8 w-8 text-blue-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Cart Items</p>
              <p className="text-white text-xl font-semibold">{cart.length}</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToWishlist={handleAddToWishlist}
              onAddToCart={handleAddToCart}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
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

export default Shop;