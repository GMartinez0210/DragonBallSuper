import "./card.css"

import backgroudCardImage from "../../images/bg_effect.png"

function Card({character}) {
    const {id, name, specie, role, imageUrl, status, 
        universe, transform, originplanet} = character

    return (
        <figure className="card-item" id={id}>
            <div className="card-image-container">
                <img className="card-image" src={imageUrl} alt={name} title={name} />
            </div>
            <figcaption className="card-information-container" >
                <div className="card-information-subcontainer">
                    <div className="card-information">
                        <h2 className="card-info-name"> {name} </h2>
                        <p>Role: {role}</p>
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default Card