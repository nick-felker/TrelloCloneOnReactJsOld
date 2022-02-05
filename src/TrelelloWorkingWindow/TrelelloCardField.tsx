import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Row from "./Row";
import Xicon from '../Images/X.png';

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    justify-content: flex-start;
    margin-left: 3%;
`
const AddAnotherRow = styled.button`
    background-color: #3d99ce;
    cursor: pointer;
    border: none;
    text-align: center;
    min-width: 200px;
    color: white;
    font-size: 19px;
    padding: 10px 0px;
    border-radius: 4px;
    :hover{
        background-color: #29688d;
        color: white;
        transition: 0.5s;
    }
`
const AddAnotherRowWrapper = styled.div`
    padding: 5px 0px 5px 10px;
    width: 200px;
    background-color: #ebecf0;
`
const AddAnotherRowWrapperInput = styled.input`
    width: 180px;
    padding: 4px 0px 4px 7px;
    border: 2px solid #0079bf;
    border-radius: 3px;
    font-size: 16px;
    max-height: 22px;
    ::placeholder{
        opacity: 0.5;
    }
    :focus{
        ::placeholder{
            color: white;
            transition: 0.4s;
        }
    }
    outline: none;
    margin-bottom: 10px;
`
const AddAnotherRowWrapperAddButton = styled.button`
    background-color: #0079bf;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    font-size: 16px;    
    margin-right: 15px;
    color: white;
    border-radius: 3px;
`

const AddAnotherRowWrapperCancelButton = styled.button`
    padding: 4px 4px 2px 4px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    background-color: #ebecf0;
    :hover{
        background-color: #6b778c;
        transition: 0.5s;
    }
`
const AddAnotherRowWrapperCancelButtonImg = styled.img`
    width: 15px;
    opacity: 0.7;
    
    height: 15px;
`

const TrelelloCardField = () =>{
    
    let [RowTitles, setRowTitles] = useState(['Todo','In Progress', 'Testing', 'Done']);
    let [AddAnotherRowFlag, setAddAnotherRowFlag] = useState(false);
    let AddAnotherRowInput = React.useRef<HTMLInputElement>(null);
    let AddAnotherRowFunction = () =>{
      setAddAnotherRowFlag(true);
    }
    const AddAnotherRowCancelButtonFunc = () =>{
        setAddAnotherRowFlag(false);
    }
    const AddAnotherRowWrapperAddButtonFunc = () =>{
        let AddAnotherRowInputValue = AddAnotherRowInput.current?.value;
        if(AddAnotherRowInputValue == '' ) return;
        let NewRow:any[] = [...RowTitles, AddAnotherRowInputValue];
        setRowTitles(NewRow);
        setAddAnotherRowFlag(false);
    }
    return(
        <>
            <Wrapper>
            
            {RowTitles.map(title=>{ return <Row title={title}/>})}
            {AddAnotherRowFlag == false ? <AddAnotherRow onClick={AddAnotherRowFunction}>Add another list</AddAnotherRow> 
            : <AddAnotherRowWrapper>
                <AddAnotherRowWrapperInput placeholder="Enter list title" ref={AddAnotherRowInput}></AddAnotherRowWrapperInput>
                <AddAnotherRowWrapperAddButton onClick={AddAnotherRowWrapperAddButtonFunc}>Add list</AddAnotherRowWrapperAddButton>
                <AddAnotherRowWrapperCancelButton onClick={AddAnotherRowCancelButtonFunc}>
                    <AddAnotherRowWrapperCancelButtonImg src={Xicon}></AddAnotherRowWrapperCancelButtonImg>
                </AddAnotherRowWrapperCancelButton>
                        
                    
            </AddAnotherRowWrapper>
            }
            </Wrapper>
            
        </>
    )
}
export default TrelelloCardField;