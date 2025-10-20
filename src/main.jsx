import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { PizzaProvider } from "./context/PizzaContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <StrictMode>
        <PizzaProvider>
        <CartProvider>
          <App />
        </CartProvider>
        </PizzaProvider>
      </StrictMode>
    </UserProvider>
  </BrowserRouter>
);
