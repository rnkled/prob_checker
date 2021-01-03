import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        position: relative;
        top: 10%;
    }    
`;

export const Page = styled.div`
    width: 70vw;
    height: 100%;
    background-image: linear-gradient(#ececfc, #bbb) ;
    border: 1px inset #8585df66;
    position: relative;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 90vw;
        min-width: 350px;
    }
`;

export const Divider = styled.hr`
    
    ${({ half_margin }) => half_margin ? 'margin-top: 5%;' : 'margin-top: 10%;'}
    width: 100%;
    border-top: 8px dashed ${({ color_dash }) => color_dash ? color_dash : "#bbb"};

    @media (max-width: 768px){
        ${({ half_margin }) => half_margin ? 'margin-top: 10%;' : 'margin-top: 30%;'}
    }
`;

export const Text = styled.p`
    font-size: 28px;
    margin: 2.5vh;
    margin-left: 50px;
    color: #4b4949;

    @media (max-width: 768px){
        position: relative;
        top: 10%;
    }
`;
