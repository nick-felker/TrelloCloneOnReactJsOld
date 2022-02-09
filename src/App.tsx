import React from 'react';
import TrelelloApp from './TrelelloWorkingWindow/TrelelloApp';
import AskingNameModalWindow from './AskingNameModalWindow/AskingNameModalWindow';
import './App.css';
import CardModalWindow from './ModalWindows/CardModalWindow';
import { useState } from 'react';

function App() {
 
  let [UserNameInLocalStorage, SetName] = useState();
  
  let ReadingUserNameFunction = (value:any) =>{
      SetName(value);
  }
  
  
    return Boolean(localStorage.getItem("TrelelloUserName")) ? (
    <TrelelloApp /> 
    
  ) : (
    <AskingNameModalWindow
      ReadingUserNameFunction={ReadingUserNameFunction}
    ></AskingNameModalWindow>
  );
  
  
}

export default App;
