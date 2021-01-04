import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;

    @media (max-width: 768px){
        position: relative;
        top: 10%;
    }
`;

export const Line = styled.div`
    margin: 5px 20px 0 20px;
    display: flex;
    justify-content: space-between;
    height: 10vh;

    ${({ line_top }) => line_top ? "border-top: 1px solid gray; padding-top: 20px;" : "border-bottom: 1px solid gray;"}
    @media (max-width: 768px){
        height: 8vh;
    }

    h1{
        color: black;
        margin: 0 10px 0 10px;
    }
`;

export const Button = styled.button`
    border: 1px solid darkgray;
    padding: 10px 20px 10px 20px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    margin: 5px 25px 5px 25px;
    height: 30px;
    cursor: pointer;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);

    &:hover{
        background-color: ${({ a_color }) => a_color ? a_color : '#425eda'};
        color: white;
        transition: background-color 0.3s ease-in-out;
    }

    
`;