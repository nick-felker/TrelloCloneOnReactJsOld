import styled from "styled-components";
import { useState } from "react";
import { Field, Form } from "react-final-form";
import { addCard } from "../../../store/reducers/card/reducer";
import { deleteCurrentColumn, setRenameColumn } from "../../../store/reducers/column/reducer";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { card } from "../../../types";
import Xicon from '../../../Images/X.png';
import {cardSelector} from '../../../store/reducers/card';



interface columnProps{
    key: string;
    id: string;
    getClickedCardTitle: Function;
    title: string;

}

const Column = (props: columnProps) =>{
    const cards = useAppSelector(cardSelector.cards)
    const dispatch = useAppDispatch();
    const [showAddingMenuFlag, setShowAddingMenuFlag] = useState(true);
    const [editColumnTitleFlag, setEditColumnTitleFlag] = useState(false);

    interface AddingAdditionalMenuFieldProps{
        props: columnProps;
    }

    const AddingAdditionalMenuField = (props:AddingAdditionalMenuFieldProps) =>{
    
    interface addNewCardFormProps{
        newCardName:string;
    }

    function addNewCard(values:addNewCardFormProps){
        if(!values.newCardName?.trim()) return
        dispatch(addCard([values.newCardName, props.props.id]));
    }
        return(
            <Form
                onSubmit={addNewCard}
                render={({handleSubmit, values}) =>(
                    <form 
                        onSubmit={handleSubmit}
                    >
                    <Field
                        name='newCardName'
                    >
                        {props =>(
                            <>
                                <AdditionalMenuInput
                                    onSubmit={handleSubmit}
                                    name={props.input.name}
                                    onChange={props.input.onChange}
                                    value={props.input.value}
                                    autoComplete='off'
                                />
                            </>
                        )}
                    </Field>
                    <AdditionalMenu>
                        <AdditionalMenuUnderLine>
                            <AdditionalMenuUnderLineAddButton > Add card</AdditionalMenuUnderLineAddButton>
                            <AdditionalMenuUnderLineDeleteButton onClick={()=>{setShowAddingMenuFlag(true)}}>
                                <AdditionalMenuUnderLineDeleteButtonImg src={Xicon}></AdditionalMenuUnderLineDeleteButtonImg>
                            </AdditionalMenuUnderLineDeleteButton>
                        </AdditionalMenuUnderLine>
                    </AdditionalMenu>
                    </form>
                )}
            >
            
            </Form>
        )
    }
    
    interface renameColumnFormProps{
        newColumnName: string;
    }

    function renameColumn(values:renameColumnFormProps){
            if(!values.newColumnName?.trim()) return;
            setEditColumnTitleFlag(false);
            dispatch(setRenameColumn([props.id, values.newColumnName]))
    }

    function deleteColumn(title:string){
        dispatch(deleteCurrentColumn(title))
    }
   
    return(
        <>
        
            <Wrapper>
                <TitleWrapper>
                {editColumnTitleFlag === false ? 
                <>
                <ColumnTitle onClick={()=>{setEditColumnTitleFlag(true)}} >{props.title}</ColumnTitle>
                <DeleteRowButton onClick={()=>{deleteColumn(props.title)}}><DeleteRowButtonImage src={Xicon}></DeleteRowButtonImage></DeleteRowButton>
                </>
                : 
                <Form
                    onSubmit={renameColumn}
                    render={({ handleSubmit, values}) =>(
                        <form
                            onSubmit={handleSubmit}
                        >
                            <Field
                                name='newColumnName'
                            >
                                {props => (
                                    <>
                                        <ColumnTitleInput
                                            onSubmit={handleSubmit}
                                            value={props.input.value}
                                            name={props.input.name}
                                            onChange={props.input.onChange}
                                            autoComplete='off'
                                        />
                                    </>
                                )}
                                
                            </Field>
                            
                        </form>

                    )}
                />
                }
                
                </TitleWrapper>
                {cards.map((card:card)=>{if(card.columnId === props.id){return <Card key={cards.indexOf(card, 0)} onClick={()=>props.getClickedCardTitle(card.name, true, props.title, card.id)}>{card.name}</Card>}})}
                
            
                
                {showAddingMenuFlag === true ? <AddCardButton onClick={()=>{setShowAddingMenuFlag(false)}}>Add a card</AddCardButton> : <AddingAdditionalMenuField props={props}></AddingAdditionalMenuField>}
                
            </Wrapper>
            
        </>
    )
}

const Wrapper = styled.div`
    background-color: #ebecf0;
    margin-right: 10px;
    position: relative;
    min-width: 200px;
    border-radius: 3px;
    max-width: 210px;
    padding: 5px 15px 10px 15px;
`
const ColumnTitle = styled.p`
    color: #40516d;
    font-size: 19px;
    padding-top: 10px;
    white-space: wrap;
    word-wrap: break-word;
    font-weight: 500;
    margin-bottom: 10px;
    cursor: pointer;
`
const ColumnTitleInput = styled.input`
    color: #40516d;
    margin-top: 15px;
    font-size: 19px;
    position: relative;
    max-width: 85%;
    margin-bottom: 15px;
    overflow: visible;
    outline: none;
    border: 1px solid #0079bf;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    background-color: white ;
`
const AddCardButton = styled.button`
    font-size: 19px;
    border: none;
    background: none;
    color: #758095;
    position: relative;
    width: 100%;
    text-align: left;
    padding: 3px 0px 3px 10px;
    cursor: pointer;
    :hover{
        background-color: #6c788c;
        color: black;
        border-radius: 5px;
        transition: 0.5s;
    }
`
const AdditionalMenu = styled.div`
    diplay: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
const AdditionalMenuInput = styled.textarea`
    position: relative;
    width: 185px;
    border: none;
    font-size: 17px;
    min-height: 40px;
    padding-left: 10px;
    padding-top: 5px;
    border-radius: 4px;
    resize: vertical;
    max-height: 200px;
    outline: none;
`
const AdditionalMenuUnderLine = styled.div`
    display: flex;
    position: relative;
    margin-top: 10px;
    align-items: center;
`
const AdditionalMenuUnderLineAddButton = styled.button`
    background-color: #0079bf;
    padding: 8px 10px;
    outline: none;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`
const AdditionalMenuUnderLineDeleteButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 3px;
    background-color: #ebecf0;
    :hover{
        background: #b3b3b3;
        opacity: 0.5s;
    }
    margin-left: 10px;
`
const AdditionalMenuUnderLineDeleteButtonImg = styled.img`
    width: 20px;
    padding: 6px 6px 2px 6px; 
    height: 20px;
    opacity: 0.6;
`
const Card = styled.p`
    color: #40516d;
    opacity: 0.7;
    font-size: 19px;
    white-space: wrap;
    word-wrap: break-word;
    font-weight: 500;
    background-color: white;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 4px 0px 8px 8px;
    border-radius: 3px;
    :hover{
        background-color: #868b95;
        transition: 0.5s;
    }
`
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const DeleteRowButton = styled.button`
    padding: 4px 4px 1px 4px;
    border: none;
    outline: none;
    cursor: pointer;
    :hover{
        opacity: 0.3;
        transition: 0.5s;
    }
    background-color:  #ebecf0
`
const DeleteRowButtonImage = styled.img`
    width: 20px;
    opacity: 0.4;
    height: 20px;
`

export default Column;