import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Makecocktail from './MakeCocktail';
import Display from './Display';

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
          <Route exact path={'/'}>
            <Home/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
