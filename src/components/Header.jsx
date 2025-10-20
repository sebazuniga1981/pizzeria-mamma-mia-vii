import pizzaImg from '../assets/imgs/Header.jpg'

const Header = () => {
    return (
        <header className="text-center p-4 text-white bg-dark"
            style=
            {{
                backgroundImage: `url(${pizzaImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        ><h1>Pizzeria Mamma Mia</h1>
            <p>
                Las mejores pizzas que podras encontrar, con ingredientes frescos y
                mucho amor 🍕❤️{" "}
            </p>
        </header>
    );
};
export default Header;