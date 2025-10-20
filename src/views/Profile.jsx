import React from "react";

const Profile = () => {
  const userEmail = "usuario@example.com";

  const handleLogout = () => {
    alert("Sesión cerrada");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      textAlign: "center",
      gap: "1rem"
    }}>
      <h2>Perfil de usuario</h2>
      <p><strong>Email:</strong> {userEmail}</p>
      <button
        onClick={handleLogout}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;