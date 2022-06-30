import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Makecocktail from './MakeCocktail';
import Display from './Display';
import Login from './Login';
import CreatedCocktails from './CreatedCocktails';
import Signup from './Signup';
import {useState} from "react"

function App() {
  const [user, setUser] = useState(null)


  return (
    <>
      <Navbar user={user}/>
      <div className='app'>
        <Switch>
          <Route path={'/display'}>
            <Display/>
          </Route>
          <Route path={'/makeyours'}>
            <Makecocktail user={user} setUser={setUser}/>
          </Route>
          <Route path={'/login'}>
            <Login user={user} setUser={setUser}/>
          </Route>
          <Route path={'/signup'}>
            <Signup user={user} setUser={setUser}/>
          </Route>
          <Route path={'/createdcocktails'}>
            <CreatedCocktails user={user} setUser={setUser}/>
          </Route>
          <Route exact path={'/'}>
            <Home/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </>
  );
}

export default App;
