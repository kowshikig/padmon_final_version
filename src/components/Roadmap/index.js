import React from 'react'
import {
  Container,
  Wrapper,
  Box1,
  Title,
  CardsWrapper,
  Cards,
  Img1,
  Img2,
  ContentP,
  Box2,
  Img3,
  Img4,
  Img5,
  Img6
} from './RoadmapElements'
import rd1 from '../../images/Roadmap1.svg'
import rd2 from '../../images/Roadmap2.svg'
import rd3 from '../../images/Roadmap3.svg'
import rdvc1 from '../../images/rdvc1.svg'
import rdvc2 from '../../images/rdvc2.svg'
import rdvc3 from '../../images/rdvc3.svg'
const Roadmap = () => {
  return (
    <Container>
      <Wrapper>
        <Box1>
          <Title>Roadmap</Title>
          <CardsWrapper>
            <Cards>
              <Img1 src={rd1} alt=''/>
              <Img2 src={rdvc1} alt=''/>
              <ContentP>
              Our roadmap is to be as transparent as possible.
              We will work with our full power to deliver every milestone in a timely manner.
              </ContentP>
            </Cards>
            <Cards>
              <Img3 src={rd2} alt=''/>
              <Img4 src={rdvc2} alt=''/>
              <ContentP>
              While extensive and detailed roadmaps can look impressive to new investors, they can also be problematic. Development takes time. Delays are a frequent reality.
              Not to mention that it can cause handcuffing in project teams exploring new paths that present themselves over time that could prove more optimal and effective for the project in the long term.
              </ContentP>
            </Cards>
            <Cards>
              <Img5 src={rd3} alt=''/>
              <Img6 src={rdvc3} alt=''/>
              <ContentP>
                For this reason, we have established our roadmap to be milestone-based; 
                which will be updated on a more frequent basis - and with transparent announcements of updates to the community.
              </ContentP>
            </Cards>
          </CardsWrapper> 
        </Box1>
        <Box2></Box2>
      </Wrapper>
    </Container>
  )
}

export default Roadmap