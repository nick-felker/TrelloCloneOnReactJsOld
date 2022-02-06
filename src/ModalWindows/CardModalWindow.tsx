import React, { useState } from "react";
import styled from "styled-components";

const CardModalWindowWrapper = styled.div`
   
    position: fixed;
    margin-top: 3%;
    z-index: 999;
    background-color: white;
    border-radius: 5px;
    width: 40%;
    height: 70%;
    margin-left: 25%;
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


const CardModalWindow:React.FC<any> = (props:any) =>{
    return(
        <>
            <CardModalWindowWrapper>
                <p>Pipa</p>
                <HideCardModalWindow onClick={()=>{props.data(false);}}>Close</HideCardModalWindow>
            </CardModalWindowWrapper>
            <BlackLayer></BlackLayer>
        </>
    )
}


export default CardModalWindow;