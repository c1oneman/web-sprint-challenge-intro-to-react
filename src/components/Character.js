// Write your Character component here
import React from "react"
import styled, { keyframes } from 'styled-components'
const CharacterContainer = styled.div`
    display:flex;
    width: 45%;
    background-color:rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    text-align: center;
    .left {
        width:33%;
    }
    .right {
        width:77%;
        color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
    }
    .left img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem 0 0 0.5rem;
    }
    .deadOrAlive p {
        font-weight:600;
    }
    

`
const Character = (props) => {
    console.log(props.character)
    const character = props.character
    
    return(
        
        <CharacterContainer>
            <div class = 'left'>
            <img src={character.image}/>
            </div>
            <div class = 'right'>
            <h2>{character.name}</h2>
            <div class = 'deadOrAlive'>
            <p style={character.status=='Alive' ? {color: '#6eeb34'} : {color:'white'}}>{character.status}</p>
            </div>
            </div>
        </CharacterContainer>
    )
}

export default Character