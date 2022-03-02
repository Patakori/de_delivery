import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-right: 15px;

    cursor: pointer;

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



export const ContainerImage = styled.div`
    display: flex;
    align-items: center;

    flex-direction: column;

    width: 100%;
    height: 100%;

    padding-top: 50px;

    background-color: var(--grey-50);

    border: none;


`

export const ContainerText = styled.div`
        display: flex;
        text-align: center;
        font-size: 1rem;
        color: var(--grey-100);
        width: 300px;
        word-spacing: 0px;   
        line-height: 25px;   

        p{
            white-space: pre-line;
        }
`