import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    margin-right: 17px;
    margin-left: 15px;

    @media (min-width: 1160px) {
        display: flex;

        flex-direction: row;
        align-items: center;

    }


    button{
        display: flex;

        padding: 10px;
        
        justify-content: center;
        align-items: center;

        height: 48px;
        width: 83px;

        border-radius: 30px;
        border: none;

    }
`