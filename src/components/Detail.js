import React from 'react'
import styled from "styled-components"

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://static.filmvandaag.nl/featured/disney-plus-beste-series.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus" alt="" />
      </ImageTitle>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`
