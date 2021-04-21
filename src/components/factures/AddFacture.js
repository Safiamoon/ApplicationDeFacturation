import axios from 'axios';
import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";

const AddFacture = () => {

    let history = useHistory();
    const [facture, setFacture] = useState({
        client: "",
        date_envoi: "",
        statut: "",
        montant : ""
    });

    const {client, date_envoi, statut, montant} = facture;

    const onInputChange = e => {
        console.log(e.target.value);
        setFacture({...facture,[e.target.name] : e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3003/factures", facture);
        history.push("/factures");
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <h2 className="mb-5 text-center font-weight-bold">Ajouter une facture</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Client..."
                    name="client"
                    value={client}
                    onChange={e => onInputChange(e)}
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Date de l'envoi..."
                    name="date_envoi"
                    value={date_envoi}
                    onChange={e => onInputChange(e)}

                />
                </div>
                <div className="form-group">
                <input
                    type="date"
                    className="form-control form-control-lg"
                    placeholder="Statut..."
                    name="statut"
                    value={statut}
                    onChange={e => onInputChange(e)}

                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Montant..."
                    name="montant"
                    value={montant}
                    onChange={e => onInputChange(e)}

                />
                </div>
                <button className="btn text-white" style={{backgroundColor: "#041f47"}}>Ajouter</button>
            </form>
            </div>
            <Link className="float-right btn btn-link" to="/factures">
                Retour à la liste
            </Link>
        </div>
    )
}

export default AddFacture;