import styled from "styled-components";
import { useState } from "react";
import {AddColumnButton} from "../../../ui/column/columnAddButton";
import {Form, Field} from 'react-final-form';
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { addNewColumn } from "../../../store/reducers/column/reducer";
import Column from '../Column/Column';
import Xicon from '../../../Images/X.png';
import {columnSelector} from './../../../store/reducers/column';
import {column} from './../../../types';


interface Props{
    setCardModalWindowTitleFunction: Function;
    takeRenameCardTitle: string;
    takeDeleteCommentName: string;
    changeActivateDeleteButtonFlag: Function;
    activateDeleteCardButtonTitle: string;
    activateDeleteCardButtonFlag: boolean;
    getClickedCardTitle: Function;
}

const TrelelloCardField = (props:Props) =>{
    
    const columns = useAppSelector(columnSelector.columns);
    const dispatch = useAppDispatch();
    const [addAnotherColumnFlag, setAddAnotherColumnFlag] = useState(false);

         
    interface addColumnInterface{
        columnName: string;
    }

    
    const createColumn = (values:addColumnInterface) =>{
        if(values.columnName.trim().length === 0) return;
        dispatch(addNewColumn(values.columnName));
        setAddAnotherColumnFlag(false);   
    }
    

    return(
        <Wrapper>
            {columns.map((column:column)=>{return <Column id={column.id} key={column.id} getClickedCardTitle={props.getClickedCardTitle} title={column.name}/>})}
            {addAnotherColumnFlag === false ? <AddColumnButton onClick={()=>{setAddAnotherColumnFlag(!addAnotherColumnFlag)}}>Add another list</AddColumnButton> 
            : <AddAnotherColumnWrapper>
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
                                    <AddAnotherColumnWrapperInput
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
                        <AddAnotherColumnWrapperAddButton onClick={handleSubmit}>Add list</AddAnotherColumnWrapperAddButton>
                        <AddAnotherColumnWrapperCancelButton onClick={()=>{setAddAnotherColumnFlag(!addAnotherColumnFlag)}}>
                            <AddAnotherColumnWrapperCancelButtonImg src={Xicon}/>
                        </AddAnotherColumnWrapperCancelButton>
                        </form>
                    )}
                >
                </Form>         
             </AddAnotherColumnWrapper>
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
const AddAnotherColumnWrapper = styled.div`
    padding: 5px 0px 5px 10px;
    width: 200px;
    background-color: #ebecf0;
`
const AddAnotherColumnWrapperInput = styled.input`
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
const AddAnotherColumnWrapperAddButton = styled.button`
    background-color: #0079bf;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    font-size: 16px;    
    margin-right: 15px;
    color: white;
    border-radius: 3px;
`

const AddAnotherColumnWrapperCancelButton = styled.button`
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
const AddAnotherColumnWrapperCancelButtonImg = styled.img`
    width: 15px;
    opacity: 0.7;
    height: 15px;
`

export default TrelelloCardField;