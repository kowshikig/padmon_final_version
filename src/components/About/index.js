import React from 'react'

import {
  Container,
  Wrapper,
  Title,
  GridContainer,
  Card,
  Img,
  Img1,
  Img2,
  Img3,
  Content,
  
} from './AboutElements'
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>About Us</h1>
        </Title>
        <GridContainer>
          <Card>
            <Img><Img1></Img1></Img>
            <Content>
              <p>Padmon's platform allows for raising of capital in a decentralized environment. Where anyone can choose to participate in early investment opportunities in up-and-coming projects that have been extensively vetted.</p>
            </Content>
          </Card>
          <Card>
          <Img><Img2></Img2></Img>
            <Content>
              <p>With $PDM being the native token that powers Padmon’s platform; users will have the ability to purchase one of three tier levels for participation.</p>
            </Content>
          </Card>
          <Card>
          <Img><Img3></Img3></Img>
            <Content>
              <p>Along with the provision of investment opportunities, we are also actively working on establishing Padmon as a learning environment.</p>
            </Content>
          </Card>
        </GridContainer>
      </Wrapper>
    </Container>
  )
}

export default About