import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <h1 className="text-white text-4xl">Weather App</h1>
    </div>
  );
}
