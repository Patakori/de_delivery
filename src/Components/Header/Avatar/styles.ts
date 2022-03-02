import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    height: 38px;

    border:none;
    margin-top: 26px;

    background: var(--black);



    @media (min-width: 760px) {
        margin-top: 0px;
        margin-left: 15px;
    }
    
`
export const IconsJoin = styled.div`
    display: flex;
    width: 40px;
    height: 38px;

    div {
        display: flex;
        align-items:center;
        justify-content:center;
        width: 15px;
        height: 15px;
        background: white;
        position: absolute;
        border-radius: 9999px;  
        transform: translate(1.50rem, 1.50rem);
    }
    
`

export const Location = styled.div`
    display: flex;
    flex-direction: column;

    width: 219px;
    height: 38px;

    font-size: 0.5rem;
    margin-left: 21px;

    cursor: pointer;
    
    h1 {
        font-weight: 400;
        padding-top: 2px;
        color: var(--white);
    }

    h2 {
        font-weight: 400;
        color: var(--yellow-500);
        padding-top: 2px ;
    }
`

export const Button = styled.button`
        background: var(--black);

        width: 38px;
        height: 38px;

        border:none;

        margin-left: 7px;
`