import { useEffect, useState } from "react";

function useCharacter(role) {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const url = "https://dragon-ball-super-api.herokuapp.com/api/characters"
        fetch(url)
            .then(response => response.json())
            .then(response => 
                role !== "Todos"
                ? response.filter(character =>  character.role === role)
                : response)
            .then(response => setCharacters(response))
    }, [role])

    return characters
}

export default useCharacter