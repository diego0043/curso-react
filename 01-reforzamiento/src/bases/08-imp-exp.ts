import { heroes, type Hero, Owner } from "../heroes/heroes.data"

/*
const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    })

    /*if (!hero){
        throw new Error(`No existe un heroe con el id ${id}`)
    }

    
    return hero;
}
*/

export const getHeroesByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter((hero) => hero.owner === owner)
    return heroesByOwner;
}
