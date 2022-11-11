import { useRef } from "react"

function FilterItem(props) {
    const roleRef = useRef(null)

    function handleClickLink(event) {
        event.preventDefault()
        const itemClicked = roleRef.current.ariaLabel 
        props.handleActiveLink(itemClicked)
    }

    const className = props.role === props.active 
        ? "filter-item active" 
        : "filter-item"

    return (
        <li className={className}>
            <a ref={roleRef} className="filter-link"
                href="/" aria-label={props.role} 
                onClick={handleClickLink}> {props.role} </a>
        </li>
    )
}

export default FilterItem