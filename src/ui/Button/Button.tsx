import styled from "styled-components";

interface SubmitButtonProps{
    text:string;   
}


const Button = ({text}:SubmitButtonProps) =>{
    return(
            <Root
               type='submit'
            >
                {text} 
            </Root>
    )
    
}


export const Root = styled.button`
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
export default Button;

