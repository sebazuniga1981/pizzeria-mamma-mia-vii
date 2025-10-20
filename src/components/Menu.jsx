import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

const Menu = () => {
    const handleViewmore = (name) => {
        alert(`Mas informacion de :${name}`)
    }
    const handleAdd = (name) => {
        alert(`${name} agregado al carrito`)
    }
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

            {pizzas.map((pizza) => (
                <CardPizza
                    key={pizza.id}
                    name={pizza.name}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    img={pizza.img}
                    onViewMore={() => handleViewmore(pizza.name)}
                    onAdd={() => handleAdd(pizza.name)}
                />
            ))}
        </div>
    )
}
export default Menu;