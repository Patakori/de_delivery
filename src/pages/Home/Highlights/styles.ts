import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    

    width: 100%;
    height: 175px;

    background: var(--white);

    @media (min-width: 1100px) {
        margin: 0px 118px;

        padding: 0px 10px;

        width: 1150px;;
    }
  
    h1{
        font-size: 0.625rem;

        margin-left: 20px;
        margin-top:20px;

        color: var(--grey);
    }
`

export const ContainerCard = styled.div`
    display: flex;
    height: 300px;

    overflow-x: auto;
    white-space: nowrap;

    div {
        display: flex;
    }

`

export const BoxImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FEFEFE ;

    margin-top: 5px;
    height: 262px;
    width: 262px;
`
