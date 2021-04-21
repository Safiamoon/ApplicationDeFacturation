import React, {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';



const Facture = () => {
    const {id} = useParams();
    const [facture, setFacture] = useState({
        client: "",
        date_envoi: "",
        statut: "",
        montant : ""
    });

    useEffect (()=> {
        displayFacture();
    }, []);


    const displayFacture = async () => {
        const result = await axios.get(`http://localhost:3003/factures/${id}`);
        setFacture(result.data);
    }

    return(
        <div className="container py-5">
            
            <h1 className="mb-5 display-5 d-flex justify-content-center font-weight-bold">Informations de la facture :</h1>
            <ul className="mb-5 list-group d-flex justify-content-center">
                <li className="list-group-item">Client :  {facture.client}</li>
                <li className="list-group-item">Date de l'envoi :  {facture.date_envoi}</li>
                <li className="list-group-item">Statut :  {facture.statut}</li>
                <li className="list-group-item">Montant :  {facture.montant}</li>
            </ul>
            <Link className="float-right btn btn-link" to="/factures">
                Retour à la liste
            </Link>
        </div>
    )
}

export default Facture;
