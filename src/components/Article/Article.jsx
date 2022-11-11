import "./article.css"

import gokuImg from "../../images/goku_ssj1.png"

function Article(props) {
    return (
        <article className="article-container pt-5">
            <div className="article-subcontainer">
                <img className="article-img" src={gokuImg} alt="Goku" title="Goku" />
                <span className="article-span"> SON GOKU </span>
            </div>
            <div className="container article-text-container">
                    <p className="article-text">
                       {props.text} 
                    </p>
            </div>
        </article>
    )
}

export default Article