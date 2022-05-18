
import './App.css';
import {Route, Switch} from "react-router-dom";
import MenuItem from './component/menu-item';
import HomePage from './page/Homepage';
import ShopPage from './page/Shoppage';
import Header from './component/header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
            <Route exact path="/"  component={HomePage}/>
            <Route path="/shop" component ={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
