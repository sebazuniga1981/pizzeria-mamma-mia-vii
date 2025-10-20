import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Footer from "./components/Footer";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import Cart from "./views/Cart";
import Pizza from "./views/Pizza";
import NotFound from "./views/404";
import Profile from "./views/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  const { token } = useContext(UserContext);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ruta dinámica para pizza */}
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />

        {/* 🔒 Ruta protegida con ProtectedRoute */}
        <Route
          path="/login"
          element={token ? <Navigate to="/profile" /> : <LoginPage />}
        />
        <Route path ="/register"
          element={token ? <Navigate to="/profile" /> : <RegisterPage />}
/>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
