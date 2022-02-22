
import { ReactNode, useContext, useState } from 'react'
import { ModalProvider } from 'styled-react-modal'

import styled from 'styled-components';
import Modal from 'styled-react-modal'

 interface NewTransactionModalProps{
    children: ReactNode;

 }

 const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;

  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba( 0, 0, 0, 0.5 );

`

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`
 
import { ModalContext } from '../../hooks/ContextModal';

 export function NewModal ({children}:NewTransactionModalProps){

    const {modal, handleCloseModal}:any = useContext(ModalContext)

     return(
      
         <ModalProvider 
          backgroundComponent={SpecialModalBackground}
          >
            <StyledModal
              isOpen={modal}                              
              onBackgroundClick={handleCloseModal}
              onEscapeKeydown={handleCloseModal}>
                
              {children}

            </StyledModal>
         </ModalProvider>
     )
 }