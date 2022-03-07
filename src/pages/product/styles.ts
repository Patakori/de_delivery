import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`

export const ContainerMap = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 24px;

    @media (min-width: 1100px) {
        margin: 0px 116px;
        
    }
`

export const ContainerRoutes = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    
    height: 109px;   

    margin-left: 15px;
    row-gap: 19px;

    cursor: pointer;
`
export const ContainerPath = styled.p`
    display: flex;
    align-items: center;
    column-gap: 5px;

    color: var(--grey);
    
`
export const ContainerBack = styled.p`
    display: flex;
    align-items: center;
    column-gap: 5px;

    font-weight: bold;
    color: var(--black);
`
export const ContainerProduct = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;

    background-color: white;

    @media (min-width: 1100px) {
        flex-direction: row ;
        justify-content: center ;
        column-gap: 100px;
        
    }
`
export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;

    height: 233px;
    padding: 10px 0px;

    @media (min-width: 1100px) {
        flex-direction: row ;
        height: 505px;

       
        
    }
    

`
export const Containerinfo = styled.div`
    display: flex;
    flex-direction: column;

    margin: 15px 15px; 
    row-gap: 10px;

    font-size: 1.5rem;
    color: var(--black);

`
export const ContainerName = styled.p`
    display: flex;
    font-weight: bold;

`
export const ContainerPrice = styled.p`
    display: flex;
    font-weight: 500 ;

`
export const ContainerAmount = styled.div`
    display: flex;
    flex-direction: column;

`
export const ContainerOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: solid 1px var(--white-50);
    margin: 0px 15px;
    border-radius: 8px;

    padding: 8px;

`

export const Containersubtract = styled.button`
    display: flex;
    text-decoration: none;
    border: none ;
    background-color: white ;

`

export const ContainerTotalAmount = styled.div`
    display: flex;

`

export const ContainerSum = styled.button`
    display: flex;
    text-decoration: none;
    border: none ;
    background-color: white ;

`
export const ContainerOthersAmount = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 10px 15px;

`
export const ContainerSix = styled.button`
    display: flex;
    text-decoration: none;
    background-color: white ;

    border: solid 1px var(--white-50);
    border-radius: 8px;
    padding: 8px 25px;

`
export const ContainerTen = styled.button`
    display: flex;
    text-decoration: none;
    background-color: white ;

    border: solid 1px var(--white-50);
    border-radius: 8px;
    padding: 8px 25px;

`
export const ContainerFifteen = styled.button`
    display: flex;
    text-decoration: none;
    background-color: white ;

    border: solid 1px var(--white-50);
    border-radius: 8px;
    padding: 8px 25px;

`
export const ContainerAddCar = styled.button`
    display: flex;
    margin: 10px 15px;
    justify-content: space-between ;

    background-color: var(--yellow-500) ;
    color: var(--black);

    border-style: none;
    border-radius: 50px;
    padding: 15px 25px;

    font-size: 1rem;
    font-weight: bold;

`

export const ContainerAmountAdd = styled.div`
    display: flex;

`
export const ContainerPriceAdd = styled.div`
    display: flex;

`






