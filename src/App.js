import Home from './components/home/Home';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import Clips from './components/clips/Clips';
import Groups from './components/groups/Groups';
import Events from './components/events/Events';
import UserProfile from './components/userProfile/UserProfile';
import Signup from './components/registration/Signup';
import GroupFeed from './components/groupFeed/GroupFeed';
import Login from './components/registration/Login';
import SearchUser from './components/searchs/SearchUser';
import FriendRequest from './components/friendRequests/FriendRequest';
import Charts from './components/chart/Charts'



function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/clips" component={Clips}/>
          <Route path="/groups" component={Groups}/>
          <Route path="/events" component={Events}/>
          <Route path="/profile" component={UserProfile}/>
          <Route path="/group-feed" component={GroupFeed}/>
          <Route path="/feed" component={Home}/>
          <Route path="/search" component={SearchUser}/>
          <Route path="/requests" component={FriendRequest}/>
          <Route path="/chart" component={Charts}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
