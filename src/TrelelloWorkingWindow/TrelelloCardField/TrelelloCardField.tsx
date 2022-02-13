import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Row from "../Row/Row";
import Xicon from '../../Images/X.png';

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

const TrelelloCardField:React.FC<any> = (props) =>{
    /*let [RowTitles, setRowTitles] = useState(['Todo','In Progress', 'Testing', 'Done']);*/
    let [rowTitles, setRowTitles] = useState<any[]>([{RowName : 'ToDo', Cards: []}, {RowName : 'In Progress', Cards: []}, {RowName : 'Testing', Cards: []}, {RowName : 'Done', Cards: []}, ]);
    let [addAnotherRowFlag, setAddAnotherRowFlag] = useState<boolean>(false);
    let AddAnotherRowInput = React.useRef<HTMLInputElement>(null);
    useEffect(()=>{
        let cloneRowTitles = rowTitles;
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
        let cloneRowTitles = rowTitles;
        for(let i in cloneRowTitles){
            for(let j in cloneRowTitles[i].Cards){
                if(cloneRowTitles[i].Cards[j].CardName === props.activateDeleteCardButtonTitle){
                    cloneRowTitles[i].Cards[j].CardName = props.takeRenameCardTitle;
                    setRowTitles(cloneRowTitles.concat([]))
                    props.setCardModalWindowTitleFunction(props.takeRenameCardTitle);
                    break;
                }
            }
        }
    }, [props.takeRenameCardTitle])
    useEffect(()=>{
        let cloneRowTitles = localStorage.getItem('RowTitles');
        cloneRowTitles != null ? setRowTitles(JSON.parse(cloneRowTitles)) : setRowTitles(rowTitles);
    }, [])
    
   

    useEffect(()=>{
        let cloneRowTitles = rowTitles;
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
        localStorage.setItem('RowTitles', JSON.stringify(rowTitles));
        props.rowTitlesArrayToTrelelloApp(rowTitles);
    }, [rowTitles])
    
    useEffect(()=>{
        
        if(props.takeDeleteCommentName === undefined) return;
        let cloneRowTitles = rowTitles;
        for(let i in cloneRowTitles){
            for(let j in cloneRowTitles[i].Cards){
                for(let y in cloneRowTitles[i].Cards[j].CardComments){
                    if(cloneRowTitles[i].Cards[j].CardComments[y] === props.takeDeleteCommentName){
                        cloneRowTitles[i].Cards[j].CardComments.splice(y, 1);
                        setRowTitles(cloneRowTitles.concat([]))
                        
                        break;
                    }
                }
            }
        }
    }, [props.takeDeleteCommentName])

    useEffect(()=>{
        for(let i in rowTitles){
            for(let j in rowTitles[i].Cards){
                 if(rowTitles[i].Cards[j].CardName === props.activateDeleteCardButtonTitle){
                      rowTitles[i].Cards  = Array.prototype.slice.call(rowTitles[i].Cards); // Array
                      rowTitles[i].Cards.splice(j, 1);
                      break;
                 }
            }
        } 
        localStorage.setItem('RowTitles', JSON.stringify(rowTitles));
        props.changeActivateDeleteButtonFlag(false);
        
}, [props.activateDeleteCardButtonFlag])
    
    let AddAnotherRowFunction = () => setAddAnotherRowFlag(true);

    const AddAnotherRowCancelButtonFunc = () => setAddAnotherRowFlag(false);
    const addAnotherRowWrapperAddButtonFunc = () =>{
        let AddAnotherRowInputValue = AddAnotherRowInput.current?.value;
        if(AddAnotherRowInputValue === '' ) return;
        let RowObject = {
            RowName : AddAnotherRowInputValue,
            Cards : [],
        }
        setRowTitles(rowTitles.concat(RowObject));
        setAddAnotherRowFlag(false);
        
    }
    function addingUsersCardFunction(InputValue:string, CurrentTitle:string){
        let PureInputValue = InputValue.trim();
        if(PureInputValue.length === 0) return ;
        for(let i in rowTitles){
            if(rowTitles[i].RowName === CurrentTitle){
                let cloneRowTitles = rowTitles;
                let newCardObjectData = {
                    CardName: InputValue,
                    CardDescription: 'Add a more detailed description...',
                    CardComments: [],
                };
                cloneRowTitles[i].Cards.push(newCardObjectData);
                setRowTitles(cloneRowTitles);    
            }
        }
        setRowTitles(rowTitles.concat([]));
    }
    function setEditedRowTitle(newName:string, oldName:string){
        let cloneRowTitles = rowTitles;
        cloneRowTitles.map(elem=>{
            if(elem.RowName === oldName) { return elem.RowName = newName; }
        })
        setRowTitles(cloneRowTitles.concat([]));
        
    }
    function deleteRowFunction(neededTitle:string){
        let cloneRowTitles = rowTitles;
        for(let i in cloneRowTitles){
            if(cloneRowTitles[i].RowName === neededTitle){
                cloneRowTitles.splice(parseInt(i), 1);
                break;
            }
        }
        setRowTitles(cloneRowTitles.concat([]));
    }
    
    
    return(
        <Wrapper>
            {rowTitles.map(title=>{ return <Row key={rowTitles.indexOf(title, 0)} deleteRowFunction={deleteRowFunction} getEditedTitle={setEditedRowTitle} getClickedCardTitle={props.getClickedCardTitle}  addingCardFunction={addingUsersCardFunction} cardData={title.Cards} title={title.RowName}/>})}
            {addAnotherRowFlag === false ? <AddAnotherRow onClick={AddAnotherRowFunction}>Add another list</AddAnotherRow> 
            : <AddAnotherRowWrapper>
                <AddAnotherRowWrapperInput  placeholder="Enter list title" ref={AddAnotherRowInput}></AddAnotherRowWrapperInput>
                <AddAnotherRowWrapperAddButton onClick={addAnotherRowWrapperAddButtonFunc}>Add list</AddAnotherRowWrapperAddButton>
                <AddAnotherRowWrapperCancelButton onClick={AddAnotherRowCancelButtonFunc}>
                    <AddAnotherRowWrapperCancelButtonImg src={Xicon}></AddAnotherRowWrapperCancelButtonImg>
                </AddAnotherRowWrapperCancelButton>
                
                    
            </AddAnotherRowWrapper>
            }
            </Wrapper>
        
    )
}
export default TrelelloCardField;