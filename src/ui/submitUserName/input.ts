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
