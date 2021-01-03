import styled from 'styled-components';

export const TopMenu = styled.div`
    background-image : linear-gradient(to right, #425eda, #2d4ac9);
    position: fixed;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.6);
    z-index: 100;
    border-bottom: 0.5px solid blue;
    min-width: 350px;
        
    `;

export const Title = styled.h1`
    font-size: 35px;
    letter-spacing: 1px;
    transition: letter-spacing 0.3s ease-in-out;    
    
    
    &:hover{
        transition: letter-spacing 0.3s ease-in-out;
        letter-spacing: 5px;
    }

`