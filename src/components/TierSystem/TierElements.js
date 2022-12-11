import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    padding:0 100px;
    height:110vh;
    background: radial-gradient(circle, rgba(59,135,249,1) 3%, rgba(5,150,154,1) 51%);
    
    
    @media (max-width:991px){
        height:2200px;
        
    }
`
export const Wrapper = styled.div`
    display:grid;
    grid-template-rows: repeat(auto-fit,minmax(100px, 1fr));
    
    

`
export const  Box1 = styled.div`
    
    display:grid;
    place-items: center;

    
`
export const Title = styled.h2`
    color:#fff;
    font-size: 3em;
`
export const Box2 = styled.div`
    display:grid;
    
    grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
    
`
export const SubBox1 = styled.div`
    
`
export const Img = styled.img`
    width: 100%;
    
    
`
export const SubBox2 = styled.div`
    display:grid;
    grid-template-rows: repeat(auto-fit,minmax(100px,1fr));
   
`

export const Subs1 = styled.div`
    
    display:grid;
    place-items: center;
    padding:10px 0px;
    
`

export const ContentP = styled.p`
color:white;
`
export const Subs2 = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(150px, 200px));
    
    
    column-gap: 15px;
    place-content:center;
    
    
`
export const Cards = styled.div`
    width:200px;
    border:2px solid aqua;
    border-radius: 20px;
    padding:20px 0 ;
    display: grid;
    place-items: center;
    gap:5px;
    margin:20px 0;
    background: linear-gradient(180deg, #002992 0%, rgba(53, 92, 194, 0.2) 100%);
border-radius: 25px;
backdrop-filter: blur(10px);
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;    
`

export const TitleH1 = styled.h2`
    font-size: 1.2rem;
    border-bottom:1px solid #00C1FF;
    padding:5px 0;
    color:#fff;
`
export const ConP = styled.p`
    font-size: 12px;
    color:#00C1FF;
    text-align: center;

    span {
        color:white;
        margin-left:5px;
    }
    
`
export const ConP2 = styled.p`
    font-size: 12px;
    border-top: 1px solid #00C1FF;
    text-align: center;
    color:#00C1FF;
    padding-bottom: 10px;
    
    span {
        color:white;
        margin-left:5px;
    }
`

