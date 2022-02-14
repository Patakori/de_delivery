import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    height: 50px;


    
    margin-top: 16px;

    @media (min-width: 1160px) {
        margin-top: 0px;
        margin-left: 22px;
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
    }

    input {
        display: flex;
        width: 289px;
        height: 49px;

        border: none;
        border-top-right-radius: 9px;
        border-bottom-right-radius: 9px;

        :focus{
                outline: none;
            }
        
        ::placeholder {
            color: var(--grey);
        }
        
        @media (min-width: 1300px) {
        width: 538px;
    }
    }

`