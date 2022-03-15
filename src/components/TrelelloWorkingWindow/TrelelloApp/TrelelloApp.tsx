import { useState } from "react";
import styled from "styled-components";
import TrelelloCardField from "../TrelelloCardField/TrelelloCardField";
import CardModalWindow from "../../ModalWindows/CardModalWindow";
import { useAppSelector } from "../../../hooks";
import { userSelector } from "../../../store/reducers/user";



const TrelelloApp = () =>{
    
    let [cardModalWindowFlag, setCardModalWindowFlag] = useState(false);
    let [deleteCardFlag, setDeleteCardFlag] = useState(false);
    let [cardModalWindowTitle, setCardModalWindowTitle] = useState('');
    let [deleteCommentName, setDeleteCommentName] = useState('');
    let [cardId, setCardId] = useState<string>();
    let [modalWindowRowName, setModalWindowRowName] = useState<string>();
    let [editedCardTitle, _] = useState(''); 
    const userName = useAppSelector(userSelector.userName);

    function getClickedCardTitleAndSetModalFlagTitle(title:string, flag:boolean, columnTitle:string, cardId:string){
       setCardModalWindowTitle(title);
       setCardId(cardId);
       setCardModalWindowFlag(flag);
       setModalWindowRowName(columnTitle);

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
                getEditedCardTitle={setCardModalWindowTitle}
                cardId = {cardId}
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
    padding-top: 60px;
`
const Wrapper = styled.div`  
`    

export default TrelelloApp;