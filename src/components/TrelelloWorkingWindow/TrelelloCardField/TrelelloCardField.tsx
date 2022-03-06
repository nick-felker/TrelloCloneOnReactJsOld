import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { AddAnotherRowButton } from "../../../ui";
import {Form, Field} from 'react-final-form';
import { useAppSelector, useAppDispatch } from "../../../types";
import {addNewColumn, deleteCard, deleteComment} from '../../../store/reducers/mainAppFunctional';
import Row from '../Row/Row';
import Xicon from '../../../Images/X.png';
import { MainAppRowArray } from "../../../types";
import {RootState} from '../../../store/appStore/store';
import {addCard} from '../../../store/reducers/card/reducer'
interface Props{
    setCardModalWindowTitleFunction: Function;
    takeRenameCardTitle: string;
    takeDeleteCommentName: string;
    takeDescriptionContainFromTrelelloApp: string;
    commentsList: string[];
    rowTitlesArrayToTrelelloApp: Function;
    changeActivateDeleteButtonFlag: Function;
    activateDeleteCardButtonTitle: string;
    activateDeleteCardButtonFlag: boolean;
    getClickedCardTitle: Function;
}

const TrelelloCardField = (props:Props) =>{
    
    const appDataArray = useAppSelector((state: RootState) => state.mainAppFunctional.appDataArray);
    
    
    const dispatch = useAppDispatch();
    let [addAnotherRowFlag, setAddAnotherRowFlag] = useState(false);

         

    useEffect(()=>{
        for(let i in appDataArray){
            for(let j in appDataArray[i].Cards){
                 if(appDataArray[i].Cards[j].CardName === props.activateDeleteCardButtonTitle){
                    dispatch(deleteCard([i, j]))
                    break;
                 }
            }
        } 
        props.changeActivateDeleteButtonFlag(false);
        
}, [props.activateDeleteCardButtonFlag])
    
    interface columnName{
        columnName: string;
    }    
    const createColumn = (values:columnName) =>{
        if(values.columnName === undefined) return;
        if(values.columnName.trim().length === 0 ) return;
        dispatch(addNewColumn(values.columnName));
        setAddAnotherRowFlag(false);   
    }
    
    
    return(
        
        <Wrapper>
            {appDataArray.map((title:any, index:string)=>{ return <Row key={`${title}-${index}`}   getClickedCardTitle={props.getClickedCardTitle} cardData={title.Cards} title={title.RowName}/>})}
            {addAnotherRowFlag === false ? <AddAnotherRowButton onClick={()=>{setAddAnotherRowFlag(!addAnotherRowFlag)}}>Add another list</AddAnotherRowButton> 
            : <AddAnotherRowWrapper>
                <Form
                    onSubmit={createColumn}
                    render={({handleSubmit, values}) =>(
                        <form
                            onSubmit={handleSubmit}
                        >
                        <Field
                            name='columnName'
                        >
                            {props =>(
                                <>
                                    <AddAnotherRowWrapperInput
                                        placeholder="Enter list title"
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                        onSubmit={handleSubmit}
                                        autoComplete='off'
                                        name={props.input.name}
                                    />
                                </>
                            )}
                        </Field>
                        <AddAnotherRowWrapperAddButton onClick={handleSubmit}>Add list</AddAnotherRowWrapperAddButton>
                        <AddAnotherRowWrapperCancelButton onClick={()=>{setAddAnotherRowFlag(!addAnotherRowFlag)}}>
                            <AddAnotherRowWrapperCancelButtonImg src={Xicon}/>
                        </AddAnotherRowWrapperCancelButton>
                        </form>
                    )}
                >
                    
                </Form>
                
                
                    
            </AddAnotherRowWrapper>
            }
            </Wrapper>
        
    )
}


const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    justify-content: flex-start;
    margin-left: 3%;
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

export default TrelelloCardField;