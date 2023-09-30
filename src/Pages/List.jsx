import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import SearchBar from "../components/Search/SearchBar"
import Filter from "../components/Filter/Filter"
import Card from '../components/Card'
import { getCountries } from "../services/countriesApi"

function List() {

    const [countries, setCountryInfo] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchedResults, setSearchedResults] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("");

    const searchItems = (searchValue) => {

        setSearchInput(searchValue)
        console.log(searchValue)
        if (searchInput !== "") {
            const searchedData = countries.filter((item) => {
                return item.name.toLowerCase().includes(searchValue.toLowerCase())
            })
            setSearchedResults(searchedData)
        }
        else {
            setSearchedResults(countries)
        }
    }

    useEffect(() => {
      let mounted = true;
      getCountries()
        .then(items => {
          if(mounted) {
            setCountryInfo(items)
          }
        })
        return () => mounted = false;
    }, [])
    
    // console.log(countries)
    const displayedCountries = searchedResults.length ? searchedResults : countries;
    const filteredCountries = selectedRegion ? displayedCountries.filter(country => country.region === selectedRegion) : displayedCountries;

    return (
        <>
            <div className="searchArea center-items">
                <div className="searchAndFilter">
                    <SearchBar 
                        handleChange={(e) => searchItems(e.target.value)}
                    />
                    <Filter onFilterChange={setSelectedRegion}/>
                </div>
            </div>

            <div className="countries center-items">
                <div className="card-container">
                    {filteredCountries.map((item) => {
                        const {numericCode, name, flags, population, region, capital } = item;
                        return (
                            <Link to={`/country/${name}`} className="route-link" key={numericCode}>
                                <Card 
                                    image={flags.png}
                                    country={name}
                                    population={population.toLocaleString()}
                                    region={region}
                                    capital={capital}
                                />
                            </Link>
                        );
                    })}
                </div> 
            </div>
        </> 
    )
}

export default List