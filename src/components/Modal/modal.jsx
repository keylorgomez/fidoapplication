import React from 'react'
import styled from 'styled-components'

function Modal({children, estado, modifcarEstadoModal}) {
  return (
    <React.Fragment>
        {estado && 
            <Overlay>
                <ContendorModal>
                    <EncabezadoModal>
                        <h3>FIDO</h3>
                    </EncabezadoModal>
                    <BotonCerrar onClick={()=>modifcarEstadoModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    </BotonCerrar>
                    {children}
                </ContendorModal>
            </Overlay>
        }
    </React.Fragment>
  );
}

export default Modal

const Overlay=styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    display:flex;
    align-items:center;
    justify-content:center;
    padding:40px;
    z-index: 10;

`;

const ContendorModal=styled.div`
    //width: 55%;
    background: #fff;
    position: relative;
    border-radius: 0.8rem;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding:20px;
    margin-top:3rem;
    overflow-y: auto;
    max-height: 620px;
    ::-webkit-scrollbar {
        display:none;
        
    }
    
    @media only screen and (max-width: 850px) {
        /* Estilos para el scrollbar */
        ::-webkit-scrollbar {
            display:none;
            
        }
        //width: 85%;
        overflow-y: auto;
        max-height: 600px;
      }
    @media only screen and (max-width: 650px) {
    //width: 90%;
        overflow-y: auto;
        max-height: 600px;
    }
    @media only screen and (max-width: 500px) {
    //width: 95%;
        overflow-y: auto;
        max-height: 600px;
    }
`;

const EncabezadoModal=styled.div`
    height:45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:5px;
    border-bottom:1px solid #E8E8E8;

    h3{
        font-weight:550;
        font-size:16px;
        color:#8C30F5
    }
`;

const BotonCerrar=styled.button`
    position:absolute;
    top:30px;
    right:20px;

    width:30px;
    height:30px;
    border:none;
    background:none;
    cursor:pointer;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: #8C30F5;

    &:hover{
        background: #f2f2f2
    }

    svg{
        width:100%;
        height:100%;
    }
`;