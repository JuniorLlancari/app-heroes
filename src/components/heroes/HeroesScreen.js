import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../selectores/getHeroById'

export const HeroesScreen = ({history} ) => {
    const {heroId} =useParams();

    const hero=useMemo(() => getHeroById(heroId), [heroId])


    // const hero=getHeroById(heroId);
    if(!hero){
        return <Redirect to="/"/>
    }
    const {superhero,publisher,alter_ego,first_appearance,characters}=hero;


    const handledReturn=()=>{
        if(history.length<=2){
            history.push('/')
        }else{

            history.goBack();
        }

    }

 
    return (
        <div className="row mt-5">
             
            <div className="col-4">
                <img
                src={`../assets/img/${heroId}.jpg`}
                alt={superhero}
                className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-fluid">
                    <li className="list-group-item"> <b>Alter ego: </b> {alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher: </b> {publisher} </li>
                    <li className="list-group-item"> <b>First Appearance: </b> {first_appearance} </li>
                </ul>

                    <h5>characters</h5>
                    <p>{characters}</p>
                    <button  onClick={handledReturn} className="btn btn-outline-info">
                       Return
                    </button>

            </div>


        </div>
    )
}
