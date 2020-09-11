// Write your Character component here
import React from "react"
import styled, { keyframes } from 'styled-components'
const HeaderContainer = styled.div`
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 15vh;
    text-align: center;
    position: relative;
`
const HeaderBanner = () => {

    return(
        <HeaderContainer>
            <h1>Rick and Morty Characters</h1>
        </HeaderContainer>
    )
}

export default HeaderBanner