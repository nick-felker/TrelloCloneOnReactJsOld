
import {useState} from "react";
import styled from "styled-components";
import {Form, Field} from 'react-final-form';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { deleteCard,
         changeCard, 
         addComment, 
         deleteComment, 
         userNameSelector, 
         selectDescriptionByCardId,
         RootState,
         selectCardById,
         selectCommentsByCardId
        } from "../../store";
import {CommentType} from './../../types';


interface CardModalWindowProps{
    modalWindowRowName:string;
    getEditedCardTitle:(title:string) => void;
    cardId: string;
    activateDeleteCardButton:(value:boolean) => void;
    hideCardModalWindow: (flag:boolean)=> void;
    modalWindowTitle:string;
}

const CardModalWindow = (props:CardModalWindowProps) =>{
    const userName = useAppSelector(userNameSelector);
    const [editCardTitleFlag, setEditCardTitleFlag] = useState(false);
    const [editDescriptionFlag, setEditDescriptionFlag] = useState(false);
    const dispatch = useAppDispatch();
    const card = useAppSelector((state:RootState)=> selectCardById(state, props.cardId));
    const commentsArray = useAppSelector((state:RootState)=> selectCommentsByCardId(state,props.cardId));
   interface SetDescriptionFormProps{
    description:string;
   }
    

    function saveNewDescription(values:SetDescriptionFormProps){
        if(!values.description?.trim()) return;
        dispatch(changeCard({cardId: props.cardId, description: values.description}))
        setEditDescriptionFlag(false);
    }
    
    interface AddCommentFormProps{
        message:string;
    }

    function addNewCommentFunction(values:AddCommentFormProps){
        if(!values.message?.trim()) return;
        dispatch(addComment({cardId: props.cardId, message: values.message})) 
    }
    function deleteCommentFunction(commentId:string){
        dispatch(deleteComment(commentId));
    }

    interface NewCardNameFormProps{
        newCardName: string;
    }

    function saveEditedCardTitle(values:NewCardNameFormProps){
        if(!values.newCardName?.trim()) return;
        dispatch(changeCard({cardId: props.cardId, name:values.newCardName}))
        props.getEditedCardTitle(values.newCardName)
        setEditCardTitleFlag(false);
    }
    function deleteCardFunction(){
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
                            {card.description}
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
                        {commentsArray.map((comment:CommentType)=>{
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