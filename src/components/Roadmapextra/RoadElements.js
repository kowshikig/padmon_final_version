import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100vh;
    background: radial-gradient(circle, rgba(59,135,249,1) 3%, rgba(5,150,154,1) 51%);
    padding:0 100px;

    @media (max-width:991px){
        display: none;
    }

`
export const Wrapper = styled.div`
    display:grid;
    grid-template-rows: 100px 1fr 1fr;
`
export const Box1 = styled.div`
    
    text-align: center;
    display: grid;
    place-items: center;
    font-size: 3rem;
    color:white;

`
export const Box2 = styled.div`
    
    
`
export const Img = styled.img`
    width: 100%;
    height: 300px;
`

export const Box3 = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 10px;
    padding:0 50px;
    
`
export const Card = styled.div`
    width:400px;
    padding:20px;
    
`
export const ContP = styled.p`
    text-align: justify; 
    color:white;   
`