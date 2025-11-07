import { FaStar } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

function Home() {
  const productData = [
    { titre: "titre 1", currentPrice: "120" , originPrice : "160" , image :"https://via.placeholder.com/300x300?text=Product+1"},
    { titre: "titre 2", currentPrice: "130" , originPrice : "200" , image :"https://via.placeholder.com/300x300?text=Product+2" },
    { titre: "titre 3", currentPrice: "99" , originPrice : "129" , image :"https://via.placeholder.com/300x300?text=Product+3"},
    { titre: "titre 4", currentPrice: "150" , originPrice : "250" , image :"https://via.placeholder.com/300x300?text=Product+4" }

  ];


  return (
    <>
      <section className="hero-bg">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
                Find Your Sole Mate With Us
              </h1>
              <p className="text-xl md:text-xl text-black mb-6 max-w-2xl">
                Discover the perfect pair that matches your style and comfort
                needs. Step into a world of premium footwear.
              </p>
              <button className="bg-black hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose E-Market ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shipping-fast text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Free delivery on orders over $50. Fast and reliable shipping
                worldwide.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                30-day return policy. We stand behind the quality of our
                products.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hand-holding-usd text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Price</h3>
              <p className="text-gray-600">
                Competitive pricing without compromising on quality and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Collection</h2>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View All <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {
                productData &&
                productData.map((item, index) => (
                    <ProductCard
                        key={index}
                        title={item.title}
                        currentPrice={item.currentPrice}
                        originPrice={item.originPrice}
                        img={item.image}
                    />
                    ))
          }
            
           

           
           
          </div>
        </div>
      </section>

      <section className="text-center py-12">
        <p className="text-sm text-gray-500 mb-2">— Our Product —</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Check Our Latest Products
        </h1>
      </section>

      <section className="flex justify-center flex-wrap gap-4 mb-12">
        <button className="px-6 py-2 rounded bg-gray-800 text-white transition-all hover:bg-gray-900">
          All
        </button>
        <button className="px-6 py-2 rounded bg-white text-gray-700 border border-gray-300 hover:border-gray-400 transition-all">
          Cat 1
        </button>
        <button className="px-6 py-2 rounded bg-white text-gray-700 border border-gray-300 hover:border-gray-400 transition-all">
          Cat 2
        </button>
        <button className="px-6 py-2 rounded bg-white text-gray-700 border border-gray-300 hover:border-gray-400 transition-all">
          Cat 3
        </button>
        <button className="px-6 py-2 rounded bg-white text-gray-700 border border-gray-300 hover:border-gray-400 transition-all">
          Cat 4
        </button>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
          <div className="relative h-64 bg-gray-200 flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
            <span className="text-gray-400">Product Image</span>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Running canvas shoes
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-800 font-bold">120 DH</span>
              <span className="text-gray-400 line-through text-sm">160 DH</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-500 text-sm">(88)</span>
            </div>

            <button className="w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
          <div className="relative h-64 bg-gray-200 flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
            <span className="text-gray-400">Product Image</span>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Running canvas shoes
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-800 font-bold">120 DH</span>
              <span className="text-gray-400 line-through text-sm">160 DH</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-500 text-sm">(88)</span>
            </div>

            <button className="w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
          <div className="relative h-64 bg-gray-200 flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
            <span className="text-gray-400">Product Image</span>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Running canvas shoes
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-800 font-bold">120 DH</span>
              <span className="text-gray-400 line-through text-sm">160 DH</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-500 text-sm">(88)</span>
            </div>

            <button className="w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
          <div className="relative h-64 bg-gray-200 flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
            <span className="text-gray-400">Product Image</span>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Running canvas shoes
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-800 font-bold">120 DH</span>
              <span className="text-gray-400 line-through text-sm">160 DH</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-500 text-sm">(88)</span>
            </div>

            <button className="w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
          <div className="relative h-64 bg-gray-200 flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
            <span className="text-gray-400">Product Image</span>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Running canvas shoes
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-800 font-bold">120 DH</span>
              <span className="text-gray-400 line-through text-sm">160 DH</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-500 text-sm">(88)</span>
            </div>

            <button className="w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
          <div className="relative h-64 bg-gray-200 flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
            <span className="text-gray-400">Product Image</span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Running canvas shoes
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-800 font-bold">120 DH</span>
              <span className="text-gray-400 line-through text-sm">160 DH</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              {" "}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-500 text-sm">(88)</span>
            </div>
            <button className="w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E-</span>
                </div>
                <span className="text-xl font-bold">Market </span>
              </div>
              <p className="text-gray-400 mb-4">
                Find your perfect sole mate with our premium collection of
                footwear for every occasion.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Men's Shoes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Women's Shoes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Kids' Shoes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sale
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get special offers, free giveaways, and new product
                updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-lg text-gray-800 focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-lg">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 E-Market . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
