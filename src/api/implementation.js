import axios from 'axios';

export default class Implementation {
    static customApiCall(url = '', method = 'GET', headers = null, params = null, data = null) {
        return axios
            .request({
                url,
                method,
                headers,
                params,
                data,
            })
            .then(response => response)
            .catch(error => {
                console.log('Api call Error: ', error);
                if (axios.isCancel(error)) {
                    return new Promise(() => {
                    });
                } else if (error.response && error.response.status === 403) {
                    // todo: 403 api call here
                    throw error;
                } else {
                    throw error;
                }
            });
    }

    /* ----------------------------- user api call ----------------------------- */

}
