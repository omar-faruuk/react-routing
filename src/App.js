import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import FriendDetail from './Components/FriendDetail/FriendDetail';


function App() {
 
  return (
    <Router>
       <Switch>
         <Route path='/home'>
           <Home/>
        </Route>
         <Route exact path='/'>
           <Home/>
        </Route>
        <Route path='/friend/:friendId'>
            <FriendDetail></FriendDetail> 
        </Route>
        <Route path='*'>
          <NotFound/>
       </Route>
     </Switch>
  </Router>
  );
}

export default App;
