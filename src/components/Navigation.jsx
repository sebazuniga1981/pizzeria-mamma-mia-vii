import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext"; // si tienes el total

const Navigation = () => {
  const { token, logout } = useContext(UserContext);
  const { total } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        backgroundColor: "black",
        alignItems: "center",
        padding: "0.5rem 1rem",
      }}
    >
      {/* Título */}
      <p
        style={{
          color: "white",
          fontSize: "16px",
          margin: "0",
          fontWeight: "bold",
        }}
      >
        Pizzería Mamma Mia!
      </p>

      {/* Links comunes */}
      <Button
        as={Link}
        to="/"
        variant="outline-light"
        style={{ border: "none", color: "white" }}
      >
        🍕 Home
      </Button>

      <Button
        as={Link}
        to="/cart"
        variant="outline-light"
        style={{ border: "none", color: "white" }}
      >
        🛒 Carrito
      </Button>

      <Button
        as={Link}
        to="/pizza/p001"
        variant="outline-light"
        style={{ border: "none", color: "white" }}
      >
        🍕 Pizzas
      </Button>

      {/* Condicional según token */}
      {token ? (
        <>
          <Button
            as={Link}
            to="/profile"
            variant="outline-light"
            style={{ border: "none", color: "white" }}
          >
            🔓 Profile
          </Button>

          <Button
            onClick={logout}
            variant="outline-light"
            style={{ border: "none", color: "white" }}
          >
            🔒 Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            as={Link}
            to="/login"
            variant="outline-light"
            style={{ border: "none", color: "white" }}
          >
            🔐 Login
          </Button>

          <Button
            as={Link}
            to="/register"
            variant="outline-light"
            style={{ border: "none", color: "white" }}
          >
            📝 Register
          </Button>
        </>
      )}

      {/* Total */}
      <Button
        as={Link}
        to="/cart"
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          marginLeft: "auto",
        }}
      >
        🛒 Total: ${total.toLocaleString("es-CL")}
      </Button>
    </div>
  );
};

export default Navigation;