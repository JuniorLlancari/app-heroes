import { heroes } from "../../data/heroes";

export const getHeroById=(id)=>{
   
    return heroes.find(ele=>ele.id===id);
}