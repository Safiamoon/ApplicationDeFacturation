import React from "react";
import Navbar from "../shared/Navbar";
import firstImage from '../pics/3.jpg';



function Home() {
    return (
        <>
        <div className="row p-0" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url('${firstImage}')`, backgroundRepeat:"no-repeat", minHeight:"92vh"}}>
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center text-white font-weight-bold">
                <h1 className="d-none d-lg-inline-flex ">MAKE YOUR LIFE EASIER !</h1>
            </div>
        </div>
        </>
    );
}

export default Home;
