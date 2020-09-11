import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import HeaderBanner from './components/HeaderBanner'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'
const ContentView = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1200px;
justify-content: center;
margin-left: auto;
margin-right: auto;

`
const App = () => {
  const [baseUrl] = useState('https://rickandmortyapi.com/api/character/')
  const [characters, setCharacter] = useState([])

  useEffect(() => {
    axios.get(baseUrl)
      .then((result) => {
        setCharacter(result.data.results)
      })
      .catch((err) => {
        console.log(`oopsie: ${err}`)
      })
  }, [])
  return (
    <div className="App">
      <HeaderBanner />
      <ContentView>
      {
        characters.map((character, index) => (
          <Character key={`char-${index}`} character={character} />
        ))
      }
      </ContentView>
      
    </div>
  );
}

export default App;
