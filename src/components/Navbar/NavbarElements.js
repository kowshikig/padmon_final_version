import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import  img  from '../../images/padmon-logo.png';

export const Nav = styled.nav`
    background: ${({ scrollNav}) => (scrollNav ? '#000':'#000')};
    height:80px;
    margin-top:-80px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index: 10;
    

    @media screen and (max-width:960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding:0 20px;
    max-width: 1450px;
    
`
export const NavLogo = styled(LinkR)`
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left:24px;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 5px;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:768px){
        display:block;
        position: absolute;
        top:0;
        right:0;
        transform:translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color:#fff;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align:center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const NavItem = styled.li`
    height:80px;
    `

export const NavLinks = styled(LinkS)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding:0 1rem;
    height: 100%;
    cursor:pointer;

    &.active {
        border-bottom: 3px solid #5928e5;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    
    width: 300px;
    

    @media screen and (max-width:768px) {
        display:none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 10px;
    background: linear-gradient(180deg, #00DDDD 0%, #008080 100%);
    white-space: nowrap;
    padding:15px 22px;
    color:#fff;
    font-size: 14px;
    font-weight: bold;
    outline:none;
    cursor: pointer;
    transition:all 0.2s ease-in-out;
    text-decoration: none;
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color:#fff;
        border:2px solid aqua;
    }
`

export const Img = styled.img`
    
    max-width: 100%;
    border:none;
    margin-right: 10px;
    height:50px;
    background: url(${img});
    background-size:cover;
    color:#000;
    
    
`

 