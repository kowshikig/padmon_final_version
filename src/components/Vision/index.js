import React from 'react'
import vision1 from '../../images/vision1.svg'
import vision2 from '../../images/vision2.svg'
import vision3 from '../../images/vision3.svg'
import vision4 from '../../images/vision4.svg'
import vision5 from '../../images/vision5.svg'

import {
  Container,
  Wrapper,
  Box1,
  Box2,
  Box3,
  Image,
  Titleh2,
  ContentP,
  Cards
} from './VisionElements'
const Vision = () => {
  return (
    <Container>
      <Wrapper>
        <Box1>Vision</Box1>
        <Box2>
          <Cards>
            <Image src={vision1} alt=''/>
            <Titleh2>New Investments</Titleh2> 
            <ContentP>With so much uncertainty strewn about the crypto-space, investing at the ground floor of new projects can feel like spinning a wheel of chance.  
            </ContentP>
          </Cards>
          <Cards>
            <Image src={vision2} alt=''/>
            <Titleh2>Personal Security</Titleh2> 
            <ContentP>
            Along with discussing personal security in our community in keeping your assets and funds as safe as possible; there is much that our team can provide to limit higher risk exposure in the arena of Defi. 
            </ContentP>
          </Cards>
          <Cards>
            <Image src={vision3} alt=''/>
            <Titleh2>Limiting Risk</Titleh2> 
            <ContentP>
            We ensure teams will be locking their liquidity for extensive periods of time, token allocations and distribution are determined and handled responsibly, and that project teams have either doxxed or KYC’d to provide assurance in limiting risk in full anonymity.
            </ContentP>
          </Cards>
        </Box2>
        <Box3>
          <Cards>
              <Image src={vision4} alt=''/>
              <Titleh2>Focus on Education</Titleh2> 
              <ContentP>
              Something that we have felt lacking from the investor space in the world of crypto is a focus on education.              </ContentP>
            </Cards>
            <Cards>
              <Image src={vision5} alt=''/>
              <Titleh2>Padmon Education Station</Titleh2> 
              <ContentP>
              How blockchain functions. How to effectively do your own research. What signals to look for in new projects to mitigate risk. We’re providing an expansive, well organized space to break it all down and provide valuable information to our community members FOR FREE. (Padmon Education Station Coming Soon!)              </ContentP>
            </Cards>
        </Box3>
      </Wrapper>
    </Container>
  )
}

export default Vision