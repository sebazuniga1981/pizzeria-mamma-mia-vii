import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Estado inicial: el usuario está autenticado (true) o no (false)
  const [token, setToken] = useState(true);

  // Función para cerrar sesión
  const logout = () => {
    setToken(false);
    alert("Sesión cerrada ✅");
  };
  const login = () => {
    setToken(true);
    alert("Sesión iniciada 🔓");
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};