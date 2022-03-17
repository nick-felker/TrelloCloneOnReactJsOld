import styled from "styled-components";
import { useState } from "react";
import {Form, Field} from 'react-final-form';
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { addNewColumn, columnsSelector, } from "../../../store";
import Column from '../Column/Column';
import Xicon from '../../../Images/X.png';
import {ColumnType} from './../../../types';

interface Props{
    setCardModalWindowTitleFunction: (title:string)=> void;
    changeActivateDeleteButtonFlag: (value:boolean) => void;
    activateDeleteCardButtonFlag: boolean;
    getClickedCardTitle: (title:string, flag:boolean, columnTitle:string, cardId:string) => void;
}

const TrelelloCardField = (props:Props) =>{
    
    const columns = useAppSelector(columnsSelector);
    const dispatch = useAppDispatch();
    const [addAnotherColumnFlag, setAddAnotherColumnFlag] = useState(false);

         
    interface AddColumnInterface{
        columnName: string;
    }

    
    const createColumn = (values:AddColumnInterface) =>{
        if(values.columnName.trim().length === 0) return;
        dispatch(addNewColumn(values.columnName));
        setAddAnotherColumnFlag(false);   
    }
    

    return(
        <Wrapper>
            {columns.map((column:ColumnType)=>{return <Column id={column.id} key={column.id} getClickedCardTitle={props.getClickedCardTitle} title={column.name}/>})}
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
const AddColumnButton = styled.button`
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