import React from 'react'
import { Form } from 'react-router-dom'
import {
  Container,
  Wrapper,
  Box1,
  Title,
  Box2,
  SubBox1,
  Img,
  SubBox2,
  Subs1,
  ContentP,
  Subs2,
  Cards,
  TitleH1,
  ConP,
  ConP2,
  
  
} from './TierElements'
import icon from '../../images/pad.png'
const TierSystem = () => {
  return (
    <Container>
      <Wrapper>
        <Box1>
          <Title>Tier System</Title>
        </Box1>
        <Box2>
          <SubBox1>
              <Img src={icon} alt='' />
          </SubBox1>
          <SubBox2>
            <Subs1>
              <ContentP>
                Padmon has a simple system utilizing three tier levels. These tier levels may be subject to change, but very rarely, and will be discussed transparently and voted upon with the community prior to any alterations being established.
                To retain a tier, $PDM simply needs to be held in participants' wallets. Our platform automatically reads users' wallets simply to determine PDM holdings. There is no requirement to stake them.
              </ContentP>
            </Subs1>
            <Subs2>
              <Cards>
                <TitleH1>Achiever Tier</TitleH1>
                <ConP>HOLD AMOUNT <span>25,000 $PDM</span> </ConP>
                <ConP2>Method <span>FCFS</span></ConP2>
              </Cards>
              <Cards>
                <TitleH1>Exper Tier</TitleH1>
                <ConP>HOLD AMOUNT <span>60,000 $PDM</span> 60,000 $PDM</ConP>
                <ConP2>Method <span>FCFS</span></ConP2>
              </Cards>
              <Cards>
                <TitleH1>Legendary Tier</TitleH1>
                <ConP>HOLD AMOUNT <span>160,000 $PDM</span> 160,000 $PDM</ConP>
                <ConP2>Method <span>FCFS</span></ConP2>
              </Cards>
            </Subs2>
            <Subs1>
              <ContentP>
                We have also established tier levels for LP holdings to allow for our investors who have opted to provide PDM/BNB LP on our partner DEX, KnightSwap. This allows our investors to stake PDM/BNB LP in our farm to yield $Knight tokens with the ability to participate in IDOs without needing to break their liquidity for each IDO event.
                The LP will need to be withdrawn from the farm so that the platform can read them as holdings in participants' wallets, but the LP will not need to be broken apart.
              </ContentP>
            </Subs1>
            <Subs2>
            <Cards>
                <TitleH1>Achiever Tier</TitleH1>
                <ConP>HOLD AMOUNT <span> 30 PDM/BNP LP(KnightSwap)</span></ConP>
                <ConP2>Method <span>FCFS</span></ConP2>
              </Cards>
              <Cards>
                <TitleH1>Exper Tier</TitleH1>
                <ConP>HOLD AMOUNT  <span>70 PDM/BNP LP(KnightSwap)</span></ConP>
                <ConP2>Method <span>FCFS</span></ConP2>
              </Cards>
              <Cards>
                <TitleH1>Legendary Tier</TitleH1>
                <ConP>HOLD AMOUNT  <span>175 PDM/BNP LP(KnightSwap)</span></ConP>
                <ConP2>Method <span>FCFS</span></ConP2>
                
              </Cards>
            </Subs2>
          </SubBox2> 
        </Box2>
      </Wrapper>
    </Container>
  )
}

export default TierSystem