import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        // 👇 Fetch dinámico según el ID recibido
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        console.log("✅ Datos recibidos desde la API:", data);
        setPizza(data);
      } catch (error) {
        console.error("❌ Error al cargar la pizza:", error);
      }
    };

    fetchPizza();
  }, [id]); //

  if (!pizza) return <p>Cargando pizza... no hay datos, vuelva mas tarde</p>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      <CardPizza
      id={pizza.id}
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
        desc={pizza.desc}
        onAdd={() => {}}
      />
    </div>
  );
};
export default Pizza;
