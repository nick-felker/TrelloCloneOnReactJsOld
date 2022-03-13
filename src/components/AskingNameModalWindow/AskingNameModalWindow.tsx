import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../types";
import { RootState } from "../../store/appStore/store";
import { Button} from "../../ui/submitUserName/button";
import { Input } from "../../ui/submitUserName/input";
import { Form, Field } from 'react-final-form';
import {addUserName} from './../../store/reducers/userName/addUserName';
import { userNameInputValues } from "../../types";


const AskingNameModalWindow = () =>{
    const dispatch = useAppDispatch();
    const onSubmit = (values:userNameInputValues) => {
        let pureValue = values.userName.trim();
        if(values.userName === undefined && pureValue.length === 0) return 
        else{
            dispatch(addUserName(pureValue))
        }
    }
    return(
        <>
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
                            <Footnote>You will be called - <UserNameSpan>{values.userName}</UserNameSpan></Footnote>
                        </Wrapper>
                    </form>
                )
            }
            />
        </>
    )
}

const UserNameSpan = styled.span`
    font-weight: bold;
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
