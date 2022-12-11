import styled from 'styled-components';
import element1 from '../../images/backelements.svg'
export const InfoContainer = styled.div`
    color:#fff;
    background: radial-gradient(circle, rgba(59,135,249,1) 3%, rgba(5,150,154,1) 51%);
    
    width:100%;
    clip-path: polygon(0% 0%,100% 0%,100% 85%,0% 100%);
    
    position:relative;
    
    @media screen and (max-width: 768px){
        padding:120px 50px;
        clip-path: none;
    }
`
export const InfoWrapper = styled.div`
    display:grid;
    z-index:-1;
    height:860px;
    width:100%;
    
    padding:0;
    justify-content: center;
    
    
`
export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};
    
    width:100%;
    
    @media screen and (max-width:768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)}
    }

`

export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col1;
    
`
export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col2;
`
export const TextWrapper = styled.div`
    max-width:600px;
    padding-top:0;
    padding-bottom:60px;
    text-align: justify;
`
export const TopLine = styled.div`
    color:#000;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing: 7px;
    text-transform: uppercase;
    margin-bottom:16px;

    @media (max-width:480px){
        font-size: 14px;
    }

`
export const Heading = styled.h1`
    
    margin-bottom:24px;
    font-size:60px;
    line-height:1.1;
    font-weight:600;
    color:#fff;
    

    @media screen and (max-width:480px) {
        font-size: 26px;
    }
`
export const Subtitle = styled.p`
    max-width:600px;
    margin-bottom:35px;
    font-size:20px;
    line-height:30px;
    color: #fff;
    @media screen and (max-width:768px){
        font-size: 20px;

    }
    @media screen and (max-width:480px){
        font-size: 16px;
    }
`
export const BtnWrap = styled.div`
    display:flex;
    justify-content: flex-start;
    
    
    
    .button {
        background: linear-gradient(180deg, #00DDDD 0%, #008080 100%);

        &:hover {
            background-color: #000;
            
        }
    }
    
`
export const Button = styled.button`
border: none;
    border-radius: 10px;
    background: linear-gradient(180deg, #00DDDD 0%, #008080 100%);
    white-space: nowrap;
    padding:15px 22px;
    color:#fff;
    font-size: 18px;
    font-weight: bold;
    outline:none;
    cursor: pointer;
    transition:all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 20px;
    
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color:#fff;
        border:2px solid aqua;
    }
    @media (max-width:480px){
        display:none;
    }
`
export const Button2 = styled.button`
    border: 2px solid #fff;
    border-radius: 10px;
    background: transparent;
    white-space: nowrap;
    padding:15px 22px;
    color:#fff;
    font-size: 18px;
    font-weight: bold;
    outline:none;
    cursor: pointer;
    transition:all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 20px;
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color:#fff;
        border:2px solid aqua;
    }
    @media (max-width:991px){
        font-size: 12px;
    }
`
export const ImgWrap = styled.div`
    max-width:600px;
    height:100%;
    
`
export const Img = styled.img`
    width:100%;
    margin:0 0 10px 0;
    padding-right: 0;
`