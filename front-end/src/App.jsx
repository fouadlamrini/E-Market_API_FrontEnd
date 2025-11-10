import React from "react";
import AppRouter from "./routes/Routes"; 
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
