import React from 'react';
import TrelelloApp from './components/TrelelloWorkingWindow/TrelelloApp/TrelelloApp';
import AskingNameModalWindow from './components/AskingNameModalWindow/AskingNameModalWindow';
import './Styles/App.css'
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from './store/store';


function App() {
  let [_, setUserNameInLocalStorage] = useState<string>();
  const userName = useSelector((state: RootState) => state.addingUserName.userName);
  useEffect(()=>{
        setUserNameInLocalStorage(userName)
  }, [userName])
  
  return Boolean(localStorage.getItem("TrelelloUserName")) ? (<TrelelloApp /> ) : 
    (
      <AskingNameModalWindow/>
    );
}

export default App;
