import { useState } from 'react'
import useCharacters from "../../custom/useCharacters"

import Card from '../Card/Card'
import Filter from '../Filter/Filter'

import "./main.css"

function Main() {
    const [filter, setFilter] = useState("Todos")

    const charactersFilter = useCharacters(filter)

    console.log(charactersFilter)

    function handleFilter(filter) {
        setFilter(filter)
    }

    return (
        <main className='container my-5'>
            <h2 className='main-filter-title pb-4'>CHARACTERS</h2>
            <section className='main-container'>
                <div className='main-filter-container'>
                    <Filter handleFilter={handleFilter} />                    
                </div>
                <div className='main-characters-container'>
                    {
                        charactersFilter?.map(character => <Card character={character} />)
                    }
                </div>
            </section>
        </main>
    )
}

export default Main