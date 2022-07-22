import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    width: auto;
    height: auto;
    margin: 2vw;
    border: 1px solid darkgray;
    border-radius: 22px;
    flex-direction: column;
    background-color: #eee;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);
    color: black;
    
    @media (max-width: 768px) {
        height: auto;
    }
`;

export const Title = styled.h2`
    padding: 5px 20px 5px 25px;
    border-bottom: 1px solid lightgrey;
    font-size: 20px;
    color: #4b4949;
    display : flex;
    justify-content: space-between;
    align-items: center;

    button{
        border: none;
        font-size: 20px;
        padding: 0 10px 0 10px;

        &:hover{
            color:red;
        }
    }
`;

export const Field = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    margin-right: 25px;
    height: auto;

    label{
        margin-right: 5px;
    }

    input{
        width: 60px;
    }

    .check{
        width: auto;
    }

    @media (max-width: 768px) {
        margin: 8px;
        justify-content: space-between;
        width: 70vw;
    }

`;

export const Line = styled.div`
    margin: 8px 10px 8px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        flex-flow: column wrap;
          
    }
    
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ResultContainer = styled.div`
    display: flex;
    width: 10vw;
    
    div{
        flex-direction: column;
    }

    h1{
        color: red; 
    }

    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
    
`;

export const RollButton = styled.button`
    border: 1px solid darkgray;
    padding: 10px 20px 10px 20px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 25px 5px 5px;
    height: 30px;
    cursor: pointer;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);
    position: relative;
    top: 25%;   

    &:hover{
        background-color: black;
        color: white;
        transition: background-color 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        top: 0;
    }
`;

export const Infos = styled.div`
    border-top: 1px solid lightgrey;
    font-weight: bold;  
    height: 5vh; 

    @media (max-width: 768px) {
        height: fit-content;
        margin: 0px;
        div{
            margin: 4px 10px 4px 10px;
        }
    }
`