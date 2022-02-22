import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 300px;
    width: 100%;

    background: var(--white);
    
    @media (min-width: 1100px) {
        margin: 0px 118px;

        width: 1150px;
    }


    >h1{
        font-size: .8rem;

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

    >div {
        display: flex;
    }

`

export const ButtonArrow = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 150px;
    height: 206px;



    >button{
        display: flex;
        align-items: center;
        justify-content: center;

        background: var(--white);
        margin-top: 50px;
        padding: 20px;

        border-style: none;
        border-radius: 999px;
        box-shadow: 2px 3px 5px var(--grey);
    }

    >p{
        margin-top: 17px;
    }
`