import axios from 'axios';

class FactureServices {
    getFactures(){
        return axios.get("http://localhost:3003/factures")
    }
    deleteCurrentFacture(id) {
        return axios.delete(`http://localhost:3003/factures/${id}`);
    }

}

export default new FactureServices();