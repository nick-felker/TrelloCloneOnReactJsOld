import React from "react";
/*import { useState } from "react";*/
import styled from "styled-components";
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

const AskingNameModalWindow:React.FC<any> = (props) =>{
    let InputField = React.useRef<HTMLInputElement>(null);
    let InputValue:any;
    return(
        <>
            <Wrapper>
                <Input placeholder="Put your name here" ref={InputField}></Input>
                <Button onClick={()=>{
                    InputValue = InputField.current?.value;
                    if(InputValue === ''){
                        alert('Put name');
                        return;
                    }
                    localStorage.setItem('TrelelloUserName', InputValue);
                    props.ReadingUserNameFunction(InputValue);
                }}>Submit</Button>
            </Wrapper>
           
        </>
    )
}
export default AskingNameModalWindow;
