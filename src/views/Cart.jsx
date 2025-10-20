import { useContext } from 'react'
import { Container, Table, Button, Image } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'


const Cart = () => {
    const { cart, increment, decrement, removeFromCart, total } = useContext(CartContext)
    const {token} = useContext(UserContext
    )

    return (
        <Container className='mt-4'>
            <h2> Carrito de compras</h2>
            {cart.length === 0 ? (
                <p> El carrito esta vacio</p>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Pizza</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(pizza => (
                            <tr key={pizza.id}>
                                <td>{pizza.name}</td>
                                <td><Image src={pizza.img} alt={pizza.name} style={{ width: "80px" }} rounded /></td>
                                <td>${pizza.price.toLocaleString("es-CL")}</td>
                                <td>{pizza.count}</td>
                                <td>${(pizza.price * pizza.count).toLocaleString("es-CL")}</td>
                                <td>
                                    <Button variant='success' size='sm' onClick={() => increment(pizza.id)}> + </Button>
                                    <Button variant='danger' size='sm' onClick={() => decrement(pizza.id)} > - </Button>
                                    <Button variant="secondary" size="sm" onClick={() => removeFromCart(pizza.id)}> 🗑 </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <h4>Total: ${total.toLocaleString("es-CL")}</h4>
       <Button
        variant={token ? 'primary' : 'secondary'}
        disabled={!token}
      >
        {token ? 'Pagar' : 'Inicia sesión para pagar'}
      </Button>
        </Container>
    )
}
export default Cart