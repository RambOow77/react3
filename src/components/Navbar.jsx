const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="brand" href="#">🍕 Mamma Mía</a>
        <div className="nav-actions">
          <button type="button" className="nav-button">🔐 Login</button>
          <button type="button" className="nav-button">📝 Register</button>
          <button type="button" className="cart-button">🛒 Carrito</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
