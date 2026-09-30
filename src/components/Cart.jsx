import { useState } from 'react'
import { pizzaCart } from '../pizzas'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const aumentarCantidad = (id) => {
    setCart((currentCart) =>
      currentCart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza,
      ),
    )
  }

  const disminuirCantidad = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza,
        )
        .filter((pizza) => pizza.quantity > 0),
    )
  }

  const total = cart.reduce((accumulator, pizza) => accumulator + pizza.price * pizza.quantity, 0)

  return (
    <main className="cart container">
      <h1>🛒 Carrito de compras</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">El carrito está vacío.</div>
      ) : (
        <>
          <section className="cart-list">
            {cart.map((pizza) => (
              <article className="cart-item" key={pizza.id}>
                <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
                <div className="cart-info">
                  <h2>{pizza.name}</h2>
                  <p>Precio unitario: ${pizza.price.toLocaleString('es-CL')}</p>
                  <p>Subtotal: ${(pizza.price * pizza.quantity).toLocaleString('es-CL')}</p>
                </div>
                <div className="quantity-controls">
                  <button type="button" onClick={() => disminuirCantidad(pizza.id)} aria-label={`Disminuir ${pizza.name}`}>−</button>
                  <strong>{pizza.quantity}</strong>
                  <button type="button" onClick={() => aumentarCantidad(pizza.id)} aria-label={`Aumentar ${pizza.name}`}>+</button>
                </div>
              </article>
            ))}
          </section>

          <section className="cart-summary">
            <h2>Total: ${total.toLocaleString('es-CL')}</h2>
            <button type="button" className="pay-button">Pagar</button>
          </section>
        </>
      )}
    </main>
  )
}

export default Cart
