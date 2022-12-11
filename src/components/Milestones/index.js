import React from 'react'
import ml1 from '../../images/milestone1.svg'
import ml2 from '../../images/milestone2.svg'
import ml3 from '../../images/milestone3.svg'
import ml4 from '../../images/milestone4.svg'
import {
  Container,
  Title,
  Wrapper,
  Cards,
  CardWrapper,
  Img,
  ContentP,
  Box1,
  Box2
} from './MilestonesElements';
const Milestones = () => {
  return (
    <Container>
      <Wrapper>
        <Box1>
          <Title>Perpetual Milestones</Title>
        </Box1>
        <Box2>
        <Cards>
          <CardWrapper>
            <Img src={ml1} alt=''/>
            <ContentP>
              Establishing of Strategic Partnerships with Launchpads, Projects, VCs, KYC and Audit Platforms
            </ContentP>
          </CardWrapper>
        </Cards>
        <Cards>
          <CardWrapper>
            <Img src={ml2} alt=''/>
            <ContentP>
              Collecting of a Wealth of Educational Resources to Provide to the Community
            </ContentP>
          </CardWrapper>
        </Cards>
        <Cards>
          <CardWrapper>
            <Img src={ml3} alt=''/>
            <ContentP>
                Continual Scouting for High Quality Projects to Host on our Platform
            </ContentP>
          </CardWrapper>
        </Cards>
        <Cards>
          <CardWrapper>
            <Img src={ml4} alt=''/>
            <ContentP>
              Strategic Implementation of Community Developments for Long Term Positioning
            </ContentP>
          </CardWrapper>
        </Cards>
        </Box2>
      </Wrapper>
    </Container>
  )
}

export default Milestones