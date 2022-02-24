import styled, {keyframes} from 'styled-components';

export const Container = styled.div`    
    display: flex;
    flex-direction: column;

    align-items: center;

    row-gap: 10px;

    height: 100%;

    position: relative;

    @media (min-width: 1100px) {
        width: 100%;


        
    }
    
`

export const ContainerNews = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

    width: 330px;
    height: 72px;
    background: var(--grey-50);

    margin: 14px 15px;
    border-radius: 8px;

    @media (min-width: 1100px) {
        width: 574px;

        
    }


    >span{
        display: flex;
        
        width: 60px;
        height: 60px;

        margin-right: 30px;
        
    }

    >div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-right: 30px;

        >h1{
            font-size: 0.875rem;
        }

        >p{
            font-size: 0.75rem;
        }
    }

`
export const ContainerButton = styled.button`
    background-color: var(--grey-100);
    display: flex;

    align-items: center;
    justify-content: center;

    color: var(--white);
    font-size: 1rem;
    font-weight: bold;
    border-style: none;

    width: 100%;
    height: 56px;

    margin-bottom: -10px;
`

export const Spin = styled.div`
    display: flex;
    align-items: center;
    
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

`

export const ContainerFetching = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    width: 1000px;

    column-gap: 10px;



`