import {  FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProductCard = ({title, currentPrice , img,productId}) => {

 





  return (
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
      
    
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">NEW</span>
       <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
       <Link to={productId}> <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3></Link>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-800 font-bold">{currentPrice}DH</span>
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
