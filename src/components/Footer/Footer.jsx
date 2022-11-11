import "./footer.css"

import granPatiarcaImg from "../../images/gran_patriarca.png"
import vegettaImg from "../../images/vegetta.png"

import SocialMediaLink from "../Social Media Link/SocialMediaLink"

function Footer() {

    const socialMediaLinkData = [
        {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/genaro-martinezmedina/",
            icon: "bi bi-linkedin"
        },
        {
            text: "GitHub",
            link: "https://github.com/GMartinez0210",
            icon: "bi bi-github"
        }
    ]

    return (
        <footer className="footer-container pt-5">
            <div className="footer-subcontainer">
                <img className="footer-img footer-img-vegeta" src={vegettaImg} alt="" title="" />
                <div className="footer-social-media-container">
                    <h2 className="footer-title">REDES SOCIALES</h2>
                    <ul className="footer-social-media-subcontainer">
                        {
                            socialMediaLinkData.map(data => 
                                <SocialMediaLink text={data.text} link={data.link} icon={data.icon} />)
                        }
                    </ul>
                </div>
                <img className="footer-img footer-img-patriarca" src={granPatiarcaImg} alt="" title="" />
            </div>                
        </footer>
    )
}

export default Footer