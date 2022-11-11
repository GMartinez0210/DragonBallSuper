import { useState } from "react"
import useRoles from "../../custom/useRoles"
import FilterItem from "../../hooks/Filter Item/FilterItem"

import "./filter.css"

function Filter(props) {
    const [active, setActive] = useState("Todos")

    function handleActiveLink(itemClicked) {
        setActive(itemClicked)
        props.handleFilter(itemClicked)
    }

    const roles = useRoles()

    return (
        <ul className="filter-container">
            <FilterItem role={"Todos"} handleActiveLink={handleActiveLink} active={active} />            
            {
                roles?.map(role => {
                    return(
                        <FilterItem role={role} handleActiveLink={handleActiveLink} active={active} />
                    )
                })
            }
        </ul>
    )
}

export default Filter