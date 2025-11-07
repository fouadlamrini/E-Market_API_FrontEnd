import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">🏠 Home Page</h1>
      <Link to="/product/1" className="text-blue-500 underline">
        Go to Product Detail
      </Link>
    </div>
  );
}

export default Home;
