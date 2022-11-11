import { useEffect, useState } from "react";

function useRoles() {
    const [roles, setRoles] = useState([])

    useEffect(() => {
        const url = "https://dragon-ball-super-api.herokuapp.com/api/characters"
        fetch(url)
            .then(response => response.json())
            .then(response => response.map(chareacter => chareacter.role))
            .then(response => response.filter((role, index) => index === response.indexOf(role)))
            .then(response => setRoles(response))
    }, [roles])

    return roles
}

export default useRoles