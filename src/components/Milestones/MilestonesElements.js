import styled from "styled-components";

import vector from '../../images/milestone.svg'

export const Container = styled.div`
    width:100%;
    background: radial-gradient(circle, rgba(59,135,249,1) 3%, rgba(5,150,154,1) 51%);

    
`
export const Wrapper = styled.div`
    display:grid;
    grid-template-rows:100px auto auto;
`
export const Box1 = styled.div`
    
    font-size: 1.2rem;
    display:grid;
    place-items: center;
`
export const Box2 = styled.div`
    
    
    display:grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    
    
    padding:20px 0;

    
`
export const Title = styled.h1`
    width:100%;
    color:#fff;
    padding:20px;
    display: flex;
    justify-content: center;

    @media (max-width:480px){
        font-size: 30px;
    }
    
`

export const Cards = styled.div`
padding:10px 0;
    display: grid;
    place-items: center;
   width:250px;
   height:300px;



`
export const CardWrapper = styled.div`
    background-color: #000;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding:30px 10px;
    width: 100%;
    height:100%;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 255, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;

    
    
`
export const Img = styled.img`
    width:80px;
`
export const ContentP = styled.p`
 color:#fff;
 text-align: center;
`