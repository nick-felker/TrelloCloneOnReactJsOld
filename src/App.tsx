import React from 'react';
import TrelelloApp from './TrelelloWorkingWindow/TrelelloApp';
import AskingNameModalWindow from './AskingNameModalWindow/AskingNameModalWindow';
import './App.css';
import { useState } from 'react';

function App() {
 
  let [UserNameInLocalStorage, SetUserNameInLocalStorage] = useState();
  
  let ReadingUserNameFunction = (value:any) =>{
      SetUserNameInLocalStorage(value);
  }
  
  
    return Boolean(localStorage.getItem("TrelelloUserName")) ? (<TrelelloApp /> ) : 
    (
    <AskingNameModalWindow
      ReadingUserNameFunction={ReadingUserNameFunction}
    ></AskingNameModalWindow>
    );
  
  
}

export default App;
