import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 159px);
    grid-row-gap: 6px;
    grid-column-gap: 6px;

    margin: 26px 17px;

    @media (min-width: 1160px) {

        display: flex;

        align-items: center;
        justify-content: center;
    }

    
`