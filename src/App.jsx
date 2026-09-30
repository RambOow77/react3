import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import LoginPage from './components/Login'
// import RegisterPage from './components/Register'
// import Cart from './components/Cart'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  )
}

export default App
