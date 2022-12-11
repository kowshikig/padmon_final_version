import React from 'react'
import {
    Container,
    Wrapper,
    Box1,
    Box2,
    Box3,
    Img,
    Card,
    ContP
} from './RoadElements'
import element from '../../images/Aalpha.svg'
const Roadmapextra = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <Box1>Roadmap</Box1>
            <Box2><Img src={element} /></Box2>
            <Box3>
              <Card>
                <ContP>Our roadmap is to be as transparent as possible. We will work with our full power to deliver every milestone in a timely manner.</ContP>
              </Card>
              <Card>
                <ContP>While extensive and detailed roadmaps can look impressive to new investors, they can also be problematic. Development takes time. Delays are a frequent reality. Not to mention that it can cause handcuffing in project teams exploring new paths that present themselves over time that could prove more optimal and effective for the project in the long term.</ContP>
              </Card>
              <Card>
                <ContP>For this reason, we have established our roadmap to be milestone-based; which will be updated on a more frequent basis - and with transparent announcements of updates to the community.</ContP>
              </Card>
              
            </Box3>
        </Wrapper>
    </Container>
    </>
  )
}

export default Roadmapextra