
import './App.css';
import {Route, Switch} from "react-router-dom";
import MenuItem from './component/menu-item';
import HomePage from './page/Homepage';

const HatsPage = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <Switch>
            <Route exact path="/"  component={HomePage}/>
            <Route path="/hats" component ={HatsPage}/>
        </Switch>
    </div>
  );
}

export default App;
