import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 159px);
    grid-row-gap: 6px;
    grid-column-gap: 6px;

    margin: 26px 17px;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;

    width:100% ;
    max-width: 1150px;


    @media (min-width: 600px) {

        display: grid;

        grid-template-columns: repeat(3, 159px);
        grid-row-gap: 6px;
        grid-column-gap: 6px;

    }

    @media (min-width: 760px) {

        display: flex;
        
        align-items: center;
        justify-content: center;
    }   

    
`