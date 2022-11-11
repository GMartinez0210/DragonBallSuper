import kaiosamaImg from "../../images/kaiosama.png"

import "./header.css"

function Header() {
    return (
        <header className="header-container pt-5">
            <div className="container header-subcontainer">
                <h1 className='header-title'>DRAGON BALL</h1>
                <img className='header-img' src={kaiosamaImg} alt='Kaiosama' title='Kaiosama' />
            </div>
        </header>
    )
}

export default Header