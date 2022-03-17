import { FieldRenderProps } from "react-final-form";
import styled from "styled-components";


type Props = FieldRenderProps<string>
const Input = ({input, meta}:Props) =>{
    return(
            <Root
               {...input}
               autoComplete='off'
            />
    )
}

export const Root = styled.input`
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
export default Input
