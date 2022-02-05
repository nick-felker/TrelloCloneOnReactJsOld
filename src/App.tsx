import React from 'react';
import TrelelloApp from './TrelelloWorkingWindow/TrelelloApp';
import AskingNameModalWindow from './AskingNameModalWindow/AskingNameModalWindow';
import './App.css';
import { useState } from 'react';

function App() {
 
  let [UserNameInLocalStorage, SetName] = useState();

  let ReadingUserNameFunction = (value:any) =>{
      SetName(value);
  }
  
    if(localStorage.getItem('TrelelloUserName') == undefined){
      return(
        <>
          <AskingNameModalWindow ReadingUserNameFunction={ReadingUserNameFunction}></AskingNameModalWindow>
        </>
      )
    }
    else{
      return(
        <>
          <TrelelloApp/>
        </>
      )
    }
  
}

export default App;
