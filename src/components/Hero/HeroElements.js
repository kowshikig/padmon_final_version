import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    
    padding:200px 100px;
    
    background-color: skyblue;

    @media (max-width: 400px){
        padding:40px;
        text-align: center;

    }
`
export const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    

`

export const Box1 = styled.div`
    width:100%;
    
    display:grid;
    grid-template-rows:repeat(auto-fit,minmax(200px,1fr));
    
    
`
export const TitleH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
`
export const ContP = styled.p`
    font-size:1.5rem;
`
export const Buttons = styled.div`
    margin-top: 20px;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(100px, 1fr));
    gap: 20px;
`
export const But1 = styled.button`
    font-size: 1.4rem;
    padding:20px 30px;
`
export const But2 = styled.button`
    font-size: 1.4rem;
    padding:20px 30px;
`
export const Box2 = styled.div`
width:100%;
height:100%;
background-color: black;
`
export const Img = styled.div`
    width:100px;
`
