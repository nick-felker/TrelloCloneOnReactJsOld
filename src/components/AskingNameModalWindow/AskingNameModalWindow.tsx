import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { RootState } from "../../store/store";
import { Form, Field } from 'react-final-form';
import {addUserName} from '../../store/reducers/user/reducer';




const AskingNameModalWindow = () =>{
    const dispatch = useAppDispatch();

    interface userNameInputValues{
        userName:string;
    }

    const onSubmit = (values:userNameInputValues) => {
        let pureValue = values.userName.trim();
        if(values.userName === undefined && pureValue.length === 0) return 
        else{
            dispatch(addUserName(pureValue))
        }
    }
    return(
        <WindowOverlay>
        <PopUpWrapper>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, values}) => (
                    <form 
                        onSubmit={handleSubmit}
                    >  
                        <Wrapper>
                            <Label>Your name in app</Label>
                            <Field
                                name='userName'
                            >
                                {props =>(
                                    <>
                                        <Input
                                            name={props.input.name}
                                            value={props.input.value}
                                            onChange={props.input.onChange}
                                            autoComplete='off'
                                        />
                                    </>
                                )}
                            </Field>    
                            
                            <Button type="submit">Submit</Button>
                            <Footnote>You will be called - <UserNameSpan>{values.userName} {values.userName === undefined ? null : '😎'}</UserNameSpan></Footnote>
                        </Wrapper>
                    </form>
                )
            }
            />
            
          </PopUpWrapper>
          <BlackLayer/>
        </WindowOverlay>
    )
}

const UserNameSpan = styled.span`
    font-weight: bold;
`
const WindowOverlay = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    top:0;
    margin-top: 5%;
    overflow: scroll;
    z-index: 11;
    width: 100%;
    height: 100%;
    left:0;
`
const PopUpWrapper = styled.div`
    padding-bottom: 100px;
    z-index: 14;
    position: relative; 
    background-color: white;
    border-radius: 5px;
    width: 600px;
    min-heigth: 400px;
`
const BlackLayer = styled.div`
    background-color: #505765;
    opacity: 0.6;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index 10;
`
const Button = styled.button`
    outline: none;
    margin-top: 40px;
    cursor: pointer;
    background-color: #f7e24b;
    border: none;
    font-size: 20px;
    text-transform: uppercase;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
`
const Input = styled.input`
    padding: 20px 0px;
    outline: none;
    font-size: 20px;
    width: 320px;
    text-align: center;
    ::placeholder{
        font-size: 15px;
        text-transform: uppercase;
    }
    :hover{
        ::placeholder{
            
            color: white;
            transition: 0.5s;
        }
    }
    :focus{
        ::placeholder{
            color: white;
        }
    }
`


const Footnote = styled.p`
    font-size: 17px;
    text-transform: uppercase;
    padding-top: 20px;
`

const Label = styled.label`
    font-size: 16px;
    padding-bottom: 10px;
`

const Wrapper = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    
`

export default AskingNameModalWindow;
