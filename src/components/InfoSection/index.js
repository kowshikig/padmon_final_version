import React from 'react';

import reactimg from '../../images/padmon_hero.png'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Button,
    Button2
} from './InfoElements'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
}) => {
  return (
    <InfoContainer >
        <InfoWrapper>
            <InfoRow >
                <Column1>
                    <TextWrapper>
                        <TopLine>Padmon</TopLine>
                        <Heading >Welcome to Padmon</Heading>
                        <Subtitle >Padmon is an IDO and education platform established on BSC network. We have developed a simplified means of hosting project IDOs on multiple network chains. Along with providing quality projects to our community, we also provide a wealth of educational materials; while keeping our system casual and fun!
</Subtitle>
                        <BtnWrap>
                            <Button2>TRADE PADMON</Button2>
                            <Button className='button' 
                            
                            >LAUNCH PLATFORM</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={reactimg} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection