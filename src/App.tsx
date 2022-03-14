import React from 'react';
import TrelelloApp from './components/TrelelloWorkingWindow/TrelelloApp/TrelelloApp';
import AskingNameModalWindow from './components/AskingNameModalWindow/AskingNameModalWindow';
import './styles/App.css'
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './hooks/index';
import { RootState } from './store/store';
import styled from 'styled-components';


function App() {
  let [_, setUserNameInLocalStorage] = useState<string>();
  const userName = useAppSelector((state: RootState) => state.userName.userName);
  useEffect(()=>{
        setUserNameInLocalStorage(userName)
  }, [userName])
 return(
   <Wrapper>
    {userName === '' ? <AskingNameModalWindow/> : null}
    <TrelelloApp/>
   </Wrapper>
 )
}

const Wrapper = styled.div`
`
export default App;
