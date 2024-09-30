import { Route, Routes, useNavigate } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Auth from "./components/Auth";
import Home from "./components/Home";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (userString) {
      try {
        const user = JSON.parse(userString);
        console.log("🚀 ~ useEffect ~ user:", user);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        navigate("/auth");
      }
    } else {
      navigate("/auth");
    }
  }, [navigate]);
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/auth" element={<Auth />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
