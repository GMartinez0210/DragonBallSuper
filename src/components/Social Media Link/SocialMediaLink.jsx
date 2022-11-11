import "./socialMediaLink.css"

function SocialMediaLink(props) {
    return (
        <li className="social-media-item">
            <a className="social-media-link" href={props.link} aria-label={props.text}>
                <span>{props.text}</span>
                <i className={`${props.icon} social-media-icon`}></i>
            </a>
        </li>
    )
}

export default SocialMediaLink