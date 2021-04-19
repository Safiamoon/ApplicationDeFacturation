import React from "react";
import Home from "./components/Home";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from "./layouts/Navbar";
import Clients from "./components/clients/Clients";
import Client from "./components/clients/Client";
import AddClient from "./components/clients/AddClient";
import EditClient from "./components/clients/EditClient";
import Factures from "./components/factures/Factures";
import AddFacture from "./components/factures/AddFacture";
import EditFacture from "./components/factures/EditFacture";

function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/clients/add" component={AddClient}></Route>
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/clients/:id" component={Client}></Route>
        <Route exact path="/clients/edit/:id" component={EditClient}></Route>
        <Route exact path="/factures/add" component={AddFacture}></Route>
        <Route exact path="/factures" component={Factures} />
        <Route exact path="/factures/:id" component={Factures}></Route>
        <Route exact path="/factures/edit/:id" component={EditFacture}></Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
