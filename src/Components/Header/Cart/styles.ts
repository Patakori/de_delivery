import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-right: 15px;

        >div{
            display: flex;

            width:20px;
            height: 20px;

            align-items: center;
            justify-content: center;

            color: var(--yellow-500);
            font-size: 10px;

            background-color: black;
            position: absolute;

            border-radius: 100%;
            transform: translate(1.80rem, .2rem);
        }


`

export const ContainerBag = styled.div`
    display: flex;
    align-items: center;

    text-align: center;

    padding: 20px;

    width: 100%;
    height: 60px;


    >h1{
        width: 100%;
        font-size: 1rem;
        padding-left: 50px;
        
    }

    >button{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 40px;
        width: 40px;
        
        border: none;
        background-color: white;

        margin-right: 20px;

        font-size: 1.250rem;
    }

`

export const ContainerImage = styled.div`
    display: flex;
    align-items: center;

    flex-direction: column;

    width: 100%;
    height: 100%;

    background-color: var(--grey-50);

    border: none;


`

export const ContainerText = styled.div`
        display: flex;
        text-align: center;
        font-size: 1rem;
        color: var(--grey-100);
`