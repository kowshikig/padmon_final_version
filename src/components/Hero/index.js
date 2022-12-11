import React from 'react'
import {
  Container,
  Wrapper,
  Box1,
  Box2,
  Img,
  TitleH1,
  ContP,
  Buttons,
  But1,
  But2
} from './HeroElements'
import hero from '../../images/padmon_hero.png'

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Box1>
          <TitleH1>Welcome to Padmon!</TitleH1>
          <ContP>Padmon is an IDO and education platform established on BSC network. We have developed a simplified means of hosting project IDOs on multiple network chains. Along with providing quality projects to our community, we also provide a wealth of educational materials; while keeping our system casual and fun!</ContP>
          <Buttons>
            <But1>TRADE PADMON</But1>
            <But2>LAUNCH PLATFORM</But2>
          </Buttons>
        </Box1>
        <Box2><Img src={hero} alt=''/></Box2>
      </Wrapper>
    </Container>
  )
}

export default Hero