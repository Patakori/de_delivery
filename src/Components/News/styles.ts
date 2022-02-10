import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

    width: 330px;
    height: 72px;
    background: var(--grey-50);

    margin: 14px 15px;
    border-radius: 8px;

    span{
        display: flex;
        
        width: 60px;
        height: 60px;

        margin-right: 30px;
        
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-right: 30px;

        h1{
            font-size: 0.875rem;
        }

        p{
            font-size: 0.75rem;
        }
    }

`