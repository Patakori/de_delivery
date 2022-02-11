import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 175px;



    background: var(--white);
  
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
