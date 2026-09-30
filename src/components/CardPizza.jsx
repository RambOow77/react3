const CardPizza = ({ img, name, price, ingredients }) => {
  return (
    <article className="pizza-card">
      <img src={img} alt={`Pizza ${name}`} className="pizza-image" />
      <div className="pizza-card-body">
        <h2>{name}</h2>
        <p className="price">${price.toLocaleString('es-CL')}</p>
        <h3>Ingredientes</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={`${ingredient}-${index}`}>{ingredient}</li>
          ))}
        </ul>
        <button type="button" className="secondary-button">Ver más</button>
      </div>
    </article>
  )
}

export default CardPizza
