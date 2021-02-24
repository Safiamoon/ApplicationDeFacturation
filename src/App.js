import React from "react";
import Home from "./components/Home";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from "./layouts/Navbar";
import Clients from "./components/clients/Clients";

function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
    <Switch> 
      <Route exact path="/" component={Home} />
      <Route exact path="/clients" component={Clients} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
