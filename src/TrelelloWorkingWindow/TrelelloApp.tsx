import React from "react";
import { useState } from "react";
import styled from "styled-components";
import TrelelloCardField from "./TrelelloCardField";
import CardModalWindow from "../ModalWindows/CardModalWindow";

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
const MainBody = styled.div`
    background-color: white;
    padding-top: 60px;
`
const Wrapper = styled.div``

const TrelelloApp = () =>{
    let [cardModalWindowFlag, setCardModalWindowFlag] = useState<boolean>(false);
    let [cardModalWindowTitle, setCardModalWindowTitle] = useState<string>();
    let [deleteCardFlag, setDeleteCardFlag] = useState<boolean>(false);
    function getClickedCardTitleAndSetModalFlagTitle(title:string, flag:boolean){
       setCardModalWindowTitle(title);
       setCardModalWindowFlag(flag)
    }
    function activateDeleteCardButton(value:boolean){
        setDeleteCardFlag(value);
        setCardModalWindowFlag(false);
    }
   
    function hideCardModalWindow(flag:boolean){
        setCardModalWindowFlag(flag)
    }
    
    return(
        <Wrapper>
            {cardModalWindowFlag === false ? null  : <CardModalWindow activateDeleteCardButton={activateDeleteCardButton} hideCardModalWindow={hideCardModalWindow} modalWindowTitle={cardModalWindowTitle}></CardModalWindow>}
            <MainHeader>
                <MainHeaderLogoText>
                    Trelello
                </MainHeaderLogoText>
                <UserNameInMainHeader>
                    {localStorage.getItem('TrelelloUserName')}
                </UserNameInMainHeader>
            </MainHeader>
            <MainBody>
                <TrelelloCardField changeActivateDeleteButtonFlag={activateDeleteCardButton} activateDeleteCardButtonTitle={cardModalWindowTitle}  activateDeleteCardButtonFlag={deleteCardFlag} getClickedCardTitle={getClickedCardTitleAndSetModalFlagTitle}/>
            </MainBody>
        </Wrapper>
    )
}
export default TrelelloApp;