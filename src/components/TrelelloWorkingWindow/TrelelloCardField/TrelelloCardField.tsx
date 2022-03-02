import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {addNewColumn, takeNewAppDataArrayFromLocalStorage, addCard, deleteCard, deleteComment} from '../../../store/reducers/mainAppFunctional';
import Row from "../Row/Row";
import Xicon from '../../../Images/X.png';
import { MainAppRowArray } from "../../../types";
import {RootState} from '../../../store/store';

type Props = {
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
    const appDataArray = useSelector((state: RootState) => state.mainAppFunctional.appDataArray);
    const dispatch = useDispatch();
    console.log(appDataArray)
    /*let [RowTitles, setRowTitles] = useState(['Todo','In Progress', 'Testing', 'Done']);*/
    let [rowTitles, setRowTitles] = useState<MainAppRowArray[]>([{RowName : 'ToDo', Cards: []}, {RowName : 'In Progress', Cards: []}, {RowName : 'Testing', Cards: []}, {RowName : 'Done', Cards: []}, ]);
    let [addAnotherRowFlag, setAddAnotherRowFlag] = useState(false);
    let addAnotherRowInput = React.useRef<HTMLInputElement>(null);
    useEffect(()=>{
        let cloneRowTitles = [...appDataArray];
        for(let i in cloneRowTitles){
            for(let j in cloneRowTitles[i].Cards){
                if(cloneRowTitles[i].Cards[j].CardName === props.activateDeleteCardButtonTitle){
                    cloneRowTitles[i].Cards[j].CardDescription = props.takeDescriptionContainFromTrelelloApp;
                    setRowTitles(cloneRowTitles.concat([]))
                    break;
                }
            }
        }
    }, [props.takeDescriptionContainFromTrelelloApp])
    useEffect(()=>{
        setRowTitles(appDataArray)
    }, [appDataArray])
    
    useEffect(()=>{
        let cloneRowTitles = localStorage.getItem('RowTitles');
        if (cloneRowTitles !== null){
            dispatch(takeNewAppDataArrayFromLocalStorage(JSON.parse(cloneRowTitles)))
        }
    }, [])
    
   

    useEffect(()=>{
        let cloneRowTitles = [...appDataArray];
        for(let i in cloneRowTitles){
            for(let j in cloneRowTitles[i].Cards){
                if(cloneRowTitles[i].Cards[j].CardName === props.activateDeleteCardButtonTitle){
                    cloneRowTitles[i].Cards[j].CardComments = props.commentsList;
                    setRowTitles(cloneRowTitles.concat([]));
                    break;
                }
            }
        }
    }, [props.commentsList]) 
    useEffect(()=>{
        localStorage.setItem('RowTitles', JSON.stringify(appDataArray));
        props.rowTitlesArrayToTrelelloApp(appDataArray);
    }, [appDataArray])
    
    useEffect(()=>{
        
        if(props.takeDeleteCommentName === undefined) return;
        let cloneRowTitles = [...appDataArray];
        for(let i in cloneRowTitles){
            for(let j in cloneRowTitles[i].Cards){
                for(let y in cloneRowTitles[i].Cards[j].CardComments){
                    if(cloneRowTitles[i].Cards[j].CardComments[y] === props.takeDeleteCommentName){
                        dispatch(deleteComment([i, j, y]))
                        break;  
                    }
                }
            }
        }
    }, [props.takeDeleteCommentName])

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
    
    const addAnotherRowWrapperAddButtonFunc = () =>{
        let pureValue = addAnotherRowInput.current?.value.trim();
        if(pureValue === undefined) return;
        if(pureValue?.length === 0 ) return;
        dispatch(addNewColumn(pureValue));
        setAddAnotherRowFlag(false);
        
    }
    function addingUsersCardFunction(InputValue:string, CurrentTitle:string){
        let PureInputValue = InputValue.trim();
        if(PureInputValue.length === 0) return ;
        for(let i in appDataArray){
            if(appDataArray[i].RowName === CurrentTitle){
                dispatch(addCard([PureInputValue, i]))
            }
        }
        setRowTitles(appDataArray.concat([]));
    }
    
    
    
    
    return(
        <Wrapper>
            {appDataArray.map((title, index)=>{ return <Row key={`${title}-${index}`}   getClickedCardTitle={props.getClickedCardTitle}  addingCardFunction={addingUsersCardFunction} cardData={title.Cards} title={title.RowName}/>})}
            {addAnotherRowFlag === false ? <AddAnotherRow onClick={()=>{setAddAnotherRowFlag(!addAnotherRowFlag)}}>Add another list</AddAnotherRow> 
            : <AddAnotherRowWrapper>
                <AddAnotherRowWrapperInput  placeholder="Enter list title" ref={addAnotherRowInput}></AddAnotherRowWrapperInput>
                <AddAnotherRowWrapperAddButton onClick={addAnotherRowWrapperAddButtonFunc}>Add list</AddAnotherRowWrapperAddButton>
                <AddAnotherRowWrapperCancelButton onClick={()=>{setAddAnotherRowFlag(!addAnotherRowFlag)}}>
                    <AddAnotherRowWrapperCancelButtonImg src={Xicon}></AddAnotherRowWrapperCancelButtonImg>
                </AddAnotherRowWrapperCancelButton>
                
                    
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

export default TrelelloCardField;