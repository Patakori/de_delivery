import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--black);

    gap: 22px;


    a{
        color: var(--white);
        font-size: 1rem;
    }

    >p{
        color: var(--white);
        font-weight: bold;
        font-size: 1.250rem;
    }

    div{
        display: flex;
        justify-content: center;

        height: 47px;
        column-gap: 15px;

        color: var(--white);
    }
    
`
export const ContaierIcons = styled.span`
    display: flex;
    justify-content: space-between;

    width: 150px;

    margin-top: 20px;
`
export const ContainerApp = styled.span`
    display: flex;
    flex-direction: column;
    margin-top: -10px;

    >a{
        display: flex;

        align-items: center;
        justify-content: center;

        height: 100%;
        width: 100%;

        border-radius: 7px;
        border-style: none;


        overflow: hidden;
    }

`