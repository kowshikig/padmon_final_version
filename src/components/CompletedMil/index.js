import React from 'react';
import {
    Container,
    Wrapper,
    Box1,
    Box2,
    Img,
    Con,
    ImgBox,
    ImgBox2,
    Title
    
} from './CompletedMilElements';
import mil1 from '../../images/mil1.svg'
import mil2 from '../../images/mil2.svg'
import mil3 from '../../images/mil3.svg'
import mil4 from '../../images/mil4.svg'
import mil5 from '../../images/mil5.svg'
import mil6 from '../../images/mil6.svg'

const CompletedMil = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Completed Milestones</Title>
            <Box1>
                
                <ImgBox><Img src={mil1} alt=''/></ImgBox>
                <Con>
                    Successful Launch of PDM on Binance Smart Chain Network
                </Con>
            </Box1>
            <Box2>
                
                <Con>
                    Listings on KnightSwap and PancakeSwap
                </Con>
                <ImgBox2><Img src={mil2} alt=''/></ImgBox2>

            </Box2>
            <Box1>
                <ImgBox><Img src={mil3} alt=''/></ImgBox>
                <Con>
                    IDO Platform Development Completed and Live
                </Con>
            </Box1>
            <Box2>
                
                <Con>
                    Initial Project Marketing and Establishing of Strong Base Community of Investors
                </Con>
                <ImgBox2><Img src={mil4} alt=''/></ImgBox2>

            </Box2>
            <Box1>
                <ImgBox><Img src={mil5} alt=''/></ImgBox>
                <Con>
                    First IDO held, Initial UI Bugs Detected and Eliminated
                </Con>
            </Box1>
            <Box2>
                
                <Con>
                    Rebranding of Padmon to Better Align Our Image With Our Ambitions
                </Con>
                <ImgBox2><Img src={mil6} alt=''/></ImgBox2>
            </Box2>
            
        </Wrapper>
    </Container>
  )
}

export default CompletedMil