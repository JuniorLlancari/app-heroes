import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import queryString from 'query-string';
import useForm from '../../custom-hooks/useForm';
import { heroes } from '../../data/heroes'
import { HeroItems } from '../heroes/HeroItems';
import { getHeroesByName } from '../selectores/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    console.log("q", q)




    const [values, handleInputChange, reset] = useForm({ searchText: '' })
    const { searchText } = values;

    const heroFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)

    }

    return (
        <div>
            <h1>Search Screen</h1>

            <hr />

            <div className="row">
                <div className="col-5">

                    <h4> Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            //value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-clock btn-outline-primary"
                        >Serach</button>



                    </form>
                </div>
                <div className="col-7">

                    <h4> Result</h4>

                    {(q === '') && <div className="alert alert-info">
                        Sercha a hero
                    </div>}
                    {(q !== '' && heroFilter.length === 0) && <div className="alert alert-danger">
                        Sercha a hero
                    </div>}

                    <hr />
                    {
                        heroFilter.map(hero => { return <HeroItems key={hero.id} hero={{ ...hero }} ></HeroItems> })
                    }

                </div>


            </div>

        </div>
    )
}
