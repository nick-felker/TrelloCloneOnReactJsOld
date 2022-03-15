import styled from "styled-components";



interface userNameInputProps{
    name:string;
    value:string;
    autoComplete:string;
    onChange: Function;
}  

const UserNameInput = (props:any) =>{
    return(
        <>
            <Input
                name={props.name}
                value={props.value}
                autoComplete={props.autoComplete}
                onChange={props.onChange}
            />
        </>
    )
}

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

export default UserNameInput;