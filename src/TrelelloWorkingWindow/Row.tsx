import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { render } from "@testing-library/react";
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
const AddedCard = styled.p`
    color: red;
    font-size: 18px;
`

const Row:React.FC<any> = (props:any) =>{
    let [CardData, setNewCard] = useState(['']);
    let NewCardInputValue = React.useRef<HTMLTextAreaElement>(null);
    const AddNewCard = () =>{
        let a = NewCardInputValue.current?.value;
        
    }
    let AddingAdditionalMenuField = () =>{
        return(
            <AdditionalMenu>
                <AdditionalMenuInput ref={NewCardInputValue}/>
                <AdditionalMenuUnderLine>
                    <AdditionalMenuUnderLineAddButton>Add card</AdditionalMenuUnderLineAddButton>
                    <AdditionalMenuUnderLineDeleteButton onClick={HidingAdditionalRowMenu}>
                        <AdditionalMenuUnderLineDeleteButtonImg src={Xicon}></AdditionalMenuUnderLineDeleteButtonImg>
                    </AdditionalMenuUnderLineDeleteButton>
                </AdditionalMenuUnderLine>
            </AdditionalMenu>
        )
    }
    let [showAddingMenu, setFlag] = useState(true);
    
    
    const ShowingAdditionalRowMenu = () =>{
        setFlag(false);
    }
    const HidingAdditionalRowMenu = () =>{
        setFlag(true);
    }
    
    return(
        <>
            <Wrapper>
                
                <CardTitle>{props.title}</CardTitle>
                {CardData.map(Elem=>{return <AddedCard>{Elem}</AddedCard>})}
                {showAddingMenu == true ? <AddCardButton onClick={ShowingAdditionalRowMenu}>Add a card</AddCardButton> : <AddingAdditionalMenuField/>}
                
            </Wrapper>

        </>
    )
}

export default Row;