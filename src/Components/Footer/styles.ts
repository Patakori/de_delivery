import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    background-color: var(--black);

    gap: 22px;
    
`

export const ContaierIcons = styled.span`
    display: flex;
    justify-content: space-between;
 
    width: 150px; 

    margin: 20px 0px;

`

export const ContainerApp = styled.span`
    display: flex;
    flex-direction: column;
    margin-top: -10px;

    align-items: center;

    height: 100%;

    >p{
        margin: 10px 0px;
        color: var(--white);
    }

    >a{
        display: flex;

        align-items: center;
        justify-content: center;

        height: 100%;
        width: 100%;

        border-radius: 7px;
        border-style: none;


        overflow: hidden;
    }

`

export const ContainerAboutDelivery = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    >a{
        
        color: var(--white);
        font-size: 1rem;
    }

    >span {
        display: none;

        @media (min-width: 1100px) {
            display: flex;

            color: var(--white);

            font-weight: bold;
        }
    }

`

export const Containerpartnership = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;

    margin: 20px 0px;
    

    >a{
        color: var(--white);
        font-size: 1rem;
    }

    >span {
        display: none;

        @media (min-width: 1100px) {
            display: flex;

            color: var(--white);

            margin-bottom: 20px;

            font-weight: bold;
        }
    }

`

export const ContainerPolitics = styled.div`
        display: flex;
        justify-content: center;

        height: 47px;
        column-gap: 15px;

        color: var(--white);

        >a{
        color: var(--white);
        font-size: 1rem;
        }

`

export const ContainerInfos = styled.div`
        display: flex;
        flex-direction: column;

        align-items: center;
        

        @media (min-width: 1100px) {
            display: flex;
            flex-direction: row;
        
            justify-content: center;
            align-items: baseline;
            column-gap: 170px;
        
            margin: 20px

        }   

`