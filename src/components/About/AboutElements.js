import styled from 'styled-components'

import vector1 from '../../images/About1.svg'
import vector2 from '../../images/About2.svg'
import vector3 from '../../images/About3.svg'
import image1 from  '../../images/image1.svg'
import background from '../../images/gradient.png'

export const Container = styled.div`
    width:100%;
    height:67vh;
    padding:20px;
    
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    top:-140px;
    
    clip-path: polygon(0% 17%,100% 0%,100% 100%,0% 100%);
    /* background: linear-gradient(173.67deg, #00A6A6 11.25%, rgba(0, 255, 255, 0) 79.3%); */
    
    /* background:red; */
    @media (max-width:991px){
        clip-path:none;
        position:relative;
        top:0;
        height: 1000px;
        margin-left: -40px;
    }
    
    

`
export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    
    z-index: 100;
    
    padding: 0 100px;

    @media (max-width:991px){
        z-index:0;
        
    }
    
    
    
    

    
`
export const Title = styled.div`
    margin-bottom:50px;
    color:white;
    font-size: 24px;

    @media (max-width:991px){
        margin-left: 70px;
    }
`
export const GridContainer = styled.div`
    
    width:100%;
    
    display:grid;
    
    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
    column-gap: 40px;

`
export const Card = styled.div`
    
    
    padding:20px;
    
    
`
export const Img =styled.div`


width:100%;
display: flex;
align-items: center;
justify-content: center;
border:0;
margin-bottom:10px;

`
export const Image1 = styled.img`
background:url(${image1});
`
export const Img1 = styled.img`
    background: url(${vector1});
    background-size: contain;
    background-repeat: no-repeat;
    border:0;
    width:200px;
    height:150px;

    
    
    
`
export const Img2 = styled.img`
    background: url(${vector2});
    background-size: contain;
    background-repeat: no-repeat;
    width:200px;
    height:150px;
    
    
    
`
export const Img3 = styled.img`
    
    background: url(${vector3});
    background-size: contain;
    background-repeat: no-repeat;
    width:200px;
    height:150px;
    
    
    
`
export const Content = styled.div`
    color:#fff;
    font-size: 16px;
`