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
} from './Milestones2Elements';
const Milestones2 = () => {
  return (
    <Container>
      
      
      <Wrapper>
        <Box1>
          <Title>Milestones Underway</Title>
        </Box1>
        <Box2>

        <Cards>
          <CardWrapper>
            <Img src={ml1} alt=''/>
            <ContentP>
            Profit Sharing Model Established
            </ContentP>
          </CardWrapper>
        </Cards>
        <Cards>
          <CardWrapper>
            <Img src={ml2} alt=''/>
            <ContentP>
            Development of Governance Portal for $PDM to Become Both Access And Governance Token
            </ContentP>
          </CardWrapper>
        </Cards>
        <Cards>
          <CardWrapper>
            <Img src={ml3} alt=''/>
            <ContentP>
            Establishment of System of Governance for Community Members to Submit and Review Proposals to be Voted Upon
            </ContentP>
          </CardWrapper>
        </Cards>
        <Cards>
          <CardWrapper>
            <Img src={ml4} alt=''/>
            <ContentP>
            Establishment of Educational Bootcamp Wherein Community Members Will Have Access to an Extensive Collection of Resources to Learn About How DeFi Operates,

            </ContentP>
          </CardWrapper>
        </Cards>
        </Box2>
        
      </Wrapper>
    </Container>
  )
}

export default Milestones2