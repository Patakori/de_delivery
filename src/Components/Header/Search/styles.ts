
import styled from "styled-components";

export interface Props {
    type: string;
}


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 50px;
    
    margin-top: 16px;


    @media (min-width: 760px) {
        margin-top: 0px;
        margin-left: 22px;
        width: 50%;
    }


    input {
        display: flex;
        width: 289px;
        height: 49px;

        padding-left: 10px;

        border: none;
        border-top-right-radius: 9px;
        border-bottom-right-radius: 9px;

        z-index: 200;

        :focus{
                outline: none;
            }
        
        ::placeholder {
            color: var(--grey);
        }
        
        @media (min-width: 760px) {
        width: 100%;
        }
    }

`
export const ContainerButtonSearch = styled.div`
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
 
        z-index: 200;
`

export const ContainerSearch = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    margin-bottom: 8px;
`



export const ContainerCategory = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 10px;

`

export const ContainerButtons = styled.div`
        display: flex;
        flex-direction: row;
        height: 100% ;
        width: 100%;
        column-gap: 8px;

        >div{
            display: flex;
            flex-direction: column;
            width: 100%;

            row-gap: 8px;

            
        }
  
`
export const ContainerExternalList = styled.div<Props>`
    display: flex;
    flex-direction: column;

    row-gap: 12px;

    height: 100%;
    max-height: 415px;
    width: 300px;
    

    
    padding: 0px 10px;

    margin-bottom: ${({type})=>{
                        if(type === ''){
                            return '0px'
                        }else{
                            return '15px'
                        }         
                    }};
    

    overflow-y: auto;
    white-space: pre-line;

    @media (min-width: 760px) {
        width: 100%;
        }
  
`

export const ContainerList = styled.div`
    display: flex;
    width: 100%;
    height: 66px;


    background-color: white;

    border-radius: 8px;
    border: solid var(--white-50);
    border-width: 1px;

    box-shadow: 1px 1px 5px var(--grey);

    cursor: pointer ;

`

export const ConainerListImage = styled.div`
    display: flex;
    padding-top: 5px;
    width: 60px;
    height: 60px;

`

export const ConatinerListInfo = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    justify-content: center;

    margin-left: 10px;
    row-gap: 5px;

`

export const ContainerListName = styled.div`
    display: flex;
    color: var(--grey);

    font-size: 1rem;

`

export const ContainerListPrice = styled.div`
    display: flex;
    font-weight: bold;
    
`


export const ContainerFetching = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    width: 100%;

    column-gap: 10px;

    padding: 20px;

`

export const ContainerSpin = styled.div`
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