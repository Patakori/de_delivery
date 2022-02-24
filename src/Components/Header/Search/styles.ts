import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 50px;
    
    margin-top: 16px;


    @media (min-width: 1160px) {
        margin-top: 0px;
        margin-left: 22px;
        width: 50%;
    }



    button {
        display: flex;
        flex-direction: row;

        align-items:center;
        justify-content:center;

        background: var(--white);

        height: 49px;
        width: 2.5rem;

        border: none;
        border-top-left-radius: 9px;
        border-bottom-left-radius: 9px;
 
        z-index: 400;
    }

    input {
        display: flex;
        width: 289px;
        height: 49px;

        padding-left: 10px;

        border: none;
        border-top-right-radius: 9px;
        border-bottom-right-radius: 9px;

        z-index: 400;

        :focus{
                outline: none;
            }
        
        ::placeholder {
            color: var(--grey);
        }
        
        @media (min-width: 1160px) {
        width: 100%;
    }
    }

`

export const ContainerSearch = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
`