import styled from "styled-components"

export const AddAnotherRowButton = styled.button`
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