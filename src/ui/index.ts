import styled from "styled-components"

export const Input = styled.input`
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

export const Button = styled.button`
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