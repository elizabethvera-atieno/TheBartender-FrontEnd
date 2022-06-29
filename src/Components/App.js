import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Makecocktail from './MakeCocktail';
import Display from './Display';
import Login from './Login';
import CreatedCocktails from './CreatedCocktails';

function App() {
  return (
    <>
      <Navbar/>
      <div className='app'>
        <Switch>
          <Route path={'/display'}>
            <Display/>
          </Route>
          <Route path={'/makeyours'}>
            <Makecocktail/>
          </Route>
          <Route path={'/login'}>
            <Login/>
          </Route>
          <Route path={'/createdcocktails'}>
            <CreatedCocktails/>
          </Route>
          <Route exact path={'/'}>
            <Home/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
