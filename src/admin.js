import * as React from "react";
import { Admin, Resource, CustomRoutes} from 'react-admin';

import authProvider from "./authprovider";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Route } from "react-router-dom";
import { fetchUtils } from "react-admin";
import PasswordList from "./PasswordList";
import PasswordCreate from "./PasswordCreate";
import darkTheme from "./theme";
import dataprovider from "./dataprovider";

const fetchJson = (url, options = {}) => {
    options.user = {
        authenticated: true,
        // use the token from local storage
        token: localStorage.getItem('token')
    };
    return fetchUtils.fetchJson(url, options);
};


export default function AdminTest(){
    //second parameter is for authentication, all get requests will have a "authorization: token" header
    const dataProvider = dataprovider('api/v1', fetchJson);
   
    return  <>
        <Admin dataProvider={dataProvider} loginPage={LoginPage} authProvider={authProvider} theme={darkTheme}>
                <Resource name='passwords' list={PasswordList} create={PasswordCreate}/>
                <CustomRoutes noLayout> 
                    <Route path="/signup" element={<RegisterPage />} />
                </CustomRoutes>
            </Admin>
    </>
}
