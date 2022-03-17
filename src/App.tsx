import TrelelloApp from './components/TrelelloWorkingWindow/TrelelloApp/TrelelloApp';
import AskingNameModalWindow from './components/AskingNameModalWindow/AskingNameModalWindow';
import './styles/App.css'
import { useAppSelector } from './hooks';
import styled from 'styled-components';
import { userNameSelector } from './store';


function App() {
  const userName = useAppSelector(userNameSelector)
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
