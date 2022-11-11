import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'

import './app.css'

import bgDragonBall from './images/bg_dragon_ball.jpg'

import Header from './components/Header/Header'
import Article from './components/Article/Article'
import Footer from './components/Footer/Footer'

function App() {
    const backgroundStyle = {
        background: `url(${bgDragonBall})`
    }

    const text = "Dragon Ball es el mejor anime que he visto. Me indentifico demasiado con Goku, quien siempre quiere volverse más fuerte para ser el mejor, y sobre todo, defender a sus amigos ante un posible enemigo"

	return (
        <div className='container-fluid p-0 m-0' style={backgroundStyle}>
            <Nav />
            <Header />
            <Article text = {text} />
            <Main />
            <Footer />
        </div>
    )
}

export default App
