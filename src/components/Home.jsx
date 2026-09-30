import { pizzas } from '../pizzas'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <main className="home container">
      <section className="hero">
        <div>
          <p className="eyebrow">Pizzería Mamma Mía</p>
          <h1>Las mejores pizzas, directamente a tu mesa.</h1>
          <p>Descubre nuestras pizzas y disfruta de ingredientes seleccionados y mucho sabor.</p>
        </div>
      </section>

      <section className="pizza-grid" aria-label="Listado de pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            img={pizza.img}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
