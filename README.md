Requerimientos
1. Implementa un Context que te permita manejar el carrito de compras de la
aplicación. (2 puntos)

-Se creó CartContext con estado global cart y funciones: addToCart, removeFromCart, increment, decrement, y total. Todo envuelto con CartProvider en main.jsx.

2. En el Navbar consume el Cart Context para mostrar el precio total de los productos
en el carrito. (2 puntos)

- El componente Navigation consume el CartContext con useContext y muestra el total actualizado en un botón azul con formato CLP.

3. Consume el Cart Context para que el usuario pueda agregar productos al carrito
desde la página de Home (botón añadir de cada card). (2 puntos)

- En Home.jsx, se usa useContext(CartContext) y se pasa onAdd={() => addToCart(pizza)} a cada CardPizza. El botón “Añadir” agrega correctamente al carrito.

4. En la página Cart muestra los productos que el usuario ha agregado al carrito
(utilizando Cart Context), permite agregar y eliminar productos del carrito. (2 puntos)

- En Cart.jsx, se consumen los datos desde CartContext y se muestran en una tabla con imagen, nombre, precio, cantidad, subtotal y botones +, –, y 🗑 para modificar o eliminar.

5. El total de la compra debe ser calculado y mostrado en la página Cart, además este
tiene que ser el mismo que se muestra en el navbar. (2 puntos)

- El total se calcula globalmente en el contexto con reduce() y se actualiza automáticamente en Navbar y Cart al modificar el carrito.

6. Puedes llevar el consumo de las pizzas (fetch de Home y Pizza) a un Context.
(opcional)
-Se implementó PizzaContext con fetch centralizado. Home.jsx y otras páginas pueden acceder a las pizzas desde el contexto con useContext(PizzaContext).

se realizan algunos ajustes no solicitados, por ejemplo que el boton "añadir" cambie de color