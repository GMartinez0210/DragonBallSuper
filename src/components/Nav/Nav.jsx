import "./nav.css"

import bgDrangBallGt from "../../images/bg_dragon_ball_gt.jpg"
import dragonBallLogo from "../../images/dragon_ball_logo.png"

function Nav() {
    const backgroundStyle = {
        background: `url(${bgDrangBallGt})`
    }
    
    return (
        <nav className="px-3 py-4" style={backgroundStyle}>
            <div className="container d-flex justify-content-center">
                <a className="nav-brand" href="/">
                    <img className="nav-brand-logo" src={dragonBallLogo} alt="Dragon Ball" title="Dragon Ball"/>
                </a>
            </div>
        </nav>
    )
}

export default Nav