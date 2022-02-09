import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Xicon from '../Images/X.png';

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
    white-space: wrap;
    word-wrap: break-word;
    font-weight: 500;
    margin-bottom: 10px;
    cursor: pointer;
`
const CardTitleInput = styled.input`
    color: #40516d;
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

const Row = (props:any) =>{
    /*let [UserCardData, setNewCard] = useState(['']);*/
    
    let NewCardInputValue = React.useRef<HTMLTextAreaElement>(null);
    let AddingAdditionalMenuField = (props:any) =>{
        return(
            <AdditionalMenu>
                <AdditionalMenuInput ref={NewCardInputValue}/>
                <AdditionalMenuUnderLine>
                    <AdditionalMenuUnderLineAddButton  onClick={()=>{props.props.addingCardFunction(NewCardInputValue.current?.value, props.props.title)}}> Add card</AdditionalMenuUnderLineAddButton>
                    <AdditionalMenuUnderLineDeleteButton onClick={HidingAdditionalRowMenu}>
                        <AdditionalMenuUnderLineDeleteButtonImg src={Xicon}></AdditionalMenuUnderLineDeleteButtonImg>
                    </AdditionalMenuUnderLineDeleteButton>
                </AdditionalMenuUnderLine>
            </AdditionalMenu>
        )
    }
    let [showAddingMenu, setFlag] = useState(true);
    let CardTitleInputValue = React.useRef<HTMLInputElement>(null);
    
    const ShowingAdditionalRowMenu = () =>{
        setFlag(false);
    }
    const HidingAdditionalRowMenu = () =>{
        setFlag(true);
    }
    let [editRowTitleFlag, setEditRowTitleFlag] = useState(false);
    function handleKeyPress(e:any){
      if(e.key === 'Enter'){
        setEditRowTitleFlag(false);
        let newTitle = CardTitleInputValue.current?.value;
        if (newTitle === '') return;
        props.getEditedTitle(newTitle, props.title)
      } 
    }
   
    return(
        <>
        
            <Wrapper>
                {editRowTitleFlag === false ? <CardTitle onClick={()=>{setEditRowTitleFlag(true)}} >{props.title}</CardTitle> : <CardTitleInput ref={CardTitleInputValue} onKeyDown={handleKeyPress} placeholder={props.title}></CardTitleInput>}
                
                
                {props.cardData.map((elem:string|number)=>{return <Card onClick={()=>props.getClickedCardTitle(elem, true)}>{elem}</Card>})}
                
            
                
                {showAddingMenu === true ? <AddCardButton onClick={ShowingAdditionalRowMenu}>Add a card</AddCardButton> : <AddingAdditionalMenuField props={props}></AddingAdditionalMenuField>}
                
            </Wrapper>
            
        </>
    )
}

export default Row;