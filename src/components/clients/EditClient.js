import axios from 'axios';
import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";

const AddClient = () => {

    let history = useHistory();
    const [client, setClient] = useState({
        firstname: "",
        lastname: "",
        email: "",
        entreprise : ""
    });

    const {firstname, lastname, email, entreprise} = client;

    const onInputChange = e => {
        console.log(e.target.value);
        setClient({...client,[e.target.name] : e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:3003/clients", client);
        history.push("/clients");
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <h2 className="mb-5 text-center font-weight-bold">Modifier un client</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Prénom..."
                    name="firstname"
                    value={firstname}
                    onChange={e => onInputChange(e)}
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Nom..."
                    name="lastname"
                    value={lastname}
                    onChange={e => onInputChange(e)}

                />
                </div>
                <div className="form-group">
                <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="E-mail..."
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}

                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Entreprise..."
                    name="entreprise"
                    value={entreprise}
                    onChange={e => onInputChange(e)}

                />
                </div>
                <button className="btn text-white" style={{backgroundColor: "#041f47"}}>Modifier</button>
            </form>
            </div>
            <Link className="float-right btn btn-link" to="/clients">
                Retour à la liste
            </Link>
        </div>
    )
}

export default AddClient;