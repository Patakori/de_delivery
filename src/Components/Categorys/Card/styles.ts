import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 225px;
    width: 131px;

    margin-top: 15px;
    margin-left:15px;

    border-radius: 8px;
    border: solid var(--white-50);
    border-width: 1px;

    box-shadow: 2px 3px 5px var(--grey);



    @media (min-width: 900px) {
        width: 184px;
    }


`
export const BoxImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FEFEFE ;

    margin-top: 5px;
    height: 120px;
    width: 100%;

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    height: 97px;

    justify-content: space-between;

    margin-bottom: 15px;

    border-top: solid var(--white-50);

    

    span {
        display: flex;
        margin-top: 9px;
        margin-right: 10px;
        margin-left: 10px;
        font-size: 0.75rem;
        color: var(--grey);
        white-space: pre-line

    }

    >p {
        margin-top: 0px;
        margin-left: 10px;
        margin-bottom:0px;

        font-weight: bold;
        font-size: 0.875rem;
    }
`

