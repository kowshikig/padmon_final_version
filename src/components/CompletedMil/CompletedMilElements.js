import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    background-color: skyblue;
    padding:100px;
    background: radial-gradient(circle, rgba(59,135,249,1) 3%, rgba(5,150,154,1) 51%);


    @media (max-width:991px){
        display:none;
    }
    

`
export const Title = styled.div`
    font-size: 3rem;
    color:#fff;
    display:grid;
    place-items: center;
`
export const Wrapper = styled.div`
    display:grid;
    grid-template-rows: repeat(auto-fit,minmax(100px, 1fr));
    gap:20px;
    
`
export const Box1 = styled.div`
    display:grid;
    grid-template-columns: 1.5fr 1fr;

    justify-items: center;
    align-items: center;
    
`
export const Box2 = styled.div`
    display:grid;
    grid-template-columns: 1fr 1.5fr;
    justify-items: center;
    align-items: center;

    
`
export const ImgBox = styled.div`
    width:100%;
    
    display:grid;
    justify-content: end;
`
export const ImgBox2 = styled.div`
    width:100%;
    
    display:grid;
    justify-content: start;
`
export const Img = styled.img`
    width:200px;
    
    

`
export const Con = styled.p`
    width:80%;
    font-size: 1.3rem;
    text-align: center;
    display:grid;
    color:white;
    

`
