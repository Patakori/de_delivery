import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
        
`

export const ContainerButton = styled.button`

        display: flex;
        align-items: center;
        justify-content: center;

        gap: .5rem;
        background-color: var(--white);

        height: 49px;
        width: 100%;
        border-radius:9px;
        border: solid var(--white-50);
        border-width: 2px;

        @media (min-width: 1160px) {

            width: 100%;


        }
`