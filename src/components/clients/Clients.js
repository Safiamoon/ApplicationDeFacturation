import React, {useState, useEffect} from 'react';
import ClientServices from '../../services/ClientService';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Clients = () => {

    const [clients, setClients] = useState([]);

    //useEffect allows us to run a function everytime a piece of state changes
    //the empty array means that this arrow function
    //is going to run only once when the component is rendered
    useEffect(() => {
        console.log('clicked');
        loadClients();
    }, []);

    const loadClients  = async () => {
        const result = await ClientServices.getClients();
        console.log(result);
        setClients(result.data);
    }

    
    const deleteClient = async id => {
        await axios.delete(`http://localhost:3003/clients/${id}`);
        loadClients();
    }

    return(
        <div className="container">
            <div className="py-4">
                <h1 className="mb-5 text-center font-weight-bold">LISTE DES CLIENTS</h1>
                <Link className="mb-5 btn float-right text-white" style={{backgroundColor: "#041f47"}} to="/clients/add" >Ajouter un nouveau client</Link>
                <table className="table border shadow">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Entreprise</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map((client, index) => (
                                <tr> 
                                    <th scope="row">{index + 1}</th>
                                    <td>{client.firstname}</td>
                                    <td>{client.lastname}</td>
                                    <td>{client.email}</td>
                                    <td>{client.entreprise}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`clients/${client.id}`} >
                                            View
                                        </Link>
                                        <Link
                                            className="btn btn-warning mr-2"
                                            to={`/clients/edit/${client.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            className="btn btn-danger mr-2"
                                            onClick={() => deleteClient(client.id)}
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

export default Clients;
