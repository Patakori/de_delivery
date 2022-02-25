import styled from 'styled-components';

export const Container = styled.div`    
    background: var(--black);

    display: flex;

    height: 144px;
    width: 100%;

    justify-content: center;


    z-index: 30;

    @media (min-width: 760px) {
        height: 89px;
        padding: 0px 0px;
    }


`;
export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    height: 100%;
    


    @media (min-width: 760px) {
        display: flex;
        flex-direction: row;

    }


`


export const ContainerRight = styled.div`
    display: none;

    @media (min-width: 760px) {
        display: flex;

        flex-direction: row;
        align-items: center;

    }

`

