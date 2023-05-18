import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import React from "react";
import './App.css';


import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Purchase from './pages/Purchase';
import Sale from './pages/Sale';


import PurchaseAdd from './pages/PurchaseAdd';
import PurchaseEdit from './pages/PurchaseEdit';


function App() {
  
  return (
    <>
    <header>
      <Navbar/>
    </header>
   


      <Router>
        <Sidebar/>
         <Switch>
          <Route exact path='/purchase' component={Purchase} />
          <Route exact path='/sale'  component={Sale} />
          <Route exact path='/add' component={PurchaseAdd}></Route>
          <Route exact path='/update' component={PurchaseEdit}></Route> 
        </Switch>
      </Router> 
    
   
    </>
   
  );
}

export default App;
