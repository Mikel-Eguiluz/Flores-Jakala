import React, { useState, useEffect } from 'react'

import FlowerCard from './FlowerCard'
import SearchIcon from './search.svg'
import './App.css'

const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a'
const FLOWER_API_URL = `https://dulces-petalos.jakala.es/api/product`
const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [flowers, setFlowers] = useState([])
  const getFlowers = async () => {
    const response = await fetch(`${FLOWER_API_URL}`)
    const data = await response.json()
    setFlowers(data)
  }

  useEffect(() => {
    // searchMovies('Batman')
    getFlowers()
  }, [])

  // const searchMovies = async query => {
  //   const response = await fetch(`${API_URL}&s=${query}`)
  //   const data = await response.json()
  //   setMovies(data.Search)
  // }

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder='Busca Flores'
        />
        <img
          src={SearchIcon}
          alt='search'
          // onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {flowers?.length > 0 ? (
        <div className='container'>
          {flowers.map(flower => (
            <FlowerCard flower={flower} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
