import React, {useState, useEffect} from 'react';
import ClientServices from '../../services/ClientService';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';



const Client = () => {
    const {id} = useParams();
    const [client, setClient] = useState({
        firstname: "",
        lastname: "",
        email: "",
        entreprise : "",
        facture: []
    });

    useEffect (()=> {
        displayClient();
    }, []);


    const displayClient = async () => {
        const result = await axios.get(`http://localhost:3003/clients/${id}`);
        console.log(result);
        setClient(result.data);
    }

    return(
        <div className="container py-5">
            
            <h1 className="mb-5 display-5 d-flex justify-content-center font-weight-bold">Informations du client :</h1>
            <ul className="mb-5 list-group d-flex justify-content-center">
                <li className="list-group-item">Prénom :  {client.firstname}</li>
                <li className="list-group-item">Nom :  {client.lastname}</li>
                <li className="list-group-item">Email :  {client.email}</li>
                <li className="list-group-item">Entreprise :  {client.entreprise}</li>
                <li className="list-group-item">Factures :  {client.factures}</li>
            </ul>
            <Link className="float-right btn btn-link" to="/clients">
                Retour à la liste
            </Link>
        </div>
    )
}

export default Client;