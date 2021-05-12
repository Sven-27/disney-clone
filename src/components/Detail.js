import React from 'react'
import styled from "styled-components"

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://static.filmvandaag.nl/featured/disney-plus-beste-series.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="https://www.pngix.com/pngfile/big/10-107802_star-wars-logo-png-star-wars-png-transparent.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
           <img src="/images/play-icon-white.png" alt="" />
           <span>Trialer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 ● 7m ● Family, Fantasy, SF
      </SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repudiandae minus cupiditate iure ut officia at hic fugit, iusto deserunt. Nihil veniam magni dolorum cum, consectetur corrupti alias non praesentium ea, quam totam eum rem perspiciatis temporibus ad! Delectus perspiciatis sunt vitae aliquid, temporibus eveniet libero unde nulla dicta eos!
      </Description>
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

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 20px;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display:flex;
  align-items: center;
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
    background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`

const AddButton = styled.button`
margin-right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span{
    font-size: 30px;
    color: white;

  }
`
const GroupWatchButton = styled(AddButton)`
  background: rgb(0,0,0);
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`
