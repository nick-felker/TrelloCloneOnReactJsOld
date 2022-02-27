import React, { useState } from "react";
import styled from "styled-components";
import {Form, Field} from 'react-final-form';
import { format } from "path/posix";
type Props = {
    ReadingUserNameFunction: Function;
}


const AskingNameModalWindow = (props: Props) =>{

    const onSubmit = (inputField:any) => {
        if(inputField.UserName === undefined) return;
        let purValue = inputField.UserName.trim();  
        if(purValue?.length === 0){
            alert('Put name');
            return;
        }
        localStorage.setItem('TrelelloUserName', inputField.UserName);
        props.ReadingUserNameFunction(inputField.UserName);
    }
    return(
        <>
            
            <Form 
                onSubmit={onSubmit} 
                render={ ( {handleSubmit, values, pristine, submitting} ) => (    
                    <form onSubmit={handleSubmit}>
                        <Wrapper>
                            <Field
                            name="UserName"
                            >
                                {({input}) =>(
                                <Input {...input} type='text' placeholder="Put your name here">
                                </Input>
                                )} 
                            </Field>
                            <Button type="submit" onClick={handleSubmit}  disabled={submitting || pristine}>
                                Submit
                            </Button>
                        </Wrapper>
                        
                    </form>
                )}>  
            </Form>
        </>
    )
}

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

export default AskingNameModalWindow;
