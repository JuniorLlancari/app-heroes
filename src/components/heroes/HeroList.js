import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectores/getHeroesByPublisher'
import { HeroItems } from './HeroItems';

export const HeroList = ({publisher}) => {


    const heroes=useMemo(() => getHeroesByPublisher(publisher), [publisher])
    // const heroes=getHeroesByPublisher(publisher);
     
    return (
        <div className="card-columns animate__animated animate__bounce">
            {
                heroes.map(hero=>{
                    return <HeroItems key={hero.id}  hero={{...hero}} ></HeroItems>
                })
            }
        </div>
    )
}
