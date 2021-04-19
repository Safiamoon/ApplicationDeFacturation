import React, {useState, useEffect} from 'react';
import FactureServices from '../../services/FactureService';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Factures = () => {

    const [factures, setFactures] = useState([]);

    useEffect(() => {
        loadFactures();
    }, []);

    const loadFactures  = async () => {
        const result = await FactureServices.getFactures();
        console.log(result);
        setFactures(result.data);
    }

    
    const deleteFacture = async id => {
        await axios.delete(`http://localhost:3003/facture/${id}`);
        loadFactures();
    }

    return(
        <div className="container">
            <div className="py-4">
                <h1 className="mb-5 text-center font-weight-bold">LISTE DES FACTURES</h1>
                <Link className="mb-5 btn float-right text-white" style={{backgroundColor: "#041f47"}} to="/factures/add" >Ajouter une nouvelle facture</Link>
                <table className="table border shadow">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Client</th>
                            <th scope="col">Date d'envoi</th>
                            <th scope="col">Statut</th>
                            <th scope="col">Montant</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            factures.map((facture, index) => (
                                <tr> 
                                    <th scope="row">{index + 1}</th>
                                    <td>{facture.client}</td>
                                    <td>{facture.date_envoi}</td>
                                    <td>{facture.statut}</td>
                                    <td>{facture.montant}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`factures/${facture.id}`} >
                                            View
                                        </Link>
                                        <Link
                                            className="btn btn-warning mr-2"
                                            to={`/factures/edit/${facture.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            className="btn btn-danger mr-2"
                                            onClick={() => deleteFacture(facture.id)}
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Factures;
