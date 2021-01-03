import styled from 'styled-components';

export const Container = styled.div`
    height: 9vh;
    width: 100%;
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: gray;
    font-size: 15px;

    &:hover{
        color: #575757;
    }

    @media (max-width: 768px){
        
        p {
            display: none;
            margin: 5px 10px 5px 10px;
            }
    }
`;
