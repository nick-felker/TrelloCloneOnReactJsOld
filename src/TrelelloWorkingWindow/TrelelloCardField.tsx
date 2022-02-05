import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Row from "./Row";

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


const TrelelloCardField = () =>{
    
    let [DefaultRowTitles, setRowTitles] = useState(['Todo','In Progress', 'Testing', 'Done']);
    
    let AddAnotherRowFunction = () =>{
      let NewRow:string[] = [...DefaultRowTitles,'string'];
      
      setRowTitles(NewRow);
    }

    return(
        <>
            <Wrapper>
            
            {DefaultRowTitles.map(title=>{ return <Row title={title}/>})}
            <AddAnotherRow onClick={AddAnotherRowFunction}>Add another list</AddAnotherRow>
            </Wrapper>
            
        </>
    )
}
export default TrelelloCardField;