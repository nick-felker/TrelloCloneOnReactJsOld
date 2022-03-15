
import {useEffect, useState} from "react";
import styled from "styled-components";
import {Form, Field} from 'react-final-form';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { deleteCard , setRenameCard} from "../../store/reducers/card/reducer";
import { addComment, deleteComment } from "../../store/reducers/comment/reducer";
import {userSelector} from './../../store/reducers/user/index';
import {setDescription} from './../../store/reducers/description/reducer';
import { commentSelector } from "../../store/reducers/comment/index";
import {comment} from './../../types/index';
import { description } from "./../../types/index";
import {descriptionSelector} from './../../store/reducers/description/index';

interface CardModalWindowProps{
    modalWindowRowName:string | undefined;
    takeDeleteCommentName:Function;
    getEditedCardTitle:Function;
    cardId: string | undefined;
    activateDeleteCardButton:Function;
    hideCardModalWindow:Function;
    modalWindowTitle:string;
}

const CardModalWindow = (props:CardModalWindowProps) =>{
    const userName = useAppSelector(userSelector.userName);
    const [editCardTitleFlag, setEditCardTitleFlag] = useState<boolean>(false);
    const [editDescriptionFlag, setEditDescriptionFlag] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const [descriptionContain, setDescriptionContain] = useState<string>('');
    const commentsArray = useAppSelector(commentSelector.comments)
    const descriptions:description[] = useAppSelector(descriptionSelector.descriptions)
   interface setDescriptionFormProps{
    description:string;
   }
    
   useEffect(()=>{
       descriptions.map((description:description)=> {
           if(description.cardId === props.cardId){
               setDescriptionContain(description.text);
           }
       })
   },[descriptions])

    function saveNewDescription(values:setDescriptionFormProps){
        if(!values.description?.trim()) return;
        if(props.cardId === undefined) return;
        dispatch(setDescription([values.description, props.cardId]));
        setEditDescriptionFlag(false);
    }
    
    interface addCommentFormProps{
        message:string;
    }

    function addNewCommentFunction(values:addCommentFormProps){
        if(props.cardId === undefined) return;
        if(!values.message?.trim()) return;
        dispatch(addComment([props.cardId, values.message])) 
    }
    function deleteCommentFunction(commentId:string){
        dispatch(deleteComment(commentId));
    }

    interface newCardNameFormProps{
        newCardName: string;
    }

    function saveEditedCardTitle(values:newCardNameFormProps){
        if(!values.newCardName?.trim()) return;
        if(props.cardId === undefined) return;
        dispatch(setRenameCard([props.cardId, values.newCardName]))
        props.getEditedCardTitle(values.newCardName)
        setEditCardTitleFlag(false);
    }
    function deleteCardFunction(){
        if(props.cardId === undefined) return;
        props.hideCardModalWindow(false);
        dispatch(deleteCard(props.cardId));
    }

    return(
        <Wrapper>
            <WindowOverlay>
                <CardModalWindowWrapper>
                    <ModalWindowCloseButtonPlusTitleWrapper>
                        <ModalWindowTitleWrapper>
                            {editCardTitleFlag === false ? <ModalTitleWrapper><ModalTitle onClick={()=>{setEditCardTitleFlag(true)}}>{props.modalWindowTitle}</ModalTitle></ModalTitleWrapper>
                            : 
                            <Form
                                onSubmit={saveEditedCardTitle}
                                render={({handleSubmit, values}) =>(
                                    <form
                                        onSubmit={handleSubmit}
                                    >
                                        <ModalTitleWrapper>
                                        <Field
                                            name='newCardName'
                                        >
                                            {props =>(
                                                <>
                                                    <ModalTitleInput
                                                        onChange={props.input.onChange}
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        autoComplete='off'
                                                    />
                                                </>
                                            )}
                                        </Field>
                                        <SaveEditedCardTitle onClick={handleSubmit}>Save</SaveEditedCardTitle>
                                        </ModalTitleWrapper>
                                    </form>
                                )}

                            >
                            </Form>
                            }
                            
                            <ListOwner>Author - <u>{userName}</u></ListOwner>
                            <CurrentRowWrapper>
                                <CurrentRowTitle>In row <u>{props.modalWindowRowName}</u></CurrentRowTitle>
                            </CurrentRowWrapper>
                        </ModalWindowTitleWrapper>
                        <ModalWindowCloseButton>
                            <HideCardModalWindow onClick={()=>props.hideCardModalWindow(false)}>Close</HideCardModalWindow>
                            <DeleteCardButton onClick={deleteCardFunction}>Delete</DeleteCardButton>
                        </ModalWindowCloseButton>
                    </ModalWindowCloseButtonPlusTitleWrapper>
                    <DescriptionWrapper>
                            
                        <DescriptionWrapperTitle>Description</DescriptionWrapperTitle>
                        {editDescriptionFlag === false ?
                        <DescriptionWrapperText onClick={()=>setEditDescriptionFlag(true)}>
                            {descriptionContain}
                        </DescriptionWrapperText>
                        :
                        <Form
                            onSubmit={saveNewDescription}
                            render={({handleSubmit, values})=>(
                                <form
                                    onSubmit={handleSubmit}
                                >
                                    <Field
                                        name='description'
                                    >
                                        {props =>(
                                            <>
                                                <DescriptionWrapperTextInput
                                                    onSubmit={handleSubmit}
                                                    name={props.input.name}
                                                    onChange={props.input.onChange}
                                                    value={props.input.value}
                                                    autoComplete='off'
                                                />
                                            </>
                                        )}

                                    </Field>
                                </form>
                            )}
                        >

                        </Form>
                        }
                    </DescriptionWrapper>
                    <CommentsWrapper>
                        <CommentsWrapperTitle>Comments</CommentsWrapperTitle>
                        <Form
                            onSubmit={addNewCommentFunction}
                            render={({handleSubmit, values}) =>(
                                <form
                                    onSubmit={handleSubmit}
                                >
                                <Field
                                    name="message"
                                >
                                {props =>(
                                     <CommentsInputFieldBlock 
                                     onSubmit={handleSubmit}
                                     value={props.input.value}
                                     onChange={props.input.onChange}
                                     autoComplete="off"
                                    />
                                )}
                                </Field>
                                <CommentsAddComment onClick={handleSubmit}>Add a comment</CommentsAddComment>
                                </form>
                            )}
                        >
                        </Form>
                        {commentsArray.map((comment:comment)=>{
                            if(comment.cardId !== props.cardId) return;
                            return(<div key={comment.id}>
                                    <CommentOwner>{userName}</CommentOwner>
                                    <NewComment >{comment.message}<DeleteCommentButton onClick={()=>{deleteCommentFunction(comment.id)}}>Del</DeleteCommentButton></NewComment>  
                            </div>)
                         })}
                         
                    </CommentsWrapper>
                </CardModalWindowWrapper>
                    <BlackLayer onClick={()=>{props.hideCardModalWindow(false)}}></BlackLayer>
            </WindowOverlay>
        </Wrapper>
    )
}

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
const ModalTitleInput = styled.input`
    
`
const ModalTitle = styled.p`
    font-size: 25px;
    color: #223556;
    font-weight: 500;
    padding: 20px 0px 10px 20p;
    word-break: break-all;
    cursor: pointer;
`
const ListOwner = styled.p`
    font-size: 20px;
    color: #223556;
    padding-left: 20px;
`
const CurrentRowWrapper = styled.div`
    margin-left: 20px;
`
const CurrentRowTitle = styled.p`
    font-size: 20px;
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
const CommentsInputFieldBlock = styled.input`
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
    cursor: pointer;
    :hover{
        opacity: 0.6;
        transition: 0.6;
    }
    color: black;
    word-break: break-all;
    margin: 15px 0px;
    padding: 10px 0px 10px 20px;
    border-radius: 7px;
    background-color: #eaecf0; 
`
const ModalWindowCloseButtonPlusTitleWrapper = styled.div`
    display: flex;
`
const DeleteCommentButton = styled.button`
    position: relative;
    margin-left: 90%;
    border: none;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px 10px;
    :hover{
        opacity: 0.6;
        transition: 0.6s;
    }
`
const SaveEditedCardTitle = styled.button`
    font-size: 18px;
    outline: none;
    border: none;
    margin-left: 30px;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
`
const ModalWindowTitleWrapper = styled.div``
const ModalWindowCloseButton = styled.div``
const Wrapper = styled.div``

export default CardModalWindow;