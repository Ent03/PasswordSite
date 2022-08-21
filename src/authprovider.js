import { useDataProvider } from "react-admin";
import {fetchData} from "./networkUtils"

const authProvider = {
    
    // called when the user attempts to log in

    login: ({ username,password }) => {

        let promise = new Promise(function(resolve, reject){

            fetchData('api/v1/authenticate', {method: 'POST', body: { username, password }})
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.text();
            })
            .then(token => {
                localStorage.setItem('token', token);
                resolve();
            })
            .catch(error => {
                console.log(error);
                reject();
            })
        });
     
        return promise;
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider;



