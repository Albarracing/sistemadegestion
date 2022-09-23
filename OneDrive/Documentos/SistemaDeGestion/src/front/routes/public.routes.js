import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import loginViews from '../views/loginViews';

const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoutes exac path='/login' componen={loginViews}/>
        </Switch>
    )
}

export default PublicRoutes;