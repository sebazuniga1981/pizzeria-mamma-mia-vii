/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

export function PizzaProvider({ children }) {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/pizzas");
                const data = await res.json();
                setPizzas(data);
            } catch (error) {
                console.error("❌ Error al cargar pizzas:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPizzas();
    }, []);

    return (
        <PizzaContext.Provider value={{ pizzas, loading }}>
            {children}
        </PizzaContext.Provider>
    );
}