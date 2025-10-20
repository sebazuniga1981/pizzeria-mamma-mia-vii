import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"; //importa Link aquí

const CardPizza = ({ id, name, price, ingredients, img, onAdd, desc }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem", minHeight: "430px" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>Pizza {name}</Card.Title>
        <Card.Text>
          <strong>Precio:</strong>{" "}
          {price ? `$${price.toLocaleString("es-CL")}` : "No disponible"}
        </Card.Text>

        <Card.Text>
          <strong>Ingredientes:</strong>
        </Card.Text>
        <ul style={{ marginTop: 0, paddingLeft: "1rem" }}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <Card.Text>
          <strong>Descripción:</strong> {desc}
        </Card.Text>

        <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto" }}>
          {/* 👇 Ver más lleva a la ruta dinámica /pizza/:id */}
          <Button
            as={Link}
            to={`/pizza/${id}`}
            style={{
              flex: 1,
              backgroundColor: "black",
              color: "white",
              border: "none",
            }}
          >
            Ver más
          </Button>

          <Button
            style={{
              flex: 1,
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
            }}
            onClick={onAdd}
          >
            Añadir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;