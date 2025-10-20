import { useContext } from "react"
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";
/*import { pizzas } from "../data/pizzas";*/


const Home = () => {
  const { pizzas, loading } = useContext(PizzaContext)
  const { addToCart } = useContext(CartContext)

  if (loading) return <p style={{ textalign: "center" }}>Cargando Pizza... 🍕</p>
  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Row>
          {pizzas.map((pizza) => (
            <Col md={4} key={pizza.id}>
              <CardPizza
              id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
                onAdd={() => addToCart(pizza)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;