import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";

function Product_Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`/products/v1/${id}`);
        console.log("Product Response:", response.data);
        if (response.status === 200) {
          setProduct(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } 
    };
    getProduct();
  }, [id]);


  if (!product) return <div className="p-8 text-center">Product not found</div>;

  return (

    <div className="container mx-auto px-4 py-8 max-w-6xl">
     
        <nav className="text-sm mb-6">
            <a href="#" className="text-blue-600 hover:text-blue-800">Products</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">product-name</span>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
                
                <div className="md:w-1/2 p-6">
                    <div className="image-gallery">
                        <div className="mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300 h-80 flex items-center justify-center">
                            <img src={`http://localhost:3000${product.images?.[0]?.url}`} alt={product.title} className="w-full h-full object-cover"/>
                        </div>
                        
                       
                        <div className="flex space-x-4">
                            <div className="w-1/3 rounded-md overflow-hidden cursor-pointer">
                                <img src="https://via.placeholder.com/200x200/3b82f6/ffffff?text=Image+1" alt="Product Image 1" className="w-full h-24 object-cover active-image" onclick="changeImage(this.src)"/>
                            </div>
                            <div className="w-1/3 rounded-md overflow-hidden cursor-pointer">
                                <img src="https://via.placeholder.com/200x200/ef4444/ffffff?text=Image+2" alt="Product Image 2" className="w-full h-24 object-cover" onclick="changeImage(this.src)"/>
                            </div>
                            <div className="w-1/3 rounded-md overflow-hidden cursor-pointer">
                                <img src="https://via.placeholder.com/200x200/10b981/ffffff?text=Image+3" alt="Product Image 3" className="w-full h-24 object-cover" onclick="changeImage(this.src)"/>
                            </div>
                        </div>
                    </div>
                </div>
                
             
                <div className="md:w-1/2 p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
                    
                 
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <span className="ml-2 text-gray-600">| 3 reviews</span>
                    </div>
                    
                 
                    <div className="mb-4">
                        <span className="text-2xl font-bold text-gray-800">{product.price} DH</span>
                        {product.compareAtPrice && (
                            <span className="ml-2 text-gray-500 line-through">{product.compareAtPrice} DH</span>
                        )}
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                        {product.description}
                    </p>
                    
                   
                    <div className="mb-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                            {product.stock > 0 ? `${product.stock} item(s) en stock!` : 'Out of stock'}
                        </span>
                    </div>
                    
                
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-700 mb-2">Size: <span className="font-normal">M</span></h3>
                        <div className="flex space-x-2">
                            <button className="w-10 h-10 bg-blue-600 text-white rounded-md font-medium">M</button>
                            <button className="w-10 h-10 border border-gray-300 rounded-md font-medium hover:bg-gray-100">L</button>
                            <button className="w-10 h-10 border border-gray-300 rounded-md font-medium hover:bg-gray-100">XL</button>
                            <button className="w-10 h-10 border border-gray-300 rounded-md font-medium hover:bg-gray-100">XXL</button>
                        </div>
                    </div>
                    
                
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-700 mb-2">Color: <span className="font-normal">Blue</span></h3>
                        <div className="flex space-x-2">
                            <button className="w-10 h-10 bg-blue-600 rounded-full border-2 border-blue-700"></button>
                            <button className="w-10 h-10 bg-red-500 rounded-full border-2 border-gray-300 hover:border-gray-400"></button>
                            <button className="w-10 h-10 bg-green-500 rounded-full border-2 border-gray-300 hover:border-gray-400"></button>
                            <button className="w-10 h-10 bg-gray-800 rounded-full border-2 border-gray-300 hover:border-gray-400"></button>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-700 mb-2">Quantity</h3>
                        <div className="flex items-center">
                            <button className="w-10 h-10 bg-gray-200 rounded-l-md flex items-center justify-center hover:bg-gray-300">
                                <i className="fas fa-minus"></i>
                            </button>
                            <div className="w-12 h-10 bg-gray-100 flex items-center justify-center border-t border-b border-gray-300">
                                <span className="font-medium">1</span>
                            </div>
                            <button className="w-10 h-10 bg-gray-200 rounded-r-md flex items-center justify-center hover:bg-gray-300">
                                <i className="fas fa-plus"></i>
                            </button>
                            <button className="ml-4 flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition duration-200">
                                Add to cart
                            </button>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center text-sm text-gray-600">
                            <i className="fas fa-shipping-fast mr-2"></i>
                            <span>Free shipping on orders over 200 DH</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-2">
                            <i className="fas fa-undo-alt mr-2"></i>
                            <span>30-day return policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      
        <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
               
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200">
                    <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-300"></div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800 mb-1">Product Name 1</h3>
                        <div className="flex text-yellow-400 mb-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-800">89.00 DH</span>
                            <button className="text-blue-600 hover:text-blue-800">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200">
                    <div className="h-48 bg-gradient-to-br from-green-100 to-green-300"></div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800 mb-1">Product Name 2</h3>
                        <div className="flex text-yellow-400 mb-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-800">129.00 DH</span>
                            <button className="text-blue-600 hover:text-blue-800">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
          
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200">
                    <div className="h-48 bg-gradient-to-br from-red-100 to-red-300"></div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800 mb-1">Product Name 3</h3>
                        <div className="flex text-yellow-400 mb-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-800">75.00 DH</span>
                            <button className="text-blue-600 hover:text-blue-800">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
              
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200">
                    <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-300"></div>
                    <div className="p-4">
                        <h3 className="font-medium text-gray-800 mb-1">Product Name 4</h3>
                        <div className="flex text-yellow-400 mb-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-800">149.00 DH</span>
                            <button className="text-blue-600 hover:text-blue-800">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

  );
}

export default Product_Details;
