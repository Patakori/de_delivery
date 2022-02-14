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

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    border-top: solid var(--white-50);

    span {
        margin-top: 9px;
        margin-left: 15px;
        font-size: 0.75rem;
        color: var(--grey);
    }

    >p {
        margin-top: 36px;
        margin-left: 15px;
        margin-bottom:15px;

        font-weight: bold;
        font-size: 0.875rem;
    }
`

