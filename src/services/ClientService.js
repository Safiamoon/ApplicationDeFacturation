import axios from 'axios';

class ClientServices {
    getClients(){
        return axios.get("http://localhost:3003/clients")
    }
    deleteCurrentClient(id) {
        return axios.delete(`http://localhost:3003/clients/${id}`);
    }
    getCurrentClient(id) {
        return axios.get(`http://localhost:3003/clients/${id}`);
    }

}

export default new ClientServices();