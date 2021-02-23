import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component{
    render(){ 
        return (
            <>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#041f47"}}>
                <Link className="navbar-brand text-white font-weight-bold text-monospace" to='/' >APPLICATION DE FACTURATION</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ml-auto navbar-nav">
                        <Link className="nav-item nav-link text-white" to='/factures'>Factures</Link>
                        <Link className="nav-item nav-link text-white" to='/clients'>Clients</Link>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}