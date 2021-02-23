import React from "react";
import Home from "./components/Home";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from "./shared/Navbar";


function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
    <Switch> 
      <Route exact path="/" component={Home} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
