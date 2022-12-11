import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    background-color: #fff;
    position:relative;
    padding:0 100px;
    background: radial-gradient(circle, rgba(59,135,249,1) 3%, rgba(5,150,154,1) 51%);

    

`
export const Wrapper = styled.div`
    display:grid;
    
    
    grid-template-rows:200px auto auto ;
    
    
`
export const Box1 = styled.div`
    
    font-size: 3em;
    font-weight: bold;
    color:#fff;
    display:grid;
    place-items: center;
    @media (max-width:480px){
        font-size: 2em;
        margin-left:-140px;
    }
`
export const Box2 = styled.div`
    
    
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
    column-gap: 15px;
    padding: 0px;
    @media (max-width:991px){
        
        margin-left:-70px;
    }
    
`
export const Cards = styled.div`
    padding:10px;
    display: grid;
    place-items: center;
    width: 350px;
    

    
`
export const Image = styled.img`

`
export const Titleh2 = styled.h2`
    margin-bottom: 20px;
    
    color:#fff;

    @media (max-width:480px){
        font-size:20px;
    }
`
export const ContentP = styled.p`
    font-size:16px;
    color:#fff;

    @media (max-width:480px){
        font-size: 14px;
    }
`
export const Box3 = styled.div`

display:grid;
place-items: center;
grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
column-gap: 0px;
padding: 50px 40px;
@media (max-width:480px){
        
        margin-left:-140px;
    }

`
