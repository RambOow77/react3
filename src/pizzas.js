const pizzas = [
  {
    id: 1,
    name: 'Napolitana',
    price: 5950,
    ingredients: ['Tomate', 'Mozzarella', 'Jamón', 'Orégano'],
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Española',
    price: 6950,
    ingredients: ['Tomate', 'Mozzarella', 'Chorizo', 'Pimentón'],
    img: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Pepperoni',
    price: 6990,
    ingredients: ['Tomate', 'Mozzarella', 'Pepperoni'],
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Vegetariana',
    price: 6490,
    ingredients: ['Tomate', 'Mozzarella', 'Champiñones', 'Pimentón', 'Aceitunas'],
    img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Hawaiana',
    price: 6790,
    ingredients: ['Tomate', 'Mozzarella', 'Jamón', 'Piña'],
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Cuatro Quesos',
    price: 7490,
    ingredients: ['Mozzarella', 'Parmesano', 'Gorgonzola', 'Provolone'],
    img: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80',
  },
]

const pizzaCart = [
  { ...pizzas[0], quantity: 2 },
  { ...pizzas[2], quantity: 1 },
  { ...pizzas[4], quantity: 1 },
]

export { pizzas, pizzaCart }
