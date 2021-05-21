import { heroes } from "../../data/heroes";

export const getHeroesByPublisher=(publisher)=>{

    const validPublishers=['DC Comics','Marvel Comics']
    if(!validPublishers.includes(publisher)){
        throw  new Error(`Publisher no encontrado ${publisher}`)
    }
    return heroes.filter(ele=>ele.publisher===publisher);
}