import styled from 'styled-components';
import Modal from 'styled-react-modal'

export const Container = styled.div`    
    background: var(--black);

    display: flex;

    height: 144px;
    width: 100%;

    justify-content: space-between;

    @media (min-width: 1160px) {
        height: 89px;
        padding: 0px 115px;
    }


`;
export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    @media (min-width: 1160px) {
        display: flex;
        flex-direction: row;

    }


`


export const ContainerRight = styled.div`
    display: none;

    @media (min-width: 1160px) {
        display: flex;

        flex-direction: row;
        align-items: center;

    }

`
