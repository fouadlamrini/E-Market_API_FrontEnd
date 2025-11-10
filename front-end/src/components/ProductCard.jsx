import {  FaStar } from "react-icons/fa";

const ProductCard = ({title, currentPrice, originPrice , img}) => {
  return (
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
      
    
      <div className="relative h-64 bg-gray-200 flex items-center justify-center">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
       <img src= {img} alt={title} />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-800 font-bold">{currentPrice}DH</span>
          <span className="text-gray-400 line-through text-sm">{originPrice} DH</span>
        </div>

        <div className="flex items-center gap-1 text-yellow-400 mb-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>

        <button className="w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
