import React, { KeyboardEventHandler } from "react";
import styled from "styled-components";
import { useState } from "react";
import Xicon from '../../../Images/X.png';


type Props = {
    key: string;
    deleteRowFunction: Function;
    getEditedTitle: Function;
    getClickedCardTitle: Function;
    addingCardFunction: Function;
    cardData: any[];
    title: string;
}

const Row = (props: Props) =>{
    /*let [UserCardData, setNewCard] = useState(['']);*/
    let [showAddingMenuFlag, setShowAddingMenuFlag] = useState(true);
    let [editRowTitleFlag, setEditRowTitleFlag] = useState(false);
    let cardTitleInputField = React.useRef<HTMLInputElement>(null);
    let newCardInputField = React.useRef<HTMLTextAreaElement>(null);
    let AddingAdditionalMenuField = (props:any) =>{
        return(
            <AdditionalMenu>
                <AdditionalMenuInput ref={newCardInputField}/>
                <AdditionalMenuUnderLine>
                    <AdditionalMenuUnderLineAddButton  onClick={()=>{props.props.addingCardFunction(newCardInputField.current?.value, props.props.title)}}> Add card</AdditionalMenuUnderLineAddButton>
                    <AdditionalMenuUnderLineDeleteButton onClick={()=>{setShowAddingMenuFlag(true)}}>
                        <AdditionalMenuUnderLineDeleteButtonImg src={Xicon}></AdditionalMenuUnderLineDeleteButtonImg>
                    </AdditionalMenuUnderLineDeleteButton>
                </AdditionalMenuUnderLine>
            </AdditionalMenu>
        )
    }

    function handleKeyPress(e:any){
      if(e.key === 'Enter'){
        if(cardTitleInputField.current?.value === undefined) return;
        setEditRowTitleFlag(false);
        let pureValue = cardTitleInputField.current?.value.trim();
        if (pureValue === '') return;
        props.getEditedTitle(pureValue, props.title)
      } 
    }
   
    return(
        <>
        
            <Wrapper>
                <TitleWrapper>
                {editRowTitleFlag === false ? <CardTitle onClick={()=>{setEditRowTitleFlag(true)}} >{props.title}</CardTitle> : <CardTitleInput  ref={cardTitleInputField} onKeyDown={handleKeyPress} placeholder={props.title}></CardTitleInput>}
                <DeleteRowButton onClick={()=>{props.deleteRowFunction(props.title)}}><DeleteRowButtonImage src={Xicon}></DeleteRowButtonImage></DeleteRowButton>
                </TitleWrapper>
                {props.cardData.map((elem:any)=>{return <Card key={props.cardData.indexOf(elem, 0)} onClick={()=>props.getClickedCardTitle(elem.CardName, true, props.title)}>{elem.CardName}</Card>})}
                
            
                
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
const CardTitle = styled.p`
    color: #40516d;
    font-size: 19px;
    padding-top: 10px;
    white-space: wrap;
    word-wrap: break-word;
    font-weight: 500;
    margin-bottom: 10px;
    cursor: pointer;
`
const CardTitleInput = styled.input`
    color: #40516d;
    margin-top: 15px;
    font-size: 19px;
    position: relative;
    max-width:85%;
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

export default Row;