import React from 'react';
import TrelelloApp from './components/TrelelloWorkingWindow/TrelelloApp/TrelelloApp';
import AskingNameModalWindow from './components/AskingNameModalWindow/AskingNameModalWindow';
import './Styles/App.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector(state=>state);
  console.log(state);
  let [_, SetUserNameInLocalStorage] = useState<string>();
  function readingUserNameFunction(value:string){
      SetUserNameInLocalStorage(value);
  }
  
  return Boolean(localStorage.getItem("TrelelloUserName")) ? (<TrelelloApp /> ) : 
    (
      <AskingNameModalWindow
        ReadingUserNameFunction={readingUserNameFunction}
      ></AskingNameModalWindow>
    );
}

export default App;
