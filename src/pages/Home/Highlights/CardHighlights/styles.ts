import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items:center;


    height: 113px;
    width: 262px;

    margin-top: 15px;
    margin-left: 11px;
    

    border-radius: 8px;
    border: none;
    border-width: 1px;

    box-shadow: 2px 3px 5px var(--grey);
    overflow: hidden;

    @media (min-width: 1100px) {
        
        width: 360px; 
    }


`

