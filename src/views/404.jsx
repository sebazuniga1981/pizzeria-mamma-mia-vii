import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      textAlign: "center"
    }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={{
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: "black",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px"
      }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;