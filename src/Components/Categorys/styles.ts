import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 300px;


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

export const ButtonArrow = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    width: 150px;
    height: 206px;



    button{
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

    p{
        margin-top: 17px;
    }
`
export const BoxImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FEFEFE ;

    margin-top: 5px;
    height: 120px;

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    border-top: solid var(--white-50);

    span {
        margin-top: 9px;
        margin-left: 15px;
        font-size: 0.75rem;
        color: var(--grey);
    }

    >p {
        margin-top: 36px;
        margin-left: 15px;
        margin-bottom:15px;

        font-weight: bold;
        font-size: 0.875rem;
    }
`