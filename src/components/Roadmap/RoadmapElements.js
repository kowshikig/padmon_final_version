import styled from 'styled-components';
export const Container = styled.div`
    width:100%;
    background-color: skyblue;
    padding:100px;
    height:120vh;
`
export const  Wrapper = styled.div`
    display:grid;
    grid-template-rows: repeat(auto-fit,minmax(400px, 1fr));
    
    border:2px solid blue;
    height:900px;
`
export const Box1 = styled.div`
    display:grid;
    grid-template-rows: 100px auto;
    
    place-items:center;
` 
export const Title = styled.h2`
    color:#fff;
    font-size:3rem;
    font-weight: bold;
    
`
export const CardsWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
    
    

`
export const Cards = styled.div`
    display:grid;
    grid-template-rows: auto;
    place-items: center;
    border:2px solid red;
    height:100%;
    padding:15px;
    text-align: center;
    height:500px;
    

`
export const Img1 = styled.img`
    width:290px;
    margin-left:250px;
    
`
export const Img2 = styled.img`
    width:40px;
    
`
export const Img3 = styled.img`
    width:400px;
    background-color: red;
    
`
export const Img4 = styled.img`
    width:40px;
`
export const Img5 = styled.img`
    width:350px;
    
`
export const Img6 = styled.img`
    width:40px;
`
export const ContentP = styled.p`
    text-align: justify;
    font-size: 16px;
    width:500px;
`
export const Box2 = styled.div`
`