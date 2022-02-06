import React from "react";
import { useState } from "react";
import styled from "styled-components";
import TrelelloCardField from "./TrelelloCardField";


const MainHeader = styled.div`
    height: 60px;
    display: flex;
    width: 100%;
    position: fixed;
    justify-content: space-between;
    background-color: #004269;

`
const MainHeaderLogoText = styled.h1`
    color: white;
    font-size: 25px;
    text-transform: uppercase;
    padding: 10px 0px 0px 20px;
`
const UserNameInMainHeader = styled.p`
    color: white;
    padding: 20px 20px 0px 0px;
    text-transform: uppercase;
    font-size: 14px;
`
const MainBody = styled.body`
    background-color: white;
    padding-top: 60px;
`
const TrelelloApp = () =>{
    return(
        <>
            
            <MainHeader>
                <MainHeaderLogoText>
                    Trelello
                </MainHeaderLogoText>
                <UserNameInMainHeader>
                    {localStorage.getItem('TrelelloUserName')}
                </UserNameInMainHeader>
            </MainHeader>
            <MainBody>
                <TrelelloCardField/>
            </MainBody>
            
        </>
    )
}
export default TrelelloApp;