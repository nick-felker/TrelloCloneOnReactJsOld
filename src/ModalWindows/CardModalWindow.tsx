import React, { useState } from "react";
import styled from "styled-components";

const CardModalWindowWrapper = styled.div`
    padding-bottom: 100px;
    z-index: 11;
    position: relative; 
    background-color: white;
    border-radius: 5px;
    width: 1000px;
    min-heigth: 400px;
    
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
    outline: none;
    padding: 10px 15px;
    border: none;
    margin-top: 20px;
    font-size: 20px;
    cursor: pointer;
    margin-left: 100px;
    :hover{
        background-color: black;
        transition: 0.8s;
        color: white;
    }
`
const DeleteCardButton = styled.button`
    outline: none;
    padding: 10px 15px;
    border: none;
    margin-top: 20px;
    font-size: 20px;
    cursor: pointer;
    margin-left: 100px;
    :hover{
        background-color: black;
        transition: 0.8s;
        color: white;
    }
`
const WindowOverlay = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    top:0;
    margin-top: 5%;
    overflow: scroll;
    z-index: 11;
    width: 100%;
    height: 100%;
    left:0;
`
const ModalTitleWrapper = styled.div`
    width: 700px;
    min-width: 200px;
    margin: 20px 0px 0px 20px;

`
const ModalTitle = styled.p`
    font-size: 25px;
    color: #223556;
    font-weight: 500;
    padding: 20px 0px 10px 20p;
    word-break: break-all;
`
const ListOwner = styled.p`
    font-size: 20px;
    color: #223556;
    
    padding-left: 20px;
`
const DescriptionWrapper = styled.div`
    margin: 20px 0px 0px 20px;
    max-width: 70%;
    position: relative;
`
const DescriptionWrapperTitle = styled.p`
    font-size: 20px;
    margin-bottom: 10px;
    
`
const DescriptionWrapperTextInput = styled.input`
    font-size: 20px;
    outline: none;
    position: relative;
    height: 40px;
    width: 100%;
    padding: 5px 0px 5px 5px;
`
const DescriptionWrapperText = styled.p`
    font-size: 20px;
    padding: 15px;
    background-color: #eaecf0;
    cursor: pointer;
    border-radius: 5px;
    :hover{
        background-color: #f2f3f6;
        transition: 0.5s;
    }
`
const CommentsWrapper = styled.div`
    position: relative;
    margin: 20px 0px 20px 20px;
    max-width: 70%;
`
const CommentsWrapperTitle = styled.p`
    font-size: 20px;
`
const CommentsInputField = styled.input`
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 24px;
    outline: none;
    border-radius: 5px;
    padding-left: 10px;
`
const CommentsAddComment = styled.button`
    font-size: 20px;
    text-transform: uppercase;
    padding: 10px 15px;
    outline: none;
    border: none;
    background-color: #eaecf0;
    border-radius: 5px; 
    cursor: pointer;
    margin-top: 15px;
    :hover{
        background-color: #f2f3f6;
        transition: 0.5s;   
    }
`
const CommentOwner = styled.p`
    font-size: 20px;
    color: #223556;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 20px;
`
const NewComment = styled.p`
    font-size: 20px;
    color: black;
    margin: 15px 0px;
    padding: 10px 0px 10px 20px;
    border-radius: 7px;

    background-color: #eaecf0; 
`
const ModalWindowCloseButtonPlusTitleWrapper = styled.div`
    display: flex;
    
`
const ModalWindowTitleWrapper = styled.div`
    
`
const ModalWindowCloseButton = styled.div`

`

const CardModalWindow:React.FC<any> = (props) =>{
   let [editDescriptionFlag, setEditDescriptionFlag] = useState<boolean>(false);
   let [descriptionContain, setDescriptionContain] = useState<string>('Add a more detailed description...');
   function saveNewDescription(e:any){
       if(e.key === 'Enter'){
           let descriptionInputValue = DescriptionInputFieldValue.current?.value + '';
            setDescriptionContain(descriptionInputValue);
            setEditDescriptionFlag(false);
       }
        
   }
   let [commentsList, setCommentsList] = useState<any[]>([]);
   let DescriptionInputFieldValue = React.useRef<HTMLInputElement>(null);
   let CommentsInputFieldValue = React.useRef<HTMLInputElement>(null);
   function AddNewCommentFunction(){
    let comment = [CommentsInputFieldValue.current?.value];
    if(CommentsInputFieldValue.current?.value === '') return;
    setCommentsList(commentsList.concat(comment));
    
    
   }
    return(
        <>  
            <WindowOverlay>
                <CardModalWindowWrapper>
                    <ModalWindowCloseButtonPlusTitleWrapper>
                        <ModalWindowTitleWrapper>
                            <ModalTitleWrapper><ModalTitle>{props.modalWindowTitle}</ModalTitle></ModalTitleWrapper>
                            <ListOwner>In list <u>{localStorage.getItem('TrelelloUserName')}</u></ListOwner>
                        </ModalWindowTitleWrapper>
                        <ModalWindowCloseButton>
                            <HideCardModalWindow onClick={()=>props.hideCardModalWindow(false)}>Close</HideCardModalWindow>
                            <DeleteCardButton onClick={()=>{props.activateDeleteCardButton(true)}}>Delete</DeleteCardButton>
                        </ModalWindowCloseButton>
                    </ModalWindowCloseButtonPlusTitleWrapper>
                    
                    
                    <DescriptionWrapper>
                        <DescriptionWrapperTitle>Description</DescriptionWrapperTitle>
                        {editDescriptionFlag === false ? <DescriptionWrapperText onClick={()=>setEditDescriptionFlag(true)}>{descriptionContain}</DescriptionWrapperText> : <DescriptionWrapperTextInput ref={DescriptionInputFieldValue} onKeyDown={saveNewDescription}></DescriptionWrapperTextInput>}
                    </DescriptionWrapper>
                    <CommentsWrapper>
                        <CommentsWrapperTitle>Comments</CommentsWrapperTitle>
                        <CommentsInputField ref={CommentsInputFieldValue}></CommentsInputField>
                        <CommentsAddComment onClick={AddNewCommentFunction}>Add a comment</CommentsAddComment>
                        
                        {commentsList.map(comment=>{
                            return(<>
                            <CommentOwner>{localStorage.getItem('TrelelloUserName')}</CommentOwner>
                            <NewComment>{comment}</NewComment>
                            </>
                            
                            ) 
                            })}
                    </CommentsWrapper>
                    
                </CardModalWindowWrapper>
                    <BlackLayer onClick={()=>{props.hideCardModalWindow(false)}}></BlackLayer>
            </WindowOverlay>
        </>
    )
}


export default CardModalWindow;