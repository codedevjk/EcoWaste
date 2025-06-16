import React, { useState } from 'react';
import { Heart, ShoppingCart, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  onAddToWishlist: (id: number) => void;
  onAddToCart: (id: number) => void;
  isWishlisted: boolean;
}

function ProductCard({ id, name, price, rating, image, description, onAddToWishlist, onAddToCart, isWishlisted }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onAddToWishlist(id)}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-300 ${
            isWishlisted 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <Heart className="h-5 w-5" fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">({rating})</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-400">{price}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => onAddToCart(id)}
              className="bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition-colors duration-300 flex items-center"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </button>
            <a
              href="https://www.recharkha.org/?srsltid=AfmBOoqoPR8naazzvMfOChl-zyJaU0f1nnZpMS8TJVQFvkbPB6uTCtuL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors duration-300 flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard; 