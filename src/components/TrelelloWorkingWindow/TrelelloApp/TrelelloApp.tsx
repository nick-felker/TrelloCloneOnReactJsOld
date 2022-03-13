import React, { useEffect } from "react";
import { useState } from "react";

import styled from "styled-components";
import TrelelloCardField from "../TrelelloCardField/TrelelloCardField";
import CardModalWindow from "../../ModalWindows/CardModalWindow";
import { useAppSelector } from "../../../hooks/index";
import { columnArray } from "../../../types";
import { RootState } from "../../../store/store";




const TrelelloApp = () =>{
    
    let [cardModalWindowFlag, setCardModalWindowFlag] = useState(false);
    let [deleteCardFlag, setDeleteCardFlag] = useState(false);
    let [cardModalWindowTitle, setCardModalWindowTitle] = useState('');
    let [deleteCommentName, setDeleteCommentName] = useState('');
    let [descriptionContain, setDescriptionContain] = useState('');
    let [rowTitles, setRowTitles] = useState<columnArray[]>([]);
    let [commentsList, setCommentsList] = useState<string[]>([]);
    let [modalWindowRowName, setModalWindowRowName] = useState<string>();
    let [editedCardTitle, setEditedCardTitle] = useState(''); 
    const userName = useAppSelector((state:RootState) => state.userName.userName)
    

    useEffect(()=>{
        setDeleteCommentName('')
    },[deleteCommentName])
    
    function getClickedCardTitleAndSetModalFlagTitle(title:string, flag:boolean, rowTitle:string){
       setCardModalWindowTitle(title);
       setCardModalWindowFlag(flag);
       setModalWindowRowName(rowTitle);

    }
    function activateDeleteCardButton(value:boolean){
        setDeleteCardFlag(value);
        setCardModalWindowFlag(false);
    }
    
    

    return(
        <Wrapper>
            {cardModalWindowFlag === false ? null
            :
            <CardModalWindow
                modalWindowRowName={modalWindowRowName}
                takeDeleteCommentName={setDeleteCommentName}
                getEditedCardTitle={setEditedCardTitle}
                getDescriptionContainFromModalWindow={setDescriptionContain}
                getCommentsList={setCommentsList}
                rowTitlesArray={rowTitles}
                activateDeleteCardButton={activateDeleteCardButton}
                hideCardModalWindow={setCardModalWindowFlag}
                modalWindowTitle={cardModalWindowTitle}
            />
            }
            <MainHeader> 
                <MainHeaderLogoText>
                    Trelello
                </MainHeaderLogoText>
                <UserNameInMainHeader>
                    {userName}
                </UserNameInMainHeader>
            </MainHeader>
            <MainBody>
                <TrelelloCardField
                setCardModalWindowTitleFunction={setCardModalWindowTitle}
                takeRenameCardTitle={editedCardTitle}
                takeDeleteCommentName={deleteCommentName}
                takeDescriptionContainFromTrelelloApp={descriptionContain}
                commentsList={commentsList}
                rowTitlesArrayToTrelelloApp={setRowTitles}
                changeActivateDeleteButtonFlag={activateDeleteCardButton}
                activateDeleteCardButtonTitle={cardModalWindowTitle}
                activateDeleteCardButtonFlag={deleteCardFlag}
                getClickedCardTitle={getClickedCardTitleAndSetModalFlagTitle}
                />
            </MainBody>
        </Wrapper>
    )
}

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

export default TrelelloApp;