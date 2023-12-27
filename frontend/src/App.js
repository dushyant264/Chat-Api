
import { Route } from 'react-router-dom';
import './App.css';
// import {Button} from "@chakra-ui/button";
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
     <Route path='/' component={HomePage} exact/>
     <Route path='/chat' component={ChatPage}/>
    </div>
  );
}

export default App;