import React, { useState } from "react";
import styled from "styled-components";

const CardModalWindowWrapper = styled.div`
    
    z-index: 11;
    overflow: hidden;   
    background-color: white;
    border-radius: 5px;
    width: 1000px;
    height: 600px;
    
`
const BlackLayer = styled.div`
    background-color: #505765;
    opacity: 0.6;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index 10;
`
const HideCardModalWindow = styled.button`
    background-color: red;
`
const WindowOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top:0;
    z-index: 11;
    width: 100%;
    height: 100%;
    left:0;
`
const ModalTitle = styled.p`
    font-size: 25px;
    color: #223556;
    font-weight: 500;
    padding: 20px 0px 10px 20px;
`
const ListOwner = styled.p`
    font-size: 20px;
    color: #223556;
    padding-left: 20px;

`



const CardModalWindow:React.FC<any> = (props) =>{
   
    return(
        <>  
            <WindowOverlay>
                <CardModalWindowWrapper>
                    <ModalTitle>{props.modalWindowTitle}</ModalTitle>
                    <ListOwner>In list <u>{localStorage.getItem('TrelelloUserName')}</u></ListOwner>
                    <HideCardModalWindow onClick={()=>props.hideCardModalWindow(false)}>Close</HideCardModalWindow>
                </CardModalWindowWrapper>
                    <BlackLayer></BlackLayer>
            </WindowOverlay>
        </>
    )
}


export default CardModalWindow;